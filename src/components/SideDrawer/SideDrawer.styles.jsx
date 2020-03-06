import styled from 'styled-components'

export const SideDrawerStyle = styled.div`
position:fixed;
max-width:70%;
height:100%;
left:0;
top:0;
z-index:200;
background-color:white;
padding:32px 16px;
box-sizing:border-box;
transition: transform 0.3s ease-in-out;

@media (min-width : 500px) {
    display:none;
}

`