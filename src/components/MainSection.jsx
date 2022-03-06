import React from 'react';
import { Route, Routes } from 'react-router-dom';

//! Components
import Navigation from './Navigation';
import Layout from './Layout';
import UserInfoSection from './UserInfoSection';
import UserForm from './UserForm';
import ShowCategory from './ShowCategory';
import ShowSubCategory from './ShowSubCategory';
import HomeSection from './HomeSection';
import Error404 from './Error404';
import ViewJSON from './ViewJSON';

//! Main Component
export default function MainSection() {
  return (
    <section className="container m-auto grid grid-cols-1 gap-4 md:grid-cols-[50%,auto] md:gap-1 xl:grid-cols-[40%,auto]">
      <Navigation />

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomeSection />} />
          <Route path="new-user" element={<UserForm />} />
          <Route path="user/:id" element={<UserInfoSection />} />

          <Route path="/category">
            <Route path=":category" element={<ShowCategory />} />
          </Route>

          <Route path="/subcategory">
            <Route path=":subcategory" element={<ShowSubCategory />} />
          </Route>

          <Route path="JSON" element={<ViewJSON />} />

          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
    </section>
  );
}
