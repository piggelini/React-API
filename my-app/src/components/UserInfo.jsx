import { useEffect } from "react";

export default function UserInfo({ user, getUser, userId }) {

    useEffect(() => {
        console.log("Mounting component");
        //Här undviker vi att hämta data om vi redan har det sedan tidigare
        if (user === null) {
            console.log("Fetching data..");
            getUser(userId);
        }
    }, []);



    return (
        < div >
            <p>User: {userId}</p>
            <p>E-mail: {user?.email}</p>
            <p>City: {user?.address.city}</p>
        </div >
    )
}