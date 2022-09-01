
import './App.css';
import {useState} from 'react'
import Header from './components/Header'
import Image from './components/Image'
import Item from './components/Item'
import Action from './components/Action'
import Basket from './components/Basket'
import Sidemenu from './components/Sidemenu'

function App() {
  const [aside,setAside] = useState(false)
  const [basketPop,setBasketPop] = useState(false)

  let [quantity,setQuantity] = useState(1)

  const [basketItems,setBasketItems] = useState([])

  const sidemenu = () =>{
    setAside(!aside)
  }

  const basket = () => {
    setBasketPop(!basketPop)
  }

  const plusQuantity = () => {
    setQuantity(quantity+=1)
  }

  const minusQuantity = () => {
    if(quantity === 1) return
    setQuantity(quantity-=1)
  }

  const addToCart = () => {
    const item = {
      id:1,
      name:"Fall Limited Edition Sneakers",
      price: "125.00",
      quan: quantity
    }
    for(let i = 0 ; i < basketItems.length ; i++){
      if(basketItems[i].id === item.id){
        return
      }
    }
    setBasketItems([...basketItems, item])
  }

  const deleteFromCart = (id) => {
    setBasketItems(basketItems.filter(item => item.id !== id))
  }

  return (
    <div className="App">
      <Header sidemenu={sidemenu} basket={basket} basketItems={basketItems}/>
      <div className="hero">
        <Image />
        <div className="heroRight">
          <Item />
          <Action quantity={quantity} add={plusQuantity} subtract={minusQuantity} addtocart={addToCart}/>
        </div>
      </div>
      {basketPop && <Basket basket={basketItems} deleteItem={deleteFromCart}/>}
      {aside && <Sidemenu close={sidemenu}/>}
    </div>
  );
}

export default App;
