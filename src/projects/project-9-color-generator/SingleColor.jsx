import { useEffect, useState } from "react";

const componentToHex = (color) => {
  const hex = color.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
};

const rgbToHex = (r, g, b) => {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
};

export default function SingleColor({ rgb, weight, index, hexColor }) {
  const [alert, setAlert] = useState(false);
  const bgc = rgb.join(", ");
  const hex = rgbToHex(...rgb);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, [alert]);

  return (
    <article
      style={{
        backgroundColor: `rgb(${bgc})`,
        height: "300px",
        width: "300px",
      }}
      onClick={() => {
        setAlert(true);
        console.log(navigator.clipboard.writeText(hex));
      }}
    >
      <p>{weight}%</p>
      <p>{hex ? hex : hexColor}</p>
      {alert && <p>Copied to Clipboard</p>}
    </article>
  );
}
