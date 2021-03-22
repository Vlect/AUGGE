import React from "react";
import styles from "./contactUs.module.css";
import { useFormik } from "formik";

interface contactUsprops {
  label?: string;
}

const ContactUs: React.FC<contactUsprops> = ({}) => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className={styles.contactUsSection}>
      <div className={styles.sectionInfo}>
        <h1>Contact Us</h1>
        <p>If you have any question, please contact us!</p>
      </div>
      <div>
        <form className={styles.form} onSubmit={formik.handleSubmit}>
          <div className={styles.formBlock}>
            <div className={styles.label}>
              <label htmlFor="firstName">First Name:</label>
            </div>
            <input
              className={styles.input}
              id="firstName"
              name="firstName"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.firstName}
              placeholder="Your first name"
            />
          </div>
          <div className={styles.formBlock}>
            <div className={styles.label}>
              <label htmlFor="lastName">Last Name:</label>
            </div>
            <input
              className={styles.input}
              id="lastName"
              name="lastName"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.lastName}
              placeholder="Your last name"
            />
          </div>
          <div className={styles.formBlock}>
            <div className={styles.label}>
              <label htmlFor="firstName">Email:</label>
            </div>
            <input
              className={styles.input}
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              placeholder="Your email"
            />
          </div>
          <div className={styles.formBlock}>
            <div className={styles.label}>
              <label htmlFor="message">Message:</label>
            </div>
            <textarea
              className={styles.textarea}
              id="message"
              name="message"
              onChange={formik.handleChange}
              value={formik.values.message}
              placeholder="Write your message here"
            ></textarea>
          </div>
        </form>
      </div>

      <div className={styles.infoBlocks}>
        <div className={styles.infoBlock}>
          <i className="fa fa-phone" aria-hidden="true"></i>
          <p> - </p>
          <h4>3046507832</h4>
        </div>
        <div className={styles.infoBlock}>
          <i className="fa fa-envelope" aria-hidden="true"></i>
          <p> - </p>
          <h4>ceo@augge.com</h4>
        </div>
        <div className={styles.infoBlock}>
          <i className="fa fa-map-marker" aria-hidden="true"></i>
          <p> - </p>
          <h4>Cll 23 #45-65</h4>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
