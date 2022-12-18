import { Link } from 'react-router-dom'

const NotFoudPage = () => {
  return (
    <div>
<<<<<<< HEAD
      <Link to="/" style={{ textDecoration: "none", color: "#000" }}>Home page</Link>
      <img
=======
        <Link to="/" style={{textDecoration:"none", color:"#000"}}>Home page</Link>
        <img alt='notfound'
>>>>>>> 95f9e8802850a76545b7fa4b58e4296ea7b2bf79
        src='https://colorlib.com/wp/wp-content/uploads/sites/2/404-error-template-9.png'
        width="1000" className='img-fluid' />
    </div>
  )
}

export default NotFoudPage