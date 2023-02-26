import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { ValidateFormContact } from "./validate-form/ValidateContact";
import { json } from "react-router-dom";

const Contact = () => {
  return (
    <div>
      <section id="contact" className="contact">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Contact Us</h2>
            <p>Contact us the get started</p>
          </div>

          <div className="row">
            <div
              className="col-lg-5 d-flex align-items-stretch"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="info">
                <div className="address">
                  <i className="bi bi-geo-alt"></i>
                  <h4>Location:</h4>
                  <p>A108 Adam Street, New York, NY 535022</p>
                </div>

                <div className="email">
                  <i className="bi bi-envelope"></i>
                  <h4>Email:</h4>
                  <p>info@example.com</p>
                </div>

                <div className="phone">
                  <i className="bi bi-phone"></i>
                  <h4>Call:</h4>
                  <p>+1 5589 55488 55s</p>
                </div>

                {/* <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameBorder="0" style="border:0; width: 100%; height: 290px;" allowFullScreen></iframe>
                 */}

                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621"
                  frameBorder="0"
                  style={{ border: "0", width: "100%", height: "290px" }}
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            <div
              className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <Formik
                enableReinitialize={true}
                initialValues={{
                  statusType: "",
                  name: "",
                  email: "",
                  subject: "",
                  message: "",
                  mobilePhone: "",
                }}
                validationSchema={ValidateFormContact}
                onSubmit={(values) => {
                  let data = { ...values };
                  console.log("data:" + JSON.stringify(data));
                }}
              >
                {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  setFieldValue,
                }) => (
                  <Form className="php-email-form">
                    <div className="row">
                      <div className="form-group col-md-12 mt-3">
                        <label>สถานภาพ</label>&nbsp; &nbsp;
                        <label>
                          <input
                            id="statusType1"
                            type="radio"
                            name="statusType"
                            value="1"
                            onChange={handleChange}
                          />
                          &nbsp; นักศึกษา
                        </label>
                        &nbsp; &nbsp;
                        <label>
                          <input
                            id="statusType2"
                            type="radio"
                            name="statusType"
                            value="2"
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          &nbsp; บุคลากรมหาวิทยาลัย
                        </label>
                        &nbsp; &nbsp;
                        <label>
                          <input
                            id="statusType3"
                            type="radio"
                            name="statusType"
                            value="3"
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          &nbsp; บุคคลภายนอก
                        </label>
                      </div>

                      <ErrorMessage
                        name="statusType"
                        component="div"
                        className="invalid-feedback"
                      />
                    </div>

                    <div className="row">
                      <div className="form-group col-md-6">
                        <label htmlFor="name">ชื่อ-นามสกุล</label>
                        <input
                          className={
                            "form-control" +
                            (errors.name && touched.name ? " is-invalid" : "")
                          }
                          type="text"
                          name="name"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.name}
                        />

                        <ErrorMessage
                          name="name"
                          component="div"
                          className="invalid-feedback"
                        />
                      </div>
                      <div className="form-group col-md-6 mt-3 mt-md-0">
                        <label htmlFor="name">อีเมล</label>
                        <input
                          className={
                            "form-control" +
                            (errors.email && touched.email ? " is-invalid" : "")
                          }
                          type="text"
                          name="email"
                          onChange={(e) => {
                            setFieldValue(
                              "email",
                              e.target.value.replace(
                                /[^A-Za-z_.#?!@$%^&*0-9]/gi,
                                ""
                              )
                            );
                          }}
                          //onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.email}
                        />
                        <ErrorMessage
                          name="email"
                          component="div"
                          className="invalid-feedback"
                        />
                      </div>
                    </div>
                    <div className="form-group mt-3">
                      <label htmlFor="name">เรื่อง</label>
                      <input
                        className={
                          "form-control" +
                          (errors.subject && touched.subject
                            ? " is-invalid"
                            : "")
                        }
                        type="text"
                        name="subject"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.subject}
                      />
                      <ErrorMessage
                        name="subject"
                        component="div"
                        className="invalid-feedback"
                      />
                    </div>
                    <div className="form-group mt-3">
                      <label htmlFor="name">รายละเอียด</label>
                      <textarea
                        className={
                          "form-control" +
                          (errors.message && touched.message
                            ? " is-invalid"
                            : "")
                        }
                        type="text"
                        rows="5"
                        name="message"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.message}
                      />
                      <ErrorMessage
                        name="message"
                        component="div"
                        className="invalid-feedback"
                      />
                    </div>
                    <div className="form-group mt-3">
                      <label htmlFor="mobilePhone">เบอร์โทรศัพท์มือถือ</label>
                      <input
                        className={
                          "form-control" +
                          (errors.mobilePhone && touched.mobilePhone
                            ? " is-invalid"
                            : "")
                        }
                        type="text"
                        name="mobilePhone"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.mobilePhone}
                      />
                      <ErrorMessage
                        name="mobilePhone"
                        component="div"
                        className="invalid-feedback"
                      />
                    </div>

                    {/* <div className="form-group mt-3">
                      <label htmlFor="name">test</label>
                      <Field type="text" name="test" className="form-control" />
                    </div> */}
                    <div className="form-group text-center">
                      <button type="submit">บันทึก</button>{" "}
                      <button type="reset">ล้างข้อมูล</button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
