import { useState, useEffect } from 'react';
import axios from 'axios';

import './SittingsTable.scss';

const SittingsTable = () => {
  const [getFood, setGetFood] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:4500/foods')
      .then(function (response) {
        setGetFood(response.data.reverse());
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }, []);

  const DeleteFood = async e => {
    e.preventDefault();
    const id = e.target.id;
    const response = await axios.delete(`http://localhost:4500/foods${id}`);
    const foodId = Number(await response.data);
    setGetFood(getFood.filter(item => item.food_id !== foodId));
  };

  return (
    <div className="sittings-table">
      <div className="sittings-table-top">
        <h1>Products Management</h1>
        <button>
          <span>
            <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M15.1976 12.2271C16.927 12.2271 18.3329 13.6148 18.3329 15.3219C18.3329 17.028 16.927 18.4167 15.1976 18.4167C13.4683 18.4167 12.0624 17.028 12.0624 15.3219C12.0624 13.6148 13.4683 12.2271 15.1976 12.2271ZM15.1976 13.6787C14.279 13.6787 13.533 14.4151 13.533 15.3219C13.533 16.2277 14.279 16.9651 15.1976 16.9651C16.1162 16.9651 16.8623 16.2277 16.8623 15.3219C16.8623 14.4151 16.1162 13.6787 15.1976 13.6787ZM8.4308 14.5958C8.83667 14.5958 9.16608 14.921 9.16608 15.3216C9.16608 15.7223 8.83667 16.0474 8.4308 16.0474H2.40247C1.9966 16.0474 1.66719 15.7223 1.66719 15.3216C1.66719 14.921 1.9966 14.5958 2.40247 14.5958H8.4308ZM4.80174 2.58337C6.53112 2.58337 7.93698 3.97207 7.93698 5.67818C7.93698 7.38429 6.53112 8.77298 4.80174 8.77298C3.07334 8.77298 1.6665 7.38429 1.6665 5.67818C1.6665 3.97207 3.07334 2.58337 4.80174 2.58337ZM4.80174 4.03497C3.88411 4.03497 3.13707 4.77238 3.13707 5.67818C3.13707 6.58397 3.88411 7.32138 4.80174 7.32138C5.72035 7.32138 6.46642 6.58397 6.46642 5.67818C6.46642 4.77238 5.72035 4.03497 4.80174 4.03497ZM17.5979 4.95257C18.0038 4.95257 18.3332 5.27773 18.3332 5.67837C18.3332 6.07901 18.0038 6.40417 17.5979 6.40417H11.5686C11.1627 6.40417 10.8333 6.07901 10.8333 5.67837C10.8333 5.27773 11.1627 4.95257 11.5686 4.95257H17.5979Z"
                fill="white"
              />
            </svg>
          </span>
          <h5>Manage Categories</h5>
        </button>
      </div>
      <div className="sittings-table-blocks">
        {getFood.map(item => {
          return (
            <div key={item.food_id} className="wrapper">
              <div className="sittings-table-blocks-block">
                <img src={`http://localhost:4500/${item.food_img}`} alt="" />
                <h4>{item.food_text}</h4>
                <h5>$ {item.food_price}</h5>
                <div>
                  {/* <button className='btn-edit'>Edit</button> */}
                  <button className="btn-delete" id={item.food_id} onClick={DeleteFood}>
                    Delete
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SittingsTable;
