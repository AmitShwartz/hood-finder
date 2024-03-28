import { QueryClient, QueryClientProvider } from "react-query";
import HoodFinderScreen from "./src/screens/HoodFinderScreen";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <HoodFinderScreen />
    </QueryClientProvider>
  );
}
