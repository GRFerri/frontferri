import axios from "axios"
import { useState, useEffect } from 'react';
import './style.css'
export default function Jogos() {
    const [data, setdata] = useState([])
    const [classificacao, setClassificacao] = useState('')
    const [filtrados, setFiltrados] = useState([])
    const [buscaNome, setBuscaNome] = useState('')
    const [anoLancamento, setAnoLancamento] = useState('')
    const [precoAlto, setPrecoAlto] = useState(false)

    const buscar = async () => {
        let { data } = await axios.get(`http://localhost:4000/jogo`)
        setdata(data.data)
    }
    useEffect(() => {
        buscar()
    }, [])

    useEffect(() => {
        let resultado = data
        if (classificacao) {
            resultado = resultado.filter(jogo => jogo.classificacao === classificacao)
        }
        if (buscaNome) {
            resultado = resultado.filter(jogo => jogo.titulo.toLowerCase().includes(buscaNome.toLowerCase()))
        }
        if (anoLancamento) {
            resultado = resultado.filter(jogo => String(jogo.dataLancamento).includes(anoLancamento))
        }
        if (precoAlto) {
            resultado = resultado.filter(jogo => Number(jogo.preco) > 100)
        }
        setFiltrados(resultado)
    }, [classificacao, data, buscaNome, anoLancamento, precoAlto])

    return (
        <>
            <div className='titulo'>
                <h1>Jogos</h1>
            </div>
            <div className="trailer">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/SXvQ1nK4oxk?si=0iS7lAxIJPIrdhrv" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
            <div className="filtros">
                <select className='input' value={classificacao} onChange={e => setClassificacao(e.target.value)}>
                    <option value=''>Todas</option>
                    <option value='+18'>+18</option>
                    <option value='+16'>+16</option>
                    <option value='+12'>+12</option>
                    <option value='+10'>+10</option>
                    <option value='Livre'>Livre</option>
                </select>
                <input className='input' placeholder='Data de Lançamento' type='number' value={anoLancamento} onChange={e => setAnoLancamento(e.target.value)} />
                <input className='input' placeholder='Nome do Jogo' type='text' value={buscaNome} onChange={e => setBuscaNome(e.target.value)} />
                <button className='input' onClick={() => setPrecoAlto(!precoAlto)}>{precoAlto ? 'Mostrar todos preços' : 'Mostrar só acima de $100'}</button>
            </div>
            <table className="table table-dark table-striped table-bordered border-white">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Título</th>
                        <th>Lançamento</th>
                        <th>Preço</th>
                        <th>Desenvolvedora</th>
                        <th>Distribuidora</th>
                    </tr>
                </thead>
                <tbody className="table-group-divider">
                    {filtrados.map((item, index) => (
                        <tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.titulo}</td>
                            <td>{item.dataLancamento}</td>
                            <td>{item.classificacao}</td>
                            <td>{item.idDesenvolvedora}</td>
                            <td>{item.idDistribuidora}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}
