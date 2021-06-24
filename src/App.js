import axios from 'axios';
import './App.css';

function App() {
    axios({
    method: 'GET',
    url: 'http://www.omdbapi.com/',
    dataResponse: 'json',
    params: {
      apikey: '5e358330',
      t: 'harry potter'
    }}).then(response => {
      console.log(response);
    });

      // axios({
  //   method: 'GET',
  //   url: 'https://api.themoviedb.org/3/search/movie',
  //   dataResponse: 'json',
  //   params: {
  //     api_key: '9709355fc5ce17fa911605a13712678d',
  //     language: 'en-US',
  //     page: 1,
  //     query: 'harry potter'
  //   }}).then(response => {
  //     console.log(response);
  //   });


  return (
    <div className="App">

    </div>
  );
}

export default App;


