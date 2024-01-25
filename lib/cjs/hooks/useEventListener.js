"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var GameContext_1 = require("../contexts/GameContext");
/**
 * Subscribe a callback function to events of the given type.
 *
 * @function
 * @module useEventListener
 * @param {string} type The type of event for which to listen.
 * @param {eventHandler} handler The event handler callback function.
 */
function useEventListener(type, handler) {
    var game = (0, react_1.useContext)(GameContext_1.GameContext);
    (0, react_1.useEffect)(function () {
        if (game === undefined) {
            return;
        }
        game.events.on(type, handler);
        return function () {
            game.events.off(type, handler);
        };
    }, [game, handler, type]);
}
exports.default = useEventListener;
/**
 * Handle an event.
 *
 * @callback eventHandler
 * @param {*} [event] The event to be handled.
 * @see module:useEventListener
 */
