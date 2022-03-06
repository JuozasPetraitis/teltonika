import React from 'react';

export default function Error404() {
  return (
    <section className="flex h-full w-full flex-col items-center justify-center gap-8 px-4 py-8 lg:text-2xl">
      <div className="flex flex-col items-center uppercase">
        <p>Something went wrong</p>
        <p>404 Error</p>
      </div>
      <p className="text-center">Page your are looking for is not found</p>
    </section>
  );
}
