import './styles/global.css'

import { Provider as ReduxProvider } from 'react-redux'

import { Player } from './page/player'
import { store } from './store/store'

export function App() {
  return (
    <ReduxProvider store={store}>
      <Player />
    </ReduxProvider>
  )
}
