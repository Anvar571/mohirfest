import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from "react-router-dom"

const Search = () => {
  const { search } = useSelector(state => state);

  return (
    <div>
      <div className='text-center'>
        <h2>Topshiriqlar</h2>
        <p className="py-3 px-0 px-sm-0 px-md-5 mx-0 mx-sm-0 mx-md-5">Bu bo'limda siz topshiriqlardan birortasini tanlab,
          shu topshiriqni bajarish uchun kerak bo'ladigan bilimlarni o'rganib, topshiriqni to'g'ri yechish orqali 10 ball yig'ishingiz mumkin. Ko'proq ball to'plab pulingizni chiqarib olishingiz mumkin.
        </p>
      </div>
      
      {search.data.length === 0 ? <h1 className='text-center'>Task topilmadi</h1>
        :
        <ul className='home_about_ul'>
          {
            search.data.map(task => (
              <Link to={`/topshiriqlar/${task.category}/${task._id}`} key={task._id}
                className='home_about_li shadow d-flex justify-content-between align-items-center'
                style={{ textDecoration: "none", color: "#000" }}>
                <h6>{task.title}</h6>
                <button className='btn btn-success'>{task.ball}</button>
              </Link>
            ))
          }
        </ul>
      }
    </div>
  )
}

export default Search