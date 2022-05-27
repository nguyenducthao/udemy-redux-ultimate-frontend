import { Button, Container, Form } from "react-bootstrap"

const FormAddNew = (props) => {
    return (
        <>
            <Container>
                <br />
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Email address: </Form.Label>
                        <Form.Control type="email" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Password:</Form.Label>
                        <Form.Control type="password" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Username:</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>
                    <Button variant="primary">Create</Button>
                </Form>
            </Container>
        </>
    )
}
export default FormAddNew