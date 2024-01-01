import Image from "next/image";
import styles from "./icon.module.scss";

type IconSize = "small" | "medium" | "large";

interface IconProps {
  name: string;
  size?: IconSize;
}

const getImageSize = (iconSize: IconSize) => {
  switch (iconSize) {
    case "small":
      return 32;
    case "medium":
      return 40;
    case "large":
      return 48;
  }
};

export default function Icon({ name, size = "medium" }: IconProps) {
  const imageSize = getImageSize(size);

  return (
    <>
      <span className={styles.icon}>
        <Image
          src={`/assets/${name}.svg`}
          alt=""
          width={imageSize}
          height={imageSize}
        />
      </span>
    </>
  );
}
