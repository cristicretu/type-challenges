type arr1 = ['a', 'b', 'c']
type arr2 = [3, 2, 1]

type head1 = First<arr1> // expected to be 'a'
type head2 = First<arr2> // expected to be 3

// extends the type of an array
// if lenght > 0, first element exists, 
// the type is typeof T[0] 
// else never, because an empty array has a 
// type of "object"
type First<T extends any[]> = T extends [] ? T[0] : never

import { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<First<[3, 2, 1]>, 3>>,
]