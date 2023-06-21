import Tr from "./Tr";
import Table from "./Table"
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/actions/userActionCreators";

function Account() {
    const dispatch = useDispatch()
    const userInfo = useSelector(state => state.user.info)
    return (
        <div className="custom-container text-center">
            <h1 className="" style={{color:"white"}}>My Account</h1>
            {userInfo && (
                <Table className="mt-3" striped bordered>
                    <Tr title="FullName" description={userInfo.fullName} />
                    <Tr title="Email" description={userInfo.email} />
                </Table>
            )}
           
           <button onClick={() => dispatch(logout())} style={{backgroundColor:"red", color:"white", fontWeight:"700"}} >Log Out</button>
        </div>
    )
}

export default Account;