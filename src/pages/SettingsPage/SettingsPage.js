import SittingsSidebar from '../../containers/Sittings/SittingsSidebar';
import SittingsTable from '../../containers/Sittings/SittingsTable';

import './SettingsPage.scss';

const SettingsPage = () => {
    return (
        <div className="sittings-page">
            <h1>Sittings</h1>
            <div className="sittings-page-block">
                <SittingsSidebar/>
                <SittingsTable/>
            </div>
        </div>
    )
};

export default SettingsPage;