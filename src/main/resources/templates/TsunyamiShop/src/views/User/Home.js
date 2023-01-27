import HotProducts from "./HotProducts";
import useFetch from "../../ultis/useFetch";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { useState } from "react";
const Home = () => {
  //Data D = getdata Dog . C = dataCat . PK = dataPhuKien

  const lstDog = useFetch("http://localhost:8080/san-pham/get/type=1/class=1");
  const lstCat = useFetch("http://localhost:8080/san-pham/get/type=1/class=2");
  const lstPK = useFetch("http://localhost:8080/san-pham/get/type=2/class=");
  const a = useSelector((state) => state.cart.lst);
  console.log(a);
  return (
    <>
      <section className="section1"></section>
      <br />
      {/* <!--Services Of Shop--> */}
      <div className="container">
        <div style={{ height: "200px", backgroundColor: "skyblue" }}>
          <div className="row">
            <div
              className="col-3"
              style={{ textAlign: "center", color: "white", marginTop: "50px" }}
            >
              <i className="fa fa-truck"></i>
              <strong style={{ fontSize: "25px" }}>&nbsp;Miễn phí ship</strong>
              <p>Miễn phí ship toàn bộ khu vực nội thành</p>
            </div>

            <div
              className="col-3"
              style={{ textAlign: "center", color: "white", marginTop: "50px" }}
            >
              <i className="fa fa-money" aria-hidden="true"></i>
              <strong style={{ fontSize: "25px" }}>&nbsp;Giảm lần đầu</strong>
              <p>Giảm giá 15% cho đơn hàng đầu tiên</p>
            </div>

            <div
              className="col-3"
              style={{ textAlign: "center", color: "white", marginTop: "50px" }}
            >
              <i className="fa fa-credit-card"></i>
              <strong style={{ fontSize: "25px" }}>
                &nbsp;Thanh toán đa dạng
              </strong>
              <p>Chấp nhận trả trước và sau</p>
            </div>

            <div
              className="col-3"
              style={{ textAlign: "center", color: "white", marginTop: "50px" }}
            >
              <i className="fa fa-gift"></i>
              <strong style={{ fontSize: "25px" }}>&nbsp;Quà tặng kèm</strong>
              <p>Luôn có quà tặng kèm khi mua thú cưng</p>
            </div>
          </div>
        </div>

        {/* <!--End Service--> */}
        {/* <!--Body Chó--> */}
        <div className="container">
          <br />
          <div className="center">
            <h1>CHÓ CẢNH</h1>
            <img
              className="bell"
              src={window.location.origin + "/img/Bell.png"}
              alt=""
            />
          </div>
          {/* <!--List Chó--> */}
          <HotProducts
            lstData={lstDog.data.data}
            loading={lstDog.loading}
            error={lstDog.error}
          />
          {/* <!--End list chó--> */}
        </div>
        {/* <!-- End chó--> */}
        {/* <!--Mèo --> */}
        <br />
        <div className="center">
          <img
            className="bell"
            src={window.location.origin + "/img/banner.jpg"}
            alt=""
            style={{ width: "100%" }}
          />
        </div>
        <div className="container">
          <div className="center">
            <h1>MÈO CẢNH</h1>
            <img src="img/Bell.png" alt="" />
          </div>
          {/* <!--List meof--> */}
          <HotProducts
            lstData={lstCat.data.data}
            loading={lstCat.loading}
            error={lstCat.error}
          />
          {/* <!--End lisst mefo--> */}
        </div>
        {/* <!-- End mèo--> */}
        {/* <!-- Đồ ăn--> */}
        <br />
        <div className="container">
          <div className="row center">
            <div className="col-6">
              <img
                src={window.location.origin + "/img/thuc_an_cho.jpg"}
                alt=""
                style={{ width: "100%", height: "400px" }}
              />
            </div>
            <div className="col-6">
              <img
                src={window.location.origin + "/img/chua_benh_cho.jpg"}
                alt=""
                style={{ width: "100%", height: "400px" }}
              />
            </div>
          </div>
        </div>
        <br />
        <div className="container">
          <div className="center">
            <h1>Vật dụng Đồ ăn thú cưng</h1>
            <img
              className="bell"
              src={window.location.origin + "/img/Bell.png"}
              alt=""
            />
          </div>
          {/* <!--List item--> */}
          <HotProducts
            lstData={lstPK.data.data}
            loading={lstPK.loading}
            error={lstPK.error}
          />
          {/* <!--End list item--> */}
          <br />
        </div>
        <br />
        {/* <!-- End đồ ăn--> */}
      </div>
    </>
  );
};
export default Home;
