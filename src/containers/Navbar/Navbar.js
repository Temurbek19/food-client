import { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import qs from 'query-string';

import NavbarBtn from '../../components/NavbarBtn';

import DishesQuery from '../../dishes/dishesQuery';

import './Navbar.scss';

const Navbar = ({setDishes}) => {
    const history = useHistory();
    const location = useLocation();
    const {type = 'hotDishes'} = qs.parse(location.search, {ignoreQueryPrifex: true});

    useEffect(()=> {
        DishesQuery(type, setDishes);
    }, [type]);

    return(
        <div className="navbar">
            <div onClick={() => {
                DishesQuery(type, setDishes);
                history.push(`/?type=hotDishes`);
            }} className="link">
                <NavbarBtn
                    title="Hot Dishes"
                    active={type === 'hotDishes'}
                />
            </div>
            <div onClick={() => {
                DishesQuery(type, setDishes);
                history.push(`/?type=coldDishes`)
            }} className="link">
                <NavbarBtn
                    title="Cold Dishes"
                    active={type === 'coldDishes'}
                />
            </div>
            <div onClick={() => {
                DishesQuery(type, setDishes);
                history.push(`/?type=soup`)
            }} className="link">
                <NavbarBtn
                    title="Soup"
                    active={type === 'soup'}
                />
            </div>
            <div to="/" onClick={() => {
                DishesQuery(type, setDishes);
                history.push(`/?type=grill`)
            }} className="link">
                <NavbarBtn
                    title="Grill"
                    active={type === 'grill'}
                />
            </div>
            <div to="/" onClick={() => {
                DishesQuery(type, setDishes);
                history.push(`/?type=appetizer`)
            }} className="link">
                <NavbarBtn
                    title="Appetizer"
                    active={type === 'appetizer'}
                />
            </div>
            <div to="/" onClick={() => {
                DishesQuery(type, setDishes);
                history.push(`/?type=dessert`)
            }} className="link">
                <NavbarBtn
                    title="Dessert"
                    active={type === 'dessert'}
                />
            </div>
        </div>
    ) 
};

export default Navbar;