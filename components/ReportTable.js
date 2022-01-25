import react from 'react';
import ReportTableRow from './ReportTableRow';

export default function ReportTable(props) {
    const hourlyTotals = [];
    let storeWideTotal = 0;
    props.cookieStands.forEach((cookieStand) => {
        storeWideTotal += cookieStand.total;
        let timeSlotsTotaled = hourlyTotals.length -1;
        for(let timeSlot = 0; timeSlot < cookieStand.hourlySales.length; timeSlot++) {
            const timeSlotToAdd = cookieStand.hourlySales[timeSlot];
            if (timeSlotsTotaled < timeSlot) {
                hourlyTotals.push(timeSlotToAdd)
            } else {
                hourlyTotals[timeSlot] = hourlyTotals[timeSlot] + timeSlotToAdd;
            }
            console.log(hourlyTotals)
        }
    });
    //setHourlyTotals(updatedTotals);
    if (props.cookieStands.length > 0) {
        return (
            <table className='m-auto w-8/12'>
                <thead>
                    <tr className='bg-emerald-500 font-bold'>
                        <th className='px-12'>Location</th>
                        {props.hoursOfOperation.map(hour => <td className = 'px-2'key={hour}>{hour}</td>)}
                        <th>Totals</th>
                    </tr>
                </thead>
                <tbody>
                        {
                            props.cookieStands.map((location,i) => {
                                let color;
                                if(i % 2 == 0) {
                                    color = 'bg-emerald-300';
                                } else {
                                    color = 'bg-emerald-200'
                                }
                                console.log(color)
                                return <ReportTableRow key={i} color={color} location={location} />
                        })}
                </tbody>
                <tfoot>
                    <tr className='bg-emerald-500'>
                        <td className='border-emerald-700 border-2'>Totals</td>
                        {hourlyTotals.map((hourlyTotal,i) => <td className='border-emerald-700 border-2' key={i}>{hourlyTotal}</td>)}
                        <td className='border-emerald-700 border-2'>{storeWideTotal}</td>
                    </tr>
                </tfoot>
            </table>
        );
    }
    return (
    <div className="text-center">
        <p>No Cookie Stands Available</p>
    </div>
    );
}