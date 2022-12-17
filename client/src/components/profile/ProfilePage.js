import React from 'react'

const ProfilePage = () => {
  return (
    <div className="py-4 ">
      <div className="text-center mb-5">
        <h3>Profilni tahrirlash</h3>
      </div>
      <div className="row">
        <div className="col-4 text-center">
          <img className="rounded-circle py-4" src="https://picsum.photos/200/200" alt="..." width={200} height={250} />
          <h4 className="py-1">Jahongir Murodboev</h4>
          <p>useremail@email.com</p>
        </div>
        <div className="col-8">
          <form>
            <div className="mb-3">
              <label for="exampleInputText1" className="form-label">Ism familiya</label>
              <input type="text" className="form-control" id="exampleInputText1" />
            </div>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">Email manzil</label>
              <input type="email" className="form-control" id="exampleInputEmail1" />
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">Eski Parol</label>
              <input type="password" className="form-control" id="exampleInputPassword1" />
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword2" className="form-label">Yangi Parol</label>
              <input type="password" className="form-control" id="exampleInputPassword2" />
            </div>
            <div className="mb-3 form-check">
              <input type="checkbox" className="form-check-input" id="exampleCheck1" />
              <label className="form-check-label" for="exampleCheck1">Saqlab qol</label>
            </div>
            <button type="submit" className="btn btn-primary">Yangilash</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage