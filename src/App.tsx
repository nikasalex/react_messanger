import React from 'react';
import { Route, Routes } from 'react-router-dom';
import {
  LoginPage,
  PasswordResetPage,
  ForgotPassPage,
  SignUpPage,
  VerifyPage,
  DialoguePage,
  DialoguesPage,
  Navigation,
} from './components';

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/passwordreset" element={<PasswordResetPage />} />
        <Route path="/forgotpass" element={<ForgotPassPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/verify" element={<VerifyPage />} />
        <Route path="/dialogues" element={<DialoguesPage />} />
        <Route path="/dialogue/:dialogueId" element={<DialoguePage />} />
      </Routes>
    </>
  );
}

export default App;
