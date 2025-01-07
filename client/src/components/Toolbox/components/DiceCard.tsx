import "../../../styles/toolbox/DiceCard.scss";

interface Option {
  name: string;
}
export default function DiceCard({
  img,
  active,
  onSelect,
  option,
}: {
  img?: string;
  active?: boolean;
  onSelect?: () => void;
  option?: Option;
}) {
  return (
    <div
      className={`dice-container ${active ? "active" : ""}`}
      onClick={onSelect}
    >
      <div className="dice">
        <div className="name-label ">{option?.name}</div>
        <img src={img} alt="board" />
      </div>
    </div>
  );
}
