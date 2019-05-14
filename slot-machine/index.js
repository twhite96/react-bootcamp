class App extends React.Component {
  render() {
    return (
      <div>
        <h1 style={{margin: '32.5px'}}>Spin It</h1>
        <Machine sym1="🍒" sym2="🍌" sym3="🍇" />
        <Machine sym1="🍌" sym2="🍇" sym3="🍇" />
        <Machine sym1="🍒" sym2="🍒" sym3="🍒" />
      </div>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('root'));
