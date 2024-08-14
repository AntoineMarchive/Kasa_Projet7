import "./Tag.scss";

export function Tag({ Text }) {
  return (
    <tag className="tag">
      <button> {Text}</button>
    </tag>
  );
}
