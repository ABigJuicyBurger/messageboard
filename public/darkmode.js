function toggleDarkMode() {
  document.documentElement.classList.toggle("dark");
  console.log(
    "Dark mode toggled:",
    document.documentElement.classList.contains("dark")
  );
}
