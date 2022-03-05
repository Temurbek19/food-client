import axios from 'axios';

const DishesQuery = (foodType = 'hotDishes', setDishes) => {
        axios.get(`http://localhost:4500/foods${foodType}`)
        .then(function (response) {
            setDishes(response.data);
        })
        .catch(function (error) {
            console.log(error);
        })
        .then(function () {
            // always executed
        });
};

export default DishesQuery;