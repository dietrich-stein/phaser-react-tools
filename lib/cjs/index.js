"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.usePhaser = exports.useEventListener = exports.useEventEmitter = exports.GameProvider = exports.GameContext = exports.GameComponent = void 0;
var GameContext_1 = require("./contexts/GameContext");
Object.defineProperty(exports, "GameContext", { enumerable: true, get: function () { return GameContext_1.GameContext; } });
Object.defineProperty(exports, "GameProvider", { enumerable: true, get: function () { return GameContext_1.GameProvider; } });
var GameComponent_1 = __importDefault(require("./components/GameComponent"));
exports.GameComponent = GameComponent_1.default;
var useEventEmitter_1 = __importDefault(require("./hooks/useEventEmitter"));
exports.useEventEmitter = useEventEmitter_1.default;
var useEventListener_1 = __importDefault(require("./hooks/useEventListener"));
exports.useEventListener = useEventListener_1.default;
var usePhaser_1 = __importDefault(require("./hooks/usePhaser"));
exports.usePhaser = usePhaser_1.default;
