import React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Header from "../../components/header/header";
import { Container } from "@material-ui/core";
import "./podcast.css";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: "100vw",
  },
}));

export default function Podcast() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <>
      <Header text="TCC Podcast" />

      <div>
        Check out The Coder Career podcast on the streaming platform of your
        choice!
      </div>
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
            aria-label="full width tabs example"
          >
            <Tab label="Spotify" {...a11yProps(0)} />
            <Tab label="Apple Podcasts" {...a11yProps(1)} />
            <Tab label="Youtube" {...a11yProps(2)} />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            <iframe
              src="https://open.spotify.com/embed/show/7BkIsKOw8vhFOmD4ZKXwES"
              width="100%"
              height="152"
              frameBorder="0"
              allowtransparency="true"
              allow="encrypted-media"
            ></iframe>{" "}
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            Coming soon!{" "}
          </TabPanel>
          <TabPanel value={value} index={2} dir={theme.direction}>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/videoseries?list=PLSHMziG3Rh9IYAOWbzGZuY0260wEaFhuo"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>{" "}
          </TabPanel>
        </SwipeableViews>
      </div>
    </>
  );
}
