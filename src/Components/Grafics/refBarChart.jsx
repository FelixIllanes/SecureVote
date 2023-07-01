import { Bar } from 'react-chartjs-2'
function RefBarchart() {
    return(
        <Bar
            data= {{
                labels: ['Red','Blue', 'Yellow', 'Green'],
                datasets: [
                    {
                    label: '# of votes',
                    data: [12,19,3,5,2,3],
                    backgroundColor:[
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(255, 205, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)'
                    ],
                    borderColor:[
                        'rgb(255, 99, 132)',
                        'rgb(255, 159, 64)',
                        'rgb(255, 205, 86)',
                        'rgb(75, 192, 192)'
                    ],
                    borderWidth:1
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
export default RefBarchart