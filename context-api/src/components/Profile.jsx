
import { useState,  } from 'react'
import {useUser} from '../context/UserContext'
import LoadSpin from './LoadSpin'
function Profile() {


    const { user, setUser } = useUser()
    const [isLoading, setLoading] = useState(false)
    console.log(user);
    const handleLogin = () => {
        setLoading(true)
        setTimeout(() => {
            setUser({ id: 1, username: 'ahmet', bio: 'lorem ipsun ' })
            setLoading(false)
        }, 1500)
    }

    const hanleLogout=()=>{
        setUser()
    }
    return (
        <div>
            {
                !user&& (
                    <button onClick={handleLogin}>
                        {isLoading?<LoadSpin/>:'Login'}
                        

                    
                    </button>
                    

                )
            }

            <br />

            <code>{JSON.stringify(user)}</code>

            <br />
            {
                user&& <button onClick={hanleLogout}>Logout</button>
            }

        </div>
    )
}

export default Profile