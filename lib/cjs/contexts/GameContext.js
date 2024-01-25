"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameProvider = exports.GameContext = void 0;
var react_1 = require("react");
/**
 * A React Context object that stores the Phaser game instance.
 *
 * @module GameContext
 * @see module:GameProvider
 */
exports.GameContext = (0, react_1.createContext)(undefined);
/**
 * A higher-order React functional component that provides a GameContext to its children.
 *
 * @function
 * @module GameProvider
 * @param {Object} props The component props.
 * @param {Array|Object} [props.children] The child components.
 * @param {Object} props.value A Phaser game instance.
 * @see module:GameContext
 */
exports.GameProvider = exports.GameContext.Provider;
