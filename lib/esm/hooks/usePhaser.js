import { useEffect, useRef, useState } from 'react';
import ConfigError from '../errors/ConfigError';
import Phaser from 'phaser';
export default function usePhaser(config) {
    var canvasRef = useRef(null);
    var _a = useState(), game = _a[0], setGame = _a[1];
    useEffect(function () {
        var _a, _b;
        if (config.canvas) {
            throw new ConfigError(config, 'canvas');
        }
        if (config.type !== undefined && config.type !== Phaser.CANVAS) {
            throw new ConfigError(config, 'type');
        }
        var modifiedConfig = config;
        modifiedConfig.canvas = (_a = canvasRef.current) !== null && _a !== void 0 ? _a : undefined;
        modifiedConfig.type = Phaser.CANVAS;
        var userDefinedPostBootCallback = (_b = config.callbacks) === null || _b === void 0 ? void 0 : _b.postBoot;
        var auxiliaryPostBootCallback = function (bootedGame) {
            setGame(function () { return bootedGame; });
        };
        if (userDefinedPostBootCallback && modifiedConfig.callbacks) {
            modifiedConfig.callbacks.postBoot = function (bootedGame) {
                auxiliaryPostBootCallback(bootedGame);
                userDefinedPostBootCallback(bootedGame);
            };
        }
        else if (config.callbacks && modifiedConfig.callbacks) {
            modifiedConfig.callbacks.postBoot = auxiliaryPostBootCallback;
        }
        else {
            modifiedConfig.callbacks = {
                postBoot: auxiliaryPostBootCallback
            };
        }
        var phaser = new Phaser.Game(modifiedConfig);
        return function () {
            phaser.destroy(false);
        };
    }, [config]);
    return [canvasRef, game];
}
