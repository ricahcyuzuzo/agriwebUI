import styled from 'styled-components';
import { Button } from 'react-bootstrap';

export const SectionOne = styled.div`
    font-family: 'Urbanist', sans-serif;
    min-height: 700px;
`;

export const Row = styled.div`
    display: flex;
    justify-content: space-between;
    width: 90%;
    margin: auto;
    margin-top: 90px;
`

export const Col = styled.div`
    margin-top: 100px;
`

export const H1 = styled.h1`
    color: green;
    font-weight: bolder;
    margin-top: 150px;
    margin-right: 100px;
    font-size: 47px;
    font-family: 'Urbanist', sans-serif;

`

export const H3 = styled.h3`
    font-family: 'Urbanist', sans-serif;
    font-size: 25px;
    color: green;
    text-align: center;
    margin-top: 20;
`

export const P = styled.p`
    font-size: 20px;
    font-family: 'Urbanist', sans-serif;
    margin-top: 20px;
    margin-left: 5px;
`

export const Image = styled.img`
    width: 900px;
`

export const Buttons = styled(Button)`
    font-size: 20px;
    font-weight: bold;
    font-family: 'Urbanist', sans-serif;
    margin-top: 15px;
`

export const Card = styled.div`
    background-color: #fff;
    box-shadow: 0 10px 40px 0 rgba(0, 0, 0, 0.2), 0 10px 10px 0 rgba(255, 255, 255, 0.19);
    width: 20%;
    min-height: 400px;
    padding-bottom: 20px;
    padding-top: 20px;
    border-radius: 20px;
    font-family: 'Urbanist', sans-serif;

`
export const SectionTwo = styled.div`
    margin-top: 100px;
`