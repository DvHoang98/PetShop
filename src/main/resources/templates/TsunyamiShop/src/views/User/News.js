import useFetch from "../../ultis/useFetch";
import MyPagination from "../MyPagination";
import { useDispatch, useSelector } from "react-redux/es/exports";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";

const News = () => {
  const [data, setData] = useState([]);
  const [totalPage, setTotalPage] = useState();
  const [page, setPage] = useState(1);

  const lst = useSelector((state) => state.news.lst);
  useEffect(() => {
    const getDataAndDispatch = async () => {
      const res = await axios.get(
        `http://localhost:8080/tin-tuc/getAll/page=${page}/size=${10}`
      );
      if (res.data.success == true) {
        setData(res.data.data.lst);
        setTotalPage(res.data.data.totalPage);
      } else {
        alert("Có lỗi xảy ra ở server vui lòng load lại trang");
      }
      console.log(data);
    };
    getDataAndDispatch();
  }, []);

  const handleChangePage = useCallback((page) => {
    setPage(page);
  }, []);
  return (
    <>
      <section className="section1"></section>
      <div className="container">
        <h1>Tin tức</h1>
        <hr />
        <div className="row">
          <div className="col-3">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Tìm kiếm"
              />
              <button className="btn btn-primary" type="button">
                <i className="fa fa-search" aria-hidden="true"></i>
              </button>
            </div>
            <br />
            <h5>Bài viết mới</h5>
            <br />
            {data &&
              data.length > 0 &&
              data.slice(0, 4).map((item) => {
                return (
                  <>
                    <div style={{ border: "1px" }}>
                      <ul style={{ listStyle: "none" }}>
                        <li>
                          <Link to={`/news/detail/${item.id}`}>
                            <a
                              style={{
                                width: "100%",
                                textDecoration: "none",
                              }}
                            >
                              {item.tieuDe}
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </>
                );
              })}
          </div>
          <div className="col-9">
            {/* loading notice */}
            <div className="row">
              {data &&
                data.length > 0 &&
                data.slice(0, 6).map((item) => {
                  return (
                    <div className="col-4">
                      <div
                        className="card text-left"
                        style={{ height: "300px", marginTop: "20px" }}
                      >
                        <div className="card-body">
                          <Link to={`/news/detail/${item.id}`}>
                            <h4 className="card-title">
                              <a
                                style={{
                                  width: "100%",
                                  textDecoration: "none",
                                }}
                              >
                                {item.tieuDe}
                              </a>
                            </h4>
                          </Link>
                          {/* <h4 className="card-title">
                            <a href="" style={{ textDecoration: "none" }}>
                              {item.tieuDe}
                            </a>
                          </h4> */}
                          <img
                            className="card-img-top"
                            src={
                              window.location.origin + "/img/" + item.hinhAnh
                            }
                            alt=""
                            style={{ width: "100%", height: "200px" }}
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
            {/* Pagination */}
            <div className="text-center mt-3">
              {totalPage > 1 && (
                <MyPagination
                  total={totalPage}
                  current={page}
                  onChangePage={handleChangePage}
                />
              )}
            </div>
            {/* Pagination End */}
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
