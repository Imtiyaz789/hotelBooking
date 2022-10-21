import './App.css';
import { Route, Routes } from 'react-router-dom'
import Hotels from './components/Hotels';
import CreateHotel from './components/CreateHotel';
import UpdateHotel from './components/UpdateHotel'
import DeleteHotel from './components/DeleteHotel'
import WrongUrl from './components/WrongUrl'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <h2>Hotel Booking app</h2> */}
        <Routes>
          <Route path='/' element={<Hotels />} />
          {/* <Route path='/create' element={<createHotel/>} /> */}
          <Route path='/create' element={<CreateHotel />} />
          <Route path='/delete' element={<DeleteHotel />} />
          <Route path='/update' element={<UpdateHotel />} />
          <Route path='*' element={<WrongUrl />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
