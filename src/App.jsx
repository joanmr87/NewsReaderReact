import "../src/styles/App.css";
import newsData from "../src/data/newsdata.json";

import Home from "./pages/Home.jsx";


function App() {
  //console.log(newsData.articles)
  const { articles } = newsData;
  return (
   <Home news={articles}/>
  );
}

export default App;
