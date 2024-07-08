import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../redux/store"
import { setName } from "../redux/userSlice"
import { FormEvent, useRef } from "react"


const User = () => {
  const user = useSelector((state: RootState) => state.userStorage.name)
  const input = useRef<HTMLInputElement>(null)
  const dispatch = useDispatch()

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (input.current && input.current.value.length > 0) {
      dispatch(setName(input.current.value))
    }
  }
  return (
    <>
      <div className="container">
        <div className='item'>
          <h1>User: {user}</h1>
          <form onSubmit={(e) => handleSubmit(e)}>
            <input ref={input} type="text" placeholder="Enter user name" />
            <button type="submit">Submit</button>
          </form>

        </div>
      </div>
    </>
  )
}

export default User