import {Route, Redirect} from 'react-router-dom';
import {useSelector} from 'react-redux';
import OutsideLayout from '../layouts/OutsideLayout';

function PublicRoute({component: Component, ...rest}) {
    const {isAuth} = useSelector(state => state.user);
    return (
        <Route 
        {...rest}
        render={(props) => (
            !isAuth 
            ? <OutsideLayout><Component {...props} /></OutsideLayout> 
            : <Redirect to={{pathname: '/Home'}} />
        )}
        
        />
    )
}

export default PublicRoute;
