import { Link } from 'react-router-dom'

const NotFoudPage = () => {
  return (
    <div>
        <Link to="/" style={{textDecoration:"none", color:"#000"}}>Home page</Link>
        <img alt='notfound'
        src='https://colorlib.com/wp/wp-content/uploads/sites/2/404-error-template-9.png'
        width="1000" className='img-fluid' />
    </div>
  )
}

export default NotFoudPage