import {Route, Redirect} from 'react-router-dom';
import {useSelector} from 'react-redux';
import Topbar from '../components/Topbar';
import OutsideLayout from '../layouts/OutsideLayout';

function PublicRoute({Topbar, ...rest}) {
    const {isAuth} = useSelector(state => state.user);
    return (
        <Route 
        {...rest}
        render={(props) => (
            !isAuth 
            ? <OutsideLayout><Topbar /></OutsideLayout> 
            : <Redirect to={{pathname: '/topbar'}} />
        )}
        
        />
    )
}

export default PublicRoute;
