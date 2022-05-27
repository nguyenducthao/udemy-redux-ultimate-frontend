import axios from "axios"
import { useEffect, useState } from "react"
import { Container, Table } from "react-bootstrap"

const TableUser = (props) => {
    const [listUsers, setListUsers] = useState([])
    const fetchAllUser = async () => {
        const res = await axios.get('http://localhost:8080/users/all')
        const data = res && res.data ? res.data : []
        setListUsers(data)
    }
    useEffect(() => {
        fetchAllUser()
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