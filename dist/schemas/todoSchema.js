"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (todo) => {
    return {
        id: todo.id,
        type: todo.type,
        todo: todo.todo,
        relationships: {
            todoList: todo.todoList
        }
    };
};
//# sourceMappingURL=todoSchema.js.map