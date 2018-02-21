import React from 'react';
import PropTypes from 'prop-types';
import './ContentComponent.scss';

const ContentComponent = ({ children }) => (
  <div className="content">
    <div>
      {children}
    </div>
  </div>
);

ContentComponent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default ContentComponent;
