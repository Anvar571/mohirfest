import React from 'react'
<<<<<<< HEAD
import UserDefaultImage from '../../images/default-user-image.png';
=======
import { useSelector } from 'react-redux'
>>>>>>> 95f9e8802850a76545b7fa4b58e4296ea7b2bf79

const ProfilePage = () => {
  const {auth} = useSelector(state => state);
  return (
    <div className="py-4 ">
      <div className="text-center mb-2 mb-md-5">
        <h3>Profilni tahrirlash</h3>
      </div>
      <div className="row">
        <div className="col-12 col-sm-12 col-md-4 text-center mb-4 mb-md-0">
<<<<<<< HEAD
          <img className="rounded-circle py-4" src={UserDefaultImage} alt="..." width={200} height={250} />
          <h4 className="py-1">Jahongir Murodboev</h4>
          <p>useremail@email.com</p>
=======
          <img className="rounded-circle py-4" src={`${auth.user.avatar}`} alt="..." width={200} height={250} />
          <h4 className="py-1">{auth.user.fullname}</h4>
          <p>{auth.user.email}</p>
>>>>>>> 95f9e8802850a76545b7fa4b58e4296ea7b2bf79
        </div>
        <div className="col-12 col-sm-12 col-md-8 px-0 px-sm-5">
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
            <button type="submit" className="btn btn-primary">Yangilash</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage