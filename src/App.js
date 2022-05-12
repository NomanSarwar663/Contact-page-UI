// mui
import { Box } from "@mui/material";
// mui icon
import { CallCard } from "./components/CallCard";
import { recentCalls } from "./mockData";

function App() {
  return (
    <Box
      id="app"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box id="card">
        {recentCalls.map((callData, ind) => (
          <CallCard key={ind} data={callData} />
        ))}
      </Box>
    </Box>
  );
}

export default App;
