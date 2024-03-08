import React from 'react';
import Logo from '../img/component/Logo'

export default function Hd({id, cls}) {
  
  return (
    <header id={id} className={cls}>
      {/* 로고 svg로 처리하여 css 로 관리가능 */}
        <Logo></Logo>
    </header>
  )
}
