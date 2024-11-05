import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import LogoDark from '../../images/logo/logo-dark.svg';
import Logo from '../../images/logo/logo.svg';

const SignIn: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Usar useNavigate

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Aquí iría tu lógica de autenticación
    const isAuthenticated = true; // Simulación de autenticación exitosa

    if (isAuthenticated) {
      // Redirigir al dashboard después de iniciar sesión
      navigate('/'); // Cambia '/' por la ruta de tu dashboard si es diferente
    } else {
      // Manejar error de autenticación (ejemplo: mostrar un mensaje)
      alert("Error al iniciar sesión. Por favor verifica tus credenciales.");
    }
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="w-full p-4 sm:p-12.5 xl:p-17.5">
          <h2 className="mb-9 text-2xl font-bold text-black dark:text-white sm:text-title-xl2">
            Inicia sesión
          </h2>

          <form onSubmit={handleSignIn}> {/* Agregar onSubmit aquí */}
            <div className="mb-4">
              <label className="mb-2.5 block font-medium text-black dark:text-white">
                Correo electrónico
              </label>
              <div className="relative">
                <input
                  type="email"
                  placeholder="example@example.com"
                  className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)} // Manejar cambio de email
                />
                {/* Icono del input */}
              </div>
            </div>

            <div className="mb-6">
              <label className="mb-2.5 block font-medium text-black dark:text-white">
                Contraseña
              </label>
              <div className="relative">
                <input
                  type="password"
                  placeholder="mysecurepassword"
                  className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)} // Manejar cambio de contraseña
                />
                {/* Icono del input */}
              </div>
            </div>

            <div className="mb-5">
              <input
                type="submit"
                value="Inicia sesión"
                className="w-full cursor-pointer rounded-lg border border-primary bg-primary p-4 text-white transition hover:bg-opacity-90"
              />
            </div>

            {/* Botón para iniciar con Google */}
            <div className="mt-6 text-center">
              <p>
                ¿No tienes una cuenta?{' '}
                <Link to="/auth/signup" className="text-primary">
                  Regístrate
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignIn;
