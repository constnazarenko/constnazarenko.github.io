import React, { FC } from 'react';

const NoMatch: FC = () => {
  return (
    <div className="form-section content-section mt-[80px] mb-[80px]">
      <div className="content-container rounded-box">
        <span className="mb-[15px]">
          <h1>404</h1>
        </span>

        <span className="mb-[30px]">
          <p>Oh no! Looks like this journal has some pages torn away...</p>
        </span>
      </div>
    </div>
  );
};

export default NoMatch;
