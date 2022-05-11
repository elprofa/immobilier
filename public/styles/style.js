import { createGlobalStyle } from "styled-components";
import { theme } from "../../theme";

export const GlobalCSS = createGlobalStyle`
     * {
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }
    
    body {
        font-family: source-sans-pro, sans-serif;
        font-weight: 400;
        font-style: normal;
        width:100%;
        overflow-x:hidden
    }
    .kingSection{
        @media (max-width: 471px)
        {
            margin: 30px 0px !important;
            padding: 30px 0px !important;
        }
    }

    
    }

    .sectionHeader
    {
        margin-top:${theme.margins.KingSection};
        margin-bottom:0;
        margin-left:0;
        margin-right:0;
        padding:${theme.margins.KingSection};
        padding-left:0;
        padding-right:0;
    }

    .sectionLab{
        margin-top:${theme.margins.KingSection};
       
    }
    
    img
    {
        max-width:100%;
    }
    

    // animate paragraphe with css
    .char{
        animation: an 0.5s ease-out 1 both;
        display: inline-block;
    }

    @keyframes an{
        from{
            opacity: 0;
            transform: perspective(500px) translate3d(-35px, -40px, -150px) rotate3d(1, -1, 0, 35deg);
        }
        to{
            opacity: 1;
            transform: perspective(500px) translate3d(0, 0, 0);
        }
    }
    
`;