import ReportTableRow from './ReportTableRow';

export default function ReportTable(props) {
    const hourlySales = [48,42,30,24,42,24,36,42,24,36]
    if (props.reports.length > 0) {
        console.log(props.reports.length)
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
                        <ReportTableRow />
                </tbody>
            </table>
            <p>{'{\"location\":\"Barcelona\",\"minCustomers\":2,\"maxCustomers\":4,\"avgCookies\":2.5}'}</p>
        </div>
        );
    }
    return (
    <div className="text-center">
        <p>No Cookie Stands Available</p>
    </div>
    );
}