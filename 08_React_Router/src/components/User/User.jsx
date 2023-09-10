import { useParams } from "react-router-dom"

const User = () => {
    const { id } = useParams()
  return (
    <div className="text-center font-semibold text-xl py-2 bg-slate-500 text-white">User : {id}</div>
  )
}

export default User