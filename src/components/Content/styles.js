import styled from "styled-components";

export const ContentContainer = styled.div `
    display: flex;
    justify-content: space-between;
    background-color: black;
    padding: 0 4rem 2rem 4rem;
    
    .left-container{
        color: white;
        width: 25%;
        padding-right: 8rem;

        h2{
            -webkit-line-clamp: 4;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            height: 261px;
            line-height: 1.1;
            margin: 1.3em 0 .7em;
            text-align: left;
            width: 100%;
            font-size: 60px;
            font-weight: 600;
            overflow: hidden;
            text-overflow: ellipsis;
            line-break: anywhere;
        }

        a{
            background-color: white;
            color: black;
            height: 50px;
            max-width: 195px;
            border-radius: 50px;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            text-decoration: none;
            font-weight: bold;
            margin-bottom: 16px;

            img{
                margin-left: 16px;
            }

            :hover{
                opacity: .5;
            }
        }
    }

    .rigth-container{
        flex: 1;

        img{
            width: 100%;
            max-height: 536px;
            border-radius: 10px;
        }
    }

    @media (max-width: 1024px){
        flex-direction: column;

        .left-container, .rigth-container {
            width: 100%;
        }
    }

`

export const ThumbnailContainer = styled.div `
    display: flex;
    justify-content: space-between;
    height: 3vw;
    margin: auto 0 40px;
    
    img{
        width: 23%;
        margin-right: 11px;

        &.active{
            border: 3px solid #fff;
            border-radius: 2.5px;
        }
    }

    @media (max-width: 1024px){
        margin-top: 16px;
        height: 9vw;
        
        img {
            margin-right: 0;
        }
    }

`
