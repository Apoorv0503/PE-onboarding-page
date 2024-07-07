import './App.css';
import MainPage from "./components/MainPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Chat from './components/Chat';
import QnA from './components/QnA';
import Mock from './components/Mock';

function App() {
  return (
    <Router>
    <Routes>
      <Route exact path="/" element={<MainPage />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/qna" element={<QnA />} />
      <Route path="/mock" element={<Mock />} />
    </Routes>
  </Router>
  );
}

export default App;
