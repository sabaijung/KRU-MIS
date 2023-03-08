import React, { Fragment } from "react";
import Pagination from "react-js-pagination";
import { NavLink } from "react-router-dom";

function ShowData({ data, pagin, changePage, changePageSize, printData }) {
  //console.log("data:", data);

  return (
    <Fragment>
      <div className="mt-5">
        <div className="d-flex justify-content-between">
          <div>
            <select
              value={pagin.pagesize}
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
            <NavLink to="/project/create" className="btn btn-info btn-md">
              <i className="fa fa-plus-circle pr-1"></i>
              เพิ่มใหม่
            </NavLink>
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
              <th>ชื่อ-นามสกุล</th>
              <th>วันที่อบรม</th>
              <th>จัดการ</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>
                  {(pagin.currentpage - 1) * pagin.pagesize + (index + 1)}
                </td>
                <td>{item.projectName}</td>
                <td></td>
                <td>
                  <button
                    class="btn btn-success btn-circle btn-sm"
                    onClick={() => printData(item.id)}
                  >
                    <i class="fas fa-print"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="d-flex justify-content-between">
          <div>จำนวน {pagin.totalrow} รายการ</div>
          <div>
            <Pagination
              activePage={pagin.currentpage}
              itemsCountPerPage={pagin.pagesize}
              totalItemsCount={pagin.totalrow}
              pageRangeDisplayed={pagin.totalpage}
              onChange={(page) => {
                changePage(page);
              }}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
}
export default ShowData;
