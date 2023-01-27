const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-3">
              <h3>Về chúng tôi</h3>
              <p>10 năm chăm sóc các loại pet</p>
              <p>Đội ngũ chăm sóc kinh nghiệm</p>
              <p>Thú cưng đầy đủ giấy tờ</p>
              <p>Luôn hỗ trợ bạn hết mình</p>
            </div>
            <div className="col-6">
              <h4>Join Our Newsletter Now</h4>
              <p>
                Get E-mail updates about our lastest shop and special offers.
              </p>
              <br />
              <div className="row">
                <div className="form-group mx-sm-3 mb-2 col-6">
                  <input
                    type="password"
                    className="form-control"
                    id="inputPassword2"
                    placeholder="Enter your mail"
                  />
                </div>
                <div className="col-5">
                  <button type="submit" className="btn btn-success mb-2">
                    SUBSCRIBE
                  </button>
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col-1">
                  <i className="fa fa-facebook-f"></i>
                </div>
                <div className="col-1">
                  <i className="fa fa-instagram"></i>
                </div>
                <div className="col-1">
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                </div>
                <div className="col-1">
                  <i className="fa fa-google" aria-hidden="true"></i>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h3>Liên hệ</h3>
              <p>Email: tsunyami@gmail.com</p>
              <p>SĐT : 035506605</p>
              <p>Địa chỉ: Thanh trì - Hà nội</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
