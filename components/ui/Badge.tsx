interface StatusBadgeProps {
  type: "gain" | "loss";
  status: string;
  className?: string;
}

export default function StatusBadge({
  type,
  status,
  className,
}: StatusBadgeProps) {
  const typeColors = {
    gain: "bg-[#087A2E]",
    loss: "bg-[#C6381B]",
  };
  return (
    <div
      className={[
        className,
        "flex items-center rounded-2xl px-2 py-1 bg-[#34616F17]",
      ].join(" ")}
      data-test-id='sfe-status-badge'
    >
      <div
        className={`w-[6px] h-[6px] rounded-full mr-2 ${typeColors[type]}`}
      ></div>
      <p className='m-0 text-[15px] font-medium'>{status}</p>
    </div>
  );
}
