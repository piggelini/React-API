import UserInfo from "./UserInfo"
import { setState } from "react";


export default function Post(props) {
    const [user, setUser] = setState(null);


    const getUser = (id) => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                setUser(json);
            });
    }

    const { title, text, userId } = props;
    return (
        <article>
            <h2>{title}</h2>
            <p>{text}</p>
            <button>Info</button>
            {user && <UserInfo user={user} getUser={getUser} userId={userId} />}
        </article>
    )
}