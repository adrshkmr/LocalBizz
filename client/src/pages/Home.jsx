import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import ProductCard from '../components/ProductCard';

function Home() {
  const [userData, setUserData] = useState(null);
  const [alldata, setAllData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const userDataFromStorage = localStorage.getItem("shop");
    if (userDataFromStorage) {
      setUserData(JSON.parse(userDataFromStorage));
    }
  }, []);

  useEffect(() => {
    if (userData) {
      axios
        .post("http://localhost:3000/home", { shop: userData.email })
        .then((res) => {
          setAllData(res.data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  }, [userData]); // Make the useEffect dependent on userData

  function handleClicked() {
    navigate("/addproduct");
  }

  return (
    <div className="p-3 h-full bg-gradient-to-r from-purple-500 to-pink-500">
      <div className="flex justify-between mb-8">
        <h2 className="text-5xl font-bold">{userData && userData.name}</h2>
        <button
          className="px-6 py-3 m-3 bg-blue-600 rounded"
          onClick={handleClicked}
        >
          Add Product
        </button>
      </div>

      <div>
        <h2 className="text-xl font-bold">Products</h2>
        <div className="flex flex-wrap justify-around">
          {alldata &&
            alldata.map((data) => (
              <div
                key={data._id}
                className="max-w-sm m-4 overflow-hidden bg-white rounded-lg shadow-lg"
              >
                <img
                  className="w-full h-64 bg-cover"
                  src={data.productimage}
                  alt={data.productname}
                />
                <div className="p-6">
                  <div className="mb-2 text-xl font-bold">
                    {data.productname}
                  </div>
                  <div className="mb-2 text-sm text-gray-600 font-bold">
                    Rs {data.productprice}
                  </div>
                  <div className="text-sm">{data.productdetails}</div>
                </div>
              </div>
            ))}
        </div>
        
      </div>
    </div>
  );
}

export default Home;
