"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var GameContext_1 = require("../contexts/GameContext");
var prop_types_1 = __importDefault(require("prop-types"));
var react_1 = __importDefault(require("react"));
var usePhaser_1 = __importDefault(require("../hooks/usePhaser"));
/**
 * A higher-order React functional component that manages the Phaser game.
 *
 * @function
 * @module GameComponent
 * @param {Object} props The component props.
 * @param {Array|Object} [props.children] The child components.
 * @param {Object} props.config The config object for the Phaser game instance.
 * @throws {ConfigError} Will throw a ConfigError if the Phaser game is mis-configured by the user.
 * @see module:usePhaser
 * @see module:GameProvider
 */
function GameComponent(_a) {
    var children = _a.children, config = _a.config;
    var _b = (0, usePhaser_1.default)(config), canvasRef = _b[0], game = _b[1];
    return (react_1.default.createElement("div", { style: { display: 'inline-block', position: 'relative' } },
        react_1.default.createElement("canvas", { ref: canvasRef }),
        react_1.default.createElement(GameContext_1.GameProvider, { value: game }, children)));
}
exports.default = GameComponent;
GameComponent.propTypes = {
    children: prop_types_1.default.oneOfType([
        prop_types_1.default.arrayOf(prop_types_1.default.node),
        prop_types_1.default.node
    ]),
    config: prop_types_1.default.object
};
