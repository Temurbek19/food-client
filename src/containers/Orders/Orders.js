import { useState, useEffect } from 'react';
import axios from 'axios';

import DaleteIcon from '../../assets/icon/iconDalate';

import './Orders.scss';

let subTotal = 0;

const Orders = ({ isAdded }) => {
  const [data, setData] = useState({
    data: []
  });

  useEffect(() => {
    axios
      .get('http://localhost:4500/orders')
      .then(function (response) {
        const dataOrders = response.data;
        subTotal = dataOrders.reduce((prev, curr) => prev + curr.food_price * curr.count, 0);
        setData({
          data: dataOrders.reverse()
        });
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }, [isAdded]);

  const DeleteOrder = async (e, id) => {
    e.preventDefault();
    const response = await axios.delete(`http://localhost:4500/order${id}`);
    if (response)
      setData({
        data: data.data.filter(e => e.order_id !== id)
      });
  };

  return (
    <div className="orders">
      <h1 className="orders-id">Orders #{data.data.length}</h1>
      <div className="orders-item">
        <div className="orders-item-left">
          <h4 className="orders-item-left-item iqp">Item</h4>
          <h4 className="orders-item-left-qty iqp">Qty</h4>
        </div>
        <div className="orders-item-right">
          <h4 className="orders-item-right-price iqp">Price</h4>
        </div>
      </div>
      <div className="orders-main">
        {data.data.map(item => (
          <div className="orders-main-main" key={item.order_id}>
            <div className="orders-main-main-left">
              <div className="orders-main-main-left-top">
                <div className="orders-main-main-left-top-left">
                  <div className="">
                    <h5>{item.food_text}</h5>
                    <h6>${item.food_price}</h6>
                  </div>
                </div>
                <div className="orders-main-main-left-top-right">
                  <span>{item.count}</span>
                </div>
              </div>
              <div className="orders-main-main-left-bottom">
                <input type="text" placeholder="Please, just a little bit spicy only." />
              </div>
            </div>
            <div className="orders-main-main-right">
              <h4>$ {(item.count * item.food_price).toFixed(2)}</h4>
              <button onClick={e => DeleteOrder(e, item.order_id)}>
                <DaleteIcon />
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="orders-bottom">
        <div className="orders-bottom-top">
          <h4>Discount</h4>
          <h3>$ 0</h3>
        </div>
        <div className="orders-bottom-top">
          <h4>Sub total</h4>
          <h3>$ {subTotal.toFixed(2)}</h3>
        </div>
        <button>Continue to Payment</button>
      </div>
    </div>
  );
};

export default Orders;
