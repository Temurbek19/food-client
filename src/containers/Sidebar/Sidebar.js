import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import SidebarBtn from '../../components/SidebarBtn';

import {
    HomeIcon,
    HourIcon,
    SettingsIcon,
    AlertIcon,
    BolakIcon,
    OutIcon,
    MassageIcon,
    LogoIcon
} from '../../assets/icon/icon';

import './Sidebar.scss';

const Sidebar = () => {

    const [activePage, setActivePage] = useState('homePage');

    return (
        <div className="sidebar">

            <div className="logo-icon">
                <LogoIcon/>
            </div>

            <NavLink to="/" exact onClick={() => setActivePage('homePage')} className="link">
                <SidebarBtn
                    icon={<HomeIcon/>}
                    active={activePage === 'homePage'}
                />
            </NavLink>
            <NavLink to="/settingsPage" exact onClick={() => setActivePage('settingsPage')} className="link">
                <SidebarBtn
                    icon={<SettingsIcon/>}
                    active={activePage === 'settingsPage'}
                />
            </NavLink>
            <NavLink to="/bolakPage" exact onClick={() => setActivePage('bolakPage')} className="link">
                <SidebarBtn
                    icon={<BolakIcon/>}
                    active={activePage === 'bolakPage'}
                />
            </NavLink>
            <NavLink to="/hourPage" exact onClick={() => setActivePage('huorPage')} className="link">
                <SidebarBtn
                    icon={<HourIcon/>}
                    active={activePage === 'huorPage'}
                />
            </NavLink>
            <NavLink to="/massagePage" exact onClick={() => setActivePage('massagePage')} className="link">
                <SidebarBtn
                    icon={<MassageIcon/>}
                    active={activePage === 'massagePage'}
                />
            </NavLink>
            <NavLink to="/alertPage" exact onClick={() => setActivePage('alertPage')} className="link">
                <SidebarBtn
                    icon={<AlertIcon/>}
                    active={activePage === 'alertPage'}
                />
            </NavLink>
            <NavLink to="/outPage" exact onClick={() => setActivePage('outPage')} className="link">
                <SidebarBtn
                    icon={<OutIcon/>}
                    active={activePage === 'outPage'}
                />
            </NavLink>
        </div>
    )
}

export default Sidebar;