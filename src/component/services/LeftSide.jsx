import './serviceStyle.scss'
import { useState } from 'react';
import img from "../../assets/service/service-single-featured-img.jpg"
import img1 from '../../assets/service/service-single-img-col-1.jpg'
import img2 from '../../assets/service/service-single-img-col-2.jpg'

const LeftSide = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const faqs = [
      { question: 'Are Your Service Easy To Use?', answer: 'mhmd, Anim fficia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table.' },
      { question: 'Will I Receive Future Update?', answer: 'mhmd, Ah life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table.' },
      { question: 'Is This Services Work In My Country?', answer: 'mhmd, Anim pariatur clirry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table.' },
      { question: 'How Much I will Pay?', answer: 'mhmd, Anim pariatur cliche reprehenderit, enim eiusmod high life acaute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table.' },
    ];

    const handleClick = (index) => {
      if (index === activeIndex) {
        setActiveIndex(null);
      } else {
        setActiveIndex(index);
      }
    };

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
        <h2 className='mb-4'>Most Asked Questions</h2>
        <div className="faq-container">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <button className="faq-question" onClick={() => handleClick(index)}>
                {faq.question}
              </button>
              <div className={`faq-answer ${activeIndex === index ? 'active' : ''}`}>
                <p className='p-2 font-sizePx14'>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LeftSide;
