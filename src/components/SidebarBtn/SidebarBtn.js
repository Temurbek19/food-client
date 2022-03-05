import './SidebarBtn.scss';

const SidebarBtn = ({icon, active}) => {
    return (
        <button className={`sidebar-btn ${active ? 'active' : ''}`}>
                <div className="btn-icon">{icon}</div>
        </button>
    )
}

export default SidebarBtn;