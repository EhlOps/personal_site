import { GitHubIcon, LinkedInIcon, XIcon } from "../icons";

export const socialIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  x: XIcon,
};
