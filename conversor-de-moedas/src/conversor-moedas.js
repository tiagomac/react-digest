import React, {useState} from 'react';
import logo from './logo.svg';
import './conversor-moedas.css';
import {Jumbotron, Button, Form, Col, Spinner, Alert, Modal} from 'react-bootstrap';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDoubleRight} from "@fortawesome/free-solid-svg-icons";
import ListarMoedas from './listar-moedas';

function ConversorMoedas() {

    const [valor, setValor] = useState('1');
    const [moedaDe, setMoedaDe] = useState('BRL');
    const [moedaPara, setMoedaPara] = useState('AUD');
    const [exibirSpinner, setExibirSpinner] = useState(false);
    const [formValidado, setFormValidado] = useState(false);


    function handleValor(event) {
        setValor(event.target.value.replace(/\D/g, ''));
    }

    function handleMoedaDe(event) {
        setMoedaDe(event.target.value);
    }

    function handleMoedaPara(event) {
        setMoedaPara(event.target.value);
    }

    function converter(event) {
        event.preventDefault();
        setFormValidado(true);
        if (event.currentTarget.checkValidity() === true) {
            alert('CORRETO');
        }
    }

    return (
        <div>
            <h1>Conversor de moedas</h1>
            <Alert variant={"danger"} show={true}>
                Erro obtendo dados de conversão, tente novamente.
            </Alert>
            <Jumbotron>
                <Form onSubmit={converter} noValidate validated={formValidado}>
                    <Form.Row>
                        <Col sm={3}>
                            <Form.Control placeholder="0"
                                          value={valor}
                                          onChange={handleValor}
                                          required/>
                        </Col>
                        <Col sm={3}>
                            <Form.Control as={'select'}
                                          value={moedaDe}
                                          onChange={handleMoedaDe}>
                                <ListarMoedas/>
                            </Form.Control>
                        </Col>
                        <Col sm={1} className={'text-center'} style={{paddingTop: '5px'}}>
                            <FontAwesomeIcon icon={faAngleDoubleRight}/>
                        </Col>
                        <Col sm={3}>
                            <Form.Control as={'select'}
                                          value={moedaPara}
                                          onChange={handleMoedaPara}>
                                <ListarMoedas/>
                            </Form.Control>
                        </Col>
                        <Col sm={2}>
                            <Button variant={'success'} type={'submit'}>
                                <span className={exibirSpinner ? null : 'hidden'}>
                                    <Spinner animation={"border"} size={"sm"}/>
                                </span>
                                <span className={exibirSpinner ? 'hidden' : null}>
                                    Converter
                                </span>
                            </Button>
                        </Col>
                    </Form.Row>
                </Form>
                <Modal show={false}>
                    <Modal.Header closeButton>
                        <Modal.Title>Conversão</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Resultado da conversão aqui...
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant={"success"}>
                            Nova conversão
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Jumbotron>
        </div>


    );
}

export default ConversorMoedas;
