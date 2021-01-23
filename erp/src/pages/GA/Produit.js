import { MDBInput } from "mdbreact";
import { getProduit } from "../../actions/GA/achatActions";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ListProduit from "./ListProduit";


const Produits = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProduit());
    }, []);
    const achat = useSelector((state) => state.achat);
    const [filter, setFilter] = useState("");
    return (
        <div>
            <MDBInput label="Filter" onChange={(e) => setFilter(e.target.value)} />
            <ListProduit listProduit={achat.produit} />
        </div>
    );
};

export default Produits;



