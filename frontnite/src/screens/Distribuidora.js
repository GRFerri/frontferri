import axios from "axios"
import { useState, useEffect } from 'react';
import './Distribuidora.css'
export default function Distribuidora() {
    const [data, setdata] = useState([])
    const buscar = async () => {
        let { data } = await axios.get(`http://localhost:4000/distribuidora`)
        setdata(data.data)
    }
    useEffect(() => {
        buscar()
    }, [])
    return (
        <div>
            <div className='titulo'>
                <h1>Distribuidora</h1>
            </div>
            <table class="table table-dark table-striped table-bordered border-white">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nome</th>
                        <th>País</th>
                        <th>Ano Fundação</th>
                    </tr>
                </thead>
                <tbody class="table-group-divider">
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.nome}</td>
                            <td>{item.pais}</td>
                            <td>{item.anoFundacao}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
