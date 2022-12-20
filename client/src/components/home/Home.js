import React, { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'
import { BsCheckCircle, BsArrowRight } from "react-icons/bs";
import { Link } from 'react-router-dom';
import {getDataAPI} from "../../utils/serverAPI";

const Home = () => {
     const [users, setUsers] = useState([]);

     useEffect(() => {
          getDataAPI("lengthuser")
          .then(res => setUsers(res.data))
     }, [setUsers])

     return (
          <div className='home'>
               <i className='shadow-sm w-100 m-0 m-sm-0 m-md-3 mb-3 mb-sm-3 mb-md-0 col3
               ' style={{margin: "5px",}}>Ro'yxatdan o'tgan foydalanuvchilar soni {users.length} ta</i>
               <div className='row mb-4'>
                    <div className='shadow-sm col-md-6 m-0 m-sm-0 m-md-3 mb-3 mb-sm-3 mb-md-0'>
                         <BsCheckCircle />
                         <h5 className="py-2">Bepul ta'lim</h5>
                         <i>Bepul o'rganing, topshiriqlarni bajarish orqali daromad qiling.! </i>
                    </div>
                    <div className='shadow-sm col-md-3 m-0 m-sm-0 m-md-3 mb-3 mb-sm-3 mb-md-0'>
                         <BsCheckCircle />
                         <h5 className="py-2">Rag'batlantirish</h5>
                         <i>Chaqqon bo'lsangiz, o'rganib pul topishingiz mumkin!</i>
                    </div>
                    <div className='shadow-sm col-md-3 m-0 m-sm-0 m-md-3 mb-3 mb-sm-3 mb-md-0 col3'>
                         <BsCheckCircle />
                         <h5 className="py-2">Kuchli intizom</h5>
                         <i>O'z ustingizda ishlashingiz uchun, muhim maslahatlar!</i>
                    </div>
               </div>
               <h2 className='text-center'>Biz sizga nimalarni taklif qilamiz !</h2>
               <div className="mt-4 mb-5">
                    <ul className='home_about_ul'>
                         <li className='home_about_li shadow '>
                              Ilm berish orqali rag'batlantirish
                         </li>
                         <li className='home_about_li shadow '>
                              Yoshlarni qo'lab quvvatlash
                         </li>
                         <li className='home_about_li shadow '>
                              Zamonaviy ilmlar va texnologiyalar haqidagi ma'lumotlar
                         </li>
                         <li className='home_about_li shadow '>
                              Insonlarni ilmli bo'lishga undash
                         </li>
                    </ul>
               </div>
               <Link to="/about" style={{ textDecoration: "none", }}>
                    <div className="d-flex align-items-center">
                         <h4
                              style={{ color: "#000", paddingTop: "-2px", display: "inline", paddingLeft: "10px", paddingRight: "10px", }}>
                              Ko'proq ma'lumot olish
                         </h4>
                         <BsArrowRight />
                    </div>
               </Link>
               <p className='footer_about'>2022 Ilm Dunyoni Qutqaradi!</p>
          </div>
     )
}

export default Home