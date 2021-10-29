type MyExclude<T, U> = T extends U ? never : T

type MyOmit<T, K extends keyof T> = {
  [key in MyExclude<keyof T, K>]: T[key]
}

type OmitKeys<T, K extends keyof T> = keyof MyOmit<T, K>

type MyReadonly2<T, K extends keyof T = keyof T> = {
  readonly [key in K]: T[key]
} & {
    [key in OmitKeys<T, K>]: T[key]
  }

interface Todo8 {
  title: string
  description: string
  completed: boolean
}

const todo8: MyReadonly2<Todo8, 'title' | 'description'> = {
  title: "Hey",
  description: "foobar",
  completed: false,
}

// todo8.title = "Hello" // Error: cannot reassign a readonly property
// todo8.description = "barFoo" // Error: cannot reassign a readonly property
todo8.completed = true // OK


// interface MyObject {
//   name: string
//   done: boolean
//   ok: boolean
//   year: string
// }

// const messi: MyExclude<MyObject, "done" | "ok"> = {
//   name: "Messi",
//   year: "2021",
// }