import Avatar1 from '../../assets/images/Avatar1.png';
import Avatar2 from '../../assets/images/Avatar2.png';
import Avatar3 from '../../assets/images/Avatar3.png';
import Avatar4 from '../../assets/images/Avatar4.png';
import Avatar5 from '../../assets/images/Avatar5.png';

import './BolakTable.scss';

const BolakTable = () => {
    return(
        <div className="block-table">
            <div className="block-table-order">
                <h1>Order Report</h1>
                <button>
                    <span className="span1">
                        <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.1976 12.2271C16.927 12.2271 18.3329 13.6148 18.3329 15.3219C18.3329 17.028 16.927 18.4167 15.1976 18.4167C13.4683 18.4167 12.0624 17.028 12.0624 15.3219C12.0624 13.6148 13.4683 12.2271 15.1976 12.2271ZM15.1976 13.6787C14.279 13.6787 13.533 14.4151 13.533 15.3219C13.533 16.2277 14.279 16.9651 15.1976 16.9651C16.1162 16.9651 16.8623 16.2277 16.8623 15.3219C16.8623 14.4151 16.1162 13.6787 15.1976 13.6787ZM8.4308 14.5958C8.83667 14.5958 9.16608 14.921 9.16608 15.3216C9.16608 15.7223 8.83667 16.0474 8.4308 16.0474H2.40247C1.9966 16.0474 1.66719 15.7223 1.66719 15.3216C1.66719 14.921 1.9966 14.5958 2.40247 14.5958H8.4308ZM4.80174 2.58337C6.53112 2.58337 7.93698 3.97207 7.93698 5.67818C7.93698 7.38429 6.53112 8.77298 4.80174 8.77298C3.07334 8.77298 1.6665 7.38429 1.6665 5.67818C1.6665 3.97207 3.07334 2.58337 4.80174 2.58337ZM4.80174 4.03497C3.88411 4.03497 3.13707 4.77238 3.13707 5.67818C3.13707 6.58397 3.88411 7.32138 4.80174 7.32138C5.72035 7.32138 6.46642 6.58397 6.46642 5.67818C6.46642 4.77238 5.72035 4.03497 4.80174 4.03497ZM17.5979 4.95257C18.0038 4.95257 18.3332 5.27773 18.3332 5.67837C18.3332 6.07901 18.0038 6.40417 17.5979 6.40417H11.5686C11.1627 6.40417 10.8333 6.07901 10.8333 5.67837C10.8333 5.27773 11.1627 4.95257 11.5686 4.95257H17.5979Z" fill="white"/>
                        </svg>                    
                    </span>
                    <span className="span2">Filter Order</span>
                </button>
            </div>
            <div className="block-table-item">
                <h3 className="customer">Customer</h3>
                <h3 className="menu">Menu</h3>
                <h3 className="total">Total Payment</h3>
                <h3 className="status">Status</h3>
            </div>
            <div className="block-table-blocks">
                <div className="block-table-blocks-block">
                    <div className="avatar">
                        <img src={Avatar1} alt=""/>
                        <span>Eren Jaegar</span>
                    </div>
                    <h3>Spicy seasoned seafood noodles</h3>
                    <h4>$125</h4>
                    <button>Completed</button>
                </div>
                <div className="block-table-blocks-block">
                    <div className="avatar">
                        <img src={Avatar2} alt=""/>
                        <span>Reiner Braunn</span>
                    </div>
                    <h3>Salted Pasta with mushroom sauce</h3>
                    <h4>$145</h4>
                    <button className="preparing">Preparing</button>
                </div>
                <div className="block-table-blocks-block">
                    <div className="avatar">
                        <img src={Avatar3} alt=""/>
                        <span>Levi Ackerman</span>
                    </div>
                    <h3>Beef dumpling in hot and sour soup</h3>
                    <h4>$105</h4>
                    <button className="pending">Pending</button>
                </div>
                <div className="block-table-blocks-block">
                    <div className="avatar">
                        <img src={Avatar4} alt=""/>
                        <span>Historia Reiss</span>
                    </div>
                    <h3>Spicy seasoned seafood noodles</h3>
                    <h4>$115</h4>
                    <button>Completed</button>
                </div>
                <div className="block-table-blocks-block">
                    <div className="avatar">
                        <img src={Avatar5} alt=""/>
                        <span>Hanji Zoe</span>
                    </div>
                    <h3>Spicy seasoned seafood noodles</h3>
                    <h4>$245</h4>
                    <button>Completed</button>
                </div>
                <div className="block-table-blocks-block">
                    <div className="avatar">
                        <img src={Avatar1} alt=""/>
                        <span>Eren Jaegar</span>
                    </div>
                    <h3>Spicy seasoned seafood noodles</h3>
                    <h4>$125</h4>
                    <button>Completed</button>
                </div>
                <div className="block-table-blocks-block">
                    <div className="avatar">
                        <img src={Avatar2} alt=""/>
                        <span>Eren Jaegar</span>
                    </div>
                    <h3>Spicy seasoned seafood noodles</h3>
                    <h4>$125</h4>
                    <button>Completed</button>
                </div>
                <div className="block-table-blocks-block">
                    <div className="avatar">
                        <img src={Avatar3} alt=""/>
                        <span>Eren Jaegar</span>
                    </div>
                    <h3>Spicy seasoned seafood noodles</h3>
                    <h4>$125</h4>
                    <button>Completed</button>
                </div>
            </div>
        </div>
    )
};

export default BolakTable;