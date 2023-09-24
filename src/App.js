import { send } from "emailjs-com";
import "./App.css";
import { useState } from "react";

function App() {
  let [State, setState] = useState({
    from_name: "",
    reply_to: "",
    message: "",
  });
  const handleChange = (e) => {
    setState({ ...State, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await send(
      process.env.REACT_APP_SERVICE_ID,
      process.env.REACT_APP_TEMPLATE_ID,
      State,
      process.env.REACT_APP_EMAILJS_KEY
    )
      .then((result) => {
        if (result.text === "OK") {
          window.location.reload();
        }
      })
      .catch((error) => {
        console.log(error.text);
      });
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container-fluid">
          <a
            href="#!"
            className="navbar-brand text-white ms-5 fw-bold"
            aria-current="true"
          >
            <div className="d-flex">
              <img
                src="https://dza205f4gev3o.cloudfront.net/Assets/cts-logo.png"
                alt="Logo"
                width="40"
                height="45"
                className="brand-img"
                style={{ cursor: "not-allowed" }}
              />

              <div className="d-flex flex-column ms-3">
                <h6 className="company-name">Collab Techno Softwares</h6>
                <small className="brand-quote ">Build Your Own Kingdom.</small>
              </div>
            </div>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse me-5" id="navbarNav">
            <ul className="navbar-nav mx-auto p-3">
              <li className="nav-item">
                <a
                  className="nav-link text-white"
                  aria-current="page"
                  href="#about"
                >
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#mission">
                  Mission
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#services">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
            <ul className="navbar-nav p-2 ms-5">
              <li className="nav-item">
                <a
                  className="nav-link text-white"
                  aria-current="page"
                  target="_blank"
                  rel="noreferrer"
                  href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCHrlGGRQVVMjwcSMZxQBkrSZkQfPTDCwjnkxRsMlShqTSXKzBCJlVTPGRNMgldfktHpLHgB"
                >
                  <img
                    src="https://dza205f4gev3o.cloudfront.net/Assets/gmail.png"
                    alt="Logo"
                    width="20"
                    height="20"
                    className="brand-img"
                  />
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-white"
                  aria-current="page"
                  target="_blank"
                  rel="noreferrer"
                  href="https://instagram.com/collabtechnosoftwares/"
                >
                  <img
                    src="https://dza205f4gev3o.cloudfront.net/Assets/instagram.png"
                    alt="Logo"
                    width="20"
                    height="20"
                    className="brand-img"
                  />
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-white"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/collab-techno-softwares/"
                >
                  <img
                    src="https://img.icons8.com/color/45/null/linkedin.png"
                    alt="Logo"
                    width="25"
                    height="25"
                    className="brand-img"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="scrollspy-example">
        <div className="about-container" id="about">
          <h2 className="about-heading">SOFTWARE DEVELOPMENT COMPANY</h2>
          <div className="overview-container">
            <img
              src="https://studytosuccess.in/wp-content/uploads/2022/09/cropped-Top-10-Software-Companies-in-India-B.png"
              alt="template"
              width="380px"
              height="380px"
            />
            <p className="description">
              Our company is a dynamic and innovative team of experts dedicated
              to crafting exceptional digital experiences. With a passion for
              technology and design, we specialize in creating bespoke websites
              that captivate audiences and drive results. Our diverse portfolio
              showcases our proficiency in building everything from stunning
              e-commerce platforms to informative corporate websites.
              <br /> We pride ourselves on our client-centric approach, where
              collaboration and communication are at the core of every project.
              Our experienced developers and designers are skilled in the latest
              web technologies, ensuring that our clients receive cutting-edge
              solutions. Security and performance are non-negotiable for us, as
              we guarantee websites that are not only visually appealing but
              also robust and fast.
              <br /> At our core, we are committed to helping businesses and
              individuals succeed in the digital realm. Our mission is to
              provide the tools and strategies necessary for our clients to
              thrive online. With a track record of delivering on our promises,
              we aim to build lasting partnerships with our clients and be their
              go-to partner for all things web-related.
            </p>
          </div>
        </div>
        <div
          id="mission"
          className="mission-container d-flex justify-content-center flex-column align-items-center"
        >
          <h4 id="mission" className="mission-heading">
            OUR MISSION
          </h4>
          <p className="description">
            Our mission is to empower businesses and individuals by creating
            digital platforms that drive success in the online world. Our
            primary goal is to provide innovative, user-friendly, and visually
            appealing websites that not only meet but exceed our clients'
            expectations. We are committed to staying at the forefront of
            technology, embracing the latest trends and best practices to ensure
            our clients' websites are cutting-edge and competitive. We
            prioritize open communication and collaboration, working closely
            with our clients to understand their unique needs and objectives.
            Security and reliability are paramount in our mission, as we aim to
            deliver websites that are not only beautiful but also robust and
            secure. We strive to provide exceptional customer support, ensuring
            our clients' satisfaction long after their websites are launched.
            Ultimately, our mission is to help our clients establish a strong
            online presence and achieve their digital goals, fostering
            long-lasting partnerships built on trust and excellence.
          </p>
        </div>
        <div
          id="services"
          className="service-container d-flex justify-content-center flex-column align-items-center"
        >
          <h4 className="service-heading">SERVICES</h4>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">Website Design</h5>
                  <p className="card-text">
                    We specialize in creating visually appealing and
                    user-friendly website designs tailored to your brand and
                    objectives..
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">E-commerce Solutions</h5>
                  <p className="card-text">
                    Developing online stores with secure payment gateways,
                    shopping cart functionality, and inventory management.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">Social Media Integration</h5>
                  <p className="card-text">
                    We integrate social media elements into your website to
                    enhance user engagement and brand visibility.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">Custom Website Design</h5>
                  <p className="card-text">
                    Creating visually appealing and unique website designs
                    tailored to a client's brand and goals.
                  </p>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">
                    Web Hosting and Domain Services
                  </h5>
                  <p className="card-text">
                    We offer reliable web hosting and domain registration
                    services to ensure your website is accessible to your
                    audience.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">
                    Website Maintenance and Support
                  </h5>
                  <p className="card-text">
                    Providing ongoing support for website updates, security, bug
                    fixes, and optimization to keep the site running smoothly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="contact" className="contact-container">
          <div className="d-flex w-100 flex-row align-items-center justify-content-between">
            <div className=" text-white d-flex flex-column align-items-center justify-content-center text-white">
              <h4 className="contact-heading mb-4">Get in Touch!</h4>
              <form onSubmit={handleSubmit}>
                <div className="form-floating mb-2">
                  <input
                    type="text"
                    name="from_name"
                    className="form-control"
                    id="floatingInput1"
                    placeholder="John Doe A"
                    onChange={handleChange}
                  />
                  <label htmlFor="floatingInput1">Name</label>
                </div>
                <div className="form-floating mb-2">
                  <input
                    type="email"
                    name="reply_to"
                    className="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                    onChange={handleChange}
                  />
                  <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating mb-2">
                  <textarea
                    className="form-control"
                    name="message"
                    placeholder="Write a message..."
                    id="floatingTextarea"
                    onChange={handleChange}
                  ></textarea>
                  <label htmlFor="floatingTextarea">Message</label>
                </div>
                <div className="mb-2">
                  <input
                    type="submit"
                    className="btn btn-primary form-control"
                    placeholder="Submit"
                  />
                </div>
              </form>
            </div>
            <div className="mt-5">
              <ul className="navbar-nav text-white ">
                <li className="nav-item">
                  <small className="form-label text-decoration-underline">
                    Phone Number
                  </small>
                  <p className="nav-link">+91 830487XXXX</p>
                </li>
                <li className="nav-item">
                  <small className="form-label text-decoration-underline">
                    Email Address
                  </small>
                  <p className="nav-link">collabtechnosoftwares@gmail.com</p>
                </li>
                <li className="nav-item">
                  <small className="form-label text-decoration-underline">
                    Company Address
                  </small>
                  <p className="nav-link">
                    123 Main Street,
                    <br />
                    apt 4B TamilNadu IN,
                    <br />
                    6XXXXX.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
