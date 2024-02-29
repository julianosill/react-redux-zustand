import { Provider as ReduxProvider } from 'react-redux'

import { AddTodo } from './store/components/add-todo'
import { TodoList } from './store/components/todo-list'
import { store } from './store/store'

export function App() {
  return (
    <ReduxProvider store={store}>
      <AddTodo />
      <TodoList />
    </ReduxProvider>
  )
}
