type MyReadonly<T> = {
  readonly [keys in keyof T]: T[keys]
}

interface NewTodo {
  title: string
  description: string
}

const todoList: MyReadonly<NewTodo> = {
  title: "Hey",
  description: "foobar"
}

// todoList.title = "Hello" // Error: cannot reassign a readonly property
// todoList.description = "barFoo" // Error: cannot reassign a readonly property