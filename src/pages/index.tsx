import React from 'react';
import Routers from 'configs/routers';
import autoRem from 'utils/autoRem';

autoRem(320, 750, true);

const Page: React.SFC = () => {
  return <Routers />;
};

export default Page;
