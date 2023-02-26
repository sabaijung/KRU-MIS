import React, { Fragment, useState, useEffect } from "react";
import { Formik, Form } from "formik";
import Select from "react-select";

import { DatePickerTH } from "../../components/TextField";

import systemSetting from "../../data/system-setting.json";

import { getProject } from "../../services/Project.service";

import ShowData from "./ShowData";

const ShowProject = () => {
  const projectStatus = systemSetting.projectStatus;
  const [selectedOption, setSelectedOption] = useState(null);

  const [data, setData] = useState([]);
  const [pagin, setPagin] = useState({
    totalrow: 0,
    pagesize: 10,
    currentpage: 1,
    totalpage: 1,
  });

  useEffect(() => {
    showData("", 10, 1);
  }, []);

  function showData(search, pagesize, currentpage) {
    let res = getProject(search, pagesize, currentpage);
    console.log(res);
    setData(res.data);
    setPagin(res.pagin);
  }

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
                  projectName: "",
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

                      <div
                        className="form-group col-md-2 text-center"
                        style={{ marginTop: "29px" }}
                      >
                        <button
                          type="submit"
                          className="btn btn-primary btn-md"
                        >
                          ค้นหา
                        </button>{" "}
                        <button
                          type="reset"
                          className="btn btn-secondary btn-md"
                        >
                          ล้างข้อมูล
                        </button>
                      </div>
                    </div>

                    <div className="row">
                      <ShowData
                        data={data}
                        pagin={pagin}
                        changePage={(page) => {
                          showData(values.projectName, pagin.pagesize, page);
                        }}
                        changePageSize={(pagesize) => {
                          showData(values.projectName, pagesize, 1);
                        }}
                      />
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
