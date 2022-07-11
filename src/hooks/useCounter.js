import { useState } from "react";
export const useCounter = (init) => {
  const [count, setValue] = useState(init.initialValue);

  const incCount = (num) => {
    if (!num) {
      num = 1;
    }
    if(count+num<=init.maxValue)
    {
        setValue(count+num)
    }
    
    
  };
  const decCount = (num) => {
      if (!num) {
        num = 1;
      }
      if(count-num>=init.minValue){
          setValue(count-num);
      }
      
      
  }

  return { count, incCount, decCount };
};
