import { Container, CardImage, CardContent, Button } from './styles';
// import { useNavigate } from 'react-router-dom';
// import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const ProjectCard = ({ id, title, description, source }) => {
  const { t } = useTranslation();
  return (
    <Container>
      <CardImage src={source} alt='title'/>
      <CardContent>
        <h1>{title}</h1>
        <p>{description}</p>
      </CardContent>
      <Button onClick={()=> console.log('click')}>
        {t('seeMore')}
      </Button>
    </Container>
  );
};

export default ProjectCard;
