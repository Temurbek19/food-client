import BolakHeader from '../../containers/BolakHeader';
import BolakCard from '../../containers/BolakCard';
import BolakTable from '../../containers/BolakTable';
import BolakMost from '../../containers/BolakMost';
import BolakType from '../../containers/BolakType';

import './BolakPage.scss';

const BolakPage = () => {
    return (
        <div className="bolak-page">
            <div className="bolak-page-left">
                <BolakHeader/>
                <BolakCard/>
                <BolakTable/>
            </div>
            <div className="bolak-page-right">
                <BolakMost/>
                <BolakType/>
            </div>
        </div>
    )
};

export default BolakPage;