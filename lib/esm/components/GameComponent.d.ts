import PropTypes from 'prop-types';
import React from 'react';
import Phaser from 'phaser';
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
declare function GameComponent({ children, config }: React.PropsWithChildren<{
    config: Phaser.Types.Core.GameConfig;
}>): JSX.Element;
declare namespace GameComponent {
    var propTypes: {
        children: PropTypes.Requireable<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
        config: PropTypes.Requireable<object>;
    };
}
export default GameComponent;
