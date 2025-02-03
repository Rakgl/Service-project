import './serviceStyle.css'
import img from "../../assets/service/service-single-featured-img.jpg"
import img1 from '../../assets/service/service-single-img-col-1.jpg'
import img2 from '../../assets/service/service-single-img-col-2.jpg'

const LeftSide = () => {
  return (
    <div className="leftside">
      <img src={img} alt="" className='bigimg' />
      <h2 className='py-4'>Information Security services we offer</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quidem debitis ad dolorum assumenda exercitationem fuga sequi, sit repellat fugit voluptate numquam animi in quos, voluptas culpa! Nobis dolorum ut tempora nam molestiae velit nostrum! Voluptas velit accusamus alias odio?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quidem debitis ad dolorum assumenda exercitationem fuga sequi, sit repellat fugit voluptate numquam animi in quos, voluptas culpa! Nobis dolorum ut tempora nam molestiae</p>
      <div className='my-5 col'>
        <img src={img1} alt="" className=' cover'/>
        <img src={img2} alt="" className=' cover'/>
      </div>
      <h2 className='pb-4'>Information Security services we offer</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quidem debitis ad dolorum assumenda exercitationem fuga sequi, sit repellat fugit voluptate numquam animi in quos, voluptas culpa! Nobis dolorum ut tempora nam molestiae velit nostrum! Voluptas velit accusamus alias odio?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quidem debitis ad dolorum assumenda exercitationem fuga sequi, sit repellat fugit voluptate numquam animi in quos, voluptas culpa! Nobis dolorum ut tempora nam molestiae</p>
      <div className='fourBox'>
        <div className='box'>
          <h1>01.</h1>
          <div>
            <h4>latest technologies</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, iste</p>
          </div>
        </div>
        <div className='box'>
          <h1>02.</h1>
          <div>
            <h4>uniqe solutions</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, iste</p>
          </div>
        </div>
        <div className='box'>
          <h1>03.</h1>
          <div>
            <h4>powerful strategies</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, iste</p>
          </div>
        </div>
        <div className='box'>
          <h1>04.</h1>
          <div>
            <h4>delever just on time</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, iste</p>
          </div>
        </div>
      </div>    
      <div>
        <h2>Most Asked Questions</h2>
      </div>
    </div>
  )
}

export default LeftSide