const BuyHistory = () => {
  return (
    <>
      <section className="section1"></section>
      <br />
      <div className="container">
        <h1 className="center">Lịch sử mua hàng</h1>
        <table className="table table-striped table-inverse table-responsive">
          <thead className="thead-inverse">
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Image</th>
            </tr>
          </thead>
          <tbody>
            <tr ng-repeat="cart in history">
              <td></td>
              <td></td>
              <td></td>
              <td>
                <img
                  src="../img/{{cart.product.image}}"
                  alt=""
                  style="width: 60px; height: 60px"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default BuyHistory;
