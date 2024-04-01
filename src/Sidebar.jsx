import { links, social } from './data';
import { useGlobalContext } from './context';
import { FaTimes } from 'react-icons/fa';

function Sidebar() {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();
  console.log(isSidebarOpen);
  return (
    <aside className={isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}>
      <div className="sidebar-header">
        <h1>IU</h1>
        <button
          type="button"
          className="close-sidebar-btn"
          onClick={closeSidebar}
        >
          <FaTimes />
        </button>
      </div>
      <ul className="links">
        {links.map((link) => {
          const { id, url, text, icon } = link;
          return (
            <li key={id}>
              <a href={url}>
                {icon}
                {text}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="social">
        {social.map((link) => {
          const { id, url, icon } = link;
          return (
            <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
export default Sidebar;
