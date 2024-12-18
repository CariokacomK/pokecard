import { CloseOutlined } from '@ant-design/icons'
import './Regras.css'

const Regras = ({ isOpen, closeModal }) => {

    return (

        isOpen && (<div className='content-rules'>
            <div className='content-close'>
                <CloseOutlined style={{ cursor: 'pointer' }} onClick={closeModal} />
            </div>
            <h1>Olá, Bem vindo ao PokeCard!</h1>
            <h2>Regras</h2>
            <p>Bem o jogo funciona como uma batalha por atríbutos, escolha um atributo de sua pokecard e caso o valor seja maior ou igual que de seu oponente você ganha a batalha</p>
            <ol>
                <li>1 - Quem ganhar 10 batalhas vence</li>
                <li>2 - A batalha entre elementos é definida pela imagem abaixo</li>
            </ol>
        </div>)
    )

}

export default Regras