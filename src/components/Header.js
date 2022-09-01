import logo from "../images/logo.svg"
import menu from "../images/icon-menu.svg"
import cart from "../images/icon-cart.svg"
import avatar from "../images/image-avatar.png"

function Header(props) {
  return (
    <div className='header'>
        <div className="headerl">
          <img className='headerel menu' src={menu} alt="Menu" onClick={props.sidemenu}/>
          <a href="/"><img className='headerel logo' src={logo} alt="Logo" /></a>
          <nav className="mainNavWrap">
            <ul className="mainNav">
                <li><a href="/">Collections</a></li>
                <li><a href="/">Men</a></li>
                <li><a href="/">Women</a></li>
                <li><a href="/">About</a></li>
                <li><a href="/">Contact</a></li>
            </ul>
          </nav>
        </div>
        <div className='headerr'>
            <div className="cartWrap"  onClick={props.basket}>
              {props.basketItems.length > 0 && <div className="cartQuantity">{props.basketItems.length}</div>}
              <img className='headerel cart' src={cart} alt="Cart" />
            </div>
            <img className='headerel avatar' src={avatar} alt="User avatar" />
        </div>
    </div>
  )
}

export default Header