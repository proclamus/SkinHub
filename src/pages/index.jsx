import { Outlet } from "react-router";
import Header from "../components/Header";

import './styles.css'

const Pages = () =>  {
  return (
    <>
    <div style={{ display: 'flex', justifyContent: 'center'}}>
      <Header />
    </div>
      <div className="Container">
        <div className="Content">
        <Outlet />   
        </div>
      </div>
    </> 
  )
}

export default Pages