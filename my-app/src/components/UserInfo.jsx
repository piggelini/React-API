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

    const { email, adress } = user;

    return (
        <div >
            <p>User:{userId}</p>
            <p>E-mail:{email}</p>
            <p>City:{adress.city}</p>
        </div>
    )
}