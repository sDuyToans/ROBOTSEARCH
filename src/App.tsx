import { ChangeEvent, useEffect, useState } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import { getData } from "./utils/data.utils";

export type Monster =  {
  id: string;
  name: string;
  email: string;
}

const App = () => {
  
  const [searchField, setSearchField] = useState(''); // useState trả lại cho ta mảng gồm 2 giá trị
  // [value, setValue] : giá trị đầu tiên sẽ là giá trị chúng ta muốn lưu trữ và giá trị thứ hai sẽ là một tập hợp (a set) hoặc hàm (function)
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [filteredMonsters, setFilterMonsters] = useState(monsters);
  // console.log('render')

  useEffect(() => {
    // fetch('https://jsonplaceholder.typicode.com/users')
    //   .then(res => res.json())
    //   .then(users => setMonsters(users));
    const fetchUser = async () => {
      const users = await getData<Monster[]>('https://jsonplaceholder.typicode.com/users');
      setMonsters(users);
    }
    fetchUser();
  }, []);

  useEffect(() =>{
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    setFilterMonsters(newFilteredMonsters);
    console.log('effect is firing')
  }, [monsters, searchField])

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>
      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder="search monster"
        className="monsters-search-box"
      />
    <CardList monsters={filteredMonsters}/>
    </div>
  );
};

// class App extends Component {
//   constructor(){
//     super();
//     this.state = {
//       monsters: [],
//       searchField: '',
//     }
//   }

//   componentDidMount(){
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then(res => res.json())
//       .then(users => this.setState(() =>{
//         return {monsters: users}
//       }));
//   }

// onSearchChange = (event) =>{
//   const searchField = event.target.value.toLocaleLowerCase();
//     this.setState(() =>{
//       return { searchField };
//     })
// }

//   render(){
//     // console.log('render from app.js')
//     const { monsters,searchField } = this.state;
//     const { onSearchChange } = this;

//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchField);
//     });

//     return (
//       <div className="App">
//         <h1 className='app-title'>Monsters Rolodex</h1>
//         <SearchBox
//         onChangeHandler={onSearchChange}
//         placeholder='search monster'
//         className='monsters-search-box'/>
//         <CardList monsters={filteredMonsters}/>
//       </div>
//     );
//   }
// }

export default App;
