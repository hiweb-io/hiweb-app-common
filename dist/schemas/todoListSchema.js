"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (todoList) => {
    return {
        id: todoList.id,
        type: todoList.type,
        title: todoList.title,
        relationships: {
            todos: todoList.todos
        }
    };
};
//# sourceMappingURL=todoListSchema.js.map