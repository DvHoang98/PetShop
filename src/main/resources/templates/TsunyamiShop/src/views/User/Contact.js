import axios from "axios";
import { Alert } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux/es/exports";
import useCreate from "../../ultis/useCreate";

const Contact = () => {
  const [userName, setUserName] = useState();
  const [ten, setTen] = useState();
  const [mail, setMail] = useState();
  const [pass, setPass] = useState();
  const [sdt, setSdt] = useState();

  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    let newData = {
      id: null,
      username: userName,
      ten: ten,
      mail: mail,
      password: pass,
      sdt: sdt,
      chucVu: false,
    };

    axios.post("http://localhost:8080/register", newData).then((res) => {
      if (res.data.success) {
        alert("Đăng ký thành công");
        navigate("/home");
      } else {
        alert("Đã có người sử dụng tên đăng nhập này");
      }
    });
  };

  return (
    <>
      <section className="section1"></section>
      <div className="container">
        <div className="center">
          <h1>Thông tin </h1>
          <img src="/img/Bell.png" alt="" />
        </div>
        <br />
        <div className="row">
          <div
            className="col-6"
            style={{
              backgroundColor: "skyblue",
              color: "white",
              padding: "60px 30px 60px 30px",
            }}
          >
            <h2>Liên hệ với chúng tôi</h2>
            <p>
              Dịch vụ chăm sóc thú nuôi với tác phong chuyên nghiệp các bạn hoàn
              toàn có thể yên tâm khi giao vật nuôi của các bạn cho chúng
              tôi.Chúng tôi rất mong được phục vụ quý khách.
            </p>
            <p>
              Bạn là người yêu quý động vật,hãy đến Tsunyami shop nơi cung cấp
              các loại thú nuôi.Với đa dạng vật nuôi rất mong các bạn ghé thăm
              và tìm kiếm được con vật bạn yêu thích,rất mong được phục vụ quý
              khách.
            </p>
            <p>
              Với 10 năm kinh nghiệm chăm sóc các loại pet, được sự yêu quý và
              tin tưởng của mọi người. Tsunyami luôn đem đến cho người sử dụng
              cảm giác tin tưởng với dịch vụ chất lượng tốt nhất
            </p>
          </div>
          <div className="col-6">
            <br />
            <br />
            <br />
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="form-group col-6">
                  <label htmlFor="inputEmail4">Tài khoản</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Tài khoản"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                  />
                </div>
                <div className="form-group col-6">
                  <label htmlFor="inputPassword4">Mật khẩu</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Mật khẩu"
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                  />
                </div>
              </div>
              <div className="row">
                <div className="form-group col-md-6">
                  <label htmlFor="inputCity">Tên</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Tên"
                    value={ten}
                    onChange={(e) => setTen(e.target.value)}
                  />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="inputState">Số điện thoại</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Số điện thoại"
                    value={sdt}
                    onChange={(e) => setSdt(e.target.value)}
                  />
                </div>
              </div>
              <div className="row">
                <div className="form-group col-12">
                  <label htmlFor="inputEmail4">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    value={mail}
                    onChange={(e) => setMail(e.target.value)}
                  />
                </div>
              </div>
              <br />
              <button type="submit" className="btn btn-primary">
                Đăng ký
              </button>
            </form>
            <br />
          </div>
        </div>
        <div className="center">
          <h1>Chúng tôi luôn chờ bạn</h1>
          <img src="/img/Bell.png" alt="" />
        </div>
        <br />
      </div>
    </>
  );
};
export default Contact;
