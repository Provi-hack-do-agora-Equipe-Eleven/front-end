import './style.css';
import rectangle from '../../assets/icons/Rectangle.svg';

const OtherProjects = () => {
    const projects = [
        { image: rectangle, title: "Coleta de plástico", description: "Um projeto tripartite pela recuperação do estuário de Santos e São Vicente." },
        { image: rectangle, title: "Coleta de plástico", description: "Um projeto tripartite pela recuperação do estuário de Santos e São Vicente." },
        { image: rectangle, title: "Coleta de plástico", description: "Um projeto tripartite pela recuperação do estuário de Santos e São Vicente." }
    ]

    return (
        <div className='new-projects'>
            <h1>/Outros projetos</h1>
            <div className='flex other-projects'>
                {projects.map((project) => (
                    <div className='flex'>
                        <img src={project.image} />
                        <div>
                            <p className='project-title-info'>{project.title}</p>
                            <p className='project-description'>{project.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OtherProjects;