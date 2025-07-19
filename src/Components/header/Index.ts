import styled from "styled-components";


export const HeaderStyle = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0;

    nav{
        display: flex;
        gap: 0.875rem;
        
    }
`;

export const NavBase = styled.div`
    display: flex;
    align-items: center;
    font-size: 0.875rem;
    padding: 0.4rem;
    border-radius: 5px;
    cursor: pointer;
`;

export const Location = styled(NavBase)`
    background-color: ${props => props.theme.purple_light};
    color: ${props => props.theme.purple};
`

export const Buy = styled(NavBase)`
    background-color: ${props => props.theme.yellow_light};
    color: ${props => props.theme.yellow};

`