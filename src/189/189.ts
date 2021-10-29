

type MyAwaited<T extends Promise<any>> = T extends Promise<infer A> ? A : never
