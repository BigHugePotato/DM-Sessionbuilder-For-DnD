// import style from "./Tool-Tip.module.css";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Typography from "@mui/material/Typography";
import { useState, React } from "react";

// const StyledTooltip = styled(({ className, content, ...props }) => (
//   <Tooltip {...props} title={content} classes={{ popper: className }} />
// ))(({ theme }) => ({
//   [`& .${tooltipClasses.tooltip}`]: {
//     backgroundColor: "#f5f5f9",
//     color: "rgba(0, 0, 0, 0.87)",
//     maxWidth: 220,
//     fontSize: theme.typography.pxToRem(12),
//     border: "1px solid #dadde9",
//   },
// }));

export function HoverTooltip({ children, content }) {
  const [open, setOpen] = useState(false);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    console.log("Tooltip should open");
    setOpen(true);
  };

  return (
    <ClickAwayListener onClickAway={handleTooltipClose}>
      <div>
        <Tooltip
          PopperProps={{ disablePortal: true }}
          onClose={handleTooltipClose}
          open={open}
          disableFocusListener
          disableHoverListener
          disableTouchListener
          title={<>{content}</>}
        >
          <div onClick={handleTooltipOpen} style={{ cursor: "pointer" }}>
            {children}
          </div>
        </Tooltip>
      </div>
    </ClickAwayListener>
  );
}
