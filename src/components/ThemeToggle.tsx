import { useTheme } from "../context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
        padding: "0.375rem 0.75rem",
        backgroundColor: "var(--tag-bg)",
        border: "1px solid var(--border)",
        borderRadius: "100px",
        cursor: "pointer",
        transition: "all 0.2s ease",
        flexShrink: 0,
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "var(--border-strong)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
      }}
    >
      {/* Track */}
      <span
        style={{
          position: "relative",
          width: "2rem",
          height: "1.125rem",
          borderRadius: "100px",
          backgroundColor: isDark ? "var(--primary)" : "var(--fg-dimmed)",
          transition: "background-color 0.25s ease",
          display: "inline-block",
          flexShrink: 0,
        }}
      >
        {/* Thumb */}
        <span
          style={{
            position: "absolute",
            top: "0.1875rem",
            left: isDark ? "calc(100% - 0.8125rem)" : "0.1875rem",
            width: "0.75rem",
            height: "0.75rem",
            borderRadius: "50%",
            backgroundColor: "#fff",
            transition: "left 0.25s ease",
          }}
        />
      </span>
      {/* Icon */}
      <span
        style={{
          fontSize: "0.875rem",
          lineHeight: 1,
          userSelect: "none",
        }}
      >
        {isDark ? "🌙" : "☀️"}
      </span>
    </button>
  );
}
