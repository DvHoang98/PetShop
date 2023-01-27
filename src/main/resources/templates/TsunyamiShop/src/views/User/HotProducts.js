import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { propTypes } from "react-bootstrap/esm/Image";


const HotProducts = (props) => {
  const [data, setData] = useState(props.lstData);
  const [error, setError] = useState(props.loading);
  const [loading, setLoading] = useState(props.error);
  let navigate = useNavigate();

  const handleDetail = (id) => {
    console.log(id);
  };

  return (
    <>
      <div className="row">
        {loading && <h1>loading...</h1>}
        {error && <h2>Error : Something went wrong</h2>}
        {props.lstData &&
          props.lstData.length > 0 &&
          props.lstData
            .reverse()
            .slice(0, 8)
            .map((item) => {
              return (
                <div className="col-3" key={item.id}>
                  <div
                    className="card"
                    style={{
                      border: "none",
                      padding: "20px",
                      height: "450px",
                      marginTop: "30px",
                    }}
                  >
                    <div>
                      <img

                        className="card-img-top"
                        src =  {window.location.origin +"/img/"+item.hinhAnh}
                        alt="image"
                        style={{ width: "100%", height: "250px" }}
                      />
                    </div>
                    <div className="card-body" style={{ height: "200px " }}>
                      <h4 className="card-title">{item.ten}</h4>
                      <p className="card-text">{item.gia}</p>
                    </div>
                    <div className="center">
                      <Link to={`/products/detail/${item.id}`}>
                        <a
                          type="button"
                          className="btn btn-primary center"
                          style={{ width: "70%" }}
                        >
                          Chi tiết
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
        <div className="center">
          <Link to={`/products`}>
            <a
              type="button"
              className="btn btn-info center"
              style={{width:"175px"}}
            >
              Xem thêm
            </a>
          </Link>
        </div>
      </div>
    </>
  );
};
export default HotProducts;
