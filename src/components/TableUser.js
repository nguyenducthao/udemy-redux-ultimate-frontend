import axios from "axios"
import { useEffect, useState } from "react"
import { Container, Table } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { fetchAllUsers } from "../action/actions"

const TableUser = (props) => {
    // const [listUsers, setListUsers] = useState([])
    const listUsers = useSelector((state) => state.user.listUsers)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchAllUsers())
    }, [])
    const handleOnDeleteUser = (user) => {
        console.log('data: ', user)
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
                    {listUsers && listUsers.length > 0 && listUsers.map((item, index) => {
                        return (
                            <tr key={`users-${index}`}>
                                <td>{index + 1}</td>
                                <td>{item.email}</td>
                                <td>{item.username}</td>
                                <td>
                                    <button className="btn btn-danger" onClick={() => handleOnDeleteUser(item)}>Delete</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </Container>
    )
}
export default TableUser