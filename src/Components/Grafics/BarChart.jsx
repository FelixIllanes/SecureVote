import { Bar } from 'react-chartjs-2'
import {Chart as ChartJS} from 'chart.js/auto'
import { getPartidoName } from '../../services/partido'
import { useEffect, useState } from 'react'
function Barchart({data}) {


    return(
        <Bar
            data= {{
                labels: [ data["partido1"],data["partido2"], data["partido3"],data["partido4"], 'Nulo','Blanco'],
                datasets: [
                    { 
                    label: 'Votaciones',
                    data: [data["resultado"][0]["cant_votos"],
                    data["resultado"][1]["cant_votos"],
                    data["resultado"][2]["cant_votos"],
                    data["resultado"][3]["cant_votos"],
                    data["resultado"][0]["cant_vnullo"],
                    data["resultado"][0]["cant_vblanco"]],
                    backgroundColor:[
                        '#FF0000',
                        '#20B2AA',
                        '#FFFF00',
                        '#FF4500',
                        '#0000FF',
                        '#800000'
                    ],
                    borderColor:"#000000",
                    borderWidth:1
                    },
                ],
            }}
            height={400}
            width={400}
             options={{
                maintainAspectRatio: false,
            }} 
        />
    )
}
export default Barchart