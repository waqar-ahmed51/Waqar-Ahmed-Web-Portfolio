import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Navbar from "./components/Navbar";
import "./styles/app.scss";

function App() {
  return (
    <>
      <Navbar />
      <div className="testClass">dfasdf</div>
      <div>
        <a href="https://github.com/waqar-ahmed51" target="_blank">
          <img
            src="https://avatars.githubusercontent.com/u/54082156?v=4"
            className="profile-pic"
            alt="Waqar Profile Pic"
          />
        </a>
      </div>
      <h1>Waqar Ahmed (Web Portfolio) - Coming Soon....</h1>

      <div className="d-flex justify-content-start">
        <h2>Overview</h2>
        <p>
          As a passionate software engineer, I believe that a well-designed
          portfolio is crucial to showcasing my abilities and attracting
          potential clients or employers. This repository serves as the central
          hub for my web portfolio, made with Vite, allowing me to easily manage
          and update my website as I continue to grow and evolve in my career.
        </p>

        <h2>Key Features</h2>
        <ul>
          <li>
            Responsive Design: My portfolio website is designed to be fully
            responsive, ensuring an optimal viewing experience across various
            devices and screen sizes.
          </li>
          <li>
            Project Showcase: I provide a dedicated section to showcase my
            projects, including detailed descriptions, images, and links to live
            demos or relevant repositories.
          </li>
          <li>
            Skills and Expertise: I highlight my skills and areas of expertise,
            helping visitors understand the technologies I work with and my
            proficiency in each.
          </li>
          <li>
            About Me: I offer an "About Me" section to provide a brief
            background about myself, including my education, work experience,
            and personal interests.
          </li>
          <li>
            Contact Information: Visitors can easily get in touch with me
            through a contact form or by connecting with me on various social
            media platforms.
          </li>
        </ul>
        <h2>Technologies Used</h2>
        <ul>
          <li>
            Vite: The web portfolio is built using the Vite framework, providing
            fast and efficient development and build processes.
          </li>
          <li>
            React: A JavaScript library for building user interfaces, used to
            create dynamic and interactive components within the web portfolio.
          </li>
          <li>
            HTML: The foundation of my web portfolio, providing the structure
            and content of each page.
          </li>
          <li>
            CSS: Used for styling and customizing the appearance of the website,
            ensuring a visually appealing and cohesive design.
          </li>
          <li>
            JavaScript: Enables interactivity and dynamic features on the
            website, enhancing the user experience.
          </li>
          <li>
            Bootstrap: Leveraged to streamline responsive design and ensure
            consistency across different devices.
          </li>
          <li>
            Git: Version control system to track changes to my code and
            collaborate with others effectively.
          </li>
          <li>
            GitHub Pages: Hosting service to deploy my web portfolio and make it
            accessible to the public.
          </li>
        </ul>
      </div>
      <div>
        <a href="#">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="#">
          <img src={reactLogo} className="logo" alt="React logo" />
        </a>
        <a href="#">
          <img
            src="https://www.freepnglogos.com/uploads/html5-logo-png/html5-logo-best-web-design-psd-html-cms-development-ecommerce-6.png"
            className="logo"
          />
        </a>
        <a href="#">
          <img src="https://logodix.com/logo/2062412.png" className="logo" />
        </a>
        <a href="#">
          <img
            src="https://cdn.freebiesupply.com/logos/thumbs/2x/git-logo.png"
            className="logo"
          />
        </a>
        <a href="#">
          <img
            src="https://logos-world.net/wp-content/uploads/2020/11/GitHub-Logo.png"
            className="logo"
          />
        </a>
      </div>

      <h2>Usage</h2>
      <p>
        Feel free to explore the code in this repository to gain insights into
        my web development techniques and design choices. You can also clone the
        repository to experiment with the code or make suggestions for
        improvements. If you find any issues or have questions, please don't
        hesitate to open an issue or reach out to me directly.
      </p>

      <b>
        Thank you for visiting my web portfolio repository. I hope you enjoy
        exploring my work and learning more about me as a software engineer!
      </b>
    </>
  );
}

export default App;
