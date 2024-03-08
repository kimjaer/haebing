import React from 'react';

// 컴포넌트
import Hd from './components/Hd'

// 스타일
import 'bootstrap/dist/css/bootstrap'

function App() {
  return (
    <div className="haebing position-relative ">
      {/* 
         제작노하우
         1. 컴포넌트의 재사용을 위해 id, class를 사용시 선택하도록 props 값으로 처리
         2. 디지털이미지들을 svg는 컴포넌트로 생성하여 css로 수정이 용이하도록 처리
      
      */}
      <Hd id="hd" cls="" />
    </div>
  );
}

export default App;
