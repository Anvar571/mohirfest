import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useSelector } from "react-redux";
import { getByIdTask } from '../../../redux/actions/taskAction';

const TaskOne = ({ id }) => {
  const { tasks } = useSelector(state => state);

  

  return (
    <div>
      <div className='text-center'>
        <h2>{id.toLocaleLowerCase()} sohasiga oid topshiriqlar</h2>
        <p className="py-3 px-0 px-sm-0 px-md-5 mx-0 mx-sm-0 mx-md-5">Bu bo'limda siz topshiriqlardan birortasini tanlab,
          shu topshiriqni bajarish uchun kerak bo'ladigan bilimlarni o'rganib, topshiriqni to'g'ri yechish orqali 10 ball yig'ishingiz mumkin. Ko'proq ball to'plab pulingizni chiqarib olishingiz mumkin.
        </p>
      </div>
      <ul className='home_about_ul'>
        {
          tasks.tasks.map(task => {
            if (task.category === id) {
              return (
                  <Link to={`${task._id}`} key={task._id} 
                    className='home_about_li shadow d-flex justify-content-between align-items-center'
                    style={{ textDecoration: "none", color: "#000" }}>
                    <h6>{task.title}</h6>
                    <button className='btn btn-success'>{task.ball}</button>
                  </Link>
              )
            }
          })
        }
      </ul>
    </div>
  )
}

export default TaskOne