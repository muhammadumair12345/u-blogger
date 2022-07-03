import { createContext, useEffect, useState, useReducer } from 'react';
import * as type from '../types';
import axios from 'axios';
import BlogReducer from '../reducers/BlogReducer';

const API = axios.create({
  baseURL: 'https://pro-mapper-api.herokuapp.com/',
});

export const TransactionContext = createContext('');

export const TransactionProvider = ({ children }) => {
  const [state, dispatch] = useReducer(BlogReducer, initialState);
  const [updater, setUpdater] = useState([
    { id: -1, description: '', amount: '' },
  ]);
  const [boolUpdater, setBoolUpdater] = useState(false);

  const amounts = state.transactions.map((transaction) => transaction.amount);
  const income = amounts
    .filter((amount) => amount > 0)
    .reduce((total, amount) => (total += amount), 0);
  const expense =
    amounts
      .filter((amount) => amount < 0)
      .reduce((total, amount) => (total += amount), 0) * -1;
  const totalBalance = amounts.reduce((total, amount) => (total += amount), 0);

  function addTransaction(transaction) {
    setBoolUpdater(false);
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction,
    });
  }

  function deleteTransaction(id) {
    setBoolUpdater(false);
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id,
    });
  }

  function updateTransaction(updatedTransaction) {
    setBoolUpdater(false);
    dispatch({
      type: 'UPDATE_TRANSACTION',
      payload: updatedTransaction,
    });
  }

  function update(id) {
    setUpdater(
      state.transactions.filter((transaction) => transaction.id === id)
    );
    setBoolUpdater(true);
  }

  useEffect(() => {
    localStorage.setItem('transactions', JSON.stringify(state.transactions));
  }, [state.transactions]);

  return (
    <TransactionContext.Provider
      value={{
        transactions: state.transactions,
        income,
        expense,
        totalBalance,
        updater,
        boolUpdater,
        addTransaction,
        deleteTransaction,
        updateTransaction,
        update,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};

export const getBlogs = () => async (dispatch) => {
  try {
    const { data } = await API.get('/blogs');
    dispatch({ type: type.GET_BLOGS, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createBlog = (blog) => async (dispatch) => {
  try {
    const { data, status } = await API.post('/blogs', blog);
    if (status === 200) {
      dispatch({ type: type.CREATE_BLOG, payload: data });
      console.log('Saved');
    }
  } catch (error) {
    console.log(error.message);
  }
};

export const updateBlog = (id, blog) => async (dispatch) => {
  try {
    const { data, status } = await API.patch(`/blogs/${id}`, blog);
    if (status === 200) {
      dispatch({ type: type.UPDATE_BLOG, payload: data });
      console.log('Updated');
    }
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteBlog = (id) => async (dispatch) => {
  try {
    const { status } = await API.delete(`/blogs/${id}`);
    if (status === 200) {
      dispatch({ type: type.DELETE_BLOG, payload: id });
      console.log('Deleted');
    }
  } catch (error) {
    console.log(error.message);
  }
};
