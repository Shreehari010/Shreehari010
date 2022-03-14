import React from 'react';

const Card = ({heading, children, styleName, cardStyle, childrenStyle, headerOutside,headingStyle}) => {

  return (
    <div className={`${styleName}`}>
      {headerOutside &&
      <div className="jr-entry-header">
        <h3 className="entry-heading">{heading}</h3>
      </div>
      }

      <div className={`jr-card ${cardStyle}`}>
        {!headerOutside &&
        ( heading &&
          <div className={`jr-card-header ${headingStyle}`}>
            <h3 className="card-heading">{heading}</h3>
          </div>
        )}
        
      </div>
    </div>
  )
};

export default Card;

Card.defaultProps = {
  cardStyle: '',
  headingStyle:'',
  childrenStyle: '',
  styleName: 'col-lg-12 col-sm-12'
};