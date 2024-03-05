import style from "../Display-Cards/Monster-Card.module.css";
import { HoverTooltip } from "../Tool-Tip/Tool-Tip";
import React from "react";
import Typography from '@mui/material/Typography';

export const CardSkills = ({ skillsObj }) => {
    if (!skillsObj || Object.keys(skillsObj).length === 0) {
      return null;
    }

    const skillsContent = (
      <>
        {Object.entries(skillsObj).map(([skillName, skillValue], index) => (
          <Typography key={index} color="inherit">
            <strong>{skillName}:</strong> +{skillValue}
          </Typography>
        ))}
      </>
    );
  
    return (
      <HoverTooltip content={skillsContent}>
        <span className={style.skillsTrigger}>Skills</span>
      </HoverTooltip>

      
    );
  };
