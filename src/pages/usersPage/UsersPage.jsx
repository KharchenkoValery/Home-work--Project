// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchUsersAction } from "../../redux/actions";

// const UsersPage = () => {

//     const users = useSelector(state => state.usersReducer.users)

//     const dispatch = useDispatch()

//     const getUsers = () => {
//         dispatch(fetchUsersAction())
//     }
//     console.log(users);
    

//     return(
//         <div>
//             <button onClick={getUsers}>get data</button>
//         </div>
        
//     )
// }

// export default UsersPage;

// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchUserMoreAction } from "../../redux/actions";
// import User from "../../components/User";

// const UsersPage = () => {
//     const users = useSelector(state => state.usersReducer.users);
//     const dispatch = useDispatch();

//     const getUsers = () => {
//         dispatch(fetchUserMoreAction());
//     };

//   useEffect(() => {
//     getUsers()
//   }, [])
//     return (
//         <div>
//            {users.map(user => <User userInfo={user}/>)}
//         </div>
//     );
// };

// export default UsersPage;

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsersAction } from "../../redux/actions"; // Исправьте путь и используйте правильный экшен
import User from "../../components/User";

const UsersPage = () => {
    const users = useSelector(state => state.usersReducer.users);
    const dispatch = useDispatch();

    const getUsers = () => {
        dispatch(fetchUsersAction());
    };

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <div>
           {users.map(user => <User userInfo={user} key={user.id}/>)}
        </div>
    );
};

export default UsersPage;

