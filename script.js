// Toggle dark mode
document.getElementById("theme-toggle").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Dynamic skill display
const skills = [
  "Java", "Python", "JavaScript", "React", "Node.js",
  "Kotlin", "SQL", "Power BI", "AWS", "Docker",
  "Git", "Linux", "Networking", "HTML", "CSS", "IT Support"
];

const skillContainer = document.getElementById("skills-list");

skills.forEach(skill => {
  const tag = document.createElement("span");
  tag.classList.add("skill-tag");
  tag.textContent = skill;
  skillContainer.appendChild(tag);
});
