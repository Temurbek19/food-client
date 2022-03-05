import { useRef, useState } from 'react';

import './SittingsSidebar.scss';



const SittingsSidebar = () => {
    const [foodType, setFoodType] = useState('hotDishes');
    const imgRef = useRef(null);
    const textRef = useRef(null);
    const priceRef = useRef(null);
    const bowlRef = useRef(null);

    async function addFood(foodType) {
        let formData = new FormData();
        formData.append('img', imgRef.current.files[0]);
        formData.append('text', textRef.current.value);
        formData.append('price', priceRef.current.value);
        formData.append('bowl', bowlRef.current.value);
        formData.append('type', foodType);
        let response = await fetch('http://localhost:4500/foods', {
            method: 'POST',
            body: formData
        });
        if(response)
            window.location = '/settingsPage'
    }

    return(
        <div className="sittings-sidebar">
            <div className='new'>
                <select onChange={(e) => {
                        e.preventDefault();
                        setFoodType(e.target.value);
                    }}>
                        <option value='food'>Foods types</option>
                        <option value='hotDishes'>Hot dishses</option>
                        <option value='coldDishes'>Cold dishses</option>
                        <option value='coup'>Coup dishses</option>
                        <option value='grill'>Grill dishses</option>
                        <option value='appetizer'>Appetizer dishses</option>
                        <option value='dessert'>Dessert dishses</option>
                </select>
                <label className='label' htmlFor='food-file'>
                    Food image
                    <input ref={imgRef} className='file' id='food-file' type="file" placeholder='food img'/>
                </label>
                <input ref={textRef} type="text" placeholder='Food text' />
                <input ref={priceRef} type="text" placeholder='Food price'/>
                <input ref={bowlRef} type="number" placeholder='Food bowl'/>
                <button onClick={() => addFood(foodType)}>Add food</button>
            </div>
        </div>
    )
};

export default SittingsSidebar;