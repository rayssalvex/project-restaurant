import three from '../Images/suco1.png';
import two from '../Images/comida.jpeg';
import one from '../Images/feijuca.jpg';
import four from '../Images/petisco.jpg';

export default function PriceText() {
    return (
        <div className="card">
            <div className="row no-gutters">
                <div className="col">
                    <img src={one} alt="pic" className="card-img" />
                </div>
                <div className="col">
                    <div className="card-body">
                        <h2 className="card-title">PRATOS PREMIUM</h2>
                        <p className="card-text">R$ 34,99</p>
                    </div><br/>
                    <div className="col">
                    <img src={two} alt="pic" className="card-img" />
                </div>
                <div className="card-body">
                        <h2 className="card-title">PRATOS TRADICIONAIS</h2>
                        <p className="card-text">R$ 29,99</p>
                    </div>
                    <div className="col">
                    <img src={four} alt="pic" className="card-img" />
                </div>
                <div className="card-body">
                        <h2 className="card-title">PETISCOS</h2>
                        <p className="card-text">R$ 19,99 </p>
                    </div>
                    <div className="col">
                    <img src={three} alt="pic" className="card-img" />
                </div>
                <div className="card-body">
                        <h2 className="card-title">SUCOS</h2>
                        <p className="card-text">R$ 9,99 </p>
                    </div>


                </div>
            </div>
        </div>
    )
}
