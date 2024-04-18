'use client';
import Image from 'next/image';
import { ImagenAvatar } from '../ImagenAvatar';
import Link from 'next/link';
import {
  CalendarDaysIcon,
  DevicePhoneMobileIcon,
  UserCircleIcon,
  DocumentTextIcon,
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { useState } from 'react';

const links = [
  { name: 'Reserva de turnos', href: '/dashboard', icon: CalendarDaysIcon },
  { name: 'Mis consultas', href: '/dashboard/misConsultas', icon: DocumentTextIcon },
  { name: 'Perfil', href: '/dashboard/profile', icon: UserCircleIcon },
  { name: 'Atención virtual', href: '/dashboard/atencionVirtual', icon: DevicePhoneMobileIcon },
];

export const Navbar = () => {
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);

  const toggleNavbar = () => {
    setIsNavbarVisible(!isNavbarVisible);
  };

  return (
    <div
      className={`flex-col transition-transform duration-0 transform ${
        isNavbarVisible ? 'translate-x-0' : '-translate-x-80 w-1'
      }`}>
      <div
        className={`shadow-2xl rounded-xl w-[332px] h-[40px] bg-white  p-2 ml-6 -mt-60 mb-3 items-center justify-end hidden md:flex`}>
        <button onClick={toggleNavbar}>
          <Bars3Icon
            className={`w-6 hover:text-white rounded hover:bg-mlt-600 transition-colors duration-300 ${
              isNavbarVisible ? 'hidden' : ''
            }`}
          />
        </button>
        <button onClick={toggleNavbar}>
          <XMarkIcon
            className={`w-6 hover:text-white rounded hover:bg-mlt-600 transition-colors duration-300 ${
              isNavbarVisible ? '' : 'hidden '
            }`}
          />
        </button>
      </div>
      <section
        className={`flex-col rounded-xl w-[300px] h-[500px] mr-10 overflow-hidden hidden relative p-4 ml-6 bg-white shadow-2xl box-content md:flex transition-transform duration-0 transform 
            ${isNavbarVisible ? 'translate-x-0' : '-translate-x-96'}`}>
        <header>
          <Image src="/Medilatam.svg" alt="logo de la aplicación web" height={150} width={500} />
        </header>
        <div className="flex flex-col space-y-2 items-center mt-4">
          <ImagenAvatar imagen={'/imageProfile/avatar.png'} width={130} height={130} />
          <div className="flex space-x-10 pb-4  border-b-2">
            <a
              className="text-white bg-mlt-600 hover:bg-mlt-800 transition-colors focus:outline-none font-medium rounded-full text-sm text-center p-2 w-24"
              href="/auth">
              Login
            </a>
            <a
              className="text-white bg-mlt-600 hover:bg-mlt-800 transition-colors focus:outline-none font-medium rounded-full text-sm text-center p-2 w-24"
              href="/auth/register">
              Registro
            </a>
          </div>
        </div>
        <nav className="flex flex-col space-x-0 -space-y-2 w-full mt-2">
          {links.map((link) => {
            const LinkIcon = link.icon;
            return (
              <Link
                key={link.name}
                href={link.href}
                className="flex h-[48px] grow items-center justify-start gap-2 rounded-md px-2 text-sm font-medium hover:bg-mlt-600 group hover:text-white">
                <LinkIcon className="w-6" />
                <p>{link.name}</p>
              </Link>
            );
          })}
        </nav>
      </section>
    </div>
  );
};
