import React from 'react';
import Modal from '../modal/Modal';
import { ProjectBox } from './styles';


const Projects = (props) => {
    const [repo, setRepo] = React.useState({});
    const [languages, setLanguages] = React.useState([]);
    const [showModal, setShowModal] = React.useState(false);

    const handleClick = () => {
        setShowModal(true);
    }

    React.useEffect(() => {
        const repoFromProp = props.repo;
        
        setRepo(repoFromProp)
    }, []);

    React.useEffect(() => {
        setLanguages(repo.language);
    }, [repo])
    if(repo) {
    return (
        <>
        <ProjectBox 
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ ease: "easeOut", duration: 0.3 }}
            whileHover={{ scale: 1.1 }} 
            whileTap={{ scale: 0.95 }} 
            onClick={() => handleClick()}
        >
            <h3>{repo.name}</h3>
            <p>
                {repo.description}
            </p>
            <span>
                {languages}
            </span>
        </ProjectBox>
        <Modal showModal={showModal} setShowModal={setShowModal} projectName={repo.name} repoOwner={props.user} />
        </>
    );
    } else {
        return(
            <ProjectBox>
                Não encontrado repositórios
            </ProjectBox>
        )
    }
}

export default Projects;
