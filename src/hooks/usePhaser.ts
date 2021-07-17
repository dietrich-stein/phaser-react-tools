import { RefObject, useEffect, useRef, useState } from 'react'

import ConfigError from '../errors/ConfigError'
import Phaser from 'phaser'

/**
 * Returns a setup object containing a canvas ref and a reference to the Phaser game instance.
 *
 * @function
 * @module usePhaser
 * @param {Object} [config] The config object for the Phaser game instance.
 * @returns {InstanceConfig} A config object containing a canvas ref and a reference to the Phaser game instance.
 * @throws {module:ConfigError} Will throw a ConfigError if the Phaser game is mis-configured by the user.
 */
export default function usePhaser(
  config: Phaser.Types.Core.GameConfig
): [RefObject<HTMLCanvasElement>, Phaser.Game | undefined] {
  const canvasRef = useRef<HTMLCanvasElement>(new HTMLCanvasElement())
  const [game, setGame] = useState<Phaser.Game>()

  useEffect(() => {
    if (config.canvas) {
      throw new ConfigError(config, 'canvas')
    }

    if (config.type !== undefined && config.type !== Phaser.CANVAS) {
      throw new ConfigError(config, 'type')
    }

    const modifiedConfig = config

    modifiedConfig.canvas = canvasRef.current
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

/**
 * A config object containing a canvas ref and a reference to the Phaser game instance.
 *
 * @typedef InstanceConfig
 * @type {Object}
 * @property {Object} canvasRef The reference to the Phaser game canvas.
 * @property {Object} game The Phaser game instance.
 * @see module:usePhaser
 * @see module:GameComponent
 */