import { Bar } from 'react-chartjs-2'
function RefBarchartOnGoin() {
    return(
        <Bar
            data= {{
                labels: ['Red','Blue', 'Yellow', 'Green'],
                datasets: [
                    {
                    label: '# of votes',
                    data: [12,19,3,5],
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