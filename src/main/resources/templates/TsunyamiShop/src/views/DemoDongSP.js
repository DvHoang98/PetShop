import { useEffect,useState } from "react";
import { connect } from "react-redux";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { addNewDongSp } from "../store/actions/dongSpAction";
import { getAllDongSp } from "../store/actions/dongSpAction";
import axios from "axios";

const DemoDongSP = (props) => {

  const [data, setData] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const getDataAndDispatch =  async () =>{
      const res = await axios.get("https://6348f539a59874146b14659c.mockapi.io/cart")
      setData(res.data);

      const getDataAction = getAllDongSp(data);
      dispatch(getDataAction);
    }
    getDataAndDispatch();
  }, []);
  const dongSpList = useSelector((state) => state.dongSp.lst);

  console.log(data)


  return (
    <>
      <br />
      <br />
      <br />
      <br />
      {data &&
        data.length > 0 &&
        data.map((item, index) => {
          return (
            <div key={item.id}>
              {index + 1} - {item.quantity} <span> X</span>
            </div>
          );
        })}
      <h1>Home</h1>
      {dongSpList &&
        dongSpList.length > 0 &&
        dongSpList.map((item, index) => {
          return (
            <div key={item.id}>
              {index + 1} - {item.quantity} <span> X</span>
            </div>
          );
        })}

    </>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     dataDongSP: state,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     deleteUserRedux: (userDelete) =>
//       dispatch({ type: "DELETE_USER", payload: userDelete }),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(DemoDongSP);
export default DemoDongSP;
