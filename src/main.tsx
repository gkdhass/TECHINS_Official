import { createRoot } from "react-dom/client";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import App from "./App.tsx";
import LoadingScreen from "./components/ui/LoadingScreen.tsx";
import "./index.css";

const Root = () => {
  const [loading, setLoading] = useState(true);

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <LoadingScreen key="loader" onDone={() => setLoading(false)} />
      ) : (
        <App key="app" />
      )}
    </AnimatePresence>
  );
};

createRoot(document.getElementById("root")!).render(<Root />);