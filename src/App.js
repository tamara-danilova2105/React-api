import { Component } from 'react';
import './App.css';


class App extends Component {
  state = {
    content: null,
    author: null,
    imageFox: null,
    imageDog: null,
    user: null
  }

  async componentDidMount() {
    const url = 'https://api.quotable.io/random'
    const response = await fetch(url)
    const data = await response.json()
    this.setState({content: data.content, author: data.author})

    const resultFox = await fetch('https://randomfox.ca/floof/')
    const resFox = await resultFox.json()
    this.setState({imageFox: resFox.image})

    const resultDog = await fetch('https://random.dog/woof.json')
    const resDog = await resultDog.json()
    this.setState({imageDog: resDog.url})

    const resultUser = await fetch('https://api.randomuser.me/');
    const resUser = await resultUser.json()
    this.setState({user: resUser.results[0]})
    console.log(resUser.results[0]);
  }

  render() {

    return (
      <div className="App">
        {!this.state.user ? <p>Загружается...</p> : 
        <div>
        <p>Имя: {this.state.user.name.first}</p>
        <p>Фамилия: {this.state.user.name.last}</p>
        <p>Email: {this.state.user.email}</p>
        <img src={this.state.user.picture.large} alt='фотография пользователя'/>
        </div>
        }

        <div>
          <p>Цитата: {this.state.content}</p>
          <p>Автор: {this.state.author}</p>
          <img src={this.state.imageFox} width='400px' alt='фотография лисы'/>
          <br/>
          <img src={this.state.imageDog} width='400px' alt='фотография собаки'/>
        </div>
      </div>
    );
  }
}

export default App;
