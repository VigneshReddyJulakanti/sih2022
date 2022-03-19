import logo from './logo.svg';
import './App.css';
import StartPage from './Components/StartPage';
import {  Routes, Route } from "react-router-dom";
import IndividualFarmerSignup from './Components/IndividualFarmerSignup'
import IndividualFarmerSignin from './Components/IndividualFarmerSignin'
import IndividualFarmerhome from './Components/IndividualFarmerhome';
import IndividualFarmerCropSelling from './Components/IndividualFarmerCropSelling';
import PSBuyerHome from './Components/PSbuyer/PSBuyerHome';
import PSBuyersignin from './Components/PSbuyer/PSBuyersignin';
import PSBuyersignup from './Components/PSbuyer/PSBuyersignup';
import NoteState from "./context/notes/NoteState"
function App() {
  return (
<>
<NoteState>
<Routes>
<Route path="/" element={<StartPage />} />
<Route path="/individualfarmersignup" element={<IndividualFarmerSignup />} />
<Route path="/individualfarmersignin" element={<IndividualFarmerSignin />} />
<Route path='/individualfarmerhome' element={<IndividualFarmerhome/>}/>
<Route path='/individualfarmercropselling' element={<IndividualFarmerCropSelling/>}/>
<Route path="/psbuyersignin" element={<PSBuyersignin/>}/>
<Route path="/psbuyersignup" element={<PSBuyersignup/>}/>
<Route path="/psbuyerhome" element={<PSBuyerHome/>}/>
</Routes>
</NoteState>
</>
  );
}

export default App;
