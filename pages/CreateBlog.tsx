import React from 'react';

const CreateBlog = () => {
  return (
    <form className="card d-flex flex-column gap-3 p-4 m-3">
      <h2 className="text-center">Create Blog</h2>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          className="form-control"
          id="title"
          aria-describedby="titleHelp"
          required
          placeholder="Enter title"
        />
      </div>
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          className="form-control"
          id="username"
          required
          placeholder="Username"
        />
      </div>
      <div className="form-group">
        <label htmlFor="category">Category</label>
        <input
          type="text"
          name="category"
          className="form-control"
          id="category"
          required
          placeholder="Category"
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <input
          type="text"
          name="description"
          className="form-control"
          id="description"
          required
          placeholder="Description"
        />
      </div>
      <button type="submit" className="btn btn-dark">
        Create
      </button>
    </form>
  );
};

export default CreateBlog;
