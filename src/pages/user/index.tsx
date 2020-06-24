import React, { useCallback } from 'react';
import { TPage } from 'type';
import { connect } from 'react-redux';
import styles from './index.module.less';

// user Reducer数据结构类型
type TUser = {
  user: any;
};

const Page: React.SFC<TPage & TUser> = ({ history, user }) => {
  const jump = useCallback(() => {
    history.push('./home');
  }, [history]);
  return (
    <>
      <div className={styles.bg}>
        userName：{user.name}
        <br />
        <br />
        <br />
        <br />
        <br />
        <button onClick={jump}>go Home</button>
      </div>
    </>
  );
};

const mapStateToProps = (state: any) => ({
  user: state.user,
});

export default connect(mapStateToProps)(Page);
