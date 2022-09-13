import { Contain } from "styles/components/Header";
import Header from "components/Header";
import Intro from "views/homepage/intro/index";
import OurNumbers from "views/homepage/ourNumbers";
import Solutions from "views/homepage/solutions";
import OurClients from "views/homepage/ourClients";
import Testimonials from "views/homepage/testimonials";
import OurBlog from "views/homepage/ourBlog";
import OurTeam from "views/homepage/ourTeam";
import ContactUs from "views/homepage/contactUs";
import Footer from "components/Footer";

function Index() {
  return (
    <Contain>
      <Header />
      <Intro />
      <OurNumbers />
      <Solutions />
      <OurClients />
      <Testimonials />
      <OurBlog />
      <OurTeam />
      <ContactUs />
      <Footer />
    </Contain>
  );
}

export default Index;
