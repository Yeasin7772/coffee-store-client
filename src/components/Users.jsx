import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import Swal from "sweetalert2";

const Users = () => {

    const loadedUsers = useLoaderData()
    const [users, setUsers] = useState(loadedUsers)
    console.log(loadedUsers);

    const handelDelete = (id) => {

        fetch(`https://coffee-store-server-afhntddnj-yeasin-mollas-projects.vercel.app/user/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {

                    Swal.fire(
                        'Deleted!',
                        'Your users has been deleted.',
                        'success'
                    )

                    const remainingUsers = users.filter(user => user._id !== id)
                    setUsers(remainingUsers)
                }
            })

    }



    return (

        <div>
            <h2>Users: {users.length}</h2>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Create At </th>
                            <th>Last Login</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            users.map(user => <tr key={user._id}>
                                <th>1</th>
                                <td>{user.email}</td>
                                <td>{user.createdAt}</td>
                                <td>{user.lastLoggedAt}</td>
                                <td>
                                    <button onClick={() => handelDelete(user._id)}
                                        className="btn">x</button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;