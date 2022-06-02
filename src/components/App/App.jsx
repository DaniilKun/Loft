import { Header } from '../Header/Header'
import { Category } from '../Category/Category'
import './App.css'

export function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Category />
      </div>
    </div>
  )
}
