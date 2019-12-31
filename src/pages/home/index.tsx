import React, { useCallback } from 'react';
import { TPage } from 'type';

const Page: React.SFC<TPage> = ({ history }) => {
  const jump = useCallback(() => {
    history.push('./user');
  }, [history]);
  return (
    <>
      <h1>Home</h1>
      <button onClick={jump}>go user</button>
    </>
  );
};

export default Page;
