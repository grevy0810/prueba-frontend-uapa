import { Menu } from '@headlessui/react';

const Header = () => (
  <header className="flex justify-between items-center p-4 bg-white shadow-md">
    <h1 className="text-lg font-bold">Figma Land</h1>
    <Menu as="nav" className="relative">
      <Menu.Button className="p-2 bg-blue-500 text-white rounded">Menu</Menu.Button>
      <Menu.Items className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg">
        <Menu.Item>
          {({ active }) => (
            <a
              href="#"
              className={`block px-4 py-2 ${active ? 'bg-gray-100' : ''}`}
            >
              Home
            </a>
          )}
        </Menu.Item>
        {/* Agrega más enlaces */}
      </Menu.Items>
    </Menu>
  </header>
);

export default Header;
