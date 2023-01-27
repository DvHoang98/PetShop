import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import useFetch from "../../ultis/useFetch";
import { updateCart } from "../../store/actions/cartAction";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const lstCart = useSelector((state) => state.cart.lst);
  const loginUser = useSelector((state) => state.login.lst);
  const [totalPrice, setTotalPrice] = useState();

  useEffect(() => {
    let total = 0;
    lstCart.forEach((item) => {
      total = total + item.donGia;
    });
    setTotalPrice(total);
  }, []);

  const handleChangeQuantity = (e) => {};

  const handleBuyCart = async () => {
    if (!loginUser) {
      alert("Please login");
      navigate("/login");
    } else {
      let data = {
        loginUser: loginUser,
        lstHDCT: lstCart,
      };
      const res = await axios.post(`http://localhost:8080/cart/buy`, data);
      alert("Mua thành công");
      setTotalPrice(0);
      const action = updateCart([]);
      dispatch(action);
    }
  };

  return (
    <>
      <section className="section1"></section>
      <br />
      <div className="container">
        <h1 className="center">Giỏ hàng</h1>
        <table className="table table-striped table-inverse table-responsive">
          <thead className="thead-inverse">
            <tr>
              <th>Hình ảnh</th>
              <th>Tên</th>
              <th>Giá</th>
              <th>Số lượng</th>
            </tr>
          </thead>
          <tbody>
            {lstCart &&
              lstCart.length > 0 &&
              lstCart.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>
                      <img
                        src="../img/{{cart.product.image}}"
                        alt=""
                        style={{ width: "60px", height: "60px" }}
                      />
                    </td>
                    <td scope="row">{item.sanPham.ten}</td>
                    <td>{item.sanPham.gia} VND</td>
                    <td>
                      <input
                        type="number"
                        value={item.soLuong}
                        onChange={handleChangeQuantity}
                      />
                    </td>
                    <td>
                      <button className="btn btn-danger">Xóa</button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
        <div className="row">
          <div className="col-6">
            <div>
              <label>
                Tổng tiền :<span>{totalPrice} VND</span>{" "}
              </label>
            </div>
          </div>
          <div className="center">
            <button
              type="submit"
              className="btn btn-primary"
              onClick={handleBuyCart}
            >
              Mua
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
