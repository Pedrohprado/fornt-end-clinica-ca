import { useEffect, useState } from 'react';
import { GoPerson } from 'react-icons/go';
import { BiBell } from 'react-icons/bi';
import { RiArrowLeftSLine } from 'react-icons/ri';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isPathName, setPathName] = useState<string>('home');
  const location = useLocation();

  useEffect(() => {
    if (location) {
      let path = location.pathname.replace('/', '');
      path = path.charAt(0).toUpperCase() + path.slice(1);
      setPathName(path);
    }
  }, [location]);
  return (
    <header className=' w-full h-[63px]  flex items-center justify-between px-5'>
      {isPathName === '/' ? (
        <div>logo</div>
      ) : (
        <Link
          to={'/'}
          className=' font-medium text-lg flex items-center justify-center text-center py-2
        '
        >
          <RiArrowLeftSLine size={20} />
          {isPathName}
        </Link>
      )}

      <nav className=' flex items-center justify-between w-1/4'>
        <button>
          <BiBell size={20} color='gray' />
        </button>
        <button className=' rounded-full  bg-[#4bbdff] p-2'>
          <GoPerson size={20} color='white' />
        </button>
      </nav>
    </header>
  );
};

export default Header;
