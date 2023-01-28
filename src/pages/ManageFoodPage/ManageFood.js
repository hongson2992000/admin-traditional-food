import React from "react";
import "./ManageFood.scss";
import Table from "../../components/Table/Table";

import customerList from "../../assets/JsonData/customers-list.json";
import { Link } from "react-router-dom";

const customerTableHead = [
  "",
  "Mã món ăn",
  "Tên món ăn",
  "Giá(VND)",
  "Loại",
  "Trạng thái",
  "Hành động",
  "",
];

const renderHead = (item, index) => <th key={index}>{item}</th>;

const renderBody = (item, index) => (
  <tr key={index}>
    <td>{item.id}</td>
    <td>{item.name}</td>
    <td>{item.email}</td>
    <td>{item.phone}</td>
    <td>{item.total_orders}</td>
    <td>{item.total_spend}</td>
    <td className="table-action">
      <i class="bx bx-show"></i>
      <i class="bx bx-edit"></i>
      <i class="bx bxs-trash"></i>
    </td>
    <td>
      <Link to="/">Xem chi tiết</Link>
    </td>
  </tr>
);
const ManageFood = () => {
  return (
    <div className="manage-food">
      <div className="header">
        <h2 className="page-header">Quản lí món ăn</h2>
        <div className="header-rigth">
        <div className="add_new-action">Thêm món +</div>
          <div className="navbar__search">
            <input type="text" placeholder="Search here..." />
            <i className="bx bx-search"></i>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card__body">
              <Table
                headData={customerTableHead}
                renderHead={(item, index) => renderHead(item, index)}
                bodyData={customerList}
                renderBody={(item, index) => renderBody(item, index)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageFood;
