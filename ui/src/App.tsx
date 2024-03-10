import { useSelector } from "react-redux";
import { HomePage } from "./pages/Home";
import { RootStore } from "./redux/store";
import { PageLoader } from "./components/PageLoader";

function App() {
  const isLoading = useSelector((state: RootStore) => state.users.loading);
  return (
    <>
      <HomePage />
      {isLoading && <PageLoader />}
    </>
  );
}

export default App;
