import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../pages/theme";
import { useState, useEffect } from "react";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [isFetching, setIsFetching] = useState(false);
  const [queries, setQueries] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsFetching(true);
    const fetchQueries = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/getAllQuery`);

        if (!response.ok) {
          throw new Error("Some error occured while fetching queries!");
        }
        const data = await response.json();
        if (data.length === 0) {
          console.log("No queries to handle yet.");
        }
        console.log(data.querries);
        setQueries(data.querries);
        setIsFetching(false);
      } catch (error) {
        setError(error.message);
        console.log(error.message);
      }
    };
    setIsFetching(false);
    fetchQueries();
  }, []);

  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />
      {isFetching && <p>Fetching user queries, please wait a moment...</p>}
      <ul>
      {queries.map((query) => {
        return <Accordion defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography color={colors.greenAccent[500]} variant="h5">
              {query.querrier}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{query.query}</Typography>
          </AccordionDetails>
        </Accordion>;
      })}
      </ul>
      
    </Box>
  );
};

export default FAQ;
