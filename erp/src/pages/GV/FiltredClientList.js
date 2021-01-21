import React from 'react'
import Client from '../../components/GV/Client'

const FiltredClientList = ({clientList}) => {
    return (
        <div>
        <table class="table">
        <thead>
            <tr>
                <th scope="col">Nom</th>
                <th scope="col">Prénom</th>
                <th scope="col">Mail</th>
                <th scope="col">Action</th>

                
            </tr>
        </thead>
        <tbody>
            {clientList.map((el) => (
                <tr>
                    <Client client={el} />
                </tr>
            ))}
        </tbody>
    </table>
    </div>
    )
}

export default FiltredClientList
