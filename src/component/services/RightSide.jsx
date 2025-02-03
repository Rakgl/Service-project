import "./serviceStyle.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faCode, faMagnifyingGlass, faChartLine, 
  faMobileAlt, faDatabase, faTable, 
  faArrowRightLong, faDownload,
  // faFacebook
} from "@fortawesome/free-solid-svg-icons";

const RightSide = () => {
  return (
    <div className="rightside">
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
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore quibusdam maiores 
          odit mollitia officiis et, dolor necessitatibus facere sit commodi sint illum.
        </p>
        <ul className="download-links" role="list" type="none">
          <li className="second-link" role="listitem">
            <a href="#service-report">
              <FontAwesomeIcon icon={faDownload} /> Service Report
            </a>
          </li>
          <li className="second-link" role="listitem">
            <a href="#all-services">
              <FontAwesomeIcon icon={faDownload} /> All Services
            </a>
          </li>
        </ul>

        <ul className="social-links" type="none">
          <p>Follow us</p>
          <li>
            <a href="" aria-label="Facebook">
            {/* <FontAwesomeIcon icon={faFacebook} /> */}
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default RightSide;
