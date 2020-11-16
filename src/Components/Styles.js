import {createGlobalStyle} from "styled-components";
import reset from "styled-reset";


const GlobalStyles = createGlobalStyle`
${reset};
a{
    text-decoration:none;
    color:inherit;
}
*{
    box-sizing:border-box;
}
body{
    font-family: 'Noto Sans KR', sans-serif;
    background-color: ${props=>props.isDarkMode ? props.theme.dark.secondary : props.theme.bright.secondary};

}

textarea{
    background-color: ${props=>props.isDarkMode ? props.theme.dark.secondary : props.theme.bright.secondary};
    color: ${props=>props.isDarkMode ? props.theme.bright.secondary : props.theme.dark.secondary};
    border-color: ${props=>props.isDarkMode ? props.theme.dark.border.primary : props.theme.bright.border.primary};
}

select{
    background-color: ${props=>props.isDarkMode ? props.theme.dark.secondary : props.theme.bright.secondary};
    color: ${props=>props.isDarkMode ? props.theme.bright.secondary : props.theme.dark.secondary};
    border-color: ${props=>props.isDarkMode ? props.theme.dark.border.primary : props.theme.bright.border.primary};
}

.module-label{
    color:${props=>props.isDarkMode ? props.theme.dark.label : props.theme.bright.label};
}
.header{
    background-color:${props=>props.isDarkMode ? props.theme.dark.primary : props.theme.bright.primary};
}

.text-primary{
    color:${props=>props.isDarkMode ? props.theme.dark.text.primary : props.theme.bright.text.primary}
}
.language-type{
    color:${props=>props.isDarkMode ? props.theme.dark.langType : props.theme.bright.langType}
}
.similarity{
    color:${props=>props.isDarkMode ? props.theme.dark.similarity : props.theme.bright.similarity}
}
.version{
    background-color:${props=>props.isDarkMode ? props.theme.dark.version : props.theme.bright.version}
}

.trans-tab {
    color:${props=>props.isDarkMode ? props.theme.dark.tab : props.theme.bright.tab}
}

.logo {
    color:${props=>props.isDarkMode ? props.theme.dark.logo : props.theme.bright.logo}
}

.button-1 {
    background-color:${props=>props.isDarkMode ? props.theme.dark.button1.primary : props.theme.bright.button1.primary};
    &:hover{
        background-color:${props=>props.isDarkMode ? props.theme.dark.button1.secondary : props.theme.bright.button1.secondary};
    }
}

.button-2 {
    background-color:${props=>props.isDarkMode ? props.theme.dark.button2.primary : props.theme.bright.button2.primary};
    &:hover{
        background-color:${props=>props.isDarkMode ? props.theme.dark.button2.secondary : props.theme.bright.button2.secondary};
    }
}

:root{
    --animate-delay: 0.5s;
}
`;

export default GlobalStyles;