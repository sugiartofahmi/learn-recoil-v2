import { RouterProvider } from "react-router-dom";
import router from "./router";
import MainLayout from "./layouts/MainLayout";
const App = () => {
  return (
    <MainLayout>
      <RouterProvider router={router} />
    </MainLayout>
  );
};

export default App;
