export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-4 w-full">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Minha Comparação de Tipos de Cache</p>
        <div className="mt-2">
          <a href="https://github.com/orpinelli" target="_blank" rel="noopener noreferrer" className="hover:underline">
            GitHub
          </a>
          {' | '}
          <a href="https://www.instagram.com/gabriel_orpinelli/" target="_blank" rel="noopener noreferrer" className="hover:underline">
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}