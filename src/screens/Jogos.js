import axios from "axios"
import { useState } from 'react';
import './style.css'
export default function Jogos() {
    const [data, setdata] = useState([])
    // const buscar = async () => {
    //     let { data } = await axios.get(`http://localhost:1234/jogos`)
    //     setdata(data)
    // }
    // useEffect(() => {
    //     buscar()
    // }, [])
    return (
        <>
            <div className='titulo'>
                <h1>Jogos</h1>
            </div>
            <div className="trailer">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/SXvQ1nK4oxk?si=0iS7lAxIJPIrdhrv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <div className="filtros">
                {/* <select className='input'>
                    {
                        generos.map((item, index) => (
                            <option key={index}>
                                {item}
                            </option>
                        ))
                    }
                </select> */}
                <select className='input'>
                    <option>+18</option>
                    <option>+16</option>
                    <option>+12</option>
                    <option>+10</option>
                    <option>Livre</option>
                </select>
                <input className='input' placeholder='Data de Lançamento' type='number' />
                <input className='input' placeholder='Nome do Jogo' type='text' />
            </div>
            <table class="table table-dark table-striped table-bordered border-white">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Título</th>
                        <th>Lançamento</th>
                        <th>Preço</th>
                        <th>Classificação</th>
                        <th>Desenvolvedora</th>
                        <th>Distribuidora</th>
                        <th>Gênero</th>
                    </tr>
                </thead>
                <tbody class="table-group-divider">
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.titulo}</td>
                            <td>{item.dataLancamento}</td>
                            <td>{item.preco}</td>
                            <td>{item.classificacao}</td>
                            <td>{item.idDesenvolvedora}</td>
                            <td>{item.idDistribuidora}</td>
                            <td>{item.idGenero}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}
