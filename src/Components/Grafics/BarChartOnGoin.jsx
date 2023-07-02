import { Bar } from 'react-chartjs-2'
import {Chart as ChartJS} from 'chart.js/auto'
function BarchartOnGoin({data}) {


    return(
        <Bar
            data= {{
                labels: [ data["partido1"],data["partido2"], data["partido3"],data["partido4"], 'Nulo','Blanco'],
                datasets: [
                    { 
                    label: 'Votaciones',
                    data: [data["votos1"],
                    data["votos2"],
                    data["votos3"],
                    data["votos4"],
                    data["votosN"],
                    data["votosB"]],
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
export default BarchartOnGoin