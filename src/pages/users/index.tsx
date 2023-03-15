/* eslint-disable react-hooks/rules-of-hooks */
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
    width: 90%;
    margin: 0 auto;
    position: relative;
`;

const ButtonGroup = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 50%;
    margin: 0 auto;
    height: 100vh;

    button {
        border: 1px solid rgba(0, 0, 0, 0.1);
        padding: 1rem;
        border-radius: 3px;
        background: 
    }

             
    & .btn-grad {
        background-image: linear-gradient(to right, #314755 0%, #26a0da  51%, #314755  100%);
        margin: 10px;
        padding: 15px 45px;
        text-align: center;
        text-transform: uppercase;
        transition: 0.5s;
        background-size: 200% auto;
        color: white;            
        box-shadow: 0 0 20px #eee;
        border-radius: 10px;
        display: block;
      }

    & .btn-grad:hover {
        background-position: right center; /* change the direction of the change here */
        color: #fff;
        text-decoration: none;
      }
     
`;

export default function index(){

    const navigate = useNavigate();

    const handleUser = (nationality: string) => {
        navigate(`/users/nationality/${nationality}`);
    }

    return(
        <Container>
            <ButtonGroup>
                <button className='btn-grad' type='button' onClick={() => handleUser('es')}>España</button>
                <button className='btn-grad' type='button' onClick={() => handleUser('br')}>Brasil</button>
                <button className='btn-grad' type='button' onClick={() => handleUser('fr')}>Francia</button>
            </ButtonGroup>            
        </Container>
    )
}
