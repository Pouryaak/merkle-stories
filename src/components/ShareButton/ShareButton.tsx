import React, { useEffect, useRef } from "react";
import styles from "./ShareButton.module.scss";
import { BsFillShareFill } from "react-icons/bs";
import {
  TwitterIcon,
  LinkedinShareButton,
  TwitterShareButton,
  FacebookShareButton,
  FacebookIcon,
  LinkedinIcon,
} from "react-share";

interface ShareButtonProps {
  url: string;
  title: string;
}

const ShareButton: React.FC<ShareButtonProps> = ({ url, title }) => {
  const [open, setOpen] = React.useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: any) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setOpen(false);
    }
  };

  const handleOpen = () => {
    setOpen(!open);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={menuRef}>
      <div className={styles.shareButton}>
        <button onClick={handleOpen} className={styles.shareButton}>
          <BsFillShareFill />
        </button>
      </div>
      <ul className={`${styles.menu} ${open ? styles.open : ""}`}>
        <div>
          <LinkedinShareButton
            source={url}
            url={url}
            title={title}
            summary={title}
          >
            <LinkedinIcon size={25} round />
          </LinkedinShareButton>
        </div>
        <div>
          <FacebookShareButton url={url} quote={title}>
            <FacebookIcon size={25} round />
          </FacebookShareButton>
        </div>
        <div>
          <TwitterShareButton title={title} url={url}>
            <TwitterIcon size={25} round />
          </TwitterShareButton>
        </div>
      </ul>
    </div>
  );
};

export default ShareButton;
