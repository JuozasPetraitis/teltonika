import React from 'react';

export default function UserCard({ userInfo }) {
  const { firstName, email, userCategory } = userInfo;

  return (
    <div className="group flex h-full flex-col justify-around gap-4 rounded-sm border border-blue-400 py-4 px-4 shadow-md shadow-sky-400/50 transition-shadow duration-300 hover:shadow-none">
      <div>
        <p className="text-lg font-medium uppercase">First Name:</p>
        <p> {firstName}</p>
      </div>

      <div>
        <p className="text-lg font-medium uppercase">Email:</p>
        <p className="break-words">{email}</p>
      </div>

      <div>
        <p className="text-lg font-medium uppercase">Category:</p>
        <p>{userCategory}</p>
      </div>
    </div>
  );
}
