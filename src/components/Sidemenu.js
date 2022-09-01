import close from '../images/icon-close.svg'

function Sidemenu(props) {
  return (
    <aside className='sidemenu'>
        <img className="sideClose" src={close} alt="" onClick={props.close} />
        <nav className="sideNavWrap">
            <ul className="sideNav">
                <li><a href="/">Collections</a></li>
                <li><a href="/">Men</a></li>
                <li><a href="/">Women</a></li>
                <li><a href="/">About</a></li>
                <li><a href="/">Contact</a></li>
            </ul>
        </nav>
    </aside>
  )
}

export default Sidemenu