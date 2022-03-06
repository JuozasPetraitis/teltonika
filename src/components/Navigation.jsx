import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { DataContext } from '../App';

//! Main Component
export default function Navigation() {
  //* Data logic
  const { categoryData } = useContext(DataContext);
  //   console.log(categoryData);

  //! Main Return
  return (
    <nav className="flex flex-col gap-8 bg-neutral-200 py-8">
      <p className="self-center text-2xl font-semibold">Menu</p>

      {/* Auto generated */}
      <div className="grid grid-cols-2 gap-y-8 gap-x-4 lg:mx-auto lg:w-11/12">
        {categoryData.map((item, index) => (
          <div className="flex flex-col gap-2 px-4" key={index}>
            {/* Main Category */}
            <span key={index}>
              <Link to={`/category/${item.category.toLowerCase()}`} className="font-bold uppercase hover:underline" key={index}>
                {item.category}
              </Link>
            </span>

            <div className="flex flex-col gap-2">
              {/* Sub Category */}
              {item.subCategory.map((item, index1) => (
                <span key={index1}>
                  <Link to={`/subcategory/${item.name.split(' ').join('').toLowerCase()}`} key={index1} className="hover:font-medium hover:underline">
                    {item.name}
                  </Link>
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <Link to="/JSON" className="cursor-pointer self-center rounded-sm border-0 bg-blue-500 px-12 py-2 font-semibold text-white hover:bg-blue-600">
        JSON
      </Link>

      <Link to="/new-user" className="cursor-pointer self-center rounded-sm bg-blue-500 px-12 py-2 font-semibold text-white hover:bg-blue-600">
        Create user
      </Link>
    </nav>
  );
}
