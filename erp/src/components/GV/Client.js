import React from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { deleteClient } from '../../actions/GV/venteActions'
import EditClientModal from './EditClientModal'

const Client = ({client}) => {
    const dispatch = useDispatch()
    const handleDelete = (id)=>{
        dispatch(deleteClient(id))
    }
    return (
        <>
        <td>{client.nom}</td>
        <td>{client.prenom}</td>
        <td>{client.email}</td>  
        <td><EditClientModal client={client} /> <Button variant="danger" onClick={()=>handleDelete(client._id)}>Delete</Button></td>      
        </>
    )
}

export default Client
