import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import {
  getAllSanPham,
  addNewSanPham,
} from "../../store/actions/sanPhamAction";

const ProductManage = (props) => {
  const [ma, setMa] = useState([]);
  const [ten, setTen] = useState([]);
  const [gia, setGia] = useState([]);
  const [soLuong, setSoLuong] = useState([]);
  const [trangThai, setTrangThai] = useState([]);
  const [dongSP, setDongSP] = useState([]);
  const [loai, setLoai] = useState([]);
  const [hinhAnh, setHinhAnh] = useState(null);
  const [moTa, setMoTa] = useState([]);

  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const lst = useSelector((state) => state.sanPham.lst);
  useEffect(() => {
    if (lst.length === 0) {
      const getDataAndDispatch = async () => {
        const res = await axios.get("http://localhost:8080/san-pham/getAll");
        setData(res.data);
        const getDataAction = getAllSanPham(data);
        dispatch(getDataAction);
      };
      getDataAndDispatch();
    } else {
      setData(lst);
    }
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    let img = new FormData();
    img.append("img", hinhAnh);
    const imgRes = await axios.post(
      "http://localhost:8080/admin/san-pham/upload",
      img
    );
    const newData = {
      id: null,
      ma: ma,
      ten: ten,
      gia: gia,
      soLuong: soLuong,
      trangThai: 1,
      idDongSp: dongSP,
      idLoai: loai,
      hinhAnh: imgRes.data.data,
      moTa: moTa,
    };
    console.log(newData);
    axios
      .post("http://localhost:8080/admin/san-pham/add", newData)
      .then((res) => {
        setData({
          ...data,
          newData,
        });
        console.log(data);
        const action = addNewSanPham(data);
        dispatch(action);
      });
  };

  return (
    <>
      <section className="section1"></section>
      <br />
      <div className="container">
        <h1 className="center">Qu???n l?? s???n ph???m</h1>
        <form onSubmit={handleSubmit} enctype="multipart/form-data">
          <div className="row">
            <div className="col-6">
              <div>
                <label>M??</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="M??"
                  value={ma}
                  onChange={(e) => setMa(e.target.value)}
                />
              </div>
              <div>
                <label>T??n</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="T??n"
                  value={ten}
                  onChange={(e) => setTen(e.target.value)}
                />
              </div>
              <div>
                <label>Gi??</label>
                <input
                  className="form-control"
                  type="number"
                  placeholder="Price"
                  value={gia}
                  onChange={(e) => setGia(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>???nh</label>
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
                <label>S??? l?????ng</label>
                <input
                  className="form-control"
                  type="number"
                  placeholder="Quantity"
                  value={soLuong}
                  onChange={(e) => setSoLuong(e.target.value)}
                />
              </div>
              <div>
                <label>M?? t???</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Describe"
                  value={moTa}
                  onChange={(e) => setMoTa(e.target.value)}
                />
              </div>
              <div>
                <label>Th??? lo???i</label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  id="type"
                  value={loai}
                  onChange={(e) => setLoai(e.target.value)}
                >
                  <option>Ch???n th??? lo???i</option>
                  <option value="1">Th?? c??ng</option>
                  <option value="2">????? ??n</option>
                  <option value="3">Ph??? ki???n</option>
                </select>
              </div>
              <div>
                <label>D??ng s???n ph???m</label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  onChange={(e) => setDongSP(e.target.value)}
                >
                  <option>Ch???n d??ng s???n ph???m</option>
                  <option value="1">Ch??</option>
                  <option value="2">M??o</option>
                  <option value="3">Kh??c</option>
                </select>
              </div>
            </div>
            <div className="center">
              <button type="submit" className="btn btn-primary">
                Th??m
              </button>
              <button className="btn btn-secondary">S???a</button>
            </div>
          </div>
        </form>

        <table className="table table-striped table-inverse table-responsive">
          <thead className="thead-inverse">
            <tr>
              <th>STT</th>
              <th>ID</th>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Gi???ng</th>
              <th>Lo???i</th>
              <th>D??ng s???n ph???m</th>
              <th>Function</th>
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
                      <td>{item.ma}</td>
                      <td>{item.ten}</td>
                      <td>{item.gia}</td>
                      <td>{item.soLuong}</td>
                      <td>
                        {item.trangThai == 1 ? "Hoat dong" : "Khong hoat dong"}
                      </td>
                    </tr>
                  </>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default ProductManage;
