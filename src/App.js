import { Sidebar } from "./components/Sidebar";
import { Rightbar } from "./components/Rightbar";
import { Feeds } from "./components/Feeds";
import { Box, Stack, createTheme, ThemeProvider } from "@mui/material";
import { Navbar } from "./components/Navbar";
import { Add } from "./components/Add";
import { useState } from "react";




function App() {
  const [mode, setMode] = useState('dark');
  const darkTheme = createTheme({
    pallete:{
      mode:mode,
    }
  })

  return (
    <ThemeProvider theme={darkTheme}>
    <Box bgcolor={"background.default"}>
      <Navbar />
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar />
        <Feeds />
        <Rightbar />
      </Stack>
      <Add setMode={setMode}/>
    </Box>
    </ThemeProvider>
  );
}

export default App;
