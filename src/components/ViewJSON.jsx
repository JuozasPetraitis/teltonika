import React, { useContext } from 'react';

import { DataContext } from '../App';

export default function ViewJSON() {
  const { allDataToJSOn } = useContext(DataContext);
  //   console.log(allDataToJSOn);

  return <div className="px-8 pb-4">{JSON.stringify(allDataToJSOn)}</div>;
}
