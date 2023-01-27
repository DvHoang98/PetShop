import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { addNewNews } from "../../store/actions/newsAction";

const NewsManage = () => {
  const [tieuDe, setTieuDe] = useState([]);
  const [noiDung, setNoiDung] = useState([]);
  const [hinhAnh, setHinhAnh] = useState(null);
  const [data,setData] = useState([]);
  const [totalPage, setTotalPage] = useState();
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();
  const lst = useSelector((state) => state.news.lst);
  const loginUser = useSelector((state) => state.login.lst);
  useEffect(() => {
      const getDataAndDispatch = async () => {
        const res = await axios.get(
          `http://localhost:8080/tin-tuc/getAll/page=${page}/size=${10}`
        );
        if (res.data.success == true) {
          setData(res.data.data.list);
          setTotalPage(res.data.data.totalPage);
        } else {
          alert("Có lỗi xảy ra ở server vui lòng load lại trang");
        }
      };
      getDataAndDispatch();
  },[]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let img = new FormData();
    img.append("img", hinhAnh);
    const imgRes = await axios.post(
      "http://localhost:8080/admin/tin-tuc/upload",
      img
    );
    const newData = {
      id: null,
      tieuDe: tieuDe,
      noiDung: noiDung,
      hinhAnh: imgRes.data.data,
      idNhanVien: 1
    };
    console.log(newData);
    axios
      .post("http://localhost:8080/admin/tin-tuc/add", newData)
      .then((res) => {
        setData({
          ...data,
          newData,
        });
        console.log(data);
        const action = addNewNews(data);
        dispatch(action);
      });
  };
  return (
    <>
      <section className="section1"></section>
      <br />
      <div className="container">
        <h1 className="center">Quản lý tin</h1>
      </div>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
          <div className="row">
            <div className="col-6">
              <div>
                <label>Tiêu đề</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Mã"
                  value={tieuDe}
                  onChange={(e) => setTieuDe(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Ảnh</label>
                <br />
                <input
                  type="file"
                  className="hinhAnh"
                  id="inputImage"
                  onChange={(e) => setHinhAnh(e.target.files[0])}
                  accept=".jpg, .jpeg, .png"
                />
              </div>
            </div>
            <div className="col-6">
              <div>
                <label>Nội dung</label>
                <textarea
                  className="form-control"
                  type="text"
                  placeholder="Nhập nội dung bài viết"
                  value={noiDung}
                  onChange={(e) => setNoiDung(e.target.value)}
                />
              </div>
            </div>
            <div className="center">
              <button type="submit" className="btn btn-primary">
                Thêm
              </button>
              <button className="btn btn-secondary">Sửa</button>
            </div>
          </div>
        </form>
        <table className="table table-striped table-inverse table-responsive">
          <thead className="thead-inverse">
            <tr>
              <th>STT</th>
              <th>Tiêu đề</th>
              <th>Nội dung</th>
              <th>#</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.length > 0 &&
              data.map((item, index) => {
                return (
                  <>
                    <tr>
                      <td>{index}</td>
                      <td>{item.tieuDe}</td>
                      <td>{item.noiDung}</td>
                      <td>
                        <input type="button" className="btn btn-danger" value="Xóa"/>
                      </td>
                    </tr>
                  </>
                );
              })}
          </tbody>
        </table>
    </>
  );
};
export default NewsManage;
