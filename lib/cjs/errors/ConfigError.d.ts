import Phaser from 'phaser';
/**
 * An error that occurs when a protected value on the Phaser config object is set incorrectly.
 *
 * @class
 * @module ConfigError
 * @extends TypeError
 */
export default class ConfigError extends TypeError {
    /**
     * Creates an instance representing an error that occurs when a protected value on the Phaser config object is set incorrectly.
     *
     * @param {Object} config The Phaser config object whose property value is set incorrectly.
     * @param {*} propertyName The name of the property whose value is set incorrectly.
     * @throws {module:MissingArgumentError} Will throw a MissingArgumentError if required arguments are missing.
     */
    constructor(config: Phaser.Types.Core.GameConfig, propertyName: string);
}
