import {Route, Redirect} from 'react-router-dom';
import {useSelector} from 'react-redux';
import InsideLayout from '../layouts/InsideLayout';

function PrivateRoute({ Children, ...rest}) {
    const {isAuth} = useSelector(state => state.user);
    return (
        <Route 
        {...rest}
        render={(props) => (
            isAuth 
            ? <InsideLayout><Children/></InsideLayout> 
            : <Redirect to={{pathname: '/navbar'  }} />
        )}
        
        />
    )
}

export default PrivateRoute;
