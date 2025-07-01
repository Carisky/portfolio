import { Box } from '@mui/material'
import '../App.css'

export default function AppWrapper({children}) {
  return (
    <Box sx={{
        backgroundColor:"#020202",
        minHeight:"100vh",
        display:"flex",
        flexDirection:"column"
    }}
    className="App"
    >
      {children}
    </Box>
  )
}
