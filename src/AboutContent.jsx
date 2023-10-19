import React from 'react';
import "./aboutcontent.css"
function AboutContent(){
  
  const reloadPage = () => {
    window.location.reload()
  }

    return(<>
        <div className="aboutsec1">
          <div className="aboutimgs1" onClick={reloadPage}>
            <div className="box1">
            <img src="https://picsum.photos/650/250?random=1" /> </div>
            <div className="box2">
            <img src="https://picsum.photos/300/200" /> </div>
            <div className="box3">
            <img src="https://picsum.photos/300/202" /> </div>
            <div className="box4">
            <img src="https://picsum.photos/650/200" /> </div>
          </div>
          <div className="aboutcontent1">
            <h2>About Us</h2>
            <p>
              Welcome to Mercury, your trusted source for cutting-edge image
              forgery detection solutions. We are passionate about ensuring the
              integrity and authenticity of visual content in today's digital
              world, and our mission is to provide state-of-the-art tools and
              expertise to combat image forgery and manipulation.
            </p>
            <h2>Who We Are</h2>
            <p>
              At Mercury, we are a team of dedicated professionals with
              extensive experience in computer vision, machine learning, and
              image analysis. Our experts come from diverse backgrounds,
              including academia, industry, and law enforcement, and share a
              common commitment to combating the challenges posed by image
              forgery.
            </p>
            <h2>Our Vision</h2>
            <p>
              Our vision is to create a digital environment where individuals,
              businesses, and organizations can confidently rely on the
              authenticity of visual content. In an era marked by the
              proliferation of fake news, manipulated images, and digital
              misinformation, we believe that trust in visual information is
              fundamental to informed decision-making and a healthy digital
              ecosystem.
            </p>
          </div>
        </div>

        <div className="aboutsec2">
          <div className="aboutcontent2">
            <h2>What We Offer</h2>
            <p>
              Cutting-Edge Technology: Mercury is at the forefront of image
              forgery detection technology. We continuously research, develop,
              and refine our tools to stay ahead of emerging forgery techniques
              and ensure the highest accuracy in detection.
            </p>
            <br />
            <p>
              Comprehensive Solutions: Our range of solutions caters to various
              needs, from media verification and forensic investigations to
              content moderation and brand protection. Whatever your image
              forgery detection requirements may be, we have a solution tailored
              to your needs.
            </p>
            <br />
            <p>
              User-Friendly Interface: We understand that not everyone is an
              image analysis expert. That's why we have designed our tools with
              user-friendly interfaces that make it easy for professionals and
              non-experts alike to upload and analyze images.
            </p>
            <br />
            <p>
              Privacy and Security: Your privacy and the security of your data
              are of utmost importance to us. We adhere to the strictest
              standards of data protection and ensure that your sensitive
              information is handled with the utmost care.
            </p>
          </div>

          <div className="aboutimgs2" onClick={reloadPage}>
          <div className="box1">
            <img src="https://picsum.photos/650/251" /> </div>
            <div className="box2">
            <img src="https://picsum.photos/301/200" /> </div>
            <div className="box3">
            <img src="https://picsum.photos/302/202" /> </div>
            <div className="box4">
            <img src="https://picsum.photos/651/200" /> </div>
          </div>
          </div>

        </>)
}

export default AboutContent;