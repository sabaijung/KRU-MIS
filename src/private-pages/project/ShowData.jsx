import React, { Fragment } from "react";
import Pagination from "react-js-pagination";

function ShowData({ data, pagin, changePage, changePageSize }) {
  return (
    <Fragment>
      <div className="mt-5">
        <div className="d-flex justify-content-between">
          <div>
            <select
              value="0"
              className="form-control form-select"
              onChange={(e) => {
                changePageSize(parseInt(e.target.value));
              }}
            >
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={50}>50</option>
              <option value={100}>100</option>
            </select>
          </div>
          <div>
            <button
              type="button"
              className="btn btn-info"
              onClick={() => {
                console.log();
              }}
            >
              เพิ่ม
            </button>
          </div>
        </div>
      </div>

      <div className="table-responsive mt-2">
        <table
          className="table table-bordered"
          id="dataTable"
          width="100%"
          cellSpacing="0"
        >
          <thead>
            <tr>
              <th>ลำดับ</th>
              <th>ชื่อโครงการ</th>
              <th>ปี พ.ศ.</th>
              <th>จัดการ</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr>
                <td>
                  {(pagin.currentpage - 1) * pagin.pagesize + (index + 1)}
                </td>
                <td>{item.projectName}</td>
                <td></td>
                <td></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Fragment>
  );
}
export default ShowData;
