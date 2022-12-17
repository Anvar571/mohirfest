import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
     return (
          <div>

               <div>

               </div>

               <div>
                    <div className="my-4 text-center">
                         <h4>Siz uchun foydali</h4>
                         <p>Maqola va qo'llanmalar orqali platformamizdan oson foydalaning.</p>
                    </div>
                    <div className="row">
                         <div className="col-sm-6">
                              <div className="card">
                                   <img src="https://picsum.photos/250/100?random=5"
                                   style={{objectFit: "cover"}} className="card-img-top" alt="Card avatar" width={100} height={250} />
                                   <div className="card-body my-2 mx-2">
                                        <h3 className="card-title">Platformada birinchi qadam</h3>
                                        <p className="card-text py-2">Platformada to'g'ri ishlash va topshiriqlarni bajarish bo'yicha yo'riqnoma.</p>
                                        <Link to="/" className="btn btn-primary">Batafsil</Link>
                                   </div>
                              </div>
                         </div>
                         <div className="col-sm-6">
                              <div className="card">
                                   <img src="https://picsum.photos/250/100?random=12" 
                                   style={{objectFit:"cover"}} className="card-img-top" alt="Card avatar" width={100} height={250} />
                                   <div className="card-body my-2 mx-2">
                                        <h3 className="card-title">Ko'p beriladigan savollar</h3>
                                        <p className="card-text py-2">Foydalanuvchilardan ko'p beriladigan savollarga to'liq javoblar</p>
                                        <Link to="/" className="btn btn-primary">Batafsil</Link>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default Home