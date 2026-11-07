// src/pages/SeccionUno.tsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function SeccionUno() {
  return (
    <div className="p-8">
      <h2>Esta es la Nueva Sección</h2>
      <p>Aquí puedes agregar más componentes sin afectar el inicio.</p>
      
      {/* Botón para regresar sin recargar la página */}
      <Link to="/" className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded">
        Volver al Inicio
      </Link>
    </div>
  );
}