const experiences = [
  {
    company: "Pyther Innovations Private Limited",
    period: "Aug 2021 - March 2025",
    roles: [
      {
        title: "Remotexs - Software Developer/UI UX Designer",
        description: "Developed electronic library platform with React, Node.js, and MongoDB",
        tech: ["React", "Node.js", "MongoDB"]
      },
      {
        title: "Bizbro - Full Stack Developer",
        description: "Built admin dashboard for managed IT services with React and Express backend.",
        tech: ["React", "ExpressJS", "MongoDB"]
      },
      {
        title: "Connected Safety - IoT Dashboard Developer",
        description: "Created live dashboard showing firefighter data and building locations using React and REST APIs.",
        tech: ["React", "Node.js", "REST API"]
      },
      {
        title: "PowerBlox - Dashboard Developer",
        description: "Built multi-tenant electricity meter admin platform integrated with AWS IoT.",
        tech: ["React", "Sequelize", "AWS IoT"]
      },
      {
        title: "Hafla (UAE) - Frontend Developer",
        description: "Contributed to event management platform using NextJS, Tailwind, and PostgreSQL.",
        tech: ["NextJS", "TailwindCSS", "PostgreSQL"]
      }
    ]
  },
  {
    company: "Gateway Group of Companies",
    period: "April 2025 - Present",
    roles: [
      // Add projects here as they arise
      ]
  }
];
    
const experienceContainer = document.getElementById('experience-content');    
experiences.forEach(exp => {
  const companyDiv = document.createElement('div');
  companyDiv.className = "experience-item bg-gray-50 p-6 rounded-lg shadow-sm";
    
  const companyHeader = `
    <h4 class="text-xl font-semibold">${exp.company}</h4>
    <p class="text-gray-600">${exp.period}</p>
    `;
    
  let rolesHTML = '<div class="mt-4 space-y-4">';
  exp.roles.forEach(role => {
    const techTags = role.tech.map(
      tech => `<span class="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">${tech}</span>`
        ).join(' ');
    
        rolesHTML += `
          <div>
            <h5 class="font-semibold">${role.title}</h5>
            <p class="text-sm text-gray-600">${role.description}</p>
            <div class="mt-2 flex flex-wrap gap-2">${techTags}</div>
          </div>
        `;
  });
  rolesHTML += '</div>';
  companyDiv.innerHTML = companyHeader + rolesHTML;
  experienceContainer.appendChild(companyDiv);
});
