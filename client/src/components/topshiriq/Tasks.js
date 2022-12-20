import React from 'react'
import { Link } from 'react-router-dom'
import ItIMage from "../../images/tasks/system.png"
import Fizik from "../../images/tasks/atom.png"
import Math from "../../images/tasks/calculating.png"
import Kimyo from "../../images/tasks/chemistry.png";


const task = [
  { 
    id: 1, 
    title: "IT sohasidagi topshiriqlar", 
    path: "it",
    image: ItIMage
  },
  { 
    id: 2, 
    title: "Fizika fanidan topshiriqlar", 
    path: "fizika",
    image: Fizik
  },
  { 
    id: 3, 
    title: "Matematika fanidan topshiriqlar",
    path: "math" ,
    image: Math
  },
  { 
    id: 4, 
    title: "Kimyo fanidan topshiriqlar", 
    path: "kimyo" ,
    image: Kimyo
  },
]

const Tasks = () => {


  return (
    <div className='tasks'>
      <div className='row'>
        {
          task.map(task => (
            <div key={task.id} className='shadow col-md-3 m-0 m-sm-0 m-md-2 mb-3 mb-sm-3 mb-md-0'>
              <div className='task_content '>
                <Link to={`/topshiriqlar/${task.path}`}
                  className='d-flex justify-content-center align-items-center '
                  style={{ flexDirection: "column", textDecoration: "none" }}>
                  <img src={task.image} alt='avatar' width="100" />
                  <h6>{task.title}</h6>
                </Link>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Tasks