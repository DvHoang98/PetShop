import axios from "axios";
import { Link } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { getAllSanPham } from "../../store/actions/sanPhamAction";
import MyPagination from "../MyPagination";

const Products = (props) => {
  const [ten, setTen] = useState([]);
  const [loai, setLoai] = useState([]);
  const [dongSp, setDongSp] = useState([]);

  const [data, setData] = useState([]);
  const [totalPage, setTotalPage] = useState();
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  let active = 1;
  let items = [];

  useEffect(() => {
    const getDataAPI = async () => {
      const res = await axios.get(
        `http://localhost:8080/san-pham/get/type=${loai}/class=${dongSp}/name=${ten}/page=${page}/size=${8}`
      );
      if (res.data.success == true) {
        setData(res.data.data.list);
        setTotalPage(res.data.data.totalPage);
      } else {
        alert("Có lỗi xảy ra ở server vui lòng load lại trang");
      }
    };
    getDataAPI();
  }, [page,ten,loai,dongSp]);

  const handleChangeLoai = (e) => {
    setLoai(e.target.value);
    setPage(1);
  };
  const handleChangeDongSp = (e) => {
    setDongSp(e.target.value);
    setPage(1);
  };
  const handleChangeName =(e)=>{
    setTen(e.target.value);
    setPage(1);
  }

  const handleFindByAttribute = async () => {

  };

  const handleChangePage = useCallback((page) => {
    setPage(page);
  },[]);


  return (
    <>
      <section className="section1"></section>
      <div className="container">
        <br />
        <h1>Danh sách sản phẩm</h1>
        <hr />
        <div className="row">
          <div className="col-3">
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                placeholder="Tìm kiếm"
                value={ten}
                onChange={handleChangeName}
              />
            </div>
            <br />
            <select
              className="btn btn-info dropCustom "
              value={loai}
              onChange={handleChangeLoai}
            >
              <option value="">Loại sản phẩm</option>
              <option value="1">Thú cưng</option>
              <option value="2">Phụ kiện</option>
              <option value="3">Thức ăn</option>
            </select>
            <br />
            <select
              className="btn btn-info dropCustom"
              value={dongSp}
              onChange={handleChangeDongSp}
            >
              <option value="">Dòng sản phẩm</option>
              <option value="1">Chó</option>
              <option value="2">Mèo</option>
              <option value="3">Động vật khác</option>
            </select>
            <button
              type="submit"
              className="btn btn-primary"
              style={{
                marginLeft: "10%",
                width: "80%",
              }}
              onClick={handleFindByAttribute}
            >
              Tìm
            </button>
          </div>
          <div className="col-9">
            <div className="row">
              {() => {
                return <h2>Không tìm thấy sản phẩm phù hợp</h2>;
              }}
              {data &&
                data.length > 0 &&
                data.map((item) => {
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
                            src={
                              window.location.origin + "/img/" + item.hinhAnh
                            }
                            alt=""
                            style={{ width: "100%", height: "250px" }}
                          />
                        </div>
                        <div className="card-body" style={{ height: "200px " }}>
                          <h4 className="card-title">{item.ten}</h4>
                          <p className="card-text">{item.gia}</p>
                        </div>
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
                  );
                })}
            </div>
            {/* Pagination */}
            <div className="text-center mt-3">
                {
                  totalPage>1&&(
                    <MyPagination total={totalPage}
                    current={page}
                    onChangePage={handleChangePage}/>
                  )
}
            </div>
            {/* Pagination End */}
          </div>
        </div>
      </div>
    </>
  );
};
export default Products;
