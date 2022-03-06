import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { DataContext } from '../App';
import UserCard from './UserCard';

//! Main Component
export default function ShowCategory() {
  //* All Data
  const { categoryData, usersData } = useContext(DataContext);
  //   console.log('usersData', usersData);

  //* Router logic
  const { category } = useParams();

  //* Create one object for this specific category
  const htmlData = categoryData.find((item) => item.category.toLowerCase() === category);
  //   console.log('htmlData', htmlData);

  //* Create all categories to filter users
  const categoriesForUsers = [];
  htmlData.subCategory.forEach((item) => item.categoryForUsers.forEach((item) => categoriesForUsers.push(item)));

  //* Create Filter users to this category
  const Users = [];
  htmlData.subCategory.forEach((item) => Users.push({ name: item.name }));

  //* Add users to array
  Users.forEach((item, index) => {
    item.users = usersData.filter((item) => {
      return item.subCategory === Users[index].name;
    });
  });

  //! Main return
  return (
    <section className="m-auto flex w-11/12 flex-col gap-4 py-8">
      <p className="self-center text-2xl font-semibold">{htmlData.category}</p>

      <div className="flex flex-col gap-8">
        {htmlData.subCategory.map((item, index) => (
          <div className="flex flex-col gap-8" key={index}>
            <p className="cursor-default text-xl font-semibold underline decoration-sky-800 decoration-2 underline-offset-4">{item.name}</p>
            <div className="grid grid-cols-[repeat(2,1fr)] gap-4 xl:grid-cols-[repeat(3,1fr)]">
              {Users[index].users.map((item, index) => (
                <>
                  {/* {console.log(item)} */}
                  <Link to={`/user/${item.id}`} key={index}>
                    <UserCard userInfo={item} />
                  </Link>
                </>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
