import { Header } from '../Header/Header'
import { Category } from '../Category/Category'
import './App.css'
import { Slider } from '../Slider/Slider'
import { Product } from '../Product/Product'

export function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Category />
        <Slider/>
        <Product/>

      </div>
    </div>
  )
}
