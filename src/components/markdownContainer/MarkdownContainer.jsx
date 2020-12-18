import React from 'react';
import ReactMarkdownWithHtml from "react-markdown/with-html";
import { MarkdownDiv } from "./styles";



const MarkdownContainer = (props) => {
    return (
        <MarkdownDiv>
            <div className="div_markdown">
                <ReactMarkdownWithHtml source={props.markdown} allowDangerousHtml/>
            </div>  
        </MarkdownDiv>
    );
}

export default MarkdownContainer;
