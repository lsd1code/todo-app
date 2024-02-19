import { genId } from './genId.js'

export const todos = [
  {
    id: genId(),
    title: 'task 1',
    completed: false,
  }
]

console.log(todos);