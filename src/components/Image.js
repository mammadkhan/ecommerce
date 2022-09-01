import {useState} from 'react'
import productImg1 from '../images/image-product-1.jpg'
import productImg2 from '../images/image-product-2.jpg'
import productImg3 from '../images/image-product-3.jpg'
import productImg4 from '../images/image-product-4.jpg'
import left from '../images/icon-previous.svg'
import right from '../images/icon-next.svg'
import ImageSel from './ImageSel'

function Image() {
  const images = [productImg1,productImg2,productImg3,productImg4]
  let [image,setImage] = useState(0)

  const next = () => {
    if(image === images.length -1) {
      return setImage(0)
    }
    setImage(image+=1)
  }

  const previus = () => {
    if(image === 0) {
      return setImage(3)
    }
    setImage(image-=1)
  }

  const imgSel = (img) => {
    switch(img){
      case 1:
        setImage(0)
        break
      case 2:
        setImage(1)
        break
      case 3:
        setImage(2)
        break
      case 4:
        setImage(3)
        break
      default:
        setImage(image)
    }
  }



  return (
    <div className='image'>
      <div className="productImgWrap">
        <div className="leftArw" onClick={previus}>
          <img src={left} alt=""/>
        </div>
        <img className="productImg" src={images[image]} alt="" />
        <div className="rightArw" onClick={next}>
          <img src={right} alt=""/>
        </div>
      </div>
      <ImageSel selected={image} switch={imgSel}/>
    </div>
  )
}

export default Image