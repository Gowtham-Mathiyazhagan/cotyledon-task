import React, { useEffect, useState } from "react";
// import fun from '../assets/images/fun.jpg'
import "../assets/css/category.css";

const Category = () => {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setDatas(json));
  }, []);
  console.log(datas);
  return (
    <section className="category-container">
      <h1 className="title">shop by category</h1>
      <div className="card-container">
        {datas.map((val) => {
       return   <div key={val.id} className="card">
            <figure className="card-img">
              <img src={val?.image} alt="" />
            </figure>
            <div className="detail">
              <h5>{val?.category}</h5>
              <h1>50-56% OFF</h1>
              <h5>shop now</h5>
            </div>
          </div>;
        })}
		{datas.map((val) => {
       return   <div key={val.id} className="card">
            <figure className="card-img">
              <img src={val?.image} alt="" />
            </figure>
            <div className="detail">
              <h5>{val?.category}</h5>
              <h1>50-56% OFF</h1>
              <h5>shop now</h5>
            </div>
          </div>;
        })}
      </div>
    </section>
  );
};

export default Category;
