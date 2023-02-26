import React from "react";
import kruLogo from "../../assets/img/logo/kru1.png";

const Sidebar = () => {
  return (
    <div>
      <ul
        className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        <a
          className="sidebar-brand d-flex align-items-center justify-content-center"
          href="index.html"
        >
          <div className="sidebar-brand-icon">
            <img src={kruLogo} width="70px" height="80px" className="mt-2" />
          </div>
          <div className="sidebar-brand-text mx-3">COMPUTER SCIENCE</div>
        </a>
        <hr className="sidebar-divider my-0" />
        <li className="nav-item">
          <a className="nav-link" href="index.html">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>แดชบอร์ด</span>
          </a>
        </li>
        <hr className="sidebar-divider" />
        <li className="nav-item active">
          <a
            className="nav-link"
            href="#"
            data-toggle="collapse"
            data-target="#collapsePages"
            aria-expanded="true"
            aria-controls="collapsePages"
          >
            <i className="fas fa-fw fa-folder"></i>
            <span>บริการวิชาการ</span>
          </a>
          <div
            id="collapsePages"
            className="collapse show"
            aria-labelledby="headingPages"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <a className="collapse-item" href="/show-project">
                ข้อมูลโครงการบริการวิชาการ
              </a>
              <a className="collapse-item" href="/show-employee">
                ข้อมูลบุคลากร
              </a>
              <div className="collapse-divider"></div>
            </div>
          </div>
        </li>
        <hr className="sidebar-divider d-none d-md-block" />
        <div className="text-center d-none d-md-inline">
          <button
            className="rounded-circle border-0"
            id="sidebarToggle"
          ></button>
        </div>
      </ul>
    </div>
  );
};
export default Sidebar;
