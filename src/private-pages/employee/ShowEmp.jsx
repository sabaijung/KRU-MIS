import React, { Fragment, useState } from "react";
import { Formik, Form } from "formik";
import Select from "react-select";
import { NavLink } from "react-router-dom";

const position = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const ShowEmp = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  return (
    <Fragment>
      <div className="row">
        <div className="form-group col-md-12 text-right">
          <NavLink to="/form-employee" className="btn btn-outline-primary">
            <i className="fa fa-plus-circle pr-1 text-[16px]"></i>
            เพิ่มใหม่
          </NavLink>
        </div>
      </div>
      <div className="card">
        <div className="card-header">ค้นหาข้อมูล</div>
        <div className="card-body">
          <Formik
            enableReinitialize={true}
            initialValues={{
              keyword: "",
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
              <Form className="php-email-form">
                <div className="row">
                  <div className="form-group col-md-3">
                    <label htmlFor="keyword">ชื่อ-นามสกุล</label>
                    <input
                      className="form-control"
                      type="text"
                      name="keyword"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name}
                    />
                  </div>
                  <div className="form-group col-md-4 mt-3 mt-md-0">
                    <label htmlFor="name">ตำแหน่ง</label>
                    <Select
                      defaultValue={selectedOption}
                      onChange={setSelectedOption}
                      options={position}
                    />
                  </div>
                  <div className="form-group col-md-4">
                    <label htmlFor="name">โครงการ</label>
                    <Select
                      defaultValue={selectedOption}
                      onChange={setSelectedOption}
                      options={position}
                    />
                  </div>
                </div>

                <div className="form-group text-center">
                  <button type="submit" className="btn btn-primary">
                    บันทึก
                  </button>{" "}
                  <button type="reset" className="btn btn-secondary">
                    ล้างข้อมูล
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>

      <br />
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
    </Fragment>
  );
};
export default ShowEmp;
