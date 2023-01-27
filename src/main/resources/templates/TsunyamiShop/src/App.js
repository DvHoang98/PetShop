import "./App.css";
import Nav from "./views/Layout/Nav";
import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route, Link, Routes } from "react-router-dom";
import Home from "./views/User/Home";
import Introduce from "./views/User/Introduce";
import News from "./views/User/News";
import Contact from "./views/User/Contact";
import Products from "./views/User/Products";
import Cart from "./views/User/Cart";
import Signin from "./views/Login/Login";
import Footer from "./views/Layout/Footer";
import DemoDongSP from "./views/DemoDongSP";
import ProductManage from "./views/Admin/ProductManage";
import ProductDetail from "./views/User/ProductDetail";
import Login from "./views/Login/Login";
import NewsManage from "./views/Admin/NewsManage";
import NewsDetail from "./views/User/NewsDetail";

function App() {
  let [name, setName] = useState("tsunyami");
  const [address, setAddress] = useState("");
  const [todos, setTodos] = useState([
    { id: "todo1", title: "react" },
    { id: "todo2", title: "java" },
  ]);

  const handleEventClick = () => {
    let newTodo = { id: "abc", title: address };
    setTodos([...todos, newTodo]);
  };

  const handleOnChange = (event) => {
    setAddress(event.target.value);
    console.log(address);
  };

  const deleteData = (id) => {
    let currentTodos = todos;
    currentTodos = todos.filter((item) => item.id !== id);
    setTodos(currentTodos);
  };
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <Nav />
        </header>

        <Routes>
          <Route path="/home" element={<Home></Home>} />
          <Route path="/todo" element={<DemoDongSP />} />
          {/* <Route path="/user" element={<ListUser />} exact />
          <Route path="/user/:id" element={<DetailUser />} />
          <Route path="/user/addNew" element={<AddNewUser />} /> */}
          <Route path="/introduce" element={<Introduce />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} exact/>
          <Route path="/cart" element={<Cart />} />
          <Route path="/admin/products" element={<ProductManage />} />
          <Route path="/admin/news" element={<NewsManage/>} />
          <Route path="/products/detail/:id" element ={<ProductDetail/>}/>
          <Route path="/news/detail/:id" element ={<NewsDetail/>}/>
          <Route path="/login" element ={<Login/>}/>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
