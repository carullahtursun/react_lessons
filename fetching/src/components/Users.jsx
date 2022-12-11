import { useState, useEffect } from 'react'
import axios from 'axios'

function Users() {

    const [users, setUsers] = useState([])
    const [isloading, setLoading] = useState(true)
    useEffect(() => {

        axios('https://jsonplaceholder.typicode.com/users')
            .then((res) => setUsers(res.data))
            .catch((e) => console.log(e))
            .finally(() => setLoading(false))

    }, []);

    return (
        <div>
            <h1>users</h1>
            {
                isloading && <div>Loading...</div>
            }

            {
                users.map((user, i) => (

                    <div key={i}>
                        {user.name}
                    </div>
                )
                )

            }
        </div>
    )
}

export default Users