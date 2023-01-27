import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import axios from "axios";
import useFetch from "../../ultis/useFetch";
import { addNewCart } from "../../store/actions/cartAction";

const ProductDetail = () => {
  let { id } = useParams();
  let navigate = useNavigate();
  const [productDetail, setProductDetail] = useState([]);
  const [quantity, setQuantity] = useState();

  const dispatch = useDispatch();
  const loginUser = useSelector((state) => state.login.lst);

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(
        `http://localhost:8080/san-pham/detail/id=${id}`
      );
      setProductDetail(res.data.data);
    };
    getData();
  }, []);

  const handleBuyProduct = async () => {
    if (!loginUser) {
      alert("Please login");
      navigate("/login");
    } else {
      let data = {
        loginUser: loginUser,
        lstHDCT: [
          {
            soLuong: quantity,
            donGia: productDetail.gia,
            sanPham: productDetail,
          },
        ],
      };
      const res = await axios.post(`http://localhost:8080/cart/buy`, data);
    }
  };

  const handleAddToCart = () => {
      let cart = {
        soLuong: quantity,
        donGia: productDetail.gia,
        sanPham: productDetail,
      };
      const action = addNewCart(cart);
      dispatch(action);
  };

  return (
    <>
      <section className="section1"></section>
      <div className="container">
        <br />
        {productDetail.loading && <h1>loading...</h1>}
        {productDetail.error && <h2>Error : Something went wrong</h2>}
        {productDetail && (
          <div className="row">
            <div className="col-6">
              <img  src =  {window.location.origin +"/img/"+productDetail.hinhAnh}  alt="" width="90%" height="500px" />
            </div>
            <div className="col-6">
              <p>
                Trang chủ /
                {productDetail.loai && (
                  <>
                    {productDetail.loai.tenLoai}/{productDetail.ma}
                  </>
                )}
              </p>
              <h2>{productDetail.ten}</h2>
              <hr />
              <strong> {productDetail.gia} VND</strong>
              <br />
              <input
                type="number"
                placeholder="Nhập số lượng"
                onChange={(e) => setQuantity(e.target.value)}
              />
              <br />
              <hr />
              <button
                type="button"
                value=""
                className="btn btn-primary"
                onClick={handleAddToCart}
              >
                Thêm vào giỏ
              </button>
              <button
                type="button"
                value=""
                className="btn btn-success"
                onClick={handleBuyProduct}
              >
                Mua ngay
              </button>
              <p>
                Danh mục :{" "}
                {productDetail.dongsp && (
                  <>
                    <span></span>
                    {productDetail.dongsp.tenDong}
                  </>
                )}
              </p>
            </div>
          </div>
        )}
        <hr />
        <div>
          <p>&nbsp; </p>
        </div>
      </div>
    </>
  );
};
export default ProductDetail;
