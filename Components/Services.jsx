import first from '../Images/prato3.png';
import second from '../Images/prato2.png';
import third from '../Images/prato1.jpg';


export default function Services() {
    return (
        <div id="services"><br />
            <h1>Delivery</h1>
            <p>Nossos pratos mais pedidos no Delivery:<br/>Entregamos no conforto do seu lar!</p>

            <div className="card">
                <br />
                <img src={first} alt="pic" className="card-img-top" />
                <div className="card-body">
                    <h2 className="card-title">Top do dia</h2>
                    <p className="text">FEIJOADA, ARROZ, FAROFA E SALADA(COUVE E TOMATE)</p>
                </div>
            </div>

            <div className="card">
                <br />
                <img src={second} alt="pic" className="card-img-top" />
                <div className="card-body">
                    <h2 className="card-title"> Prato Fitness</h2>
                    <p className="text">FRANGO EMPANADO, PURE DE BATATA, ERVILHA E BROCOLIS.</p>
                </div>
            </div>

            <div className="card">
                <br />
                <img src={third} alt="pic" className="card-img-top" />
                <div className="card-body">
                    <h2 className="card-title">Prato Clássico </h2>
                    <p className="text">ARROZ, FEIJÃO, CARNE ASSADA, BATATA FRITA E SALADA(ALFACE E TOMATE).</p>
                </div>
            </div>
            <br /><br /><br /><br /><br /><br />
        </div>
    )
}
