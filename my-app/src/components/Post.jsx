import UserInfo from "./UserInfo"
import { useState } from "react";


export default function Post(props) {
    const [user, setUser] = useState(null);
    const [showInfo, setShowInfo] = useState(false);

    const getUser = (id) => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((response) => response.json())
            .then((json) => {
                setUser(json);
            });
    }

    const { title, text, userId } = props;
    return (
        <article>
            <h2>{title}</h2>
            <p>{text}</p>
            <button onClick={() => setShowInfo(true)}>Info</button>
            {<UserInfo user={user} getUser={getUser} userId={userId} />}
        </article>
    )
}