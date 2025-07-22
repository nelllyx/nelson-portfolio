import { FaReact, FaNodeJs, FaDatabase, FaJsSquare, FaHtml5, FaCss3Alt, FaGitAlt, FaGithub, FaJava,
    FaPython} from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiPostman , SiVite, SiTypescript, SiPostgresql, SiSpringboot} from 'react-icons/si';

const skills = [
    {
        section: 'Frontend',
        items: [
            { icon: <FaHtml5 className="text-orange-400" />, name: 'HTML5' },
            { icon: <FaCss3Alt className="text-blue-400" />, name: 'CSS3' },
            { icon: <FaJsSquare className="text-yellow-400" />, name: 'JavaScript' },
            { icon: <FaReact className="text-cyan-400" />, name: 'React' },
            { icon: <SiTailwindcss className="text-sky-400" />, name: 'Tailwind CSS' },
            { icon: <SiVite className="text-sky-400" />, name: 'Vite' },
            { icon: <SiTypescript className="text-sky-400" />, name: 'Typescript' },
        ],
    },
    {
        section: 'Backend',
        items: [
            { icon: <FaJava className="text-green-400" />, name: 'Java' },
            { icon: <FaPython className="text-green-400" />, name: 'Python' },
            { icon: <FaNodeJs className="text-green-400" />, name: 'Node.js' },
            { icon: <FaDatabase className="text-blue-300" />, name: 'Express.js' },
            { icon: <SiSpringboot className="text-sky-400" />, name: 'Spring Boot' }
        ],
    },
    {
        section: 'Tools',
        items: [
            { icon: <FaGitAlt className="text-orange-500" />, name: 'Git' },
            { icon: <FaGithub className="text-white" />, name: 'GitHub' },
            { icon: <SiPostman className="text-orange-400" />, name: 'Postman' },
            { icon: <SiMongodb className="text-green-500" />, name: 'MongoDB' },
            { icon: <FaDatabase className="text-purple-400" />, name: 'SQL' },
            { icon: <SiPostgresql className="text-orange-400" />, name: 'Postgresql' },
        ],
    },
];

const Skills = () => {
    return (
        <section id="skills" className="w-full pt-16 pb-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">My Skills</h2>
                    <p className="text-lg text-blue-400">Technologies & Tools I Use</p>
                </div>
                <div className="space-y-12">
                    {skills.map((section, idx) => (
                        <div key={section.section}>
                            <h3 className="text-2xl font-semibold text-blue-300 mb-6 border-l-4 border-blue-500 pl-4">{section.section}</h3>
                            <div className="flex flex-wrap gap-6 md:gap-10 items-center">
                                {section.items.map((skill, i) => (
                                    <div key={skill.name} className="flex flex-col items-center group">
                                        <span className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-200">{skill.icon}</span>
                                        <span className="text-base text-blue-100 font-medium group-hover:text-blue-400 transition-colors duration-200">{skill.name}</span>
                                    </div>
                                ))}
                            </div>
                            {idx < skills.length - 1 && <div className="my-10 border-b border-blue-900/60" />}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default Skills;
