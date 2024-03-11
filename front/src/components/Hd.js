import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom'

import Logo from '../img/component/Logo'
import Git from '../img/component/Git'
import Instar from '../img/component/Instar'
import Youtube from '../img/component/Youtube'

import Brand from "../img/component/Band"
import Location from "../img/component/Location"
import Campain from "../img/component/Campain"
import Menu from "../img/component/Menu"

export default function Hd({id, cls}) {

 

  const idx = useRef(0)
  const autosns = useRef(null);

  const lineRef = useRef(null);

  useEffect(()=>{
  const line = lineRef.current;
  const length = line.getTotalLength();
  line.style.strokeDasharray = length;
  line.style.strokeDashoffset = length;

// console.log(length)


  const sns =  document.querySelectorAll('.sns li');  
  sns.item(idx.current).classList.add('on');

  autosns.current = setInterval(()=>{  
    sns.item(idx.current).classList.remove('on'); 
    idx.current = (idx.current + 1) % sns.length;
    sns.item(idx.current).classList.add('on');
  }, 3000)

  const menulia = document.querySelectorAll(".gnb > li > a");

  menulia.forEach((el, i) => {
    el.addEventListener('click', (e) => {
        // console.log(e.target, i);
        menulia.forEach((element, index) => {
            if (index === i) {
                element.classList.add('active');
            } else {
                element.classList.remove('active');
            }
        });
    });
});

  return () => {
    clearInterval(autosns.current);
  };

  },[])

 
  return (
    <header id={id} className={cls}>
      {/* 로고 svg로 처리하여 css 로 관리가능 */}
        <a href="/" className='d-flex order-2'><Logo></Logo></a>
        <ul className='d-flex align-items-center order-1 justify-content-end w-100 sns'>
          <li >
            <Youtube onClick={()=>{
              clearInterval(autosns.current)
            }}></Youtube>
          </li>
          <li >
            <Instar onClick={()=>{
              clearInterval(autosns.current)
            }}></Instar>
          </li>
          <li >
            <a href="https://github.com/kimjaer/haebing" target='_blank' className='d-block'>
              <Git ></Git>
            </a>            
          </li>
        </ul>
        <div className=" order-3 mt-5 ">
          <ul className='gnb d-flex w-100 justify-content-center'>
          <li className={`px-3 `}>
              <Link to="/haebing">
                  <Brand>해빙</Brand>
              </Link>
            </li>
            <li className={`px-3 `}>
              <Link to="/menu">
                  <Menu>메뉴</Menu>
              </Link>
            </li>
            <li className={`px-3 `}>
              <Link to="/campain">
                  <Campain>환경캠페인</Campain>
              </Link>
            </li>
            <li className={`px-3 `}>
              <Link to="/location">
                  <Location>위치</Location>
              </Link>
            </li>
          </ul>
          <div className='d-flex justify-content-center'>

          <svg width="477" height="59" viewBox="0 0 477 59" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path className="spoon" d="M443 48.5449L451.5 29.0449C448.667 23.7116 446 12.8449 458 12.0449C473 11.0449 470.244 27.0449 460 30.0449L453.5 46.0449" stroke="black" strokeWidth="2" strokeLinecap="round"/>
      <path ref={lineRef} className="ani_line moving-outline" d="M4 50.9C64 45 180.526 49.6705 290.543 56.0098C394.5 62 463.5 46.5 476 41" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <g>
        <path d="M4.15466 28.3385C2.73972 28.6411 -0.343878 29 1.65466 31L16.6548 48.5L46.6562 47C48.8229 40.6669 52.3547 26.31 51.1547 22.71C50.9981 22.2404 50.2953 21.9415 49.1547 21.7849M4.15466 28.3385C3.82133 20.1287 7.34741 9.24368 24.6547 7.20923C41.6547 5.21089 48.1547 18.093 49.1547 21.7849M4.15466 28.3385C19.0492 25.1531 42.2117 20.832 49.1547 21.7849" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16.1261 3.88294C7.68174 7.93045 11.8796 13.5199 15.0341 15.8087C15.0341 23.0366 23.2849 19.3019 27.4102 16.5311C29.7397 16.5311 33.2339 15.5674 34.6898 15.0856C44.5901 8.72518 38.8149 4.96699 34.6898 3.88294C34.3986 1.28121 30.686 1.59427 28.8661 2.07601C22.4601 -0.525969 17.7036 2.19647 16.1261 3.88294Z" fill="#131313" stroke="black" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M20.1562 14C21.1562 12.8333 23.1562 11.2 23.1562 14M21.6562 7.50126C22.4896 6.16793 24.6562 4.30126 26.6562 7.50126M32.6562 9.00089C33.6562 8.16755 35.8562 7.10088 36.6562 9.50089M14.1562 9.50088C14.4896 8.83419 15.4562 7.80081 16.6562 9.00089" stroke="#585252" strokeLinecap="round"/>
      </g>
    </svg>
          </div>
        </div>
        
    </header>
  )
}
