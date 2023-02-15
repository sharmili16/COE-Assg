import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Comment from './comment';
import reportWebVitals from './reportWebVitals';
import Dash from './dash';
import Feed from './feed';
import Sign from './sign';
import Log from './log';
import Forgot from './forgot';
import Post from './post';
import Search from './search';
//import Name from './components/name/name';
//import Login from './components/login/login';
//import Signup from './components/signup/signup';
//import ForgotPassword from './components/forgot_pass/forgot_pass';
import { BrowserRouter, Routes, Route }from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="sign" element={<Sign />} />
      <Route path="forgot" element={<Forgot/>}/>
      <Route path="search" element={<Search/>}/>
      <Route path="feed" element={<Feed/>}/>
      <Route path="log" element={<Log/>}/>
      <Route path="comment" element={<Comment/>}/>
      <Route path="dash" element={<Dash/>}/>
      <Route path="post" element={<Post/>}/>
    </Routes>
    </BrowserRouter>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
