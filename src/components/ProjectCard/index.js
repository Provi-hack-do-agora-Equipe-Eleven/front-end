import { Container, CardImage, CardContent, Button } from './styles';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const ProjectCard = () => {
  const navigate = useNavigate();
  const [project, setProject] = useState({
    id: '',
    img: '',
    title: '',
    description: '',
  });
  const { t } = useTranslation();
  useEffect(() => {
    setProject({
      id: 1,
      img: 'img.png',
      title: 'title',
      description: 'description',
    });
  }, []);

  return (
    <Container>
      <CardImage src={project?.img} />
      <CardContent>
        <h1>{project?.title}</h1>
        <p>{project?.description}</p>
      </CardContent>
      <Button onClick={() => navigate(`/project/${project?.id}`)}>
        {t('seeMore')}
      </Button>
    </Container>
  );
};

export default ProjectCard;
