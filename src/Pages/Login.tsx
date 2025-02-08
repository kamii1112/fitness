import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFitnessContext } from '../Context/FitnessContext';

const Login: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { setIsLoggedIn } = useFitnessContext();

  const handleLoginClick = () => {
    if (username === 'admin' && password === 'system') {
      setIsLoggedIn(true);
      navigate('/get-started');
    } else {
      alert('Username and password do not match');
    }
  };

  return (
    <div className="px-5 py-6 flex flex-col h-[85vh] justify-between">
      <div>
        <h2 className="text-center text-gray-500 text-lg">Hey there,</h2>
        <h1 className="text-center text-black text-2xl font-bold mb-6">
          Welcome Back
        </h1>

        <div className="mb-4">
          <div className="flex items-center bg-[#F7F8F8] rounded-md p-2 gap-2">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.427 6.63831L10.0945 9.34808C9.46492 9.84759 8.57908 9.84759 7.94946 9.34808L4.58887 6.63831"
                stroke="#7B6F72"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12.6816 15.75C14.9627 15.7563 16.5 13.8822 16.5 11.5788V6.42751C16.5 4.12412 14.9627 2.25 12.6816 2.25H5.31835C3.03734 2.25 1.5 4.12412 1.5 6.42751V11.5788C1.5 13.8822 3.03734 15.7563 5.31835 15.75H12.6816Z"
                stroke="#7B6F72"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <input
              type="email"
              placeholder="Username"
              className="bg-[#F7F8F8] outline-none flex-1"
              value={username}
              onChange={e => setUsername(e.target.value)}
            />
          </div>
        </div>

        <div className="mb-4">
          <div className="flex items-center bg-[#F7F8F8] rounded-md p-2 gap-2">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.3176 7.08579V5.47554C12.3176 3.59079 10.7891 2.06229 8.90431 2.06229C7.01956 2.05404 5.48506 3.57504 5.47681 5.46054V5.47554V7.08579"
                stroke="#7B6F72"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.7624 15.9371H6.03162C4.46112 15.9371 3.18762 14.6643 3.18762 13.0931V9.87635C3.18762 8.3051 4.46112 7.03235 6.03162 7.03235H11.7624C13.3329 7.03235 14.6064 8.3051 14.6064 9.87635V13.0931C14.6064 14.6643 13.3329 15.9371 11.7624 15.9371Z"
                stroke="#7B6F72"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8.89709 10.652V12.3177"
                stroke="#7B6F72"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              className="bg-[#F7F8F8] outline-none flex-1"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <button onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? (
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M15.1615 12.0531C15.1615 13.7991 13.7455 15.2141 11.9995 15.2141C10.2535 15.2141 8.8385 13.7991 8.8385 12.0531C8.8385 10.3061 10.2535 8.89111 11.9995 8.89111C13.7455 8.89111 15.1615 10.3061 15.1615 12.0531Z"
                    stroke="#ADA4A5"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11.998 19.355C15.806 19.355 19.289 16.617 21.25 12.053C19.289 7.48898 15.806 4.75098 11.998 4.75098H12.002C8.194 4.75098 4.711 7.48898 2.75 12.053C4.711 16.617 8.194 19.355 12.002 19.355H11.998Z"
                    stroke="#ADA4A5"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              ) : (
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.32046 10.7751C6.88921 10.3446 6.62671 9.75963 6.62671 9.10338C6.62671 7.78863 7.68571 6.72888 8.99971 6.72888C9.64996 6.72888 10.2485 6.99213 10.6722 7.42263"
                    stroke="#ADA4A5"
                    stroke-width="1.2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M11.3287 9.52417C11.1547 10.4917 10.3927 11.2552 9.4259 11.4307"
                    stroke="#ADA4A5"
                    stroke-width="1.2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M4.99101 13.1042C3.80076 12.1697 2.79276 10.8047 2.06226 9.10298C2.80026 7.39373 3.81501 6.02123 5.01276 5.07923C6.20301 4.13723 7.57626 3.62573 8.99976 3.62573C10.4315 3.62573 11.804 4.14473 13.0018 5.09348"
                    stroke="#ADA4A5"
                    stroke-width="1.2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M14.5857 6.74316C15.1017 7.42866 15.5555 8.21991 15.9372 9.10266C14.462 12.5204 11.855 14.5792 8.99971 14.5792C8.35246 14.5792 7.71421 14.4742 7.10071 14.2694"
                    stroke="#ADA4A5"
                    stroke-width="1.2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M14.9153 3.18726L3.08484 15.0178"
                    stroke="#ADA4A5"
                    stroke-width="1.2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      <div className="w-full p-1 pt-5 flex items-center justify-center">
        <button
          className="bg-[#130F26] text-white px-20 py-4 rounded-[40px] bg-custom-gradient flex gap-3"
          onClick={handleLoginClick}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M11.8861 2H16.9254C19.445 2 21.5 4 21.5 6.44V17.56C21.5 20.01 19.445 22 16.9047 22H11.8758C9.35611 22 7.29083 20.01 7.29083 17.57V12.77H13.6932L12.041 14.37C11.7312 14.67 11.7312 15.16 12.041 15.46C12.1959 15.61 12.4024 15.68 12.6089 15.68C12.8051 15.68 13.0117 15.61 13.1666 15.46L16.1819 12.55C16.3368 12.41 16.4194 12.21 16.4194 12C16.4194 11.8 16.3368 11.6 16.1819 11.46L13.1666 8.55C12.8568 8.25 12.3508 8.25 12.041 8.55C11.7312 8.85 11.7312 9.34 12.041 9.64L13.6932 11.23H7.29083V6.45C7.29083 4 9.35611 2 11.8861 2ZM2.5 11.9999C2.5 11.5799 2.85523 11.2299 3.2815 11.2299H7.29052V12.7699H3.2815C2.85523 12.7699 2.5 12.4299 2.5 11.9999Z"
              fill="white"
            />
          </svg>
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
