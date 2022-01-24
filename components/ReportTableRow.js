export default function ReportTableRow(props) {
    return (
        <tr className="border-emerald-700 border-2">
            <td className={'border-emerald-700 border-2 ' + props.color}>{props.location['location']}</td>
            {props.location['hourlySales'].map((sale,i) => <td className={'border-emerald-700 border-2 ' + props.color} key={i}>{sale}</td>)}
            <td className={'border-emerald-700 border-2 ' + props.color}>{props.location['total']}</td>
        </tr>
    )
}