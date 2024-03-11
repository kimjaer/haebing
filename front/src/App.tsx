import React from 'react';

// 컴포넌트
import Hd from './components/Hd'
import Ft from './components/Ft'

// 스타일
import 'bootstrap/dist/css/bootstrap.css'

function App() {
  return (
    <div className="haebing position-relative">
      
      {/* 
         제작노하우
         1. 컴포넌트의 재사용을 위해 id, class를 사용시 선택하도록 props 값으로 처리
         2. 디지털이미지들을 svg는 컴포넌트로 생성하여 css로 수정이 용이하도록 처리
            핸드드로링의 유니끄함을 위해 메뉴텍스트를 특정 폰트가 아닌 svg로 처리
         3. useState 없는 컴포넌트리스트 : Hd, Ft
      
      */}
      <Hd id="hd" cls="container d-flex flex-column justify-content-center align-items-center pt-4" />
      <Ft id="ft" cls="mt-5"></Ft>
    </div>
  );
}

export default App;
