import React from 'react';

export default function Footer() {
  return (
    <footer className="container m-auto flex h-[4vh] w-full items-center justify-center bg-gradient-to-r from-[#00264c] to-[#0054A6] text-white">
      <p>Copyright © {new Date().getFullYear()} Labs Inc.</p>
    </footer>
  );
}
