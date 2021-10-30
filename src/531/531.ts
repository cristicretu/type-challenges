// similar to a recursive function
// keep doing stringtounions until we 
// don't have any more characters
type StringToUnion<T extends string> = T extends `${infer L}${infer R}` ? L | StringToUnion<R> : never

type Test = '123';
type Result = StringToUnion<Test>; // expected to be "1" | "2" | "3"

