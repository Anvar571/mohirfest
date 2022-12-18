import React from 'react'
import DefaultNewsImg from '../../images/default-news-img.jpg'

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
                    <a className="text-decoration-none text-dark" href="#">Card title</a>
                  </h4>
                  <p className="py-2 text-muted">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                  <div className="hstack gap-3">
                    <span>Vaqt</span>
                    <div className="vr"></div>
                    <a className="text-decoration-none text-dark fw-semibold" href="#">Texnologiya</a>
                  </div>
                </div>
                <div className="col col-md-3 mt-3 mt-sm-3 mt-md-0">
                  <img src={DefaultNewsImg} alt="..." width={150} height={150} />
                </div>
              </div>
            </div>
            <div className="my-5">
              <div className="row mx-4">
                <div className="col col-md-9">
                  <h4 className="fw-bold">
                    <a className="text-decoration-none text-dark" href="#">Card title</a>
                  </h4>
                  <p className="py-2 text-muted">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                  <div className="hstack gap-3">
                    <span>Vaqt</span>
                    <div className="vr"></div>
                    <a className="text-decoration-none text-dark fw-semibold" href="#">Texnologiya</a>
                  </div>
                </div>
                <div className="col col-md-3 mt-3 mt-sm-3 mt-md-0">
                  <img src={DefaultNewsImg} alt="..." width={150} height={150} />
                </div>
              </div>
            </div>
            <div className="my-5">
              <div className="row mx-4">
                <div className="col col-md-9">
                  <h4 className="fw-bold">
                    <a className="text-decoration-none text-dark" href="#">Card title</a>
                  </h4>
                  <p className="py-2 text-muted">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                  <div className="hstack gap-3">
                    <span>Vaqt</span>
                    <div className="vr"></div>
                    <a className="text-decoration-none text-dark fw-semibold" href="#">Texnologiya</a>
                  </div>
                </div>
                <div className="col col-md-3 mt-3 mt-sm-3 mt-md-0">
                  <img src={DefaultNewsImg} alt="..." width={150} height={150} />
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