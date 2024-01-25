/**
 * Subscribe a callback function to events of the given type.
 *
 * @function
 * @module useEventListener
 * @param {string} type The type of event for which to listen.
 * @param {eventHandler} handler The event handler callback function.
 */
export default function useEventListener(type: string, handler: Function): void;
/**
 * Handle an event.
 *
 * @callback eventHandler
 * @param {*} [event] The event to be handled.
 * @see module:useEventListener
 */
