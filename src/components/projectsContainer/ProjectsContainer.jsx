import React from 'react';
import { AnimatePresence } from "framer-motion";
import Projects from "../projects/Projects";
import { ProjectList, Button } from './styles'

const ProjectsContainer = ({ reposUrl, initialMount, userData }) => {
    const [repos, setRepos] = React.useState([]);
    const [page, setPage] = React.useState(1);

    const loadMoreRepos =  ( nextPage ) => {
        setPage(page + nextPage)
        if(page < 1) {
        setPage(1)
        }
    }

    React.useEffect(() => {
        if (initialMount.current) {
        initialMount.current = false;

        }else {console.log(reposUrl)
        fetch(`${reposUrl}?page=${page}&per_page=3&sort=updated`,{
            headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
            }
        }).then((response) => response.json())
            .then((result) =>  {
            if(repos.length > 0) {
                result.map(repo => {
                    setRepos(previousRepos => [...previousRepos, repo])
                })
            } else {
                setRepos(result)
            }
            })
      }
    }, [page, userData])

    
    return (
            <AnimatePresence initial={false} >   
            <h1 className="projectsH1">PROJECTS</h1>
            <ProjectList>  
            {repos ? 
                repos.map(repo => (
                <Projects
                key={repo.id} 
                repo={repo} 
                user={userData.login}
                />
                ))
                :
                <h2>Sem Projetos cadastrados</h2>
                }
            </ProjectList>
            <Button onClick={() => loadMoreRepos(1)}>CARREGAR MAIS</Button>
        </AnimatePresence>
    );
}

export default ProjectsContainer;
