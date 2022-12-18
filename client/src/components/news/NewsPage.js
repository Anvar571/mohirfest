import React from 'react'

const NewsPage = () => {
  return (
    <div>
      <div>
        <div classname="text-center py-4">
          <h3>So'nggi yangiliklar</h3>
        </div>
        <div classname="row">
          <div classname="col-9">
            <div classname="mb-5">
              <div classname="my-5">
                <div classname="d-flex mx-4">
                  <div classname="news-card-content">
                    <h4 classname="fw-bold">
                      <a classname="text-decoration-none text-dark" href="#">Card title</a>
                    </h4>
                    <p classname="py-2 text-muted">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                    <div classname="hstack gap-3">
                      <span>Vaqt</span>
                      <div classname="vr" />
                      <a classname="text-decoration-none text-dark fw-semibold" href="#">Texnologiya</a>
                    </div>
                  </div>
                  <div classname="news-card-img">
                    <img src="https://picsum.photos/150/150" alt="..." width="{150}" height="{150}" />
                  </div>
                </div>
              </div>
              <div classname="my-5">
                <div classname="d-flex mx-4">
                  <div classname="news-card-content">
                    <h4 classname="fw-bold">
                      <a classname="text-decoration-none text-dark" href="#">Card title</a>
                    </h4>
                    <p classname="py-2 text-muted">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                    <div classname="hstack gap-3">
                      <span>Vaqt</span>
                      <div classname="vr" />
                      <a classname="text-decoration-none text-dark fw-semibold" href="#">Tabiiy fanlar</a>
                    </div>
                  </div>
                  <div classname="news-card-img">
                    <img src="https://picsum.photos/150/150" alt="..." width="{150}" height="{150}" />
                  </div>
                </div>
              </div>
              <div classname="my-5">
                <div classname="d-flex mx-4">
                  <div classname="news-card-content">
                    <h4 classname="fw-bold">
                      <a classname="text-decoration-none text-dark" href="#">Card title</a>
                    </h4>
                    <p classname="py-2 text-muted">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                    <div classname="hstack gap-3">
                      <span>Vaqt</span>
                      <div classname="vr" />
                      <a classname="text-decoration-none text-dark fw-semibold" href="#">Maslahatlar</a>
                    </div>
                  </div>
                  <div classname="news-card-img">
                    <img src="https://picsum.photos/150/150" alt="..." width="{150}" height="{150}" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div classname="col-3">
            <div classname="text-center">
              <button type="button" className="btn btn-light px-5 py-3 my-2">Texnologiya</button>
              <button type="button" className="btn btn-light px-5 py-3 my-2">Tabiiy fanlar</button>
              <button type="button" className="btn btn-light px-5 py-3 my-2">Aniq fanlar</button>
              <button type="button" className="btn btn-light px-5 py-3 my-2">Maslahatlar</button>
              <button type="button" className="btn btn-light px-5 py-3 my-2">Psixologiya</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default NewsPage