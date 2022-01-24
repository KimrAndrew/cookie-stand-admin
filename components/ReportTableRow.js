export default function ReportTableRow(props) {
    return (
        <tr>
            <td>{props.location['location']}</td>
            {props.location['hourlySales'].map((sale,i) => <td key={i}>{sale}</td>)}
            <td>{props.location['total']}</td>
        </tr>
    );
}