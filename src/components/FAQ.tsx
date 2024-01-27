import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FAQArray = [
  {
    id: 1,
    summary: "Miner Winning Announcement",
    details: "Object: All members who successfully signed up for mining Rules: The company's node mining system draws six lucky winners every week Time: 2023.1.1~~2023.12.31 First prize (1 person): 177777 USDT Second prize (2 people): 80000 USDT Third Prize (3 people): 30000 USDT Redemption conditions: The first prize requires 18,888 USDT to participate in mining, the second prize requires 7,777 USDT to participate in mining, and the third prize requires 5,555 USDT to participate in mining.",
  },
  {
    id: 2,
    summary: "Miner Winning Announcement",
    details: "Object: All members who successfully signed up for mining Rules: The company's node mining system draws six lucky winners every week Time: 2023.1.1~~2023.12.31 First prize (1 person): 177777 USDT Second prize (2 people): 80000 USDT Third Prize (3 people): 30000 USDT Redemption conditions: The first prize requires 18,888 USDT to participate in mining, the second prize requires 7,777 USDT to participate in mining, and the third prize requires 5,555 USDT to participate in mining.",
  },
  {
    id:3,
    summary: "Miner Winning Announcement",
    details: "Object: All members who successfully signed up for mining Rules: The company's node mining system draws six lucky winners every week Time: 2023.1.1~~2023.12.31 First prize (1 person): 177777 USDT Second prize (2 people): 80000 USDT Third Prize (3 people): 30000 USDT Redemption conditions: The first prize requires 18,888 USDT to participate in mining, the second prize requires 7,777 USDT to participate in mining, and the third prize requires 5,555 USDT to participate in mining.",
  },
  {
    id: 4,
    summary: "Miner Winning Announcement",
    details: "Object: All members who successfully signed up for mining Rules: The company's node mining system draws six lucky winners every week Time: 2023.1.1~~2023.12.31 First prize (1 person): 177777 USDT Second prize (2 people): 80000 USDT Third Prize (3 people): 30000 USDT Redemption conditions: The first prize requires 18,888 USDT to participate in mining, the second prize requires 7,777 USDT to participate in mining, and the third prize requires 5,555 USDT to participate in mining.",
  },
];
export default function FAQ() {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <div className="mx-3 p-4 bg-[#212244] flex flex-col space-y-4 justify-between rounded-xl">
      <h1 className="font-semibold text-[22px] mb-4">Help Center</h1>
      {FAQArray.map((faq) => (
        <CustomAccordion
          key={faq.id}
          {...faq}
          expanded={expanded}
          handleChange={handleChange}
        />
      ))}
    </div>
  );
}

type CustomAccordionProp = {
  id: number;
  summary: string;
  details: string;
  expanded: any;
  handleChange: any;
};
const CustomAccordion = ({
  summary,
  details,
  id,
  expanded,
  handleChange,
}: CustomAccordionProp) => {
  return (
    <Accordion
      expanded={expanded === `panel${id}`}
      onChange={handleChange(`panel${id}`)}
      elevation={0}
      sx={{ background: "#2C2C52", color: "#fff", borderRadius: "6px" }}
    >
      <AccordionSummary
        expandIcon={
          <ExpandMoreIcon className="text-[#2C2C52] h-2 w-2 rounded-full bg-white" />
        }
        aria-controls="panel1bh-content"
        id={`panel${id}bh-header`}
      >
        <p className="text-[18px] font-semibold">{summary}</p>
      </AccordionSummary>
      <AccordionDetails className="bg-[#2C2C52]" sx={{ borderRadius: "6px" }}>
        <p className="text-[14px]">{details}</p>
      </AccordionDetails>
    </Accordion>
  );
};
