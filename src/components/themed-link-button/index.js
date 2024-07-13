import styles from "./index.module.scss";

export default function ThemedLinkButton({
  url,
  openNewTab = true,
  children,
  className,
}) {
  return (
    <a
      className={`${styles["themed-link-button"]} ${className}`}
      target={!!openNewTab && "_blank"}
      rel={!!openNewTab && "noopener noreferrer"}
      href={url}
    >
      {children}
    </a>
  );
}
