import React, { Fragment, useState } from "react";
import { NavLink } from "react-router-dom";
import { Formik, Form } from "formik";
import Select from "react-select";

import DatePickerTH from "../../components/DatePickerTH";
import { SearchAddress } from "../../components/SearchAddress";

const position = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const FormEmp = (setStorageValue, storageValue) => {
  const [selectedOption, setSelectedOption] = useState(null);
  return (
    <Fragment>
      <div className="row">
        <div className="form-group col-md-12 text-right">
          <NavLink to="/form-employee" className="btn btn-outline-primary">
            <i className="fa fa-chevron-circle-left text-[16px]" /> กลับ
          </NavLink>
        </div>
      </div>

      <div className="row">
        <Formik
          enableReinitialize={true}
          initialValues={{
            keyword: "",
            birthday: "",
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

                <div className="form-group col-md-4">
                  <label htmlFor="name">วันเดือนปีเกิด</label>
                  {/* <DatePickerTH
                    title="วันเดือนปีเกิด"
                    editable={false}
                    errors={errors}
                    touched={touched}
                    value={values.birthday}
                    name="birthday"
                    format="DD/MM/YYYY"
                    onChange={(date) => {
                      if (date.format() === "") {
                        setFieldValue("birthday", storageValue.birthday);
                      }
                      setStorageValue({
                        ...storageValue,
                        birthday: date.format(),
                      });
                      setFieldValue("birthday", date.format());
                    }} */}
                  />
                </div>
              </div>

              <div className="row">
                <div className="form-group col-md-4">
                  <SearchAddress
                    title="ค้นหาที่อยู่"
                    placeholder="- ค้นหาที่อยู่ -"
                    returnAddress={(e) => {}}
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
    </Fragment>
  );
};
export default FormEmp;
