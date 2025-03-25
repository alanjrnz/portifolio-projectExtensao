// Sample team members data - Replace with actual team members
const teamMembers = [
    {
        name: "Nome do Integrante 1",
        photo: "https://via.placeholder.com/150",
        course: "Curso do Integrante 1",
        github: "https://github.com/usuario1"
    },
    {
        name: "Nome do Integrante 2",
        photo: "https://via.placeholder.com/150",
        course: "Curso do Integrante 2",
        github: "https://github.com/usuario2"
    },
    // Add more team members as needed
];

// Function to create team member cards
function createTeamMemberCard(member) {
    return `
        <div class="team-member">
            <img src="${member.photo}" alt="${member.name}" class="member-photo">
            <h3 class="member-name">${member.name}</h3>
            <p class="member-course">${member.course}</p>
            <a href="${member.github}" target="_blank" class="member-github">GitHub</a>
        </div>
    `;
}

// Populate team members section
document.addEventListener('DOMContentLoaded', () => {
    const teamContainer = document.getElementById('team-container');
    teamContainer.innerHTML = teamMembers.map(createTeamMemberCard).join('');

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});