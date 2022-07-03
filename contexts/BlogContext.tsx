import React, { createContext, useReducer } from 'react';
import * as type from '../types';
import axios from 'axios';
import BlogReducer from '../reducers/BlogReducer';

const API = axios.create({
  baseURL: 'https://pro-mapper-api.herokuapp.com/',
});

export const BlogContext = createContext('');

export const BlogProvider = ({ children }) => {
  const [state, dispatch] = useReducer(BlogReducer, []);

  const getBlogs = async () => {
    try {
      const { data } = await API.get('/blogs');
      dispatch({ type: type.GET_BLOGS, payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };

  const createBlog = async (blog) => {
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

  const updateBlog = async (id, blog) => {
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

  const deleteBlog = async (id) => {
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

  return (
    <BlogContext.Provider
      value={{
        state,
        getBlogs,
        createBlog,
        deleteBlog,
        updateBlog,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};
