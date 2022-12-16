import React from 'react'

const Header = () => {
     return (
          <div>
               <div className="d-flex my-4">
                    <div className="d-flex flex-column">
                         <h4>Salom User Foydaluvchiyev</h4>
                         <span>4.45 pm 19 Jan 2022</span>
                    </div>
                    <div>
                         <form>
                              <label>
                                   <input type="text" placeholder="Qidiruv" />
                              </label>
                         </form>
                    </div>
               </div>
          </div>
     )
}

export default Header