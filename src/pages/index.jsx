import React from "react";
import Header from "../components/header/Header.jsx";
import MarkdownContainer from "../components/markdownContainer/MarkdownContainer.jsx";
import ProjectsContainer from "../components/projectsContainer/ProjectsContainer.jsx";

import { Container, Footer } from '../styles/styles.js';

export async function getStaticProps(context) {
 const data = await fetch(`https://api.github.com/users/andlipe`, {
    headers : {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  }).then((response) => response.json())

  return {
    props: {
        data
    }
  }
}

function Portfolio({ data }) {
  const [userData, setUserData] = React.useState({});
  const [markdown, setMarkdown] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(true);
  const isInitialMount = React.useRef(true);

  React.useEffect(() =>  {
    setUserData(data);
    setIsLoading(false);
  }, [data])
  
  React.useEffect(() =>  {
    if (isInitialMount.current) {
        isInitialMount.current = false;

    } else {
      fetch(`https://raw.githubusercontent.com/${userData.login}/${userData.login}/master/README.md`)
      .then((response) => response.text())
      .then(result => setMarkdown(result))
    }
  }, [userData])
  
  
  if(!isLoading) {
  return (
    <Container > 
      <Header photoUrl={userData.avatar_url} />
        <MarkdownContainer markdown={markdown}/>
        <ProjectsContainer  reposUrl={userData.repos_url} initialMount={isInitialMount} userData={userData}/>
      <Footer />
    </Container>
  );
}
  return(
    <Header>
        <h1>Loading</h1>
    </Header>
  )
}

export default Portfolio;
