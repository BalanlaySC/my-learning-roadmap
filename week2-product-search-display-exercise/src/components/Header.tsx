import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <nav className="flex justify-between items-center container mx-auto">
        <Link to="/" className="text-xl font-bold">
          My Store
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="hover:underline">
              Products
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:underline">
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;