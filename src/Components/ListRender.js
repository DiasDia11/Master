import {useState} from 'react'

export const ListRender = () => {
    const [list] = useState(["Mathers", "Pedro", "Josias"]);

    const [users, setUsers] = useState([
        {id: 1, name: "matheus", age: 31},
        {id: 2, name: "Eduardo", age: 20},
        {id: 3, name: "Jô", age: 26},
        {id: 4, name: "Paloma", age: 22},
    ]);

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 4);

        setUsers((prevUsers) => {
            console.log(prevUsers);
            return prevUsers.filter((user) => randomNumber !== user.id);
        });
    };

  return (
    <div>
        <ul>
            {list.map((item, i) => (
                <li key={i}>{item}</li>
            ))}
        </ul>
        <ul>
            {users.map((user) => (
                <li key={user.id}>
                    {user.name} - {user.age}
                </li>
            ))}
        </ul>
        <button onClick={deleteRandom}>Delete random user</button>
    </div>
  );
};

export default ListRender;