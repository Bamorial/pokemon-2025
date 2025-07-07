import '../../index.css'
import { Link } from 'react-router-dom'
export const Navigation =({test})=>{
    return <nav className='flex sticky top-0 justify-around bg-red-200'>
        <Link to={'/'}>Home</Link>
        <Link to={'/pokemon'}>Pokemon</Link>
    </nav>
}