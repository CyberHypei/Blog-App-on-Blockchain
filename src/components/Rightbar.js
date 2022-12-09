import { InputLabel } from "@mui/material";
import { Input } from "web3uikit";
import "./Rightbar.css";

const Rightbar = () => {
  const trends = [
    {
      text: "Real Performance Paradox",
    },
    {
      text: "The Email Scam That Nearly Worked On Me",
    },
    {
      text: "The forgotten benefits of “low tech” user interfaces",
    },
    {
      text: "Become a Web3 Developer with just simple JS...",
    },
  ];

  return (
    <>
      <div className="rightbarContent">
        <Input label="Search" name="Search" prefixIcon="search" labelBgColor="black"></Input>

        <div className="trends">
          What are we Reading today
          {trends.map((e, i) => {
            return(
              <div key={i} className="trend">
                <div className="trendText">{e.text}</div>
              </div>
            );
          })}
          </div> 

      </div>
    </>
  );
};

export default Rightbar;
