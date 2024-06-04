import './App.css';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaLocationDot, FaStar } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { MdOutlinePhoneIphone } from "react-icons/md";
import mylogo from "./images/logo.png";
import { FiChevronDown } from "react-icons/fi";
import { FaSearch, FaLinkedin } from "react-icons/fa";
import slider from "./images/slider.jpg";
import { IoSettingsOutline } from "react-icons/io5";
import company from "./images/company.jpg";
import techsoft from "./images/icon-1.svg";
import techsoft2 from "./images/icon-2.svg";
import techsoft3 from "./images/icon-3.svg";
import techsoft4 from "./images/icon-4.svg";
import techsoft5 from "./images/icon-5.svg";
import techsoft6 from "./images/icon-6.svg";
import workimage from "./images/work-1.jpg";
import workimage2 from "./images/work-2.jpg";
import workimage3 from "./images/work-3.jpg";
import workimage4 from "./images/work-4.jpg";
import workimage5 from "./images/work-5.jpg";
import workimage6 from "./images/work-6.jpg";
import teamwork from "./images/team-1.jpg";
import teamwork2 from "./images/team-2.jpg";
import teamwork3 from "./images/team-3.jpg";
import teamwork4 from "./images/team-4.jpg";
import testimonial from "./images/testimonial-1.jpg";
import blogimg from "./images/blog-1.jpg";
import blogimg2 from "./images/blog-2.jpg";
import blogimg3 from "./images/blog-3.jpg";
import clientimg from "./images/client-1.png";
import clientimg2 from "./images/client-2.png";
import clientimg3 from "./images/client-3.png";
import clientimg4 from "./images/client-4.png";
import clientimg5 from "./images/client-5.png";
import footerlogo from "./images/footerlogo.png";
import { CiYoutube } from "react-icons/ci";


function App() {
  return (
    <>
      {/* ----------------- top info --------------------*/}
      <section>
        <div className="topinfo">
          <div className="container">
            <div className="d-flax">
              <div className="leftinfo">
                <ul className="d-flax">
                  <li><a href=""><FaLocationDot className="icon"></FaLocationDot>526 Melrose Street,New York.</a></li>
                  <li><a href=""><IoMdMail className="icon"></IoMdMail>info@example.com</a></li>
                  <li><a href=""><MdOutlinePhoneIphone className="icon"></MdOutlinePhoneIphone>+505 307 222-33</a></li>
                </ul>
              </div>
              <div className="rigthinfo">
                <ul className="d-flax">
                  <li><a href=""><FaFacebookF></FaFacebookF></a></li>
                  <li><a href=""><FaTwitter></FaTwitter></a></li>
                  <li><a href=""><FaLinkedinIn></FaLinkedinIn></a></li>
                  <li><a href=""><FaInstagram></FaInstagram></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --------------------- header ----------------- */}
      <section>
        <div className="header">
          <div className="container">
            <div className="d-flax">
              <div className="manihader">
                <div>
                  <img className="logoimg" src={mylogo}></img>
                </div>
              </div>
              <div >
                <ul className="menu_bar d-flax">
                  <li><a href="">Home <FiChevronDown></FiChevronDown></a></li>
                  <li><a href="">About Us</a></li>
                  <li><a href="">Services <FiChevronDown></FiChevronDown></a></li>
                  <li><a href="">Project <FiChevronDown></FiChevronDown></a></li>
                  <li><a href="">Pages <FiChevronDown></FiChevronDown></a></li>
                  <li><a href="">Blog <FiChevronDown></FiChevronDown></a></li>
                  <li><a href="">Contact <FiChevronDown></FiChevronDown></a></li>
                </ul>
              </div>
              <div>
                <ul className="d-flax">
                  <li><FaSearch style={{ color: "gray", fontSize: "18px" }}></FaSearch></li>
                  <button className="btn">Get it Support</button>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------- slider ---------------------------- */}
      <section>
        <div className="slider">
          <img className="sliderimg" src={slider}></img>
          <div className="container">
            <div className="slider_text">
              <h1>Bast <span>IT Solution</span> for<br></br>Grow Your Business</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,<br></br>sed do eiusmod
                tempor incididunt ut labore.</p>
              <button className="btn1">Contect Us</button>
              <button className="btn1">IT Solution</button>
            </div>
          </div>
          <div className="spas"></div>
        </div>
      </section>

      {/* ------------------------ our services -------------------------- */}
      <section>
        <div className="container">
          <div className="name_our">
            <h4>WHAT WE DO</h4>
            <div className="nameour">Out Services</div>
          </div>
          <div className="d-flax">
            <div className="ourwith">
              <div className="readimage">
                <ul>
                  <li><a href=""><IoSettingsOutline className="ouricon"></IoSettingsOutline></a></li>
                </ul>
              </div>
              <div className="text_our">
                <h3>Technology Services</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua</p>
                <h5 style={{ color: "#FF561D" }}>Read More</h5>
              </div>
            </div>
            <div className="ourwith">
              <div className="readimage">
                <ul>
                  <li><a href=""><IoSettingsOutline className="ouricon"></IoSettingsOutline></a></li>
                </ul>
              </div>
              <div className="text_our">
                <h3>Digital Solutions</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua</p>
                <h5 style={{ color: "#FF561D" }}>Read More</h5>
              </div>
            </div>
            <div className="ourwith">
              <div className="readimage">
                <ul>
                  <li><a href=""><IoSettingsOutline className="ouricon"></IoSettingsOutline></a></li>
                </ul>
              </div>
              <div className="text_our">
                <h3>Business Consulting</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua</p>
                <h5 style={{ color: "#FF561D" }}>Read More</h5>
              </div>
            </div>
          </div>
          <div className="btn2">
            <button>View All Services</button>
          </div>
          <div className="spas"></div>
        </div>
      </section>

      {/* ------------------- IT SOLUTION COMPANY ---------------------------- */}
      <section>
        <div className="solution">
          <div className="container">
            <div className="d-flax">
              <div className="companyinfo">
                <h4 style={{ color: "#FF561D" }}>IT SOLUTION COMPANY</h4>
                <h1 style={{ fontSize: "37px" }}>We design, develop, implement and support <span>IT Systems</span></h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor in reprehenderit velit.</p>
                <div className="line"></div>
                <p className="infolast">We are a highly trained and qualified team ready to provide viable IT solutions together with full-time support and expert advice to fulfill your business needs.</p>
              </div>
              <div className="companyinfo">
                <img className="companyimg" src={company}></img>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------TECHSOFT SO DIFFERENT --------------------------- */}
      <section>
        <div className="techsoftinfo">
          <div className="container">
            <div className="heading">
              <h4 style={{ color: "#FF561D", textAlign: "center" }}>TECHSOFT SO DIFFERENT?</h4>
              <div style={{ textAlign: "center" }} className="nameour">Why Trust Us?</div>
            </div>
            <div className="techsoftmain d-flax">
              <div className="d-flax">
                <div className="techsofticon d-flax">
                  <div className="imgicon">
                    <img src={techsoft}></img>
                  </div>
                  <div className="iconname">
                    <h3>Protect your Business</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore</p>
                  </div>
                </div>
              </div>
              <div className="d-flax">
                <div className="techsofticon d-flax">
                  <div className="imgicon">
                    <img src={techsoft2}></img>
                  </div>
                  <div className="iconname">
                    <h3>Protect your Business</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore</p>
                  </div>
                </div>
              </div>
              <div className="d-flax">
                <div className="techsofticon d-flax">
                  <div className="imgicon">
                    <img src={techsoft3}></img>
                  </div>
                  <div className="iconname">
                    <h3>Protect your Business</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="techsoftmain d-flax">
              <div className="d-flax">
                <div className="techsofticon d-flax">
                  <div className="imgicon">
                    <img src={techsoft4}></img>
                  </div>
                  <div className="iconname">
                    <h3>Protect your Business</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore</p>
                  </div>
                </div>
              </div>
              <div className="d-flax">
                <div className="techsofticon d-flax">
                  <div className="imgicon">
                    <img src={techsoft5}></img>
                  </div>
                  <div className="iconname">
                    <h3>Protect your Business</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore</p>
                  </div>
                </div>
              </div>
              <div className="d-flax">
                <div className="techsofticon d-flax">
                  <div className="imgicon">
                    <img src={techsoft6}></img>
                  </div>
                  <div className="iconname">
                    <h3>Protect your Business</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="spas"></div>
        </div>
      </section>

      {/* ------------------------------- FEATURED WORKS --------------------------------------- */}
      <section>
        <div className="featuredname">
          <div className="container">
            <div className="featheading">
              <h4 style={{ color: "#FF561D", textAlign: "center" }}>FEATURED WORKS</h4>
              <div style={{ textAlign: "center" }} className="namework">Case Studies</div>
            </div>
            <div className="d-flax ">
              <div className="workimage">
                <div className="imagework">
                  <img src={workimage}></img>
                </div>
              </div>
              <div className="workimage">
                <div className="imagework">
                  <img src={workimage2}></img>
                </div>
              </div>
              <div className="workimage">
                <div className="imagework">
                  <img src={workimage3}></img>
                </div>
              </div>
            </div>
            <div className="d-flax ">
              <div className="workimage">
                <div className="imagework">
                  <img src={workimage4}></img>
                </div>
              </div>
              <div className="workimage">
                <div className="imagework">
                  <img src={workimage5}></img>
                </div>
              </div>
              <div className="workimage">
                <div className="imagework">
                  <img src={workimage6}></img>
                </div>
              </div>
            </div>
          </div>
          <div className="btn2">
            <button>View All Projects</button>
          </div>
        </div>
      </section>

      {/* ----------------------------- OUR LEADERSHIP-------------------------------- */}
      <section>
        <div className="ourleader">
          <div className="container">
            <div className="featheading">
              <h4 style={{ color: "#FF561D", textAlign: "center" }}>OUR LEADERSHIP</h4>
              <div style={{ textAlign: "center" }} className="namework">Team Members</div>
            </div>
            <div className="d-flax">
              <div className="workimage">
                <div className="imagework">
                  <img src={teamwork}></img>
                  <h3 style={{ textAlign: "center" }}>Howard Berry</h3>
                  <p className='ourdiskri'>Executive Officer</p>
                </div>
              </div>
              <div className="workimage">
                <div className="imagework">
                  <img src={teamwork2}></img>
                  <h3 style={{ textAlign: "center" }}>Morris Nelson</h3>
                  <p className='ourdiskri'>Staffing Director</p>
                </div>
              </div>
              <div className="workimage">
                <div className="imagework">
                  <img src={teamwork3}></img>
                  <h3 style={{ textAlign: "center" }}>Travis Wallace</h3>
                  <p className='ourdiskri'>Content Executive</p>
                </div>
              </div>
              <div className="workimage">
                <div className="imagework">
                  <img src={teamwork4}></img>
                  <h3 style={{ textAlign: "center" }}>Steve Frazier</h3>
                  <p className='ourdiskri'>Technical Executive</p>
                </div>
              </div>
            </div>
          </div>
          <div className="spas"></div>
        </div>
      </section>

      {/* -------------------------------- OUR CLIENT SAY ----------------------------------- */}
      <section>
        <div className="container">
          <div className="name_our">
            <h4>OUR CLIENT SAY</h4>
            <div className="nameour">Testimonials</div>
          </div>
          <div className="spas">
            <div className="d-flax">
              <div className="client">
                <div className="clientitam">
                  <div className="clienttext">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                    <div style={{ color: "#FFCE39" }}><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar></div>
                    <h5 style={{ color: "gray" }}>Google</h5>
                  </div>
                </div>
                <div className="flax">
                  <div className="clienimage">
                    <img src={testimonial}></img>
                  </div>
                  <div className='clientname'>
                    <h4>Ruben Houston</h4>
                    <p style={{ marginTop: "-20px", fontWeight: "bold", color: "gray" }}>Service Manager</p>
                  </div>
                </div>
              </div>
              <div className="client">
                <div className="clientitam">
                  <div className="clienttext">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                    <div style={{ color: "#FFCE39" }}><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar></div>
                    <h5 style={{ color: "gray" }}>Google</h5>
                  </div>
                </div>
                <div className="flax">
                  <div className="clienimage">
                    <img src={testimonial}></img>
                  </div>
                  <div className='clientname'>
                    <h4>Ruben Houston</h4>
                    <p style={{ marginTop: "-20px", fontWeight: "bold", color: "gray" }}>Service Manager</p>
                  </div>
                </div>
              </div>
              <div className="client">
                <div className="clientitam">
                  <div className="clienttext">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                    <div style={{ color: "#FFCE39" }}><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar></div>
                    <h5 style={{ color: "gray" }}>Google</h5>
                  </div>
                </div>
                <div className="flax">
                  <div className="clienimage">
                    <img src={testimonial}></img>
                  </div>
                  <div className='clientname'>
                    <h4>Ruben Houston</h4>
                    <p style={{ marginTop: "-20px", fontWeight: "bold", color: "gray" }}>Service Manager</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="spas"></div>
        </div>
      </section>

      {/* ------------------------ OUR LATEST BLOG ----------------------------------- */}
      <section>
        <div className='featuredname'>
          <div className="container">
            <div className="name_our">
              <h4>OUR LATEST BLOG</h4>
              <div className="nameour">News & Updates</div>
            </div>
            <div className='main_letest'>
              <div className="d-flax ">
                <div className="workimage">
                  <div className="imagework">
                    <img src={blogimg}></img>
                    <div className="blogtext">
                      <p>20 January - 2021 | <span>Technology</span></p>
                      <h3>What Could 5g Change About The Way We Use Technology?</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore veniam dolore.</p>
                      <h4 className="blogmore">+ Read More</h4>
                    </div>
                  </div>
                </div>
                <div className="workimage">
                  <div className="imagework">
                    <img src={blogimg2}></img>
                    <div className="blogtext">
                      <p>25 January - 2021 | <span>IT Services</span></p>
                      <h3>What Could 5g Change About The Way We Use Technology?</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore veniam dolore.</p>
                      <h4 className="blogmore">+ Read More</h4>
                    </div>
                  </div>
                </div>
                <div className="workimage">
                  <div className="imagework">
                    <img src={blogimg3}></img>
                    <div className="blogtext">
                      <p>30 January - 2021 | <span>Business</span></p>
                      <h3>What Could 5g Change About The Way We Use Technology?</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore veniam dolore.</p>
                      <h4 className="blogmore">+ Read More</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="blogbtn flax">
              <div className="btn2">
                <button>Get Free Quote</button>
              </div>
              <div className="btn2">
                <button>View All Blog</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------------------------- */}
      <section>
        <div className="backimage">
          <div className="text_image">
            <h2 style={{ textAlign: "center", fontSize: "40px" }}>We’re here to help and answer any<br></br> question you might have.</h2>
            <p>Free Consultation About Our IT Solutions For Your Business</p>
            <div className="btn2">
              <button>Let's Talk Now</button>
            </div>
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------------------------------- */}
      <section>
        <div className="container">
          <div className='d-flax'>
            <div className="image4">
              <img src={clientimg}></img>
            </div>
            <div className="image4">
              <img src={clientimg2}></img>
            </div>
            <div className="image4">
              <img src={clientimg3}></img>
            </div>
            <div className="image4">
              <img src={clientimg4}></img>
            </div>
            <div className="image4">
              <img src={clientimg5}></img>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------------------------- */}
      <footer className="last_info">
        <div className="container">
          <div className="flax">
            <div className="mainfooter">
              <div>
                <img className="footerlo" src={footerlogo}></img>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, nostrud consectetur</p>
              <div className="icon">
                <a><FaFacebookF></FaFacebookF></a>
                <a><FaTwitter></FaTwitter></a>
                <a><FaLinkedin></FaLinkedin></a>
                <a><CiYoutube></CiYoutube></a>
              </div>
            </div>
            <div className="mainfooter">
              <h3>Company</h3>
              <ul className="courfooter">
                <li><a href="" className="midalfooter">About Us</a></li>
                <li><a href="" className="midalfooter">Latest Project</a></li>
                <li><a href="" className="midalfooter">IT Solutions</a></li>
                <li><a href="" className="midalfooter">Digital Solutions</a></li>
                <li><a href="" className="midalfooter">Team Member</a></li>
                <li><a href="" className="midalfooter">Contact Us</a></li>
              </ul>
            </div>
            <div className="mainfooter">
              <h3>Services</h3>
              <ul className="courfooter">
                <li><a href="" className="midalfooter">IT Strategy</a></li>
                <li><a href="" className="midalfooter">Network Services</a></li>
                <li><a href="" className="midalfooter">Software Audits</a></li>
                <li><a href="" className="midalfooter">Business Intelligence</a></li>
                <li><a href="" className="midalfooter">Data Science</a></li>
                <li><a href="" className="midalfooter">Virtual Workstation</a></li>
              </ul>
            </div>
            <div className='mainfooter'>
              <h3>CONTACT US</h3>
              <p>Address: 526 Melrose Street, Water Mill, New York.</p>
              <p>Phone: +080 707 555-321</p>
              <p>Email: contact-info@example.com</p>
              <div className="flax">
                <input type="text" className="email" placeholder="Enter your email"></input>
                <button className="btn7">Subscribe Now</button>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* -------- */}
      <div className="lasttext">
        <div className="container">
          <div className="lasttext d-flax">
            <div>
              <p>© 2021 - All Rights Reserved - Designed by Cute Themes.</p>
            </div>
            <div>
              <p>Terms & Conditions Privacy Policy</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


export default App;
