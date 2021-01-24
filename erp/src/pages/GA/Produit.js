import { MDBInput } from "mdbreact";
import { getCategorie, getProduit } from "../../actions/GA/achatActions";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ListProduit from "./ListProduit";
import AjoutModale from "../../components/GA/AjoutModale";


const Produits = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCategorie())
        dispatch(getProduit());
        
    }, []);
    const achat = useSelector((state) => state.achat);
    const [filter, setFilter] = useState("");
    return (
        <div>
            <MDBInput label="Filter" onChange={(e) => setFilter(e.target.value)} />
            <ListProduit listProduit={achat.produit.filter(
                 (el) =>
                 el.designation.toUpperCase().includes(filter.toUpperCase()) ||
                 el.idCategorie.designation.toUpperCase().includes(filter.toUpperCase())
            )} />
            <div>
                <AjoutModale/>
            </div>

        </div>
    );
};

export default Produits;



