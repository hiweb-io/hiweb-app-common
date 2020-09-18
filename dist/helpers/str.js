"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
class Str {
    /**
     * Generate an ordered uuid
     */
    orderedUuid() {
        // Generate an uuid v4
        let uuid = uuid_1.v4();
        // Get milliseconds
        const milliseconds = (new Date()).getTime();
        // Convert ms to hex
        const millisecondsHex = milliseconds.toString(16);
        // Make uuid prefix
        const uuidTimestampPrefix = millisecondsHex.slice(0, 8) + '-' + millisecondsHex.slice(8);
        return uuidTimestampPrefix + uuid.slice(12);
    }
}
exports.default = new Str;
//# sourceMappingURL=str.js.map