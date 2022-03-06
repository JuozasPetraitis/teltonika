import React from 'react';
//! Icons
import { ChartBarIcon } from '@heroicons/react/solid';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="container m-auto h-[6vh] bg-gradient-to-r from-[#00264c] to-[#0054A6]">
      <div className="m-auto flex h-full items-center gap-2 px-4 text-white sm:px-0 md:w-11/12">
        <ChartBarIcon className="w-6 md:w-8" />
        <Link to="/">
          <p className="font-MontserattItalic text-xl font-extrabold uppercase md:text-3xl">Teltonika</p>
        </Link>
      </div>
    </header>
  );
}
