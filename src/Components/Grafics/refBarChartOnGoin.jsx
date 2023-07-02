import { Bar } from 'react-chartjs-2'
function RefBarchartOnGoin({data}) {

    return(
        <Bar
            data= {{
                labels: ['Si','No', 'Nulo', 'Blanco'],
                datasets: [
                    {
                    label: '# of votes',
                    data: [data["votos_si"],data["votos_no"],data["votos_nulos"],data["votos_blancos"]],
                    backgroundColor:[
                        '#DC143C',
                        '#20B2AA',
                        '#FFFF00',
                        '#FF4500'
                    ],
                    borderColor:"#000000",
                    borderWidth:1.5
                    },
                ],
            }}
            height={400}
            width={500}
             options={{
                maintainAspectRatio: false,
            }} 
        />
    )
}
export default RefBarchartOnGoin