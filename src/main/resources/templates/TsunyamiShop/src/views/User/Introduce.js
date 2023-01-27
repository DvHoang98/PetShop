
const Introduce = () => {
  return (
    <>
      <section className="section1"></section>
      <div className="container">
        <div className="center">
          <h1>Tsunyami Pet Shop</h1>
          <img src={window.location.origin +"/img/Bell.png"} alt="" />
        </div>
        <div>
          <img src={window.location.origin +"/img/banner2.jpg"} alt="" width="100%" />
        </div>
        <br />
        <div
          className="row"
          style={{backgroundColor: "skyblue", paddingBottom: "50px"}}
        >
          <div className="col-4 center">
            <p>
              <strong style={{color: "white"}}>TSUNYAMI Take Care Of</strong>
            </p>
            <br />
            <p>
              Dịch vụ chăm sóc thú nuôi với tác phong chuyên nghiệp các bạn hoàn
              toàn có thể yên tâm khi giao vật nuôi của các bạn cho chúng
              tôi.Chúng tôi rất mong được phục vụ quý khách.
            </p>
            <button className="btn btn-primary">Click me!!!</button>
          </div>
          <div className="col-4 center">
            <p>
              <strong style={{color:" white"}}>TSUNYAMI Pet Shop</strong>
            </p>
            <br />
            <p>
              Bạn là người yêu quý động vật,hãy đến Tsunyami shop nơi cung cấp
              các loại thú nuôi.Với đa dạng vật nuôi rất mong các bạn ghé thăm
              và tìm kiếm được con vật bạn yêu thích,rất mong được phục vụ quý
              khách.
            </p>
            <button className="btn btn-primary">Click me!!!</button>
          </div>
          <div className="col-4 center">
            <p>
              <strong style={{color: "white"}}>TSUNYAMI Experience</strong>
            </p>
            <br />
            <p>
              Với 10 năm kinh nghiệm chăm sóc các loại pet, được sự yêu quý và
              tin tưởng của mọi người. Tsunyami luôn đem đến cho người sử dụng
              cảm giác tin tưởng với dịch vụ chất lượng tốt nhất
            </p>
            <button className="btn btn-primary">Click me!!!</button>
          </div>
        </div>
      </div>
      <br/>
    </>
  );
};
export default Introduce;
