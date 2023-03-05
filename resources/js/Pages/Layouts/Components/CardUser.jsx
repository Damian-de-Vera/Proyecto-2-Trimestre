import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react'
import { router, usePage } from '@inertiajs/react'

function CardUser(props) {

    const { errors } = usePage().props
    const { flash } = usePage().props

    const [values, setForm] = useState({
        user1_id: props.props.userPerfil.id,
        user2_id: props.props.user.id,
        score: "",
        comment: ""
    })



    function handleChange(e) {
        const key = e.target.id;
        const value = e.target.value
        setForm(values => ({
            ...values,
            [key]: value,
        }))
    }

    function handleSubmit(e) {
        e.preventDefault()
        router.post('/rating', values)
    }



    return (
        <div class="row justify-content-center">
            <div class="col-5 ">
                <div class=" d-flex  justify-content-center my-3">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                        <Card.Body>
                            <Card.Title><h2 class="text-center">{props.props.userPerfil.name}</h2> </Card.Title>

                        </Card.Body>

                        <ListGroup className="list-group-flush">
                            <ListGroup.Item>Contacto: <strong>{props.props.userPerfil.email}</strong></ListGroup.Item>

                        </ListGroup>
                        <Card.Body>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>

                        </Card.Body>
                    </Card>
                </div>
                <div class="d-flex justify-content-center my-3 text-center">
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>Valorar</Form.Label>
                            <Form.Select id="score" name="score" value={values.score} onChange={handleChange} >
                                <option ></option>
                                <option >0</option>
                                <option >1</option>
                                <option>2</option>
                                <option >3</option>
                                <option >4</option>
                                <option>5</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label> Comentario</Form.Label>
                            <textarea class="form-control" rows="5" id="comment" value={values.comment} onChange={handleChange}></textarea>
                        </Form.Group>

                        <Button variant="success" type="submit">
                            Enviar
                        </Button>
                    </Form></div>
            </div></div>
    );
}

export default CardUser;

