import { useState } from 'react';
import axios from 'axios';
import OutsideClickHandler from 'react-outside-click-handler';

import '../main.scss';

const Dishes = ({ isAdded, setIsAdded, dishes }) => {
  const [active, setActive] = useState('');

  const AddOrder = async (e, key) => {
    e.preventDefault();
    let inputElements = document.getElementsByClassName('food_count_input');
    const response = await axios.post('http://localhost:4500/order', {
      foodId: Number(inputElements[key].id),
      count: Number(inputElements[key].value)
    });
    inputElements[key].value = '';
    if (response.data === 'order has added!') {
      setIsAdded(!isAdded);
      setActive('');
    }
  };

  return (
    <div className="hot-dishes">
      {dishes.map((item, key) => {
        return (
          <OutsideClickHandler onOutsideClick={() => setActive('')}>
            <div className="block-dishes" key={item.food_id} onClick={() => setActive(item.food_id)}>
              <div className="dishes">
                <img className="dishes-food" src={`http://localhost:4500/${item.food_img}`} alt="" />
                <h5 className="name">{item.food_text}</h5>
                <h5 className="prise">$ {item.food_price}</h5>
                <h6 className="bowls">{item.food_bowl} Bowls available</h6>
              </div>
              <form
                className={`dishes-modal ${active === item.food_id ? 'active' : ''}`}
                onSubmit={e => {
                  e.preventDefault();
                  AddOrder(e, key);
                }}
              >
                <h5 className="name">{item.food_text}</h5>
                <h5 className="price">$ {item.food_price}</h5>
                <input className="food_count_input" id={item.food_id} type="number" placeholder="food count" />
                <button className="added_order">Add order</button>
              </form>
            </div>
          </OutsideClickHandler>
        );
      })}
    </div>
  );
};

export default Dishes;
