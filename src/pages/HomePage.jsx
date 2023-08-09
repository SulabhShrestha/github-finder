import Alert from "../components/Alert";
import SearchField from "../components/SearchField";
import UserResult from "../components/UserResults";

import {AlertProvider} from "../context/alert/AlertContext";

function HomePage() {
  return (
    <main className="mx-12">
      <AlertProvider>
        <Alert />
          <SearchField />
          <UserResult />
      </AlertProvider>
    </main>
  );
}

export default HomePage;
