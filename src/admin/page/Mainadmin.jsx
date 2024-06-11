import Box from '@mui/material/Box';
import Adminlist from "../section/Adminlist";
import Dashboard from './AdminDashboard';


export default function Mainadmin() {
    return (
        <Box sx={{
            display: "flex",
            flexDirection: "row",
        }}>
            <Adminlist />
            <Dashboard />
        </Box>
    )
}
