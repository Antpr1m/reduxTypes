import { FC, useEffect } from "react"
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypeSelector";


const UserList: FC = () => {

	const { users, error, loading } = useTypedSelector(state => state.user)  //useSelector работающий с типами
	const { fetchUsers } = useActions()
	useEffect(() => {
		fetchUsers()
	}, [])

	if (loading) {
		return <h1>Loading...</h1>
	}
	if (error) {
		return <h1>{error}</h1>
	}

	return (
		<div>
			{users.map(user =>
				<div key={user.id}>{user.name}</div>)}
		</div>
	)
}
export default UserList