import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';

//! Importing DataContext
import { DataContext } from '../App';

//! Main Component
export default function UserInfoSection() {
  const { id } = useParams();
  const { usersData } = useContext(DataContext);
  const userInfo = usersData.find((item) => item.id === +id);
  const { firstName, lastName, email, age, gender, userCategory } = userInfo;
  //   console.log(userInfo);

  //! Main Return
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <p className="text-center text-2xl font-semibold">User information</p>
      <div className="grid grid-cols-2 gap-4 px-4 py-8">
        <div>
          <p className="text-lg font-medium uppercase">First Name:</p>
          <p>{firstName}</p>
        </div>

        <div>
          <p className="text-lg font-medium uppercase">Last Name:</p>
          <p>{lastName}</p>
        </div>

        <div>
          <p className="text-lg font-medium uppercase">Gender:</p>
          <p>{gender}</p>
        </div>

        <div>
          <p className="text-lg font-medium uppercase">Age:</p>
          <p>{age}</p>
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
    </div>
  );
}
