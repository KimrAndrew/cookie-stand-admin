export default function ReportTable(props) {
    const hourlySales = [48,42,30,24,42,24,36,42,24,36]
    if (props.reports.length > 0) {
        console.log(props.reports.length)
        return (
        <div className="text-center">
            <h3>Report Table Coming Soon...</h3>
            <p>{'{\"location\":\"Barcelona\",\"minCustomers\":2,\"maxCustomers\":4,\"avgCookies\":2.5}'}</p>
        </div>
        );
    }
    return (
    <div className="text-center">
        <p>No Cookie Stands Available</p>
    </div>
    )
}