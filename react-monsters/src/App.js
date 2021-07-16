import { Component } from 'react'
import './App.css';
import { CardList } from './components/card-list/card-list'
import { SearchBox } from './components/search-box/search-box'

class App extends Component {
  constructor() {
    super();    
    this.state = {
      monsters: [],
      another: 5,
      searchField: '',      
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response  => response.json())
    .then(users => this.setState({monsters: users}));      
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase()));
    return (            
      <div className="App">
        <SearchBox 
        placeholder='monsters filter' 
        handleChange={e => this.setState({searchField: e.target.value})}
        />
                
        <CardList monsters={ filteredMonsters }/>
      </div>
    );
  }
}

export default App;
