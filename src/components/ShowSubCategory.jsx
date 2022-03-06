import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { DataContext } from '../App';
import UserCard from './UserCard';

//! Main Component
export default function ShowSubCategory() {
  //* All Data
  const { categoryData, usersData } = useContext(DataContext);
  //   console.log('usersData', usersData);
  //* Router logic
  const { subcategory } = useParams();

  //* Find Category
  const findCategory = categoryData.find((item) => {
    return item.subCategory.find((item) => item.name.toLowerCase().split(' ').join('') === subcategory);
  });
  //   console.log('findCategory', findCategory);

  //* Find SubCategory
  const findSubCategory = findCategory.subCategory.find((item) => {
    return item.name.toLowerCase().split(' ').join('') === subcategory;
  });
  //   console.log('findSubCategory', findSubCategory);

  //* Create Filter users to this category
  const Users = [];
  findSubCategory.categoryForUsers.forEach((item) => Users.push({ name: item }));
  //   console.log('Users', Users);

  //* Add users to array
  Users.forEach((item, index) => {
    item.users = usersData.filter((item) => {
      return item.userCategory === Users[index].name;
    });
  });

  //* Create all categories to filter users
  //   const categoriesForUsers = [];
  //   categoryObject.subCategory.forEach((item) => item.categoryForUsers.forEach((item) => categoriesForUsers.push(item)));

  //! Main return
  return (
    <section className="m-auto flex w-11/12 flex-col gap-4 py-8">
      <p className="text-center text-2xl font-semibold">{findSubCategory.name}</p>

      <div className="flex flex-col gap-8">
        {findSubCategory.categoryForUsers.map((item, index) => (
          <div className="flex flex-col gap-8" key={index}>
            <p className="cursor-default text-xl font-semibold underline decoration-sky-800 decoration-2 underline-offset-4">{item}</p>
            <div className="grid grid-cols-[repeat(2,1fr)] gap-4 xl:grid-cols-[repeat(3,1fr)]">
              {Users[index].users.map((item, index) => (
                <Link to={`/user/${item.id}`} key={index}>
                  <UserCard userInfo={item} />
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
