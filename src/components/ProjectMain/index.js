import logoTampinha from '../../assets/icons/logoTampinha.svg';
import SocialMedia from './SocialMedia';
import "./style.css";

const ProjectMain = () => {
  return (
    <div>
      <div className='flex'>
        <div className='project-info'>
          <h3>COLETA DE PLÁSTICO</h3>
          <p>O programa incentiva as pessoas a recolher todo tipo de tampa plástica e depois doa o dinheiro obtido com a venda do material a diversas entidades assistenciais (como ONGs e Apaes).
            Criado em Porto Alegre (RS), hoje tem mais de 2.000 pontos de coleta espalhados pelo Brasil e arrecadou mais de R$ 700 mil entre 2016 e 2020, recolhendo mais de 222 milhões de tampinhas.
            O programa não recebe comissões e/ou gratificações sobre o material coletado. Todo o valor arrecadado com a venda das tampinhas é destinados 100% para entidades assistenciais participantes.</p>
        </div>
        <div className='project-company'>
          <img src={logoTampinha} alt='logo' />
          <div className='project-social'>
            <div className='border-social flex'>
              <p>Redes Sociais</p>
              <SocialMedia />
            </div>
            <p>O Tampinha Legal é o maior programa socioambiental de caráter educativo em economia circular de iniciativa da indústria de transformação do plástico da América Latina.</p>
          </div>
        </div>
      </div>
      <div className='information flex'>
        <button>Participar</button>
        <button>Apoiar</button>
        <p>Compartilhe</p>
        <SocialMedia />
      </div>
    </div>
  );
};

export default ProjectMain;