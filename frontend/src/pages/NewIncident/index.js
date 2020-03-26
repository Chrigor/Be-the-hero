import React, { useState } from 'react';
import './styles.css';

import {Link, useHistory} from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';

import logoImage from '../../assets/logo.svg';

export default function NewIncident(){

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');

    const ongId = localStorage.getItem("ongId");

    const history = useHistory();

    async function handleNewIncident(e){
        e.preventDefault();

        const data = {
            title,
            description,
            value
        }

        try {
            await api.post('/incidents', data, {
                headers: {
                    Authorization: ongId
                }
            }).then(() => {
                setTitle('');
                setDescription('');
                setValue('');

                history.push('/profile');
            });
        } catch (error) {
            alert('Erro ao cadastrar caso. Tente novamente!');
        }
    }


    return (
        <div className="new-incident-container">
        <div className="content">
            <section>
                <img src={logoImage} alt="Be the hero" />
                <h1>Cadastrar novo caso</h1>
                <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>
                <Link className="back-link" to="/profile">

                    <FiArrowLeft
                        size={16}
                        color="#e02041"
                    />

                    Voltar para home
                </Link>
            </section>
            <form onSubmit={handleNewIncident}>
                <input placeholder="Titulo do caso" onChange={(e) => setTitle(e.target.value)} value={title}/>
                <textarea placeholder="Descrição" onChange={(e) => setDescription(e.target.value)} value={description}>

                </textarea>
                <input placeholder="Valor em reais" onChange={(e) => setValue(e.target.value)} value={value}/>

                <button className="button" type="submit">
                    Cadastrar
                </button>
            </form>
        </div>
    </div>
    )
}