import { useEffect, useState } from "react"
import { deleteParty, getAllpartidos } from "../services/partido";

export const useParty = () => {
    const[partys, setPartys] = useState([]);
    const[party, setParty] = useState(null);

    useEffect(() => {
        getAllpartidos().then((data) => {
            if(data.length){
                setPartys(data);
            }else{
                setPartys(['vacio'])
            }
        });
    },[]);

    console.log(partys)

    const updateParty = (id, body) => {
        const newPartys = partys.map((party) => party.id === id ? body : party)
        setPartys(newPartys)
    };

    const removeParty = (id) => {
        const newPartys = partys.filter((party) => party.id !== id);
        setPartys(newPartys);
        deleteParty(id)
    }

    const focusParty = (party) => {
        setParty(party);
    };

    return { partys, updateParty, removeParty, focusParty, party};
}