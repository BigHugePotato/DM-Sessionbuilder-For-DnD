import style from "../Display-Cards/Monster-Card.module.css";
import { Tooltip } from "../Tool-Tip/Tool-Tip";

export const CardSkills = ({ skillsObj }) => {
    if (!skillsObj || Object.keys(skillsObj).length === 0) {
      return null;
    }

    const skillsContent = skillsObj ? Object.entries(skillsObj).map(([skillName, skillValue], index) => (
      <div key={index}>
        <strong>{skillName}:</strong> +{skillValue}
      </div>
    )) : 'None';
  
    return (
      <Tooltip content={<div>{skillsContent}</div>}>
        <span className={style.skillsTrigger}>Skills</span>
      </Tooltip>
    );
  };
