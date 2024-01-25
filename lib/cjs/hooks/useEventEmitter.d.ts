/**
 * Returns a function that can emit an event of the given type.
 *
 * @function
 * @module useEventEmitter
 * @param {string} type The type of event to emit.
 * @returns {emitFunction} A function that can emit an event of the given type.
 */
export default function useEventEmitter(type: string): (detail: any) => void;
/**
 * Emit an event.
 *
 * @callback emitFunction
 * @param {Object} [detail] The event payload.
 */
