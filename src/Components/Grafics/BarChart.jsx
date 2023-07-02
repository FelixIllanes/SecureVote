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
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(255, 205, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(201, 203, 207, 0.2)'
                    ],
                    borderColor:[
                        'rgb(255, 99, 132)',
                        'rgb(255, 159, 64)',
                        'rgb(255, 205, 86)',
                        'rgb(75, 192, 192)',
                        'rgb(54, 162, 235)',
                        'rgb(153, 102, 255)',
                        'rgb(201, 203, 207)'
                    ],
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