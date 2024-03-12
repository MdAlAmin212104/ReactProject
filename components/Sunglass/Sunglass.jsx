import React from 'react';
import './Sunglass.css'
import Watch from '../Watch/Watch';
import add from '../add';
import { add, multiply } from '../add';

const Sunglass = () => {
      const first = 10;
      const second = 10;
      // const sum = add(first, second)
      // const multiply = multiply(first, second)
      const sum = add(first, second)
      const result = multiply(first, second)
      return (
            <div>
                  <h3>this is sunglass components</h3>
                  <Watch/>
            </div>
      );
};

export default Sunglass;