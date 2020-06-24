import React, { useCallback, useState, useEffect } from 'react';
import { TPage } from 'type';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { countAdd, countDec } from 'action/countAction';

type TDispatch = {
  add: Function;
  dec: Function;
};
type THome = TPage & TDispatch;

const Page: React.SFC<THome> = (props) => {
  const { history, store } = props;
  const { counter } = store;
  const [addcount, setaddCount] = useState('');
  const [deccount, setdecCount] = useState('');

  const jump = useCallback(() => {
    history.push('./user');
  }, [history]);

  const add = () => {
    props.add(Number(addcount));
    setaddCount('');
  };
  const dec = () => {
    props.dec(Number(deccount));
    setdecCount('');
  };
  return (
    <>
      <h1>Home</h1>
      <button onClick={jump}>go user</button>
      <p>counte:{counter.count}</p>
      <div>
        <input
          value={addcount}
          onChange={(e) => {
            setaddCount(e.target.value);
          }}
        />{' '}
        <button onClick={add}>+</button>
      </div>
      <div>
        <input
          value={deccount}
          onChange={(e) => {
            setdecCount(e.target.value);
          }}
        />{' '}
        <button onClick={dec}>-</button>
      </div>
    </>
  );
};
const mapStateToProps = (state: any) => ({ store: state });
const mapDispatchToProps = (dispatch: any) => ({
  add: bindActionCreators(countAdd, dispatch),
  dec: bindActionCreators(countDec, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Page);
