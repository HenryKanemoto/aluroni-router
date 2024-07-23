import cardapio from 'data/cardapio.json';
import styles from './Inicio.module.scss';
import stylesTema from 'styles/Tema.module.scss';

import nossaCasa from 'assets/nossa_casa.png';
import { useNavigate } from 'react-router-dom';
import { Prato } from 'types/Prato';

export default function Inicio() {
  let pratosSelecionados = [...cardapio];
  pratosSelecionados = pratosSelecionados.sort(() => .5 - Math.random()).splice(0, 3);
  const navigate = useNavigate();

  function redirecionarParaDetalhes(prato: Prato) {
    navigate(`/pratos/${prato.id}`, {state: {prato}});    
  }

  return(
    <section>
      <h3 className={stylesTema.titulo}>
                Recomendações da cozinha     
      </h3>
      <div className={styles.recomendados}> 
        {pratosSelecionados.map(prato => (
          <div key={prato.id} className={styles.recomendado}>
            <div className={styles.recomendado__imagem}>
              <img src={prato.photo} alt={prato.title}/>
            </div>
            <button 
              className={styles.recomendado__botao}
              onClick={() => redirecionarParaDetalhes(prato)}
            >
                            Ver mais
            </button>
          </div>
        ))}
      </div>
      <h3 className={stylesTema.titulo}>Nossa Casa</h3>
      <div className={styles.nossaCasa}>
        <img src={nossaCasa} alt="Casa da Aluroni" />
        <div className={styles.nossaCasa__endereco}> 
          Rua Vargueiro, 3185 <br /> <br /> Vila Mariana, SP  
        </div>
      </div>
    </section>
  );
}