// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchUsersAction } from "../redux/actions";
// import UserMore from "./UserMore";
// const User = ({userInfo}) => {

//     const usersMore = useSelector(state => state.usersReducer.users);
//     const dispatch = useDispatch();

//     const getUsersMore = () => {
//         dispatch(fetchUsersAction());
//     };
//     getUsersMore()
//     return (
//         <ul>
//             <li>name: {userInfo.name}</li>
//             <li>email: {userInfo.email}</li>
//             <li>username: {userInfo.username}</li>
//             <li>
//                 <button onClick={() => {usersMore.map(user => <UserMore userMoreInfo={user}/>)}}>get more</button>
//             </li>
//         </ul>
//     )
// }

// export default User;



import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchUserMoreAction } from "../redux/actions";
import UserMore from "./UserMore";

const User = ({ userInfo }) => {
    const [userMoreInfo, setUserMoreInfo] = useState(null);
    const dispatch = useDispatch();

    const getUsersMore = async () => {
        const moreInfo = await dispatch(fetchUserMoreAction(userInfo.id));
        setUserMoreInfo(moreInfo);
    };

    return (
        <div>
            <ul>
                <li>name: {userInfo.name}</li>
                <li>email: {userInfo.email}</li>
                <li>username: {userInfo.username}</li>
                <li>
                    <button onClick={getUsersMore}>get more</button>
                     {userMoreInfo && <UserMore userMoreInfo={userMoreInfo} />}
                     <p>------------------------------------------------------</p>
                </li>
            </ul>
           
        </div>
    );
};

export default User;




