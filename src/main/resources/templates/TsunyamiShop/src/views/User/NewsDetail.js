import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import axios from "axios";

const NewsDetail = () => {
  let { id } = useParams();
  let navigate = useNavigate();
  const [newsDetail, setNewsDetail] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(
        `http://localhost:8080/tin-tuc/getDetail/id=${id}`
      );
      setNewsDetail(res.data.data);
      console.log(newsDetail);
    };
    getData();
  }, []);

  return (
    <>
    <section className="section1"></section>
    <div className="container">
      {newsDetail && (
        <>
          <h1 className="center">{newsDetail.tieuDe}</h1>
          <br />
          <div className="center">
            <img
              className="card-img-top"
              src={window.location.origin + "/img/" + newsDetail.hinhAnh}
              alt=""
              style={{ width: "70%", height: "400px" }}
            />
          </div>
          <br/>
          <div>
            <p>{newsDetail.noiDung}</p>
          </div>
        </>
      )}
      </div>
    </>
  );
};
export default NewsDetail;
