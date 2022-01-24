import ReportTableRow from './ReportTableRow';

export default function ReportTable(props) {
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
                        {props.cookieStands.map((location,i) => {
                            if(i % 2 === 0) {
                                let color = 'bg-emerald-200'
                            } else {
                                let color = 'bg-emerald-300'
                            }
                            return <ReportTableRow key={i} location={location}/>
                        })}
                </tbody>
            </table>
        );
    }
    return (
    <div className="text-center">
        <p>No Cookie Stands Available</p>
    </div>
    );
}