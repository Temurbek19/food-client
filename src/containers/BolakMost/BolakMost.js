import Food1 from '../../assets/images/Image1.png';
import Food2 from '../../assets/images/Image2.png';
import Food3 from '../../assets/images/Image3.png';
import Food4 from '../../assets/images/Image4.png';
import Food5 from '../../assets/images/Image5.png';

import './BolakMost.scss';

const BolakMostScroll = [
    {
        imgLink: Food1,
        text: 'Spicy seasoned seafood noodles',
        ordered: '200 dishes ordered'
    },
    {
        imgLink: Food2,
        text: 'Salted pasta with mushroom sauce',
        ordered: '120 dishes ordered'
    },
    {
        imgLink: Food3,
        text: 'Beef dumpling in hot and sour soup',
        ordered: '80 dishes ordered'
    },
    {
        imgLink: Food4,
        text: 'Spicy seasoned seafood noodles',
        ordered: '170 dishes ordered'
    },
    {
        imgLink: Food5,
        text: 'Beef dumpling in hot and sour soup',
        ordered: '80 dishes ordered'
    }
]

const BolakMost = () => {
    return(
        <div className="bolak-most">
            <div className="bolak-most-top">
                <h1>Most Ordered</h1>
                <select name="" id="">
                    <option value="">Today</option>
                    <option value="">Today</option>
                    <option value="">Today</option>
                </select>
            </div>
            <div className="bolak-most-scroll">
                {
                    BolakMostScroll.map(item => {
                        return(
                            <div className="bolak-most-scroll-item">
                                <img src={item.imgLink} alt=""/>
                                <div>
                                    <h4>{item.text}</h4>
                                    <h5>{item.ordered}</h5>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <button className="bolak-most-btn">View All</button>
        </div>
    )
};

export default BolakMost;