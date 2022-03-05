import {
    DollarIcon,
    OrderIcon,
    UsersIcon,
    UpIcon,
    DownIcon
} from '../../assets/icon/IconBolakCard';

import './BolakCard.scss';

const BolakCard = () => {
    return(
        <div className="bolak-card">
            <div className="bolak-cards">
                <button>
                    <div className="bolak-card-top">
                        <h3><DollarIcon/></h3>
                        <h4>+32.40%</h4>
                        <h5><UpIcon/></h5>
                    </div>
                    <h1 className="bolak-card-price">$10,243.00</h1>
                    <h3 className="bolak-card-text">Total Revenue</h3>
                </button>
                <button>
                    <div className="bolak-card-top">
                        <h3><OrderIcon/></h3>
                        <h4>-12.40%</h4>
                        <h5 className="down-icon"><DownIcon/></h5>
                    </div>
                    <h1 className="bolak-card-price">23,456</h1>
                    <h3 className="bolak-card-text">Total Dish Ordered</h3>
                </button>
                <button>
                    <div className="bolak-card-top">
                        <h3><UsersIcon/></h3>
                        <h4>+2.40%</h4>
                        <h5><UpIcon/></h5>
                    </div>
                    <h1 className="bolak-card-price">1,234</h1>
                    <h3 className="bolak-card-text">Total Customer</h3>
                </button>
            </div>
        </div>
    )
};

export default BolakCard;