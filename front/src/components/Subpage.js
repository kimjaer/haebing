import { useParams } from "react-router-dom"


export default function Main({id, cls}) {
  const  {routenm} = useParams();

  return (
    
    <div id={id} className={cls} >
       <h2 className="text-center text-uppercase">{routenm}</h2> 
    </div>
  )
}