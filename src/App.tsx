import {lazy, useEffect, useState } from "react";
import { Route, Routes} from "react-router-dom";
import { Toaster } from "sonner";
import Loader from "./components/common/Loader";
import Home from "./pages/HomePage";

const DefaultLayout = lazy(() => import("./components/layouts/DefaultLayout"));

function App() {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <>
      {/* Toaster */}
      <Toaster richColors closeButton position="top-right" />
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
