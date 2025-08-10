import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-slate-800 text-white p-4">
      <nav className="flex justify-between items-center container mx-auto">
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="hover:underline">
              Game List
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;