import { QueryClient, QueryClientProvider } from "react-query";
import HoodFinderScreen from "./src/screens/HoodFinderScreen";
import { StoreProvider } from "./src/stores/setupContext";

const queryClient = new QueryClient();

export default function App() {
  return (
    <StoreProvider>
      <QueryClientProvider client={queryClient}>
        <HoodFinderScreen />
      </QueryClientProvider>
    </StoreProvider>
  );
}
