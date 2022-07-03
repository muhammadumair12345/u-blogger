import * as type from '../types';

const BlogReducer = (blogs = [], action) => {
  switch (action.type) {
    case type.CREATE_BLOG:
      return [action.payload, ...blogs];
    case type.GET_BLOGS:
      return action.payload.reverse();
    case type.DELETE_BLOG:
      return blogs.filter((blog) => blog._id !== action.payload);
    case type.UPDATE_BLOG:
      return blogs.map((blog) =>
        blog._id === action.payload._id ? action.payload : blog
      );
    default:
      return blogs;
  }
};

export default BlogReducer;
