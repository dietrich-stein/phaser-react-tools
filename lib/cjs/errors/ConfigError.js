"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var InvalidPropertyNameError_1 = __importDefault(require("./InvalidPropertyNameError"));
var MissingArgumentError_1 = __importDefault(require("./MissingArgumentError"));
/**
 * An error that occurs when a protected value on the Phaser config object is set incorrectly.
 *
 * @class
 * @module ConfigError
 * @extends TypeError
 */
var ConfigError = /** @class */ (function (_super) {
    __extends(ConfigError, _super);
    /**
     * Creates an instance representing an error that occurs when a protected value on the Phaser config object is set incorrectly.
     *
     * @param {Object} config The Phaser config object whose property value is set incorrectly.
     * @param {*} propertyName The name of the property whose value is set incorrectly.
     * @throws {module:MissingArgumentError} Will throw a MissingArgumentError if required arguments are missing.
     */
    function ConfigError(config, propertyName) {
        var _this = this;
        if (!config) {
            throw new MissingArgumentError_1.default('You must provide the Phaser config object whose property value is set incorrectly when attempting to create a ConfigError.');
        }
        if (!propertyName) {
            throw new MissingArgumentError_1.default('You must provide the name of the property whose value is set incorrectly when attempting to create a ConfigError.');
        }
        var value = config[propertyName];
        if (value === undefined) {
            throw new InvalidPropertyNameError_1.default("The Phaser config object does not have a property named ".concat(propertyName, "."));
        }
        _this = _super.call(this, "phaser-react-tools sets the ".concat(propertyName, " property of the Phaser config object internally. As such, the user-provided value of ").concat(value, " will be overridden.")) || this;
        Error.captureStackTrace(_this, ConfigError);
        return _this;
    }
    return ConfigError;
}(TypeError));
exports.default = ConfigError;
