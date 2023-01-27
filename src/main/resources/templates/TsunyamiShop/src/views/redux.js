import { connect } from "react-redux";

const ReduxDemo = (props) => {
  let lstUser = props.dataRedux;
  const handleDeleteUser = (user) => {
    console.log(user);
    props.deleteUserRedux(user);
  };

  return (
    <>
    <br/>
    <br/>
    <br/>
    <br/>
      {lstUser &&
        lstUser.length > 0 &&
        lstUser.map((item, index) => {
          return (
            <div key={item.id}>
              {index + 1} - {item.name}{" "}
              <span onClick={() => handleDeleteUser(item)}> X</span>
            </div>
          );
        })}
      <h1>Home</h1>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    dataRedux: state.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteUserRedux: (userDelete) =>
      dispatch({ type: "DELETE_USER", payload: userDelete }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReduxDemo);
