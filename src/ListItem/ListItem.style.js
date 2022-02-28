import styled from 'styled-components';

export const Item = styled.li`
    width: 20%;
    border: 1px solid #CCC;
    font-family: helvetica;
    border-radius: 16px;
    margin-bottom: 4px;
    padding: 8px 0;
    text-align: center;
    margin: 16px auto;
    box-shadow: #CCC 0 0 8px;
    cursor: pointer; 
    transition: background-color .2s;
    background-color: ${(props) => props.selected ? '#88F' : 'white'};

    &:hover {
        background-color: ${(props) => props.selected ? '#66D' : '#CEC'};
    }
`;