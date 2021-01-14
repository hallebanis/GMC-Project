import React from 'react'
import {useSelector , useDispatch} from "react-redux"
import {useEffect} from "react"
import {ListPersonnel} from "../../components/GRH/ListPersonnel"

export const ListPersonnelPage = () => {
    const dispatch= useDispatch();
    useEffect(() => {
        
      
    }, [])
  const personnel = useSelector(state => state.personnel)
    return (
        <div>
            <h1>list personnel</h1>
            <ListPersonnel list={personnel.personnel}/>
            
        </div>
    )
}
