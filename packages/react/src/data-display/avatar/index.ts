import { AvatarFallback, AvatarImage, AvatarRoot } from "./Avatar";
import { AvatarGroup } from "./AvatarGroup";
import { AvatarIcon } from "./AvatarIcon";

export {
  Avatar,
  AvatarFallback,
  AvatarImage,
  AvatarRoot,
  type AvatarOwnProps,
  type AvatarShape,
  type AvatarVariant,
  getAvatarColorFromName,
  getAvatarInitials
} from "./Avatar";
export { AvatarGroup, type AvatarGroupOwnProps, type AvatarGroupStacking } from "./AvatarGroup";
export { AvatarIcon } from "./AvatarIcon";

export const AvatarParts = {
  Fallback: AvatarFallback,
  Group: AvatarGroup,
  Icon: AvatarIcon,
  Image: AvatarImage,
  Root: AvatarRoot
};
