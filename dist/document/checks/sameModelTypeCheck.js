"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * This fucking check if all models in array are the same type
 * @param {ModelInterface[]} models
 */
exports.default = (models) => {
    let type;
    return models.every(model => {
        // Type is null - assign first value
        if (!type) {
            type = model.type;
            return true;
        }
        // Check type
        return model.type === type;
    });
};
//# sourceMappingURL=sameModelTypeCheck.js.map