import axios from "axios"
import { useState, useEffect } from 'react';
import './Generos.css'
export default function Generos() {
    const [data, setdata] = useState([])
    const buscar = async () => {
        let { data } = await axios.get(`http://localhost:4000/genero`)
        setdata(data.data)
    }
    useEffect(() => {
        buscar()
    }, [])
    return (
        <div>
            <div className='titulo'>
                <h1>Gêneros</h1>
            </div>
            <table class="table table-dark table-striped table-bordered border-white">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Título</th>
                    </tr>
                </thead>
                <tbody class="table-group-divider">
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.nome}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
