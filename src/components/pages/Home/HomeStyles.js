import styled from 'styled-components';
import { Button } from 'react-bootstrap';

export const SectionOne = styled.div`
    font-family: 'Urbanist', sans-serif;
    min-height: 700px;

`;

export const Row = styled.div`
    display: flex;
    width: 70%;
    margin: auto;
    margin-top: 90px;
    justify-content: space-between;

    @media screen and (max-width: 930px){
        flex-wrap: wrap-reverse;
    }
`

export const Col = styled.div`
    margin-top: 100px;

    @media screen and (max-width: 930px){
        flex-wrap: wrap-reverse;
    }
`

export const PP = styled.p`
    @media screen and (max-width: 930px){
        width: 90%;
    }
`

export const H1 = styled.h1`
    color: green;
    font-weight: bolder;
    margin-top: 150px;
    margin-right: 100px;
    font-size: 47px;
    font-family: 'Urbanist', sans-serif;

    @media screen and (max-width: 930px) {
        margin-left: -40px;
        width: 102%;
        margin-top: -30px;
    }

`

export const H3 = styled.h3`
    font-family: 'Urbanist', sans-serif;
    font-size: 20px;
    color: green;
    text-align: center;
    margin-top: 20;
`

export const P = styled.p`
    font-size: 16px;
    font-family: 'Urbanist', sans-serif;
    margin-top: 20px;
    margin-left: 5px;

    @media screen and (max-width: 930px){
        margin-left: -35px;
        text-align: justify;
    }
`

export const Image = styled.img`
    width: 400px;
    margin-left: -80px;

    @media screen and (max-width: 930px){
        display: block;
    }
`

export const Buttons = styled(Button)`
    font-size: 20px;
    font-weight: bold;
    font-family: 'Urbanist', sans-serif;
    margin-top: 15px;

    @media screen and (max-width: 930px){
        margin-left: -35px;
        width: 100%;
    }
`

export const Card = styled.div`
    background-color: #fff;
    box-shadow: 0 10px 40px 0 rgba(0, 0, 0, 0.2), 0 10px 10px 0 rgba(255, 255, 255, 0.19);
    width: 200px;
    min-height: 300px;
    padding-bottom: 20px;
    padding-top: 20px;
    border-radius: 20px;
    font-family: 'Urbanist', sans-serif;

    @media screen and (max-width: 930px){
        width: 90%;
        margin-top: 50px;
        margin: auto;
    }

`
export const SectionTwo = styled.div`
    margin-top: 100px;
`