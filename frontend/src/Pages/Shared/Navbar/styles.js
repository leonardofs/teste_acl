import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction:row ;
    justify-content: center;
    align-items: center;
    height: 10%;
    width: 80%;
    color: #fff;   
    justify-content: space-between;

    Link, a {      
        color: #fff;
        margin-top: 15px;
        font-size: 16px;
        opacity: 0.8;
        transition: background 0.2s;
        text-decoration: none;
        &:hover {
            opacity: 1;
        }
    }
`;
