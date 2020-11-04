import React from 'react';
import { AnimatePresence } from "framer-motion";
import { ModalDiv, ModalCard } from './styles';
import ReactMarkdownWithHtml from 'react-markdown';

const backdrop = {
    visible: {opacity: 1},
    hidden: { opacity: 0 }
}

 

const Modal = ({ showModal, setShowModal, projectName, repoOwner }) => {
    const [markdown, setMarkdown] = React.useState('');

    React.useEffect(() =>  {
        
        fetch(`https://raw.githubusercontent.com/${repoOwner}/${projectName}/master/README.md`)
            .then((response) => response.text())
            .then(result => setMarkdown(result))
    }, [projectName])

    return (
        <AnimatePresence exitBeforeEnter onExitComplete={() => setShowModal(false)}>
            { showModal && (
                <ModalDiv className="backdrop"
                variants={backdrop}
                initial="hidden"
                animate="visible"
                exit="hidden"
                >
                    <ModalCard>
                        <button onClick={() => setShowModal(false)}>
                            X
                        </button>
                        <ReactMarkdownWithHtml source={markdown} allowDangerousHtml/>
                    </ModalCard>
                </ModalDiv>
            )
            }
        </AnimatePresence>
    );
}

export default Modal;
