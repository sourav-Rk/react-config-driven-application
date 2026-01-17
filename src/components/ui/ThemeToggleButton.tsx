import { useTheme } from "../../hooks/useTheme";

export function ThemeToggleButton() {
  const { themeName, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="px-3 py-2 rounded-md border text-sm"
      style={{
        borderColor: "var(--color-border)",
        color: "var(--color-text)",
        backgroundColor: "var(--color-surface)",
      }}
    >
      Switch to {themeName === "dark" ? "Light" : "Dark"}
    </button>
  );
}
