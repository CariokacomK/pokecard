import { Button } from "antd";
import { useState } from "react";
import Regras from './../Regras/index';
import './Menu.css';
import { Link } from 'react-router-dom';

const Menu = () => {
    const [openModal, setOpenModal] = useState(false);

    return (
        <section className='menu-content'>
            <div className='menu'>
                <h1>Bem vindo ao <span>PokeCard</span></h1>
                <h2>Selecione uma opção</h2>
                <div className='options'>
                    <Link to="/jogar">
                        <Button>
                            Jogar
                        </Button>
                    </Link>
                    <Button onClick={() => setOpenModal(true)}>
                        Regras
                    </Button>
                </div>
            </div>
            <Regras isOpen={openModal} closeModal={() => setOpenModal(!openModal)} />
        </section>
    );
};

export default Menu;
