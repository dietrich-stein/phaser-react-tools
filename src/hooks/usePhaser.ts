import { RefObject, useEffect, useRef, useState } from 'react'

import ConfigError from '../errors/ConfigError'
import Phaser from 'phaser'

export default function usePhaser(
  config: Phaser.Types.Core.GameConfig
): [RefObject<HTMLCanvasElement>, Phaser.Game | undefined] {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [game, setGame] = useState<Phaser.Game>()

  useEffect(() => {
    if (config.canvas) {
      throw new ConfigError(config, 'canvas')
    }

    if (config.type !== undefined && config.type !== Phaser.CANVAS) {
      throw new ConfigError(config, 'type')
    }

    const modifiedConfig = config
    modifiedConfig.canvas = canvasRef.current ?? undefined
    modifiedConfig.type = Phaser.CANVAS
    const userDefinedPostBootCallback = config.callbacks?.postBoot

    const auxiliaryPostBootCallback = (bootedGame: Phaser.Game) => {
      setGame(() => bootedGame)
    }

    if (userDefinedPostBootCallback && modifiedConfig.callbacks) {
      modifiedConfig.callbacks.postBoot = (bootedGame) => {
        auxiliaryPostBootCallback(bootedGame)
        userDefinedPostBootCallback(bootedGame)
      }
    } else if (config.callbacks && modifiedConfig.callbacks) {
      modifiedConfig.callbacks.postBoot = auxiliaryPostBootCallback
    } else {
      modifiedConfig.callbacks = {
        postBoot: auxiliaryPostBootCallback
      }
    }

    const phaser = new Phaser.Game(modifiedConfig)

    return () => {
      phaser.destroy(false)
    }
  }, [config])

  return [canvasRef, game]
}
