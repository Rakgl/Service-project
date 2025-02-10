import './serviceStyle.scss';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import img from "../../assets/service/service-single-featured-img.jpg";
import img1 from '../../assets/service/service-single-img-col-1.jpg';
import img2 from '../../assets/service/service-single-img-col-2.jpg';

const LeftSide = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const faqs = [
      { question: 'Are Your Service Easy To Use?', answer: 'mhmd, Anim pariate reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo.' },
      { question: 'Will I Receive Future Update?', answer: 'mhmd, Anim pari cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo.' },
      { question: 'Is This Services Work In My Country?', answer: 'matur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Legcat craft beer farm-to-table.' },
      { question: 'How Much I will Pay?', answer: 'mhmd, Anim pariderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Loccaecat craft beer farm-to-table.' },
    ];

    const handleClick = (index) => {
      setActiveIndex(activeIndex === index ? null : index);
    };

    return (
      <div className="leftside">
        <img src={img} alt="" className='bigimg' />
        <h2 className='py-4'>Information Security services we offer</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus veritatis, quidem iure magnam porro ex. Voluptatum voluptates doloribus eius earum facilis temporibus dolores eaque, distinctio eveniet? Qui nobis iusto sed!</p>
        <div className='my-5 col px-3'>
          <img src={img1} alt="" className='cover'/>
          <img src={img2} alt="" className='cover'/>
        </div>
        <h2 className='pb-4'>Most Asked Questions</h2>
        <div className="faq-container">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <button className="faq-question" onClick={() => handleClick(index)}>
                {faq.question}
                <FontAwesomeIcon 
                  icon={activeIndex === index ? faChevronUp : faChevronDown} 
                  className="faq-icon"
                />
              </button>
              <div className="faq-answer" style={{ 
                maxHeight: activeIndex === index ? '200px' : '0', 
                overflow: 'hidden', 
                transition: 'max-height 0.4s ease-in-out' 
              }}>
                <p className='p-2 font-sizePx14'>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
}

export default LeftSide;
