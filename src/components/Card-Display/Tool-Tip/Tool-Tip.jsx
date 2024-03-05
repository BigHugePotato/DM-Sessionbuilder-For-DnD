// import style from "./Tool-Tip.module.css";
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';

// export const Tooltip = ({ children, content }) => {
//   const [isVisible, setIsVisible] = useState(false);

//   return (
//     <div
//       className={style.tooltipContainer}
//       onMouseEnter={() => setIsVisible(true)}
//       onMouseLeave={() => setIsVisible(false)}
//     >
//       {children}
//       {isVisible && <div className={style.tooltipContent}>{content}</div>}
//     </div>
//   );
// };

const HtmlTooltip = styled(({ className, content, ...props }) => (
  <Tooltip {...props} title={content} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#f5f5f9',
    color: 'rgba(0, 0, 0, 0.87)',
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: '1px solid #dadde9',
  },
}));

export function HoverTooltip({ children, content }) {
  return (
    <HtmlTooltip content={content}>
      {children}
    </HtmlTooltip>
  );
}