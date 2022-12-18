import React from 'react'
import { Link } from 'react-router-dom'
import ItIMage from "../../images/tasks/system.png"
import Fizik from "../../images/tasks/atom.png"
import Math from "../../images/tasks/calculating.png"
import Kimyo from "../../images/tasks/chemistry.png";

const Tasks = () => {
  return (
    <div className='tasks'>
      <div className='row'>
        <div className='shadow col-md-3 m-0 m-sm-0 m-md-2 mb-3 mb-sm-3 mb-md-0'>
          <div className='task_content '>
            <Link to="/topshiriqlar/it"
              className='d-flex justify-content-center align-items-center '
              style={{ flexDirection: "column", textDecoration: "none" }}>
              <img src={ItIMage} alt='avatar' width="100" />
              <h6>IT sohasidagi topshiriqlar</h6>
            </Link>
          </div>
        </div>
        <div className='shadow col-md-3 m-0 m-sm-0 m-md-2 mb-3 mb-sm-3 mb-md-0'>
          <div className='task_content '>
            <Link to="/topshiriqlar/fizika"
              className='d-flex justify-content-center align-items-center '
              style={{ flexDirection: "column", textDecoration: "none" }}>
              <img src={Fizik} alt='avatar' width="100" />
              <h6>Fizika fanidan topshiriqlar</h6>
            </Link>
          </div>
        </div>
        <div className='shadow col-md-3 m-0 m-sm-0 m-md-2 mb-3 mb-sm-3 mb-md-0'>
          <div className='task_content '>
            <Link to="/topshiriqlar/math"
              className='d-flex justify-content-center align-items-center '
              style={{ flexDirection: "column", textDecoration: "none" }}>
              <img src={Math} alt='avatar' width="100" />
              <h6>Matematika fanidan topshiriqlar</h6>
            </Link>
          </div>
        </div>
        <div className='shadow col-md-3 m-0 m-sm-0 m-md-2 mb-3 mb-sm-3 mb-md-0'>
          <div className='task_content '>
            <Link to="/topshiriqlar/kimyo"
              className='d-flex justify-content-center align-items-center '
              style={{ flexDirection: "column", textDecoration: "none" }}>
              <img src={Kimyo} alt='avatar' width="100" />
              <h6>Kimyo fanidan topshiriqlar</h6>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tasks