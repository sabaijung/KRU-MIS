import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

const Authentication = () => {
  return (
    <div>
      <section id="authentication" className="contact">
        <div className="container">
          <div className="section-title">
            <h2>เข้าสู่ระบบ</h2>
          </div>
          <Formik
            enableReinitialize={true}
            initialValues={{
              username: "",
              password: "",
            }}
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
              <div className="row php-email-form ">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                  <Form className="">
                    <div className="row">
                      <div className="form-group mt-3">
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

                    <div className="row">
                      <div className="form-group">
                        <label htmlFor="name">รหัสผ่าน</label>
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
                    </div>

                    <div className="form-group text-center">
                      <button type="submit">เข้าสู่ระบบ</button>{" "}
                      <button type="reset">ล้างข้อมูล</button>
                    </div>
                  </Form>
                </div>
                <div className="col-md-4"></div>
              </div>
            )}
          </Formik>
        </div>
      </section>
    </div>
  );
};

export default Authentication;
