import React from 'react';
import Modal from '../modal/Modal';
import { ProjectBox } from './styles';
import GitHubMark from '../../assets/GitHub-Mark.png';

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
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeIn", stiffness: 300, damping: 30, duration: 0.5 }}

            onClick={() => handleClick()}
        >
            <div className="cardHeader">
                <h3>
                    {repo.name}
                </h3>
            </div>
            <p>
                {repo.description}
            </p>
            <div className="cardFooter">
                <span>
                    {languages}
                </span>
                <a href={repo.html_url}>
                    <img src={GitHubMark} alt="Github Icon"/>
                </a>
            </div>
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
