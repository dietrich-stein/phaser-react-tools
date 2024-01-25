"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var GameContext_1 = require("../contexts/GameContext");
/**
 * Returns a function that can emit an event of the given type.
 *
 * @function
 * @module useEventEmitter
 * @param {string} type The type of event to emit.
 * @returns {emitFunction} A function that can emit an event of the given type.
 */
function useEventEmitter(type) {
    var game = (0, react_1.useContext)(GameContext_1.GameContext);
    return (0, react_1.useCallback)(function (detail) {
        game && game.events.emit(type, detail);
    }, [game]);
}
exports.default = useEventEmitter;
/**
 * Emit an event.
 *
 * @callback emitFunction
 * @param {Object} [detail] The event payload.
 */
