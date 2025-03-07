export default function Log({turns}) {

  return (
    <ol id="log">
      {turns.map(({square, player}) => <li key={`${square.row}${square.col}`}>{player} selected at {square.row}, {square.col}</li>)}
    </ol>
  )
}