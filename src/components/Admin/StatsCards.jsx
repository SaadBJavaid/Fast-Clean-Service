import { Grid, Card, CardContent, Typography } from "@mui/material";

const StatsCards = () => {
    return (
        <Grid container spacing={3}>
            {/* Bookings Card */}
            <Grid item xs={12} sm={6} md={4}>
                <Card sx={bookingCardStyles}>
                    <CardContent>
                        <Typography variant="h5" component="div" sx={headingStyles}>
                            Number of Bookings
                        </Typography>
                        <Typography variant="h4" sx={{ mt: 2, fontWeight: "bold" }}>
                            120
                        </Typography>
                        {/*<Typography sx={{ mt: 1 }}>
                            Increased by 10% this week
                        </Typography>*/}
                    </CardContent>
                </Card>
            </Grid>

            {/* Work Scheduled Card */}
            <Grid item xs={12} sm={6} md={4}>
                <Card sx={workCardStyles}>
                    <CardContent>
                        <Typography variant="h5" component="div" sx={headingStyles}>
                            Work Scheduled
                        </Typography>
                        <Typography variant="h4" sx={{ mt: 2, fontWeight: "bold" }}>
                            45
                        </Typography>
                        {/*<Typography sx={{ mt: 1 }}>
                            Increased by 5% this week
                        </Typography>*/}
                    </CardContent>
                </Card>
            </Grid>

            {/* Contact Queries Received Card */}
            <Grid item xs={12} sm={6} md={4}>
                <Card sx={contactCardStyles}>
                    <CardContent>
                        <Typography variant="h5" component="div" sx={headingStyles}>
                            Queries Received
                        </Typography>
                        <Typography variant="h4" sx={{ mt: 2, fontWeight: "bold" }}>
                            85
                        </Typography>
                        {/*<Typography sx={{ mt: 1 }}>
                            Increased by 8% this week
                        </Typography>*/}
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
};

// Gradient styles for different cards
const bookingCardStyles = {
    background: "linear-gradient(50deg, #56CCF2 0%, #2F80ED 100%)", // Blue gradient
    boxShadow: "0 6px 20px rgba(0, 0, 0, 0.2)", // Deeper shadow
    borderRadius: "15px",
    padding: 3,
    textAlign: "center",
    color: "#ffffff",
    transition: "all 0.3s ease",
    "&:hover": {
        transform: "translateY(-5px)",
        boxShadow: "0 10px 25px rgba(0, 0, 0, 0.3)", // Stronger shadow on hover
    },
};

const workCardStyles = {
    background: "linear-gradient(50deg, #43E97B 0%, #38F9D7 100%)", // Green gradient
    boxShadow: "0 6px 20px rgba(0, 0, 0, 0.2)", // Deeper shadow
    borderRadius: "15px",
    padding: 3,
    textAlign: "center",
    color: "#ffffff",
    transition: "all 0.3s ease",
    "&:hover": {
        transform: "translateY(-5px)",
        boxShadow: "0 10px 25px rgba(0, 0, 0, 0.3)", // Stronger shadow on hover
    },
};

const contactCardStyles = {
    background: "linear-gradient(50deg, #FF758C 0%, #FF7EB3 100%)", // Pink gradient
    boxShadow: "0 6px 20px rgba(0, 0, 0, 0.2)", // Deeper shadow
    borderRadius: "15px",
    padding: 3,
    textAlign: "center",
    color: "#ffffff",
    transition: "all 0.3s ease",
    "&:hover": {
        transform: "translateY(-5px)",
        boxShadow: "0 10px 25px rgba(0, 0, 0, 0.3)", // Stronger shadow on hover
    },
};

// Shared heading styles for all cards
const headingStyles = {
    fontWeight: "bold",
    fontSize: "2.5rem",
    color: "#ffffff",
};

export default StatsCards;
