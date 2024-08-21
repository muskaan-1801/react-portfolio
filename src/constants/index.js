import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/projects/project-5.jpg";


export const HERO_CONTENT = `I am a passionate and driven full stack developer with a strong foundation in Java, where I have excelled in mastering Data Structures and Algorithms (DSA). My journey in the tech world is fueled by an insatiable curiosity and a relentless drive to learn and grow. Although I am still in the process of mastering web technologies, I have already gained solid experience in HTML, CSS, JavaScript, React, MongoDB, and Node.js. My ability to quickly grasp new concepts and apply them effectively sets me apart. I am also a natural leader with strong communication skills, enabling me to guide teams and articulate ideas clearly. My goal is to continue learning, pushing boundaries, and leveraging my growing expertise to create innovative solutions that not only meet but exceed expectations.`;

export const ABOUT_TEXT = `I hold a BSc in Computer Science from Delhi University and am currently pursuing my MCA from IGDTUW. My academic journey has laid a strong foundation in computer science, and I am now focused on enhancing my skills in web development. I am passionate about improving my logical abilities through rigorous practice in Data Structures and Algorithms (DSA), with a preference for using Java. Alongside Java, I have a basic knowledge of C++ and Python, and I am familiar with SQL. I am committed to continuous learning, and day by day, I am expanding my expertise in various technologies, striving to become a well-rounded developer.`;


export const EXPERIENCES = [
  {
    year: "2024 - June-July",
    role: "Summer Internship on MERN Technologies-Intern",
    company: "Anveshan Foundation",
    description: `• Developed dynamic web applications, including a To-Do application and a YouTube clone, using the MERN stack.  Enhanced skills in full-stack development through hands-on project implementation and real-world problem-solving.`,
    technologies: ["Javascript", "React.js", "Node.js", "mongoDB"],
  }
];

export const PROJECTS = [
  {
    title: "Portfolio",
    image: project1,
    description:
      "Developed my portfolio using HTML, React, and Tailwind CSS to showcase my skills, projects, and experiences. Leveraging the power of React for a dynamic user interface and Tailwind CSS for sleek, responsive design, this portfolio reflects my expertise in front-end development and my commitment to creating visually appealing and highly functional web applications.",
    technologies: ["HTML", "Javascript", "Tailwind", "React"],
    link : 'https://github.com/muskaan-1801/react-portfolio'
  },
  {
    title: "MuKo EId Card Generator",
    image: project2,
    description:
      "Developed an ID card generator using HTML, CSS, JavaScript, and Node.js. In this application, students can input their details, and the system generates an ID card using HTML, CSS, and JavaScript. The data entered by the students is authenticated against a database, ensuring accuracy and security before generating the final ID card. This project demonstrates my ability to integrate front-end and back-end technologies to create functional and secure web applications.",
    technologies: ["HTML", "CSS", "JavaScript", "NodeJS"],
    link : 'https://github.com/muskaan-1801/MuKoEidCardGenerator'
  },
  {
    title: "StonePaperScissor",
    image: project3,
    description:
      "Developed a Stone-Paper-Scissors game using HTML, CSS, and JavaScript, with a primary focus on JavaScript to demonstrate the creation of a dynamic, interactive game. This project showcases various JavaScript functionalities, including event handling, logic implementation, and DOM manipulation, providing a fun and engaging way to explore the capabilities of the language.",
    technologies: ["HTML", "CSS", "JavaScript"],
    link : 'https://github.com/muskaan-1801/StonePaperScissor'
  },
  {
    title: "SelfCreation-LinkedIn Clone",
    image: project4,
    description:
      "'SelfCreation' a static LinkedIn clone, using HTML, CSS, and basic JavaScript. This project focuses on showcasing the design capabilities of HTML and CSS to build a professional, responsive layout. Basic JavaScript action listeners are included to demonstrate simple user interactions, but the site remains static and non-functional.",
    technologies: ["HTML", "CSS", "JavaScript"],
    link : 'https://github.com/muskaan-1801/SelfCreation'
  },
  {
    title: "Recipe-App",
    image: project5,
    description:
      "Developed a recipe-app using React, which connects to an API to provide users with a seamless experience in finding recipes. Users can search for recipes using the input field, and the app fetches and displays related recipes along with detailed information such as calories and ingredients. This project showcases my ability to integrate external APIs and build responsive, user-friendly interfaces with React.",
    technologies: ["HTML", "CSS", "JavaScript","React"],
    link : 'https://github.com/muskaan-1801/GetRecipe'
  },
];

export const CONTACT = {
  address: "New Delhi , India",
  phoneNo: "+91 9XXXXXXXX",
  email: "me@example.com",
};
