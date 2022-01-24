import ReportTableRow from './ReportTableRow';

export default function ReportTable(props) {
    if (props.cookieStands.length > 0) {
        return (
        <div className="text-center">
            <table>
                <thead>
                    <tr>
                        <th>Location</th>
                        {props.hoursOfOperation.map(hour => <td key={hour}>{hour}</td>)}
                        <th>Totals</th>
                    </tr>
                </thead>
                <tbody>
                        {props.cookieStands.map(location => {
                            return <ReportTableRow key={location['location']} location={location}/>
                        })}
                </tbody>
            </table>
        </div>
        );
    }
    return (
    <div className="text-center">
        <p>No Cookie Stands Available</p>
    </div>
    );
}