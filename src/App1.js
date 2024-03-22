import React, {useState} from 'react';

const Counter = () => {
    //초기 상태를 0으로 설정
    const[count, setCount] = useState(0);

    //버튼을 클릭할 때마다 count를 증가시키는 함수
    const increment = () => {
        setCount(count + 1)  
    }
    
    const decrement = () => {
         if (count > 0) {
        setCount(count -1)
    }       
}

   
    return(
        <div>
            <h2>카운터</h2>
            <p>현재 카운트 : {count} </p>
            <button onClick={increment}>증가</button>
            <button onClick={decrement}>감소</button>
        </div>
        
    )
}
export default Counter;