import styled from 'styled-components';

export const Container = styled.div`
   display: flex;
  flex-direction: column;
  justify-content: center;
  align-content:center;

  width: 100%;
  height: 100%;
    h2{
        text-align:center;
        text-align: top;
        color: #fff;
    }

    header{

        display: flex;
        flex-direction:row ;
        justify-content: center;
        align-items: center;
        width: 80%;
        color: #fff;   
        justify-content: space-between;

        p{
            display: flex;
            text-align: center;
            font-size: 20px;
            color: #fff;
        }
    }

`;

export const Content = styled.div`
    height: 100%;
    padding: 2%;

    background: rgba(255, 255, 255, 0.1);
    ul{
        justify-content: space-between;
    }
`;

export const ExitButton = styled.button`
    margin: 15px 15px 0;
    height: 44px;
    width: 60%;
    background: #1974c0;
    font-weight: bold;
    color: #fff;
    border: 0;
    border-radius: 4px;
  
    font-size: 16px;
    transition: background 0.2s;


        &:hover {
         background: #135b97;
        }
    
`;

const Button = styled.button`
    margin: 15px 15px 15px 15px; 
    color: #fff;
    display:flex;
    flex-direction:row;
    justify-content: center;
    align-items: center;
    text-align: center;
    border: 0;
    padding: 5px;
    height: 80% ;
    width: 10%;
    border-radius: 4px;
    transition: background 0.2s;
`;

export const DeleteButton = styled(Button)`
    background: #c70c0c;

    &:hover {  
        background: #a30d0d;
    }
`;

export const EditButton = styled(Button)`
    background: #FFCC00;

    &:hover {  
        background: #cfa80c;
    }
`;

export const User = styled.ul` 
    background: rgba(250, 250, 255, 0.15);
    margin: 10px 5px 5px 5px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 44px;
    text-align: center;
    color: #fff;
    list-style-type: none;

    width: 100%;

    p{
        color: #fff;
        margin: 5px 5px 5px 5x;
        width: 50%;
        text-align:initial;
    
    }
`;

