import { GameProvider } from '../contexts/GameContext';
import PropTypes from 'prop-types';
import React from 'react';
import usePhaser from '../hooks/usePhaser';
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
export default function GameComponent(_a) {
    var children = _a.children, config = _a.config;
    var _b = usePhaser(config), canvasRef = _b[0], game = _b[1];
    return (React.createElement("div", { style: { display: 'inline-block', position: 'relative' } },
        React.createElement("canvas", { ref: canvasRef }),
        React.createElement(GameProvider, { value: game }, children)));
}
GameComponent.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),
    config: PropTypes.object
};
