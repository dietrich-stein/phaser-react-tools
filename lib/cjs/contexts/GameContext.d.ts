/// <reference types="react" />
import Phaser from 'phaser';
/**
 * A React Context object that stores the Phaser game instance.
 *
 * @module GameContext
 * @see module:GameProvider
 */
export declare const GameContext: import("react").Context<Phaser.Game | undefined>;
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
export declare const GameProvider: import("react").Provider<Phaser.Game | undefined>;
