import { createGlobalStyle } from 'styled-components';
import { primary, primaryBackground, textColorBlack, textColorLightGrey } from './colors';

export const Styles = createGlobalStyle`

    @font-face {
        font-family: "Motiva Sans Light";
        src: url("/fonts/Motiva-Sans-Light.ttf") format("truetype");
        font-style: normal;
    }

    @font-face {
        font-family: "Motiva Sans Bold";
        src: url("/fonts/Motiva-Sans-Bold.ttf") format("truetype");
        font-style: normal;
    }

    @font-face {
        font-family: "Inter Bold";
        src: url("/fonts/Inter-Bold.ttf") format("truetype");
        font-style: normal;
    }

    @font-face {
        font-family: "Inter Light";
        src: url("/fonts/Inter-Light.ttf") format("truetype");
        font-style: normal;
    }

    @font-face {
        font-family: "Inter Regular";
        src: url("/fonts/Inter-Regular.ttf") format("truetype");
        font-style: normal;
    }


    body,
    html,
    a {
        font-family: 'Inter Regular', sans-serif;
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
        font-family: 'Inter Bold', serif;
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
