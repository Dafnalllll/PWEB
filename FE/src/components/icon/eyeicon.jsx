export const EyeOpenIcon = ({ className = "" }) => (
  <svg
    className={className}
    width="24"
    height="24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    viewBox="0 0 24 24"
  >
    <path
      d="M2.5 12C4.5 7.5 8.5 5 12 5s7.5 2.5 9.5 7c-2 4.5-6 7-9.5 7s-7.5-2.5-9.5-7z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle
      cx="12"
      cy="12"
      r="3"
      stroke="currentColor"
      strokeWidth="1.8"
      fill="none"
    />
  </svg>
);

export const EyeClosedIcon = ({ className = "" }) => (
  <svg
    className={className}
    width="24"
    height="24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    viewBox="0 0 24 24"
  >
    <path
      d="M2.5 12C4.5 7.5 8.5 5 12 5s7.5 2.5 9.5 7c-2 4.5-6 7-9.5 7s-7.5-2.5-9.5-7z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle
      cx="12"
      cy="12"
      r="3"
      stroke="currentColor"
      strokeWidth="1.8"
      fill="none"
    />
    <line
      x1="4"
      y1="20"
      x2="20"
      y2="4"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </svg>
);

export default {
  EyeOpenIcon,
  EyeClosedIcon,
};
