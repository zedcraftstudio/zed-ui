import { Link } from "react-router-dom";
import { ROUTES } from "../config/routes";
import { assetUrl } from "../utils/assetUrl";

export type SiteLogoProps = {
  className?: string;
  imageClassName?: string;
};

export function SiteLogo({ className, imageClassName = "brand-logo" }: SiteLogoProps) {
  return (
    <Link className={className} to={ROUTES.home}>
      <img
        alt=""
        className={imageClassName}
        height={28}
        src={assetUrl("brand-logo.png")}
        width={28}
      />
      <span className="site-logo__text">Zed UI</span>
    </Link>
  );
}
