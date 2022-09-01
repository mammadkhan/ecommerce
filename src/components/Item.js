function Item(){
    return(
        <div className='item'>
            <h2 className="itemSub">SNEAKER COMPANY</h2>
            <h1  className="itemTitle">Fall Limited Edition Sneakers</h1>
            <p className="itemDescription">These low-profile sneakers are your perfect casual wear companion. Featuring a 
  durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
            <div className="price">
                <h3 className="currentPrice">$125.00<span className="salePrcnt">50%</span></h3>
                <h3 className="oldPrice">$250.00</h3>
            </div>
        </div>
    )
}

export default Item