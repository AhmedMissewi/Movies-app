import {useSelector} from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { AiOutlineMenuUnfold } from 'react-icons/ai'



function Topbar() {
    const {isAuth} = useSelector(state => state.user);
    return (
        <div className="topbar">
            {
                isAuth
                
                  
                
                 (
                    <>
                    
                    <nav>
                        <NavLink to='/login'>Sign in</NavLink>
                        <NavLink to='/register'>Sign up</NavLink>
                    </nav>
                    </>
                    
                )
            }
        </div>
    )
}

export default Topbar;