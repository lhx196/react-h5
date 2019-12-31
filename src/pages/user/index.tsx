import React, { useCallback } from 'react';
import { TPage } from 'type';

const Page: React.SFC<TPage> = ({ history }) => {
  const jump = useCallback(() => {
    history.push('./home');
  }, [history]);
  return (
    <>
      <h1>User</h1>
      <button onClick={jump}>go Home</button>
    </>
  );
};

export default Page;
