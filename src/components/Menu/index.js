import { Button } from "antd";
import './Menu.css';
import { useState } from "react";
import Regras from './../Regras/index';

const Menu = () => {
    const [openModal, setOpenModal] = useState(false)

    return (
            <section className='menu-content'>
                <div className='menu'>
                    <h1>Bem vindo ao <span>PokeCard</span></h1>
                    <h2>Selecione uma opção</h2>
                    <div className='options'>
                        <Button>
                            Jogar
                        </Button>
                        <Button onClick={() => setOpenModal(true)}>
                            Regras
                        </Button>
                    </div>
                </div>
                <Regras isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)}/>
            </section>
    )
}

export default Menu