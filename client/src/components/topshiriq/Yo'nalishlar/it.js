import React from 'react'
import { Link } from 'react-router-dom'

const ItYonalish = () => {
  return (
    <div>
      <h3 style={{ textAlign: "center" }}>Bu bo'limda siz topshiriqlardan borordatini tanlab
        shu topshiriq bajarish uchun kerak bilimlarni o'rganim
        pul ishlashingiz mumkin
        ball to'plang va pull yechib oling
      </h3>
      <ul className='home_about_ul'>
        <Link to="1"
          className='home_about_li shadow d-flex justify-content-between align-items-center'
        style={{textDecoration:"none", color:"#000"}}>
          <h6>Htmlni o'rganing va shu o'rganish davomida biz berga fazifani bajarib ball yutib oling</h6>
          <button className='btn btn-success'>10 ball</button>
        </Link>

        <Link to="2"
          className='home_about_li shadow d-flex justify-content-between align-items-center'
        style={{textDecoration:"none", color:"#000"}}>
          <h6>Htmlni o'rganing va shu o'rganish davomida biz berga fazifani bajarib ball yutib oling
          </h6>
          <button className='btn btn-success'>10 ball</button>
        </Link>

        <Link to="3"
          className='home_about_li shadow d-flex justify-content-between align-items-center'
        style={{textDecoration:"none", color:"#000"}}>
          <h6>Htmlni o'rganing va shu o'rganish davomida biz berga fazifani bajarib ball yutib oling</h6>
          <button className='btn btn-success'>10 ball</button>
        </Link>

        <Link to="4"
          className='home_about_li shadow d-flex justify-content-between align-items-center'
        style={{textDecoration:"none", color:"#000"}}>
          <h6>Htmlni o'rganing va shu o'rganish davomida biz berga fazifani bajarib ball yutib oling</h6>
          <button className='btn btn-success'>10 ball</button>
        </Link>
      </ul>
    </div>
  )
}

export default ItYonalish