import productImg from '../images/image-product-1.jpg'
import productDel from '../images/icon-delete.svg'

function Basket(props) {
  return (
    <div className='basket'>
      <div className="basketPop">
        <div className="basketH">
          <h3>Cart</h3>
        </div>
        {props.basket.length > 0 ? props.basket.map(item => (
          <div key={item.id} className="basketList">
            <div className="basketItemWrap">
              <div className="basketItem">
                <img className="bitemImg" src={productImg} alt="" />
                <div className="bitemDescription">
                  <p className="bitemTitle">{item.name}</p>
                  <p className="bitemPrice">${item.price} <span className="bitemQuantity">x {item.quan}</span><span className="bitemFinal">${eval(item.price * item.quan).toFixed(2)}</span></p>
                </div>
              </div>
              <img className="bitemDelete" src={productDel} alt="" onClick={() => props.deleteItem(item.id)}/>
            </div>
            <button className="basketCheckout">Checkout</button>
          </div>
        ))
         : 
        <div className="basketEmpty"><p>Your cart is empty.</p></div>
        }
      </div>
    </div>
  )
}

export default Basket