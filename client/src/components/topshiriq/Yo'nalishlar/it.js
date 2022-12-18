import React from 'react'
import { Link } from 'react-router-dom'

const ItYonalish = () => {
  return (
    <div>
      <div className='text-center'>
        <h2>IT sohasiga oid topshiriqlar</h2>
        <p className="py-3 px-5 mx-5">Bu bo'limda siz topshiriqlardan birortasini tanlab,
          shu topshiriqni bajarish uchun kerak bo'ladigan bilimlarni o'rganib, topshiriqni to'g'ri yechish orqali 10 ball yig'ishingiz mumkin. Ko'proq ball to'plab pulingizni chiqarib olishingiz mumkin.
        </p>
      </div>
      <ul className='home_about_ul'>
        <Link to="1"
          className='home_about_li shadow d-flex justify-content-between align-items-center'
          style={{ textDecoration: "none", color: "#000" }}>
          <h6>Boshlang'ich HTML: sodda 3 ta sahifali web sayt yarating</h6>
          <button className='btn btn-success'>10 ball</button>
        </Link>

        <Link to="2"
          className='home_about_li shadow d-flex justify-content-between align-items-center'
          style={{ textDecoration: "none", color: "#000" }}>
          <h6>Boshlang'ich CSS: sayt uchun sodda loader yasang</h6>
          <button className='btn btn-success'>10 ball</button>
        </Link>

        <Link to="3"
          className='home_about_li shadow d-flex justify-content-between align-items-center'
          style={{ textDecoration: "none", color: "#000" }}>
          <h6>Boshlang'ich Javascript: foydalanuvchidan saytga kirganda uning yoshini so'raydigan funksiya yozing</h6>
          <button className='btn btn-success'>10 ball</button>
        </Link>

        <Link to="4"
          className='home_about_li shadow d-flex justify-content-between align-items-center'
          style={{ textDecoration: "none", color: "#000" }}>
          <h6>Boshlang'ich Python: matematik funksiyalar orqali kalkulyator yasang</h6>
          <button className='btn btn-success'>10 ball</button>
        </Link>
      </ul>
    </div>
  )
}

export default ItYonalish