import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'

function User() {
    const [user, setUSer] = useState({})
    const [isLoading, setLaoading] = useState(true)
    const { id } = useParams()



    useEffect(() => {
        axios(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((res) => setUSer(res.data))
            .finally(() => setLaoading(false))
    }, [id])

    return (
        <div>
            <h1>User Detaile</h1>
            {
                isLoading && <h1>Loading...</h1>
            }
            {!isLoading && <code>{JSON.stringify(user)}</code>}

            <br />
            <br /><br />


            <Link to={`/user/${parseInt(id) < 10 ? parseInt(id) + 1 : 1}`}>Next User ({parseInt(id) < 10 ? parseInt(id) + 1 : 1})</Link>
        </div>
    )
}

export default User