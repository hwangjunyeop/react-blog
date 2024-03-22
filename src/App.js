import React, {useState} from 'react'
import './App.css'
import logo from './img/logo.png';


function App() {
  let [titles, setTitles] = useState(['쇠고기 들깨탕', '사천식 마파두부', '메밀 물막국수'])//리스트 제목
  let [btnLike, setBtnLike] = useState([0,0,0]) //like버튼
  let [modal, setModal] =useState(false) //modal창 기본
  let [modalTitle, setModalTitle] =useState(0) //title 배열에 인덱스값
  let [inputValue, setInputValue] =useState('')

  return (
    <div className='App'>
      <div className="black-nav">
        <h1><img src={logo} alt="logo" />Recipe#</h1>
      </div>
      
      <div className="cont_wrap">
        <div className="btn-area">
          <button onClick={()=>{
            let copyTitle = [...titles];
            copyTitle[0]='쇠고기미역국';
            setTitles(copyTitle)
          }}>글수정</button>
          <button onClick={()=>{
            let copyTitle = [...titles]
            copyTitle=copyTitle.sort()
            setTitles(copyTitle)
          }}>가나다순 정렬</button>
        </div>
        {/* 버튼영역 */}

        {/* <div className="list">
          <p className="subTitle">쇠고기 장조림</p>
          <div className="list-util">
             <p className="date">3월 14일 발행</p>
          <button className="btnDel">삭제</button>
          <p className="like">
            <span>❤</span> <span>0</span>
          </p>
          </div>
        </div> */}
        
        {/* 글 리스트를 map함수로 반복 출력 */}
        {
          titles.map((title, i)=>(
          <div className='list' key={i}>
              <p className="subTitle" onClick={()=>{
                setModal(!modal); setModalTitle(i)
              }}>{title}</p>
            <div className="list-util">
              <p className="date">3월 14일 발행</p>
              <button className="btnDel" onClick={()=>{
                let copy = [...titles]
                copy.splice(i,1)
                setTitles(copy)
              }}>삭제</button>
              <p className="like">
                <span onClick={()=>{
                  let copyBtnLike = [...btnLike]
                  copyBtnLike[i] = copyBtnLike[i]+1;
                  setBtnLike(copyBtnLike)
                }}>❤</span> <span>{btnLike[i]}</span>
              </p>
            </div>
          </div>
          ))
        }

        <div className="inputArea">
          <input type="text" className="inputBox" onChange={(e)=>{
            setInputValue(e.target.value)
          }} />

          {/* 
            동기식(sync)
            비동기식(async)
          */}
          
          <button onClick={()=>{
            let copy =[...titles]
            copy.unshift(inputValue)
            setTitles(copy)
          }}>글발행</button>
        </div>

      </div>
      {/* cont-wrap */}

      {/* modal 보이기/숨기기 */}
      {
        modal == true ? <Modal titles={titles} modalTitle={modalTitle} /> : null
      }
    </div>

    
  )
}

function Modal(props) {
  return(
    <div className="modal">
        <p className="title">{props.titles[props.modalTitle]}</p>
        <p className="date">날짜</p>
        <p className="content">상세설명</p>
    </div>
  )
}
export default App