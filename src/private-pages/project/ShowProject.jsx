import React, { Fragment, useState } from "react";
import { Formik, Form } from "formik";
import Select from "react-select";

import { DatePickerTH } from "../../components/TextField";

import systemSetting from "../../data/system-setting.json";

const ShowProject = () => {
  const projectStatus = systemSetting.projectStatus;

  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <Fragment>
      <div className="row">
        <div className="card mb-4 py-3 border-top-primary">
          <div className="card-body">
            <div className="row">
              <h6>
                <strong>ข้อมูลโครงการบริการวิชาการ</strong>
              </h6>
            </div>
            <hr />

            {/* สำหรับค้นหา */}
            <div className="row">
              <Formik
                initialValues={{
                  projectStatus: "",
                }}
              >
                {({ values, setFieldValue, errors, touched }) => (
                  <Form>
                    <div className="row">
                      <div className="form-group col-md-4">
                        <label htmlFor="projectName">ชื่อโครงการ</label>
                        <input
                          className="form-control"
                          type="text"
                          name="projectName"
                        />
                      </div>

                      <div className="form-group col-md-2">
                        <label htmlFor="projectStatus">สถานะการดำเนินงาน</label>
                        <Select
                          placeholder="- เลือก -"
                          name="projectStatus"
                          options={projectStatus}
                          value={selectedOption}
                          onChange={setSelectedOption}
                          getOptionLabel={(option) => option.status}
                          getOptionValue={(option) => option.code}
                        />
                      </div>

                      <div className="form-group col-md-2">
                        <label htmlFor="years">ปี พ.ศ.</label>
                        <DatePickerTH
                          editable={false}
                          maxDate={new Date()}
                          onlyYearPicker
                          format="YYYY"
                          id="startYear"
                          value={
                            values.startYear
                              ? new Date((values.startYear - 543).toString())
                              : ""
                          }
                          name="startYear"
                          onChange={(date) => {
                            setFieldValue("startYear", date.format());
                          }}
                          errors={errors}
                          touched={touched}
                        />
                      </div>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default ShowProject;
