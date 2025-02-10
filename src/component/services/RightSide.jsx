import "./serviceStyle.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faCode, faMagnifyingGlass, faChartLine, 
  faMobileAlt, faDatabase, faTable, 
  faArrowRightLong, faDownload,
} from "@fortawesome/free-solid-svg-icons";
import {
  faXTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { faFacebook,faInstagram,faYoutube } from "@fortawesome/free-brands-svg-icons";


const RightSide = () => {
  return (
    <div className="rightside">
      <div className="right">
        <section className="right_item">
          <h4>List of Services</h4>
          <ul className="services-list" role="list" type="none">
            {[
              { icon: faCode, text: "Web Development" },
              { icon: faChartLine, text: "Digital Marketing" },
              { icon: faTable, text: "SaaS Products" },
              { icon: faMobileAlt, text: "Apps Development" },
              { icon: faMagnifyingGlass, text: "SEO Services" },
              { icon: faDatabase, text: "Data Analysis" },
            ].map((service, index) => (
              <li key={index} className="right-list" role="listitem">
                <FontAwesomeIcon icon={service.icon} title={service.text} /> {service.text} 
                <FontAwesomeIcon icon={faArrowRightLong} />
              </li>
            ))}
          </ul>
        </section>
        <section className="right_item">
          <h4>Download Assets</h4>
          <p className="font-sizePx14">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore quibusdam maiores 
            odit mollitia officiis et, dolor necessitatibus facere sit commodi sint illum.
          </p>
          <ul className="download-links" role="list" type="none">
            <li className="second-link" role="listitem">
              <a href="#service-report">
                <FontAwesomeIcon icon={faDownload} /> Service Report <FontAwesomeIcon icon={faArrowRightLong} />
              </a>
            </li>
            <li className="second-link" role="listitem">
              <a href="#all-services">
                <FontAwesomeIcon icon={faDownload} /> All Services <FontAwesomeIcon icon={faArrowRightLong} />
              </a>
            </li>
          </ul>
        </section>
        <section className="rightitem">
          <p className="font-md">Follow Us</p>
          <ul className="social-links" type="none">
            <li>
              <a href="">
              <FontAwesomeIcon icon={faFacebook} />
              </a>
            </li>
            <li>
              <a href="">
              <FontAwesomeIcon icon={faXTwitter} />
              </a>
            </li>
            <li>
              <a href="">
              <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>
            <li>
              <a href="">
              <FontAwesomeIcon icon={faYoutube} />
              </a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default RightSide;
