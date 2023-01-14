import { Box, Grid, Tooltip, Typography } from "@mui/material"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
const Footer = () => {
    return (
        <>
            <Box bgcolor="info.main" sx={{ marginTop: 120 }} >
                <Grid container spacing={2}
                    justifyContent="center" textAlign="center">
                    <Grid item xs={5}>
                        <Typography color="white" variant="subtitle1">Developed for Hackathon</Typography>
                        
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Footer