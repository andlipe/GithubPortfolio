import React from "react";
import { Container, BackgroundBlue, MarkdownContainer, EmptyDiv, ProjectList, BlueEmptyDiv, Next, Prev } from './styles.js';
import ReactMarkdownWithHtml from "react-markdown/with-html";
import Projects from "../components/projects/Projects.jsx";
import { AnimatePresence } from "framer-motion";



function Portfolio() {
  const [userData, setUserData] = React.useState({});
  const [markdown, setMarkdown] = React.useState('');
  const [repos, setRepos] = React.useState([]);
  const [page, setPage] = React.useState(1);

  React.useEffect(() =>  {
    fetch('https://api.github.com/users/andlipe', {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then((response) => response.json())
      .then(result => setUserData(result))
  }, [])
  
  React.useEffect(() =>  {
    fetch(`https://raw.githubusercontent.com/${userData.login}/${userData.login}/master/README.md`)
      .then((response) => response.text())
      .then(result => setMarkdown(result)) 
  }, [userData])

  React.useEffect(() => {
    fetch(`${userData.repos_url}?page=${page}&per_page=3&sort=updated`,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }).then((response) => response.json())
      .then(result => setRepos(result))
  }, [page, userData])
  
  const fetchRepos =  async ( nextPage ) => {
    setPage(page + nextPage)
    if(page < 1) {
      setPage(1)
    }
  }
  return (
    <Container>
      <BackgroundBlue>
            <div className="profile_photo">
              <img src={userData.avatar_url} alt="Github Avatar"/>
            </div>
            <MarkdownContainer>
              <div className="div_markdown">
                <ReactMarkdownWithHtml source={markdown} allowDangerousHtml/>
              </div>  
        </MarkdownContainer>
      </BackgroundBlue>
      <EmptyDiv />
      <BackgroundBlue>
        <h1>PROJECTS</h1>
      </BackgroundBlue>
    
      <ProjectList>
      <AnimatePresence initial={false} exitBeforeEnter>
      {repos ? 
          repos.map(repo => (
            <Projects 
              key={repo.id} 
              repo={repo} 
              user={repo.owner.login}
            />
          ))
        :
          <h2>Sem Projetos cadastrados</h2>
        }
          <Next onClick={() => fetchRepos(1)}>
            {">"}
          </Next>
          <Prev onClick={() => fetchRepos(-1)}>
            {"<"}
          </Prev>
          </AnimatePresence>
        </ProjectList>
      <BlueEmptyDiv />
    </Container>
  );
}

export default Portfolio;
