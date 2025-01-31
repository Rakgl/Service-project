import Scroll from "../component/scroll-up/Scroll";
import Branch from "../component/contact-us/branch/Branch";
import PropHeader from "../component/home/PropHeader/PropHeader";

const ContactPage = () => {
  return (
    <>
        <PropHeader
        title="Contact Us"
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "Contact Us" },
        ]}/>
      <Branch/>
      <Scroll />
    </>
  );
};

export default ContactPage;
