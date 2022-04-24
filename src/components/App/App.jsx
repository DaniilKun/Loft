import { Header } from '../Header/Header'
import { Category } from '../Category/Category'
import './App.css'
import { Slider } from '../Slider/Slider'

export function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Category />
        <Slider/>
      </div>
    </div>
  )
}
