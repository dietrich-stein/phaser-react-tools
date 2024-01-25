var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * An error that occurs when a required argument is missing.
 *
 * @class
 * @module MissingArgumentError
 * @extends TypeError
 */
var MissingArgumentError = /** @class */ (function (_super) {
    __extends(MissingArgumentError, _super);
    /**
     * Creates an instance representing an error that occurs when a required argument is missing.
     *
     * @param  {...any} [args] The error arguments.
     */
    function MissingArgumentError() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _this = _super.apply(this, args) || this;
        Error.captureStackTrace(_this, MissingArgumentError);
        return _this;
    }
    return MissingArgumentError;
}(TypeError));
export default MissingArgumentError;
