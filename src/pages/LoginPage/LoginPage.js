import React, { useCallback, useEffect } from "react";
import "./LoginPage.scss";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
export default function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className="login-page">
      <div className="login-left">
        <div className="login-header">
          {/* <img src={img} alt="" style={{width:"70px",height:"70px",marginRight:"10px"}}/> */}
          <span>Login</span>
        </div>
        <form
          className="login-form"
          noValidate
          autoComplete="off"
        >
          <div className="login-form-item">
            <div className="form-item">
              {/* <label for="username">Tên đăng nhập</label> */}
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Tên đăng nhập"
              />
            </div>
            <div className="form-item">
              {/* <label for="password">Mật khẩu</label> */}
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Mật khẩu"
              />
              {/* {errMessage === "INVALID USER NAME OR PASSWORD" ? (
                <p style={{ paddingTop: "10px", color: "red" }}>
                  Tài khoản hoặc mật khẩu không đúng
                </p>
              ) : (
                ""
              )} */}
            </div>
            <div className="form-item">
              <div className="checkbox">
                <input type="checkbox" id="rememberMeCheckbox" />
                <label className="checkboxLabel" for="rememberMeCheckbox">
                  Nhớ mật khẩu
                </label>
              </div>
            </div>
            <button type="submit" className="buttonSignIn">
              Đăng Nhập
            </button>
          </div>
          {/* <div className="login-form-footer">
            <a href="#">
              <img
                width="30"
                src="https://wiki.in-circuit.de/images/thumb/1/13/facebook_logo.png/600px-facebook_logo.png" alt=""
              />
              Facebook Login
            </a>
            <a href="#">
              <img
                width="30"
                src="https://play-lh.googleusercontent.com/aFWiT2lTa9CYBpyPjfgfNHd0r5puwKRGj2rHpdPTNrz2N9LXgN_MbLjePd1OTc0E8Rl1=w240-h480-rw" alt=""
              />
              Google Login
            </a>
          </div> */}
        </form>
      </div>
      {/* <div className="login-right">
        <img src={image} alt="" />
      </div> */}
    </div>
  );
}
