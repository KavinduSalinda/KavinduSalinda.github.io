import Nuii from '../src/assets/images/Nuii.jpg';
import img1 from '../src/assets/images/img1.jpg';
import img2 from '../src/assets/images/img2.jpg';
import img3 from '../src/assets/images/img3.jpg';
import img4 from '../src/assets/images/img4.jpg';
const logotext = "KAVINDU";
const meta = {
    title: "Kavindu Salinda",
    description: "I’m Kavidu Salinda Mobile App developer _ Full stack devloper,currently working in Colombo",
};

const introdata = {
    title: "I’m Kavindu Salinda",
    animated: {
        first: "I love coding",
        second: "I code cool websites",
        third: "I develop mobile apps",
    },
    description: " An undergraduate student at University of Colombo ",
    your_img_url: Nuii,
};

const dataabout = {
    title: "about my self",
    aboutme: "As an undergraduate student pursuing a degree in Electronics and Information Technology, I bring a strong foundation in mathematics, physics, and chemistry to the table. I'm eager to embark on an internship opportunity that allows me to apply my analytical mindset and problem-solving skills to real-world IT challenges. With a reputation as a quick learner, a collaborative team player, and a dedicated individual, I am poised to make a meaningful contribution to any organization. ",
};
const worktimeline = [{
        jobtitle: "Undergraduate",
        where: "Univercity of Colombo",
        date: "2020",
    },
];

const skills = [{
        name: "Python",
        value: 90,
    },
    {
        name: "Javascript",
        value: 80,
    },
    {
        name: "HTML",
        value: 85,
    },
    {
        name: "CSS",
        value: 70,
    },
    {
        name: "Java",
        value: 75,
    },
    {
        name: "React",
        value: 60,
    },
    {
        name: "React Native",
        value: 60,
    },
];

const services = [
    {
        title: "UI & UX Design",
        description: "Our team of experienced designers will create user-friendly interfaces and seamless user experiences for your website or application. We focus on making your digital products visually appealing and easy to navigate to enhance user satisfaction and engagement."
    },
    {
        title: "Mobile App Development",
        description: "We specialize in developing custom mobile applications for both iOS and Android platforms. Our development team will work closely with you to turn your app idea into a functional and user-friendly reality. Whether it's a consumer app or a business solution, we've got you covered."
    },
    {
        title: "React.js Development",
        description: "We offer comprehensive React.js development services to help you build dynamic and interactive web applications. Our team of developers is skilled in creating responsive and performant React.js applications, providing a seamless user experience for your website visitors."
    }
];


const dataportfolio = [
    {
        img: img1,
        description: "I designed a stunning website for a local bakery, highlighting their delicious treats and friendly atmosphere.",
        link: "#",
    },
    {
        img: img2,
        description: "A mobile app I developed for a fitness startup that helps users track their workouts and achieve their fitness goals.",
        link: "#",
    },
    {
        img: img3,
        description: "I crafted an eye-catching logo and marketing materials for a local coffee shop, boosting their brand recognition.",
        link: "#",
    },
    {
        img: img4,
        description: "A mobile app for a travel agency, allowing users to plan and book their dream vacations with ease.",
        link: "#",
    },
];


const contactConfig = {
    YOUR_EMAIL: "example@gmail.com",
    YOUR_FONE: "+94 70 170 8555",
    description: "Feel free to reach out! Whether you have questions, feedback, or you'd like to discuss a project or collaboration, I'm here to connect with you. Your thoughts and inquiries are important to me, and I'll do my best to respond promptly. Please use the provided contact information below or fill out the contact form, and I'll get back to you as soon as possible.  ",
    // creat an emailjs.com account 
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    github: "https://github.com/KavinduSalinda",
    facebook: "https://facebook.com",
    linkedin: "www.linkedin.com/in/kavindu-salinda",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};