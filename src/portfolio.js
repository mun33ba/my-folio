/* Change this file to get your personal Porfolio */

const greeting = {
  /* Your Summary And Greeting Section */
  title: "Hi all 👋 I'm Muneeba",
  subTitle:
    "A passionate Undergraduate 🚀 having an experience of building Web applications with JavaScript / Reactjs  and some other cool libraries and frameworks",
  //resumeLink: "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing"
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github:   "https://github.com/mun33ba",
  linkedin: "https://www.linkedin.com/in/muneeba-faheem/",
  facebook: "https://www.facebook.com/profile.php?id=100042983440759"
};

const skillsSection = {
  /* Your Skills Section  */
  title: "What i do",
  subTitle: "CRAZY WEB DEVELOPER WHO WANT TO EXPLORE EVERY TECH STACK",
  skills: [
    "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications",
    //"⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks",
    "⚡ Integration of third party services such as Firebase"
  ],

  /* Make Sure You include correct Font Awesome Classname to view your icon */
  /* https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "wordpress",
      fontAwesomeClassname: "fab fa-wordpress"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ]
};

const openSource = {
  /* Your Open Source Section to View Your Github Pinned Projects */
  /* To know how to get github key look at readme.md */

  githubConvertedToken: "Your Github Converted Token",
  githubUserName: "Your Github Username"
};

/*const bigProjects = {
  /* Some Big Projects You have worked with your company 
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELP TO CREATE THEIR TECH",
  projects: [
    {
      image: "",
      link: ""
    },
    {
      image: "",
      link: ""
    }
  ]
};*/

const achievementSection = {
  /* Your Achievement Section Include Your Certifications and More */

  title: "Achievements And Certifications 🏆 ",
  subtitle: "Achievements, Certifications and Some Cool Stuff that I have done !",
  achivementsCards: [
    {
      title: "2nd ICONICS - NEDUET",
      description: "ICONICS ",
      image:
       "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTFmTWQkv2GKTjPPPcKJqdPNLKTONu_thqtLliFyNIIAaAmqawN",
      footerLink: [
        { name: "Certficate of Participation", url: "https://drive.google.com/file/d/15IFrLdhUaTe_nDb5KrEB08-hHEJVDzh-/view " },]
    },

    {
      title: "Internship",
      subtitle:"Web Developer - Intern",
      description: "Helps me to improve my technical skills ",
      image:
"https://img.etimg.com/thumb/msid-62394741,width-300,imgsize-58281,resizemode-4/internship-.jpg",
      footerLink: [
        { name: "Certification", url: "https://drive.google.com/file/d/1U3N8R8Wfom646s7SZue-_rsy_tGcGswt/view?usp=sharing" },
      ]
    },

    {
      title: "PIAIC - Cloud Computing",
      subtitle:"In Progress",
      description: "Helps to learn new technologies",
      image: 
      "https://www.piaic.org/static/media/Logo.fb7de414.svg",
      footerLink: [
        { name: "Certification", url: "" },
      ]
    }
  ]
};

const contactInfo = {
  title: "Contact Me ☎️",
  subtitle: "Discuss a project or just want to say hi my inbox is open for all",
  //number: "+92-33XXXXXXXX",
  email_address: "mun33bafah33m@gmail.com"
};

export { greeting, socialMediaLinks, skillsSection, openSource,  achievementSection, contactInfo };
