import cart from "../images/icon-cart-button.svg"
import plus from '../images/icon-plus.svg'
import minus from '../images/icon-minus.svg'

function Action(props){
    return (
        <div className="action">
            <div className="quantity">
                <div className='quantityMinus' onClick={props.subtract}><img src={minus} alt="minus" /></div>
                <div className='quantityState'>{props.quantity}</div>
                <div className='quantityPlus' onClick={props.add}><img src={plus} alt="plus" /></div>
            </div>
            <button className="addtocart" onClick={props.addtocart}>
                <img src={cart} alt="cart" />
                <h3>Add to cart</h3>
            </button>
        </div>
    )
}

export default Action