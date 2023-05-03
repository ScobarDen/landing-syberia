import { createGlobalStyle } from 'styled-components';
import { primary, primaryBackground, textColorBlack, textColorLightGrey } from './colors';

export const Styles = createGlobalStyle`

    body,
    html,
    a {
        font-family: 'Inter', sans-serif;
    }


    body {
        margin:0;
        padding:0;
        border: 0;
        outline: 0;
        background: ${primaryBackground};
        overflow-x: hidden;
    }

    a:hover {
        color: ${primary};
    }

    input,
    textarea {
        border-radius: 4px;
        border: 0;
        background: ${primaryBackground};
        transition: all 0.3s ease-in-out;  
        outline: none;
        width: 100%;  
        padding: 1rem 1.25rem;

        :focus-within {
            background: none;
        }
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-family: 'Inter', sans-serif;
        color: ${primary};
        font-size: 56px;
        line-height: 1.18;

        @media only screen and (max-width: 890px) {
          font-size: 47px;
        }
      
        @media only screen and (max-width: 414px) {
          font-size: 32px;
        }
    }

    p {
        color: ${textColorBlack};
        font-size: 21px;        
        line-height: 1.41;
    }

    h1 {
        font-weight: 600;
    }

    a {
        text-decoration: none;
        outline: none;
        color: ${textColorLightGrey};

        :hover {
            color: ${primary};
        }
    }
    
    *:focus {
        outline: none;
    }

    .about-block-image svg {
        text-align: center;
    }

    .ant-drawer-body {
        display: flex;
        flex-direction: column;
        text-align: left;
        padding-top: 1.5rem;
    }

    .ant-drawer-content-wrapper {
        width: 300px !important;
    }
`;
