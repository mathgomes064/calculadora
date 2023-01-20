import styled from "styled-components";

export const WhiteSquare = styled.div`
width: 70%;
height: 500px;
display: flex;
justify-content: space-between;
align-items: center;
background-color: white;
border-radius: 5px;

    .leftDiv{
        width: 60%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .innerLeftDiv{
        width: 85%;
        height: 85%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .innerLeftDiv > h1{
        color: 	var(--gray-1);
        width: 77%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }

    .innerLeftDiv > form{
        width: 95%;
        height: 80%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 5px;

    }

    .innerLeftDiv > form >  input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
        -webkit-appearance: none;
    }

    .innerLeftDiv > form >  input{
        margin: 0;
        width: 80%;
        height: 35px;
        padding-left: 10px;
        border-radius: 5px;
        border: 1px solid var(--gray-2);
        outline: 0;
    }

    .innerLeftDiv > form > label{
        width: 81.5%;
        height: 40px;
        color: 	var(--gray-1);
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }

    .innerLeftDiv > form > span{
        font-size: 12px;
        color: var(--gray-2);
        width: 81.5%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }

    .innerLeftDiv > form > button{
        width: 100px;
        height: 35px;
        border-radius: 5px;
        border: none;
        cursor: pointer;
    }

    .innerLeftDiv > form > button:hover{
        background-color: var(--gray-2);
        transition: 244ms;
    }



    .innerLeftDiv > form > .error{
        font-size: 12px;
        color: red;
        width: 81.5%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }

    .rightDiv{
        background-color: var(--gray-3);
        width: 40%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 5px;
    }

    .rightDiv > div{
        width: 90%;
        height: 60%;
        color: var(--blue);
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .rightDiv > div > h1{
        border-bottom: 1px solid var(--blue);
    }

    .rightDiv > div > p{
        width: 60%;
    }

    .rightDiv > div > p > span{
        font-weight: bold;
    }
`;