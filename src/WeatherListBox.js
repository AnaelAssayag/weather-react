import React from 'react';
import WeatherBox from './WeatherBox';

const WeatherListBox = (props) => {
  const boxes = props
    .boxes
    .map((item, index) => <WeatherBox
      key={index}
      id={index}
      item={item}
      deletebox={props.deletebox}
      addComment={props.addComment}/>
    )

  return (
    <div>
      {boxes}
    </div>

  );
};

export default WeatherListBox;