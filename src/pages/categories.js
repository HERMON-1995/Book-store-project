import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categoriesSlice';

const Categories = () => {
  const allCategories = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  const dispatchAction = () => {
    dispatch(checkStatus());
  };

  return (
    <div className="status-div">
      <button type="submit" className="primary-button-big states-btn" onClick={dispatchAction}>Check Status</button>
      <h3>{allCategories}</h3>
    </div>
  );
};
export default Categories;
