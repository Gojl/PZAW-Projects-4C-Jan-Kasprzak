import { useState, type ReactNode } from "react";

interface AppProps {
  /** Nazwa do wyświetlenia */
  name: string;

  /** dziecko przekazywane do komponentu aby móc manipulować jego wyświetlaniem */
  children?: React.ReactNode;
}


function App({ name, children }: AppProps) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="mb-3">
      <h1
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {name} {isOpen ? "▲" : "▼"}
      </h1>

      {isOpen && children}
    </div>
  );
}

export default App;


