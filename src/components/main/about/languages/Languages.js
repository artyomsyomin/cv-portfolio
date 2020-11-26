import React from 'react';

const Languages = (props) => {
  return (
    <div className="container">
      <h3>Languages:</h3>
      <div className="row ">
        <div className="col about-grid-items">
          <ul>
            <li>
              <strong>Russain</strong> (native)
            </li>
            <li>
              <strong>English</strong> (C1 - C2)
            </li>
          </ul>
        </div>
        <div className="col about-grid-items">
          <ul>
            <li>
              <strong>Spanish</strong> (B1 - B2)
            </li>
            <li>
              <strong>French</strong> (A2 - B1)
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Languages;
