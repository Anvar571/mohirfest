import React from 'react'
import AboutBannerImg from '../../images/about-banner.png'

const AboutPage = () => {
  return (
    <div>
      <div className='d-flex justify-content-center'>
        <img src={AboutBannerImg} alt="About Image" className='img-fluid' width={1000} height={400} />
      </div>
      <div className='text-center py-3'>
        <h3>Biz haqimizda</h3>
      </div>
      <div className="mx-4">
        <p>Ilm ol - platformasi insonlarni ilmini oshirish, o'z ustida ishlash va bor bilimlarini mustahkamlashga yordam beruvchi online platforma. Siz platformamiz orqali nafaqat bilim va topshiriqlarni to'g'ri bajarib ball yig'ib, pul olishingiz ham mumkin.</p>
      </div>
      <div className="py-4 mt-2">
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Platforma hozir qanday darajada?
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                Platforma hozirda ishlab chiqish va rivojlantirish jarayonida. Yaqin kunlarda platformaning <strong>2.0</strong> versiyasi ommaga taqdim etilishi rejalashtirilgan.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Platformada qanday imkoniyatlar mavjud?
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                Hozirda platformada <strong>topshiriqlarni bajarish</strong>, yangiliklar, maslahatlar imkoniyatlari mavjud bo'lib, ishlab chiqish jarayonida.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Platformani kimlar ishlab chiqargan?
              </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                Platformani <strong>RIVOJLAN</strong> jamoasi ya'ni <strong>Anvar Abdurashidov</strong>, <strong>Umidbek Azimov</strong> va <strong>Jahongir Murodboev</strong> lar ishlab chiqqan.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-3">
        <h2 class="text-center mb-3">Biz sizga nimalarni taklif qilamiz !</h2>
        <ul class="home_about_ul">
          <li class="home_about_li shadow ">Ilm berish orqali rag'batlantirish</li>
          <li class="home_about_li shadow ">Yoshlarni qo'lab quvvatlash</li>
          <li class="home_about_li shadow ">Zamonaviy ilmlar va texnologiyalar haqidagi ma'lumotlar</li>
          <li class="home_about_li shadow ">Insonlarni ilmli bo'lishga undash</li>
        </ul>
      </div>
    </div>
  )
}

export default AboutPage