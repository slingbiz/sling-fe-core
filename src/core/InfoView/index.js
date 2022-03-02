import React from 'react';
import {useSelector} from 'react-redux';
import Loader from "../Loader";
import {MessageView} from "../../index";

const InfoView = () => {
  const {error, loading, message} = useSelector(({common}) => common);

  const showMessage = () => {
    return <MessageView variant='success' message={message.toString()} />;
  };

  const showError = () => {
    return <MessageView variant='error' message={error.toString()} />;
  };

  return (
    <>
      {loading && <Loader />}

      {message && showMessage()}
      {error && showError()}
    </>
  );
};

export default InfoView;
