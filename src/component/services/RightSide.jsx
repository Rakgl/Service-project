import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faMagnifyingGlass, faChartLine, faMobileAlt, faDatabase, faTable, faArrowRightLong } from '@fortawesome/free-solid-svg-icons';

const RightSide = () => {
  return (
    <div className="rightside">
      <section className="right_item">
        <h4>List of Services</h4>
        <ul type="none">
          <li className="right-list">
            <FontAwesomeIcon icon={faCode} aria-label="Web Development" /> Web Development 
            <FontAwesomeIcon icon={faArrowRightLong} />
          </li>
          <li className="right-list">
            <FontAwesomeIcon icon={faChartLine} aria-label="Digital Marketing" /> Digital Marketing
            <FontAwesomeIcon icon={faArrowRightLong} />
          </li>
          <li className="right-list">
            <FontAwesomeIcon icon={faTable} aria-label="SaaS Products" /> SaaS Products
            <FontAwesomeIcon icon={faArrowRightLong} />
          </li>
          <li className="right-list">
            <FontAwesomeIcon icon={faMobileAlt} aria-label="Apps Development" /> Apps Development
            <FontAwesomeIcon icon={faArrowRightLong} />
          </li>
          <li className="right-list">
            <FontAwesomeIcon icon={faMagnifyingGlass} aria-label="SEO Services" /> SEO Services
            <FontAwesomeIcon icon={faArrowRightLong} />
          </li>
          <li className="right-list">
            <FontAwesomeIcon icon={faDatabase} aria-label="Data Analysis" /> Data Analysis
            <FontAwesomeIcon icon={faArrowRightLong} />
          </li>
        </ul>
      </section>
      <section className="right_item">
        <h4>Download Assets</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quibusdam maiores odit mollitia officiis et, 
          dolor necessitatibus facere sit commodi sint illum molestias iusto nam facilis optio? Aliquid, ipsum consequuntur.
        </p>
        <ul type="none">
          <li className="second-link"><a href="#service-report">Service Report</a></li>
          <li className="second-link"><a href="#all-services">All Services</a></li>
        </ul>
      </section>
    </div>
  );
};

export default RightSide;
