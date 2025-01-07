export default function AvatarCard({
  avatar,
  active,
  onSelect,
}: {
  avatar: string;
  active: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      className={`option-container ${active ? "active" : ""}`}
      onClick={onSelect}
    >
      <div className="option">
        <img src={avatar} alt="avatar" className="avatar" />
      </div>
    </button>
  );
}
