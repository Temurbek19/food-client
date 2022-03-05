import { useState } from 'react';
import HeaderTop from '../../containers/HeaderTop';
import Navbar from '../../containers/Navbar';
import Orders from '../../containers/Orders';

import Dishes from '../../dishes/Dishes/Dishes';

import './HomePage.scss';

const HomePage = () => {
  const [dishes, setDishes] = useState([]);
  const [isAdded, setIsAdded] = useState(false);
  return (
    <div className="home-page">
      <div className="home-page-top">
        <HeaderTop />
        <div className="">
          <Navbar setDishes={setDishes} />
          <div className="choose-dishes">
            <h1>Choose dishes</h1>
            <select name="" id="">
              <option value="">Dine In</option>
              <option value="">Salom</option>
              <option value="">Salom</option>
            </select>
          </div>
          <Dishes {...{ setIsAdded, dishes, isAdded }} />
        </div>
      </div>
      <Orders {...{ isAdded }} />
    </div>
  );
};

export default HomePage;
