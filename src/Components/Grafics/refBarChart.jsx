import { Bar } from 'react-chartjs-2'
function RefBarchart({data}) {

    console.log(data["referendums"])
    return(
        <Bar
            data= {{
                labels: ['Si','No', 'Nulo', 'Blanco'],
                datasets: [
                    {
                    label: '# of votes',
                    data: [data["referendums"]["cant_vsi"],data["referendums"]["cant_vno"],data["referendums"]["cant_vnullo"],data["referendums"]["cant_vblanco"]],
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
export default RefBarchart