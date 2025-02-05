import Scroll from "../component/scroll-up/Scroll";
import Branch from "../component/contact-us/branch/Branch";
import Map from "../component/contact-us/map/Map";
import Form from "../component/contact-us/contact-form/Form";
import PropHeader from "../component/home/PropHeader/PropHeader";

const ContactPage = () => {
  return (
    <>
    <div>
      <PropHeader
        title="Contact Us"
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "Contact Us" },
        ]}/>
      <Branch/>
      <Map/>
      <div className="mt-5">
        <Form/>
      </div>
      <Scroll />
    </div>

    </>
  );
};

export default ContactPage;
