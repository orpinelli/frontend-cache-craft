import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Teste de Caches</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/" className="hover:underline">Home</Link>
            </li>
            <li>
              <Link href="/server-side-cache" className="hover:underline">Server-Side Cache</Link>
            </li>
            <li>
              <Link href="/client-side-graph" className="hover:underline">Client-Side Graph</Link>
            </li>
            <li>
              <Link href="/user-details" className="hover:underline">User Details</Link>
            </li>
            <li>
              <Link href="/user-preferences" className="hover:underline">user-preferences</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
