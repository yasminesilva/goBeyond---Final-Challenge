import styled from "styled-components";

export const HeaderContainer = styled.div `
    display: flex;
    flex-wrap: wrap;
    background: black;
    align-items: center;
    justify-content: space-between;
    height: 122px;
    padding: 0 5%;
    
    img {
        width: 170px;
        margin-bottom: 20px;
    }
    
    svg{
        display: none;
        fill: white;
        font-size: 30px;
    }

    a{
        height: 118px;
        align-items: center;
        display: flex;
        font-size: 1.2em;
        font-weight: normal;
        margin-left: 20px;
        text-decoration: none;
        color: white;

        :hover{
            border-bottom: 4px solid white;
            color: #888;
        }
    }

    .links-container{
        height: 100%;
        display: flex;
    }

    @media (max-width: 1024px){
        height: auto;
        padding: 5%;

        .links-container {
            height: 0;
            width: 100%;
            flex-direction: column;
            overflow: hidden;
            margin-top: 24px;
            transition: all .3s ease-in-out;

            &.open {
                height: 160px;
            }
        }

        a{
            justify-content: center;
            width: 100%;
            height: auto;
            border-bottom: 1px solid white;
            margin-left: 0;
            font-size: 1.1em;
            padding: 8px;
        }

        svg {
            display: block;
        }

        .logo-container{
            display: flex;
            height: 100%;
            width: 100%;
            justify-content: space-between;
            align-items: center;
        }

        img{
            margin-bottom: 0;
        }
    }
  
`