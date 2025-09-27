interface CustomDotProps {
  cx?: number;
  cy?: number;
  payload?: any;
  onClick: (payload: any) => void;
}

export default function CustomActiveDot({
  cx,
  cy,
  payload,
  onClick,
}: CustomDotProps) {
  if (cx === undefined || cy === undefined) return null;

  return (
    <circle
      cx={cx}
      cy={cy}
      r={6}
      fill="#0180DA"
      stroke="#fff"
      strokeWidth={2}
      style={{ cursor: "pointer" }}
      onClick={() => payload && onClick(payload)}
    />
  );
}
