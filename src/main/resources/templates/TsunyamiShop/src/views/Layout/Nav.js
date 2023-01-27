import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { logoutUser } from "../../store/actions/loginAction";


const Nav = () => {
  const dispatch = useDispatch();
  const lstCart = useSelector((state) => state.cart.lst);
  const loginUser = useSelector((state) => state.login.lst);

  const handleLogout = () => {
    alert("dang xuat");
    const action = logoutUser();
    dispatch(action);
  };

  return (
    <>
      <nav>
        <div>
          <img src={window.location.origin +"/img/logo.png"} alt="" className="brand" />
        </div>
        <ul>
          <li>
            <Link to="/home">
              <i className="fa fa-home" aria-hidden="true"></i> Trang Chủ
            </Link>
          </li>
          <li>
            <Link to="/introduce">
              <i className="fa fa-info" aria-hidden="true"></i> Giới thiệu
            </Link>
          </li>
          <li>
            <Link to="/news">
              <i className="fa fa-truck" aria-hidden="true"></i> Tin tức
            </Link>
          </li>
          <li>
            <Link to="/contact">
              <i className="fa fa-telegram" aria-hidden="true"></i> Liên hệ
            </Link>
          </li>
          <li>
            <Link to="/products">
              <i className="fa fa-location-arrow" aria-hidden="true"></i> Sản
              phẩm
            </Link>
          </li>
          <li style={{ marginLeft: "150px" }}>
            <Link to="/cart">
              <p>
                Giỏ hàng
                <span>({lstCart.length})</span>
              </p>
            </Link>
          </li>
          {!loginUser && (
            <li>
              <Link to="/login">Đăng Nhập</Link>
            </li>
          )}
          {loginUser && (
            <li>
              <Link to="/login" onClick={handleLogout}>
                Đăng xuất
              </Link>
            </li>
          )}
          {/* 
          <li>
            <Link to>Đăng xuất</Link>
          </li> */}
        </ul>
      </nav>
    </>
  );
};
export default Nav;
