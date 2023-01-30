import { Modal } from "@mui/material";
import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { hideModalCreateFood } from "../../../redux/actions/PopupAction";
import { popupNewFoodState$ } from "../../../redux/selector/PopupSelector";
import img from "../../../assets/images/ganuong.jpg";
import "./PopupNewFood.scss";
const PopupNewFood = () => {
  const dispatch = useDispatch();
  const isShow = useSelector(popupNewFoodState$);
  const onClose = useCallback(() => {
    dispatch(hideModalCreateFood());
  }, [dispatch]);
  return (
    <div>
      <Modal open={isShow} onClose={onClose}>
        <div className="modal_new-food">
          <div className="row">
            <div className="col-5">
              <img src={img} alt="img" />
            </div>
            <div className="col-7">
              <form noValidate autoComplete="off" className="form col-12">
                <label>Mã món ăn</label>
                <input type="text" disabled className="input-text" />
                <label>Tên món ăn</label>
                <input type="text" className="input-text" />
                <label>Giá(VND)</label>
                <input type="text" className="input-text" />
                <label>Loại</label>
                <select type="text" className="input-select">
                  <option>Món chính</option>
                  <option>Món phụ</option>
                </select>
                <label>Mô tả</label>
                <textarea type="text" className="input-textarea" />
                <label>Trạng thái</label>
                <input type="checkbox" className="checkbox" />
                <div className="footer">
                  <button className="buttonSave" type="submit">
                    Lưu
                  </button>
                  <button className="buttonClose" onClick={onClose}>
                    Đóng
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default PopupNewFood;
