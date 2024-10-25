import './Menu.css'
import { Button } from "antd";

const Menu = () => {
    return (
        <section>
            <div className='menu'>
                <h1>Bem vindo ao <span>PokeCard</span></h1>
                <h2>Selecione uma opção</h2>
                <div className='options'>
                    <Button>
                        Jogar
                    </Button>
                    <Button>
                        Regras
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default Menu