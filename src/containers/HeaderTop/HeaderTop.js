import './HeaderTop.scss';

const HeaderTop = () => {
    return(
        <div className="header-top">
            <div className="header-top-left">
                <h1>Jaegar Resto</h1>
                <h5>Tuesday, 2 Feb 2021</h5>
            </div>
            <div className="header-top-right">
                <input type="text" placeholder="Search for food, coffe, etc.."/>
            </div>
        </div>
    )
};

export default HeaderTop;