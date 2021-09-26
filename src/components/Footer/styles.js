import styled from "styled-components";

export const FooterContainer = styled.div `
    display: flex;
    text-align: left;
    
    .contato-container {
        display: flex;
        width: 33%;
        background-color: white;
        
        .redes-sociais {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            width: 50%;
            padding: 2rem 2rem 2rem 4rem;

            img {
                width: 140px;
            }

            p {
                text-align: left;
                font-size: .75rem;
            }

            .icones {
                display: flex;
                margin-top: auto;

                a {
                    margin-right: 1rem;
                    
                    svg {
                        width: 18px;
                        fill: black;
                    }
                }
            }

        }

        .links-container {
            display: flex;
            flex-direction: column;
            width: 50%;
            padding: 2rem 0;

            a {
                color: black;
                font-size: 12px;
                width: 100%;
                max-width: 130px;
                text-decoration: none;
                text-align: left;
                border-bottom: 1px solid #707070;
                padding: .5rem 0;
                font-weight: 600;
            }
        }
    }
    
    .contry-container {
        display: flex;
        width: 65%;
        background: #f4f4f4;
        padding: 2rem 4rem;

        .contry {
            padding: 0 2rem;
            text-align: left;

            h2 {
                font-size: 16px;
                font-weight: bold;
            }

            p {
                font-size: 12px;
            }
        }
    }
    
    @media (max-width: 1024px){
        flex-direction: column;
        text-align: center;

        .contato-container {
            width: 100%;
            flex-direction: column;
            align-items: center;

            .redes-sociais {
                flex-direction: column;
                align-items: center;
                width: 80%;
                padding: 2rem 0 0;
            }

            .links-container {
                width: 80%;

                a {
                    width: 100%;
                    text-align: center;
                    max-width: 100%;
                }
            }
        }

        .contry-container {
            flex-direction: column;
            align-items: center;
            width: 100%;
            padding: 0 0 2rem;

            .contry {
                width: 80%;
            }
        }
    }
`