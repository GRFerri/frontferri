import axios from "axios"
import { useEffect, useState } from 'react';
import './Avaliação.css'
export default function Avaliação() {
    const [data, setdata] = useState([])
    // const buscar = async () => {
    //     let { data } = await axios.get(`http://localhost:1234/avaliacao`)
    //     setdata(data)
    // }
    // useEffect(() => {
    //     buscar()
    // }, [])
    return (
        <div>
            <div className='titulo'>
                <h1>Avaliação</h1>
            </div>
            <table class="table table-dark table-striped table-bordered border-white">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nota</th>
                        <th>Comentário</th>
                        <th>Data</th>
                        <th>ID Jogo</th>
                    </tr>
                </thead>
                <tbody class="table-group-divider">
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.nota}</td>
                            <td>{item.comentario}</td>
                            <td>{item.dataAvaliacao}</td>
                            <td>{item.idJogo}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

