import React from 'react'
import {AddPersonnelForm} from "../../components/GRH/AddPersonnelForm"
import {DiplomeForm} from "../../components/GRH/DiplomeForm"
import {ContratForm} from "../../components/GRH/ContratForm"
import {ServiceForm} from "../../components/GRH/ServiceForm"


export const GrhDashboard = () => {
    return (
        <div>
{/*            < ServiceForm/>
 */}           <ContratForm/>
 {/*            < DiplomeForm/>
 */}           {/*  <AddPersonnelForm/> */}
        </div>
    )
}
