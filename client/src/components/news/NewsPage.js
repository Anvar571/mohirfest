import React from 'react'

const NewsPage = () => {
  return (
    <div>
      <div className="text-center py-4">
        <h3>So'nggi yangiliklar</h3>
      </div>
      <div className="row">
        <div className="col-9">
          <div className="mb-5">
            <div className="my-5">
              <div className="d-flex mx-4">
                <div className="news-card-content">
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
                <div className="news-card-img">
                  <img src="https://picsum.photos/150/150" alt="..." width={150} height={150} />
                </div>
              </div>
            </div>
            <div className="my-5">
              <div className="d-flex mx-4">
                <div className="news-card-content">
                  <h4 className="fw-bold">
                    <a className="text-decoration-none text-dark" href="#">Card title</a>
                  </h4>
                  <p className="py-2 text-muted">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                  <div className="hstack gap-3">
                    <span>Vaqt</span>
                    <div className="vr"></div>
                    <a className="text-decoration-none text-dark fw-semibold" href="#">Tabiiy fanlar</a>
                  </div>
                </div>
                <div className="news-card-img">
                  <img src="https://picsum.photos/150/150" alt="..." width={150} height={150} />
                </div>
              </div>
            </div>
            <div className="my-5">
              <div className="d-flex mx-4">
                <div className="news-card-content">
                  <h4 className="fw-bold">
                    <a className="text-decoration-none text-dark" href="#">Card title</a>
                  </h4>
                  <p className="py-2 text-muted">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                  <div className="hstack gap-3">
                    <span>Vaqt</span>
                    <div className="vr"></div>
                    <a className="text-decoration-none text-dark fw-semibold" href="#">Maslahatlar</a>
                  </div>
                </div>
                <div className="news-card-img">
                  <img src="https://picsum.photos/150/150" alt="..." width={150} height={150} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="text-center">
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