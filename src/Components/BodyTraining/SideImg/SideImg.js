import "./SideImg.css";

export function SideImg({ image, paddingLeft, paddingRight }) {
  return (
    <div className="">
      <img
        className="right-side-img"
        src={image}
        style={{ paddingLeft: paddingLeft, paddingRight: paddingRight }}
        alt="right-side-img"
      />
    </div>
  );
}
