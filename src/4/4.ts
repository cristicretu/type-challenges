
interface Todo {
  title: string
  description: string
  completed: boolean
}

type TodoPreview = MyPick<Todo, 'title' | 'completed'>

const todo: TodoPreview = {
  title: 'Clean room',
  completed: false,
}

// extends keyof T => gets the type of T.
// for every key given, you only get that type from the original 
// todo.
type MyPick<T, K extends keyof T> = {
  [key in K]: T[key]
}

// another possible solution
// using omit => omits the keys that were not given
// type MyPick<T, K extends keyof T> = Omit<T, Exclude<keyof T, K>>