import { useEffect } from "react"
import { Container, Table } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { fetchAllUsers, deleteUserRedux } from "../action/actions"

const TableUser = (props) => {
    // const [listUsers, setListUsers] = useState([])
    const dispatch = useDispatch()
    const listUsers = useSelector((state) => state.user.listUsers)
    const isLoading = useSelector((state) => state.user.isLoading)
    const isError = useSelector((state) => state.user.isError)
    const isDeleting = useSelector((state) => state.user.isDeleting)
    useEffect(() => {
        dispatch(fetchAllUsers())
    }, [])
    const handleOnDeleteUser = (user) => {
        dispatch(deleteUserRedux(user.id))
    }
    return (
        <Container>
            <hr />
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Email</th>
                        <th>Username</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {isError ?
                        <>
                            <div>Something wrong, please try again...</div>
                        </>
                        :
                        <>
                            {isLoading ?
                                <>
                                    <tr>
                                        <td colSpan={4}>Loading</td>
                                    </tr>
                                </>
                                :
                                <>
                                    {listUsers && listUsers.length > 0 && listUsers.map((item, index) => {
                                        return (
                                            <tr key={`users-${index}`}>
                                                <td>{index + 1}</td>
                                                <td>{item.email}</td>
                                                <td>{item.username}</td>
                                                <td>
                                                    <button
                                                        className="btn btn-danger"
                                                        onClick={() => handleOnDeleteUser(item)}
                                                        disabled={isDeleting}>
                                                        Delete
                                                    </button>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </>}
                        </>
                    }
                </tbody>
            </Table>
        </Container>
    )
}
export default TableUser