import "./Tag.scss";

export function Tag({ label }) {
  return (
    <tag className="tag">
      <button> {label}</button>
    </tag>
  );
}
