import Banner from "./main/Banner"
import Hotline from "../img/component/Hotline"

export default function Main({id, cls}) {
  return (
    
    <div id={id} className={cls} >
        <Banner id="mainBanner" cls="conteiner my-5"></Banner>
        <div className="d-flex flex-column justify-content-center container align-items-center " >
                <h3 className="mb-5">인기메뉴</h3>
                <div className="row py-5">
                    <p className="col-lg-6 d-flex flex-column justify-content-center align-items-center hotmain position-relative">
                        <a href="" className="d-block py-5">
                            <img src={`/img/bighot.jpg`} className="img-fluid" />
                        </a>
                        <Hotline cls="position-absolute start-0 end-0 top-0 bottom-0 w-100 h-100" id=""></Hotline>
                    </p>
                    <ul className="row col-lg-5 ms-lg-auto">
                        {
                            [0,1,2,3,4,5].map((e, i)=>( <li className="col-md-6 col-lg-4">
                                <a href="#none" className="d-block mx-2">
                                    <img src={`/img/hot${i}.png`} className="img-fluid" />
                                </a>
                            </li> ))
                        }
                    </ul>
                    
                </div>
                
               
              

        </div>
        <div className="d-flex flex-column justify-content-center container align-items-center py-5">
                <h3 className="mb-5">인스타그램</h3>
                <ul className="row">
                    {
                        [0,1,2,3].map((e, i)=>( <li className="col-md-6 col-lg-3">
                            <a href="#none" className="d-block mx-3">
                                <img src={`/img/instar${i}.jpg`} className="img-fluid" />
                            </a>
                        </li> ))
                    }
                </ul>
              
                
        </div>
    </div>
  )
}
