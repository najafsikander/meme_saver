import { faHourglass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
const FontAwesomeIconLink = ({
  routeUrl,
  icon,
  size,
}: {
  routeUrl: string;
  icon: any;
  size: any;
}) => {
  // const {icon, size} =  props;
  return (
    <>
      <Link href={routeUrl}>
        <a><FontAwesomeIcon icon={icon} size={size} className="nav-link active" /></a>
      </Link>
      
    </>
  );
};

export default FontAwesomeIconLink;
