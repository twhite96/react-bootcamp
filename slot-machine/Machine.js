const machine = {
  backgroundColor: '#efefef',
  border: '2px solid #06d7d9',
  borderRadius: '3px',
  boxShadow: '0 4px 15px -6px rgba(0, 0, 0, 0.7)',
  fontFamily: 'sans-serif',
  margin: '30px',
  padding: '20px'
}
class Machine extends React.Component {
  render() {
    const { sym1, sym2, sym3 } = this.props;
    const winner = sym1 === sym2 && sym1 === sym3;
    return (
      <div style={machine}>
        <p>{sym1} {sym2} {sym3}</p>
        <p>{winner ? 'Winner!' : 'Womp Womp Wompppppp: You lose.'}</p>
      </div>
    )
  }
}

