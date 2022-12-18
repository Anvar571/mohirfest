import React from 'react'

const AboutPage = () => {
  return (
    <div>
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
                Accordion Item #3
              </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <div className="row">
          <div className="col-lg-4 text-center mb-5 mb-sm-5 mb-md-0">
            <img className="rounded-circle" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Generic placeholder image" width={140} height={140} />
            <h2 className="py-3">Qulay</h2>
            <p>Platformada ishlash va topshiriqlarni bajarish qulay. Har qanday inson platformadan qulay foydalana oladi.</p>
          </div>
          <div className="col-lg-4 text-center mb-5 mb-sm-5 mb-md-0">
            <img className="rounded-circle" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Generic placeholder image" width={140} height={140} />
            <h2 className="py-3">Oson</h2>
            <p>Platformadagi topshiriqlarning ko'p qismi oson darajadagi topshiriqlar hisoblanadi. Yangi boshlovchilar uchun maxsus qilingan.</p>
          </div>
          <div className="col-lg-4 text-center mb-5 mb-sm-5 mb-md-0">
            <img className="rounded-circle" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Generic placeholder image" width={140} height={140} />
            <h2 className="py-3">Bepul</h2>
            <p>Platformamizda barchasi bepul, sizdan 1 so'm ham ketmaydi. Aksincha siz topshiriqlarni to'g'ri bajarish orqali pul olishingiz mumkin.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage