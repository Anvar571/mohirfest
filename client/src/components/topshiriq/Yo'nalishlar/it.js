import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {useSelector } from "react-redux";

const ItYonalish = () => {
  const { task } = useSelector(state => state);

  return (
    <div>
      <div className='text-center'>
        <h2>IT sohasiga oid topshiriqlar</h2>
        <p className="py-3 px-0 px-sm-0 px-md-5 mx-0 mx-sm-0 mx-md-5">Bu bo'limda siz topshiriqlardan birortasini tanlab,
          shu topshiriqni bajarish uchun kerak bo'ladigan bilimlarni o'rganib, topshiriqni to'g'ri yechish orqali 10 ball yig'ishingiz mumkin. Ko'proq ball to'plab pulingizni chiqarib olishingiz mumkin.
        </p>
      </div>
      <ul className='home_about_ul'>
        {
          task.tasks.map(task => (
            <Link to={`${task._id}`} key={task._id}
              className='home_about_li shadow d-flex justify-content-between align-items-center'
              style={{ textDecoration: "none", color: "#000" }}>
              <h6>{task.title}</h6>
              <button className='btn btn-success'>{task.ball}</button>
            </Link>
          ))
        }
      </ul>
    </div>
  )
}

export default ItYonalish