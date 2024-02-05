import React from 'react';
import Navbar from '@/component/Navbar';
import Footer from '@/component/Footer';
const AboutCompany = () => {
  return (
    <div>
    <Navbar/>
    <div className="about-company-container">
      <h1 className="about-company-title">Welcome to HateContentful</h1>
      <p className="about-company-description">
        HateContentful is a leading innovator in the technology sector, dedicated to providing cutting-edge solutions for our clients worldwide. With a passion for excellence and a commitment to delivering unparalleled services, we have established ourselves as a trusted partner for businesses of all sizes.
      </p>
      <p className="about-company-values">
        At HateContentful, our core values drive every aspect of our operations. Integrity, innovation, and collaboration are the pillars that guide us in delivering high-quality products and services. We believe in fostering a culture of continuous improvement, where every team member is empowered to contribute their best ideas and talents.
      </p>
      <div className="about-company-team">
        <h2 className="about-company-team-title">Meet Our Team</h2>
        <p className="about-company-team-description">
          Our diverse team of professionals brings together a wealth of experience and expertise. From skilled developers to creative designers, each member plays a crucial role in our success. We prioritize a collaborative and inclusive work environment, ensuring that every team member feels valued and inspired.
        </p>
      </div>
      <div className="about-company-mission">
        <h2 className="about-company-mission-title">Our Mission</h2>
        <p className="about-company-mission-description">
          HateContentful is on a mission to empower businesses by providing them with innovative and customized solutions that drive growth and success. We aim to be at the forefront of technological advancements, consistently pushing boundaries to exceed the expectations of our clients.
        </p>
      </div>
      <div className="about-company-contact">
        <h2 className="about-company-contact-title">Get in Touch</h2>
        <p className="about-company-contact-description">
          Ready to take your business to the next level? Contact us today to explore how HateContentful can tailor its services to meet your unique needs. We look forward to the opportunity to collaborate and contribute to your success story.
        </p>
      </div>
     
      <style jsx>{`
        .about-company-container {
          max-width: 800px;
          margin: 0 auto;
          padding: 40px;
          text-align: center;
        }
        .about-company-title {
          font-size: 2.5rem;
          color: #000; /* Siyah renk */
          margin-bottom: 20px;
        }
        .about-company-description,
        .about-company-values,
        .about-company-team,
        .about-company-mission,
        .about-company-contact {
          margin-bottom: 40px;
        }
        .about-company-team-title,
        .about-company-mission-title,
        .about-company-contact-title {
          font-size: 2rem;
          color: #000; /* Siyah renk */
          margin-bottom: 15px;
        }
        .about-company-description,
        .about-company-values,
        .about-company-team-description,
        .about-company-mission-description,
        .about-company-contact-description {
          font-size: 1.1rem;
          color: #fff; /* Beyaz renk */
          line-height: 1.6;
        }
      `}</style>
    </div>
    <Footer/>
    </div>
  );
};

export default AboutCompany;
