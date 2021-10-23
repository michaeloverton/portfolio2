import { Link } from "react-router-dom";
import {
  linkStyles,
  sectionHeaderStyles,
  subSectionHeaderStyles,
} from "./Globals";

type LinkProps = {
  url: string;
};

export const ExternalLink: React.FC<LinkProps> = ({ url, children }) => {
  return (
    <Link
      style={linkStyles}
      to={{
        pathname: url,
      }}
      target="_blank"
    >
      <div className="music-link">{children}</div>
    </Link>
  );
};

type SubHeaderProps = {
  borderWidth: string;
};

export const SubSectionHeader: React.FC<SubHeaderProps> = ({
  children,
  borderWidth,
}) => {
  return (
    <div
      style={{
        ...{
          borderBottom: `${borderWidth} solid`,
        },
        ...subSectionHeaderStyles,
      }}
    >
      {children}
    </div>
  );
};

export const SectionHeader: React.FC<SubHeaderProps> = ({
  children,
  borderWidth,
}) => {
  return (
    <div
      style={{
        ...{
          borderBottom: `${borderWidth} solid`,
        },
        ...sectionHeaderStyles,
      }}
    >
      {children}
    </div>
  );
};
