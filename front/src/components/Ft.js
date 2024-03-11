import Good from '../img/component/Good'
import Ftline from '../img/component/Ftline'

function Ft({id, cls}) {
  return (
    <footer id={id} className={cls}>
       <Ftline></Ftline>
       <div className='container pt-5'>
       
        <div className="d-flex align-items-center justify-content-center">
          <Good />
          <p className='ms-4'>
            김재련의 카피라이터 A ~ Z 까지 모두 김재련의 손으로 창조되었음<br></br>
            잘했다고 말해주오~~~!!!
          </p>
        </div>
          
       </div>
    </footer>
    
  )
}

export default Ft