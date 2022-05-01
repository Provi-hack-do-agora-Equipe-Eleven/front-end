import plasticCaps from '../../assets/icons/plasticCaps.svg'
import { Link } from 'react-router-dom'
import "./style.css";

const ProjectHeader = () => {
    return (
        <div>
            <div className='project-header'>
                <img src={plasticCaps} />
                <div className='project-title'>
                    <h1>Tampinha</h1>
                    <h1>legal</h1>
                </div>
            </div>
            <div className='project-routes'>
                <Link to='/'><span>Home</span></Link>
                <span> / </span>
                <Link to='/projects'><span>Projetos</span></Link>
                <span> / </span>
                <Link to='#'><span>Tampinha legal</span></Link>
            </div>
        </div>
    );
};

export default ProjectHeader;