import React, { useState } from 'react';

const InputName = () => {
    //입력된 이름을 state로 관리
    const [name, setName] = useState('');

    const changeName = (event) => {
        setName(event.target.value);
    }
    return (
        <div>
            <h2>이름을 입력하세요</h2>
            <input type="text" value={name} placeholder='이름 입력' 
            onChange={changeName} />
            <p>환영합니다. {name}님!</p>
        </div>
    )
}

export default InputName;