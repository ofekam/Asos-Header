import React from 'react';
import Button from './Button';

export default ({ titleText, items }) => {
    const Items = items?.map(item => {
        return <Button {...item}/>
    });
    return (
    <div>
      <Button text={titleText} />
      
    </div>
  );
};
