import { Box } from '@mui/material'
import '../App.css'

export default function AppWrapper({children}) {
  return (
    <Box sx={{
        backgroundColor:"#D8D8D8",
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
