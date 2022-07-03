import React from 'react';
import { Outlet } from 'react-router-dom';

const Blogs = () => {
  return (
    <div className="d-flex gap-3 justify-content-center flex-wrap m-4">
      {[1, 2, 3].map((i) => (
        <div key={i} className="card" style={{ width: '15rem' }}>
          <img className="card-img-top" src="..." alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
            <h6
              className="card-subtitle mb-2 text-muted"
              style={{ fontSize: '0.6rem' }}
            >
              Card subtitle
            </h6>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <div className="d-flex gap-2 justify-content-between">
              <button className="btn btn-dark">Delete</button>
              <button className="btn btn-dark">Update</button>
            </div>
          </div>
        </div>
      ))}
      <Outlet />
    </div>
  );
};

export default Blogs;
