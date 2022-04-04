import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { LoginPage } from './pages/Login';
import { ArtigosPage } from './pages/Artigos';
import { ArtigoPage } from './pages/Artigo';
import { MeusArtigosPage } from './pages/MeusArtigos';
import { EditarArquivoPage } from './pages/EditarArquivo';
import { NotFoundPage } from './pages/NotFound';
import { Layout } from './components/Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<ArtigosPage />} />
          <Route path="/artigo/:id" element={<ArtigoPage />} />
          <Route path="/artigos" element={<MeusArtigosPage />} />
          <Route path="/artigo/edit/:id" element={<EditarArquivoPage />} />
          <Route path="/artigo/novo" element={<EditarArquivoPage />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
