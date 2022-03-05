import Circle from '../../assets/images/Circle.png';
import Ellipse1 from '../../assets/images/Ellipse1.png';
// import Ellipse2 from '../../assets/images/Ellipse2.png';
import Ellipse3 from '../../assets/images/Ellipse3.png';

import './BolakType.scss';

const TypeArr = [
    {
        imgLink: Ellipse1,
        name: 'Dine In',
        text: '200 customers'
    },
    {
        imgLink: Ellipse3,
        name: 'To Go',
        text: '122 customers'
    },
    {
        imgLink: Ellipse3,
        name: 'Delivery',
        text: '264 customers'
    }
];

const BolakType = () => {
    return(
        <div className="bolak-type">
            <div className="bolak-type-top">
                <h1>Most Type of Order</h1>
                <select name="" id="">
                    <option value="">Today</option>
                    <option value="">Today</option>
                    <option value="">Today</option>
                </select>
            </div>
            <div className="bolak-type-bottom">
                <img src={Circle} alt=""/>
                <div className="bolak-type-bottom-right">
                    {
                        TypeArr.map(item => {
                            return(
                                <div>
                                    <img src={item.imgLink} alt=""/>
                                        <div className="customers">
                                            <h5>{item.name}</h5>
                                            <h6>{item.text}</h6>
                                        </div>
                                    </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
};

export default BolakType;