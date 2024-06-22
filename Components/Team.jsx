import first from '../Images/colab1.jpg';
import two from '../Images/cozi.jpg';
import three from '../Images/colab2.jpg';
import four from '../Images/colab3.jpg';
import five from '../Images/colab4.jpg';
import six from '../Images/colab5.jpg';

export default function Team() {
    return (
        <div id="team"><br />
            <h1>Conheça aqui a Melhor Equipe</h1>
            <div className="teamtext">
                <br />
                <h4 className='flint'>PROPRIETARIA</h4>
                <img src={six} alt="pic" />
                <br />
                <p>Maria da Graça Silva</p>
            </div>

            <div className="teamtext">
                <br />
                <h4>COZINHEIRO</h4>
                <img src={four} alt="pic" />
                <br />
                <p>José da Silva</p>
            </div>

            <div className="teamtext">
                <br />
                <h4>COZINHEIRA</h4>
                <img src={two} alt="pic" />
                <br />
                <p>Juliana Silva</p>
            </div>
            <div className="teamtext">
                <br />
                <h4>JOVEM APRENDIZ</h4>
                <img src={first} alt="pic" />
                <br />
                <p>Miguel Gonçalves</p>
            </div>

            <div className="teamtext">
                <br />
                <h4>RECEPCIONISTA</h4>
                <img src={five} alt="pic" />
                <br />
                <p>Beatriz Silva</p>
            </div>

            <div className="teamtext">
                <br />
                <h4>GARÇOM</h4>
                <img src={three} alt="pic" />
                <br />
                <p>Arthur Pereira</p>
            </div>
        </div>
    )
}
