import { useGlobalContext } from './context';
import { FaBars } from 'react-icons/fa';

function Home() {
  const { openModal, openSidebar } = useGlobalContext();

  return (
    <main>
      <button type="button" className="sidebar-toggle" onClick={openSidebar}>
        <FaBars />
      </button>

      <button type="button" className="btn" onClick={openModal}>
        Show Model
      </button>
    </main>
  );
}
export default Home;
