import '@fontsource/abel'
import '@fontsource/montserrat'

import Header from './components/Header'
import Footer from './components/Footer'
import Routes from './components/Routes'
function App() {

  return (
    <div className="App">
      <div id="loading-screen">
        <h1>OXBRIDGE</h1>
      </div>
      <Header/>
      
      <Routes/>
      <Footer/>
    </div>
  );
}

export default App;
