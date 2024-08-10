// import React from "react";

// const UserMore = ({userMoreInfo}) => {
    
    
//     return (
//         <ul>
//             <li>name: {userMoreInfo.address.street}</li>
//             <li>email: {userMoreInfo.address.city}</li>
//             <li>username: {userMoreInfo.address.phone}</li>
//         </ul>
//     )
// }

// export default UserMore;

import React from "react";

const UserMore = ({ userMoreInfo }) => {
    return (
        <ul>
            <li>street: {userMoreInfo.address.street}</li>
            <li>city: {userMoreInfo.address.city}</li>
            <li>phone: {userMoreInfo.phone}</li>
        </ul>
    );
};

export default UserMore;
