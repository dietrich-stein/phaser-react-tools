"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var ConfigError_1 = __importDefault(require("../errors/ConfigError"));
var phaser_1 = __importDefault(require("phaser"));
function usePhaser(config) {
    var canvasRef = (0, react_1.useRef)(null);
    var _a = (0, react_1.useState)(), game = _a[0], setGame = _a[1];
    (0, react_1.useEffect)(function () {
        var _a, _b;
        if (config.canvas) {
            throw new ConfigError_1.default(config, 'canvas');
        }
        if (config.type !== undefined && config.type !== phaser_1.default.CANVAS) {
            throw new ConfigError_1.default(config, 'type');
        }
        var modifiedConfig = config;
        modifiedConfig.canvas = (_a = canvasRef.current) !== null && _a !== void 0 ? _a : undefined;
        modifiedConfig.type = phaser_1.default.CANVAS;
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
        var phaser = new phaser_1.default.Game(modifiedConfig);
        return function () {
            phaser.destroy(false);
        };
    }, [config]);
    return [canvasRef, game];
}
exports.default = usePhaser;
