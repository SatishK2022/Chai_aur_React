import { useContext} from 'react'
import UserContext from '../context/userContext'

const Profile = () => {
    const { user } = useContext(UserContext);

  return (!user) ? <div>Please Login</div> : (
    <div>
        <h2>Welcome Back {user.username}</h2>
    </div>
  )
}

export default Profile