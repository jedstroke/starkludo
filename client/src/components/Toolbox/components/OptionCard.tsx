import Board from "../../../assets/images/board.png";
import "../../../styles/toolbox/OptionCard.scss";

export default function OptionCard({
  active,
  onSelect,
  option,
}: {
  active?: boolean;
  onSelect?: () => void;
  option?: { name: string, option: string };
}) {
  return (
    <div
      onClick={onSelect}
      className={`board-container ${active ? "active" : ""}`}
    >
      <p>{option?.name}</p>
      <div className="option-img">
        <img src={Board} alt="board" />
      </div>
      <p>{option?.option}</p>
    </div>
  );
}
