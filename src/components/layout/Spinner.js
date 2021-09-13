import React, { Fragment } from 'react';

const Spinner = () => (
  <Fragment>
    <div className="loading-container">
        <div className="loading">
          <img
            src="/images/loader.gif"
            style={{ width: '480px',margin: '9% 34%', display: 'block' , 'zIndex': '9999' }}
            className='spinner-view'
            alt="Loading..."
          />
      </div>
    </div>
  </Fragment>
);

export default Spinner;
