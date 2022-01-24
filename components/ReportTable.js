import ReportTableRow from './ReportTableRow';

export default function ReportTable(props) {
    if (props.cookieStands.length > 0) {
        return (
        <div className="text-center">
            <table>
                <thead>
                    <tr>
                        <th>Location</th>
                        <th>6am</th>
                        <th>7am</th>
                        <th>8am</th>
                        <th>9am</th>
                        <th>10am</th>
                        <th>11am</th>
                        <th>12am</th>
                        <th>1pm</th>
                        <th>2pm</th>
                        <th>3pm</th>
                        <th>4pm</th>
                        <th>5pm</th>
                        <th>6pm</th>
                        <th>7pm</th>
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