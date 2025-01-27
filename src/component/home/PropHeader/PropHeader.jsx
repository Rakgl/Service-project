import "./PropHeader.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const PropHeader = ({ title, breadcrumbs }) => {
  return (
    
    <div className="prop-header">
      <div className="prop-header__content">
        <h1 className="prop-header__title">{title}</h1>
        <div className="prop-header__breadcrumbs">
          {breadcrumbs.map((crumb, index) => (
            <span key={index} className="prop-header__breadcrumb">
              {crumb.link ? (
                <Link href={crumb.link} className="prop-header__link">
                   <FontAwesomeIcon icon={faHouse} /> {crumb.label}
                </Link>
              ) : (
                <span className="prop-header__text">{crumb.label}</span>
              )}
              {index < breadcrumbs.length - 1 && " / "}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PropHeader;
