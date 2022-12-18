import React from 'react'
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import DefaultNewsImg from '../../images/default-news-img.jpg'
=======
>>>>>>> 95f9e8802850a76545b7fa4b58e4296ea7b2bf79

const NewsPage = () => {
  return (
    <div>
      <div className="text-center py-4">
        <h3>So'nggi yangiliklar</h3>
      </div>
      <div className="row">
        <div className="col col-md-9">
          <div className="mb-5">
            <div className="my-5">
              <div className="row mx-4">
                <div className="col col-md-9">
                  <h4 className="fw-bold">
                    <Link to="/topshiriqlar" className="text-decoration-none text-dark">IT topshiriqlarimizning birinchi qismi</Link>
                  </h4>
                  <p className="py-2 text-muted">Platformamizga IT sohasiga oid topshiriqlarimizning birinchi qismi yuklandi. Bemalol topshiriqlarni bajarishingiz mumkin.</p>
                  <div className="hstack gap-3">
                    <span>19:36 am - 18.12.2022</span>
                    <div className="vr"></div>
                    <a className="text-decoration-none text-dark fw-semibold" href="#">Texnologiya</a>
                  </div>
                </div>
                <div className="col col-md-3 mt-3 mt-sm-3 mt-md-0">
<<<<<<< HEAD
                  <img src={DefaultNewsImg} alt="..." width={150} height={150} />
=======
                  <img src="https://picsum.photos/150/150?ramdom=12" alt="..." width={150} height={150} />
>>>>>>> 95f9e8802850a76545b7fa4b58e4296ea7b2bf79
                </div>
              </div>
            </div>
            <div className="my-5">
              <div className="row mx-4">
                <div className="col col-md-9">
                  <h4 className="fw-bold">
                    <a className="text-decoration-none text-dark" href="#">Siz uchun foydali maslahatlar</a>
                  </h4>
                  <p className="py-2 text-muted">O'z ustingizda ishlashingiz uchun, intizomingizni rivojlantirishga yordam beradigan tavsiya va manbalar.</p>
                  <div className="hstack gap-3">
                    <span>18:06 am - 18.12.2022</span>
                    <div className="vr"></div>
                    <a className="text-decoration-none text-dark fw-semibold" href="#">Maslahatlar</a>
                  </div>
                </div>
                <div className="col col-md-3 mt-3 mt-sm-3 mt-md-0">
<<<<<<< HEAD
                  <img src={DefaultNewsImg} alt="..." width={150} height={150} />
=======
                  <img src="https://picsum.photos/150/150?ramdom=124" alt="..." width={150} height={150} />
>>>>>>> 95f9e8802850a76545b7fa4b58e4296ea7b2bf79
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col col-md-3">
          <div className="text-center">
            <h4 className="mb-3">Bo'limlar</h4>
            <button type="button" class="btn btn-light px-5 py-3 my-2">Texnologiya</button>
            <button type="button" class="btn btn-light px-5 py-3 my-2">Tabiiy fanlar</button>
            <button type="button" class="btn btn-light px-5 py-3 my-2">Aniq fanlar</button>
            <button type="button" class="btn btn-light px-5 py-3 my-2">Maslahatlar</button>
            <button type="button" class="btn btn-light px-5 py-3 my-2">Psixologiya</button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default NewsPage