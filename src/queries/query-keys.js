// export const todosKeys = () => ['todos'];


export const todosKeys = {
    all: () => ['todos'],
    one: (todoId) => ['todos', todoId],
    update: () => ['mutate-todos']
}