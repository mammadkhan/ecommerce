import productImg1 from '../images/image-product-1.jpg'
import productImg2 from '../images/image-product-2.jpg'
import productImg3 from '../images/image-product-3.jpg'
import productImg4 from '../images/image-product-4.jpg'

function ImageSel(props) {
  return (
    <div className="imageSelector">
        <div onClick={() => props.switch(1)} className={props.selected === 0 ? "imgBox imgSelected" : "imgBox"}><img className={props.selected === 0 ? "imgSelectedImg imgBoxImg" : "imgBoxImg"} src={productImg1} alt="" /></div>
        <div onClick={() => props.switch(2)} className={props.selected === 1 ? "imgBox imgSelected" : "imgBox"}><img className={props.selected === 1 ? "imgSelectedImg imgBoxImg" : "imgBoxImg"} src={productImg2} alt="" /></div>
        <div onClick={() => props.switch(3)} className={props.selected === 2 ? "imgBox imgSelected" : "imgBox"}><img className={props.selected === 2 ? "imgSelectedImg imgBoxImg" : "imgBoxImg"} src={productImg3} alt="" /></div>
        <div onClick={() => props.switch(4)} className={props.selected === 3 ? "imgBox imgSelected" : "imgBox"}><img className={props.selected === 3 ? "imgSelectedImg imgBoxImg" : "imgBoxImg"} src={productImg4} alt="" /></div>
    </div>
  )
}

export default ImageSel