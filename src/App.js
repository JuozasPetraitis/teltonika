import React, { createContext, useReducer, useState } from 'react';

//! Components
import Footer from './components/Footer';
import Header from './components/Header';
import MainSection from './components/MainSection';

//* Categories
const categoryData = [
  {
    category: 'Food',
    subCategory: [
      {
        name: 'Dairy Products',
        categoryForUsers: ['Milk', 'Cream', 'Butter', 'Yogurt', 'Cheese'],
      },
      { name: 'Wheat Products', categoryForUsers: ['Cakes', 'Bread', 'Black bread', 'Buns'] },
    ],
  },
  {
    category: 'Sports',
    subCategory: [
      {
        name: 'Running',
        categoryForUsers: ['Marathon', 'Half marathon', 'Cross-country running'],
      },
      { name: 'Aquatic Sports', categoryForUsers: ['Canoeing', 'Kayaking', 'Rowing', 'Diving'] },
      { name: 'Archery', categoryForUsers: ['Field archery', 'Flight archery', 'Gungdo'] },
      { name: 'Acrobatic sports', categoryForUsers: ['Breakdancing', 'Cheerleading', 'Competitive dancing', 'Dancesport', 'Figure skating', 'Gymnastics'] },
    ],
  },
  {
    category: 'Technology',
    subCategory: [
      {
        name: 'Phone',
        categoryForUsers: ['Apple', 'Samsung', 'Nokia', 'LG'],
      },
      { name: 'Computer', categoryForUsers: ['Asus', 'Dell', 'Apple', 'HP'] },
      { name: 'TV', categoryForUsers: ['LG', 'Philips', 'Sony', 'Samsung'] },
      { name: 'Smart Watch', categoryForUsers: ['Huawei', 'Fitbit', 'Garmin', 'Samsung'] },
    ],
  },
  {
    category: 'Cars',
    subCategory: [
      {
        name: 'Tesla',
        categoryForUsers: ['Model S', 'Model 3', 'Model X', 'Model Y'],
      },
      { name: 'Toyota', categoryForUsers: ['Yaris', 'Corolla', 'Mirai', 'Highlander', 'Hilux'] },
      { name: 'Honda', categoryForUsers: ['Field archery', 'Flight archery', 'Gungdo'] },
      { name: 'Nissan', categoryForUsers: ['Micra', 'Qashqai', 'Leaf', 'Juke', 'Ariya'] },
      { name: 'Audi', categoryForUsers: ['A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'Q1', 'Q2', 'Q3'] },
    ],
  },
];

//* Users
const users = [
  {
    id: 1,
    firstName: 'Leanne',
    lastName: 'Graham',
    password: 'ramifonora',
    email: 'Sincere@april.biz',
    age: 20,
    gender: 'female',
    category: 'Food',
    subCategory: 'Wheat Products',
    userCategory: 'Cakes',
  },
  {
    id: 2,
    firstName: 'Ervin Howell',
    lastName: 'Howell',
    password: 'Hildegard99',
    email: 'Shanna@melissa.tv',
    age: 30,
    gender: 'male',
    category: 'Food',
    subCategory: 'Dairy Products',
    userCategory: 'Yogurt',
  },
  {
    id: 3,
    firstName: 'Clementine',
    lastName: 'Bauch',
    password: 'Samantha15',
    email: 'Sincere@april.biz',
    age: 41,
    gender: 'female',
    category: 'Food',
    subCategory: 'Dairy Products',
    userCategory: 'Cream',
  },
  {
    id: 4,
    firstName: 'Tina',
    lastName: 'Schulist',
    password: 'Leopold5',
    email: 'Karley_Dach@jasper.info',
    age: 12,
    gender: 'female',
    category: 'Technology',
    subCategory: 'Computer',
    userCategory: 'Asus',
  },
  {
    id: 5,
    firstName: 'Kurtis',
    lastName: 'Weissnat',
    password: 'Samantha15',
    email: 'Telly.Hoeger@billy.biz',
    age: 58,
    gender: 'male',
    category: 'Sports',
    subCategory: 'Running',
    userCategory: 'Marathon',
  },
];

//* Global State
export const DataContext = createContext();

//* Function state reducer
function reducer(state, action) {
  switch (action.type) {
    case 'addUser':
      return [...state, action.payload];
    default:
      return state;
  }
}

export default function App() {
  //* Reducer logic
  const [usersData, dispatch] = useReducer(reducer, users);
  //   console.log('usersData', usersData);
  //* JSON file
  const [allDataToJSOn, setallDataToJSOn] = useState(categoryData.concat(users));

  return (
    <>
      <Header />

      <main>
        <DataContext.Provider value={{ categoryData, usersData, dispatch, allDataToJSOn }}>
          <MainSection />
        </DataContext.Provider>
      </main>

      <Footer />
    </>
  );
}
