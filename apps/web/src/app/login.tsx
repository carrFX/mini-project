// pages/login.tsx
import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Login: React.FC = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(''); // Reset pesan error saat mulai submit

    // Simulasi proses login
    const mockUser = {
      email: 'user@example.com',
      password: 'password123',
    };

    // Verifikasi email dan password
    if (email === mockUser.email && password === mockUser.password) {
      // Jika login berhasil, arahkan ke halaman dashboard
      router.push('/dashboard');
    } else {
      // Jika login gagal, tampilkan pesan error
      setError('Email atau password salah');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white">
      <div className="bg-gradient-to-br from-purple-900 via-indigo-800 to-blue-900 p-8 rounded-lg shadow-xl w-full max-w-md">
        <h1 className="text-4xl font-extrabold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-pink-500">
          Login
        </h1>
        {error && <p className="text-red-400 mb-4 text-center">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="email" className="block text-lg font-medium mb-2">Email</label>
            <input
              id="email"
              type="email"
              className="w-full px-4 py-2 border border-gray-700 bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-lg font-medium mb-2">Password</label>
            <input
              id="password"
              type="password"
              className="w-full px-4 py-2 border border-gray-700 bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-md shadow-lg hover:from-green-500 hover:to-blue-600 transition-transform transform hover:scale-105"
          >
            Login
          </button>
        </form>
        <p className="mt-6 text-center">
          Belum punya akun?{' '}
          <Link href="/register">
            <a className="text-yellow-400 hover:underline">Daftar di sini</a>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
