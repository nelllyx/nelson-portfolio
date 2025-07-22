import { FaUserTie, FaLaptopCode, FaCheckCircle, FaGlobe } from 'react-icons/fa';

const bioHighlights = [
    { icon: <FaUserTie className="text-2xl text-blue-400 mb-2" />, title: 'Technical Experience', desc: '5 years of experience' },
    { icon: <FaLaptopCode className="text-2xl text-blue-400 mb-2" />, title: 'Coding Experience', desc: '3 years of Hands-on Training' },
    { icon: <FaCheckCircle className="text-2xl text-blue-400 mb-2" />, title: 'Projects', desc: 'Over 6+  Completed Projects' },
    { icon: <FaGlobe className="text-2xl text-blue-400 mb-2" />, title: 'Remote Ready', desc: 'Work Style' },
];

const Bio = () => {
    return (
        <section id="about" className="w-full pt-16 pb-2 mt-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">About Me</h2>
                    <p className="text-lg text-blue-400">A little bit about my journey</p>
                </div>
                <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
                    <div className="flex-1 text-left w-full">
                        {/* Four small cards */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 mb-8">
                            {bioHighlights.map((item, idx) => (
                                <div key={idx} className="bg-white/10 border border-white/20 rounded-xl px-8 py-4 min-h-[100px] flex flex-col items-center shadow w-full">
                                    {item.icon}
                                    <span className="text-lg font-bold text-blue-300 mb-1 text-center break-words">{item.title}</span>
                                    <span className="text-xs text-blue-100 uppercase tracking-wide mt-2 text-center break-words">{item.desc}</span>
                                </div>
                            ))}
                        </div>
                        <p className="text-blue-100 text-lg mb-4 leading-relaxed">
                            My journey as a software engineer began with a deep curiosity about how technology works.
                            That curiosity quickly evolved into a passion for building innovative digital solutions.
                            Over the years, I’ve developed a strong foundation in designing and developing scalable web applications using modern technologies like Java, SpringBoot, React, Node.js, and TypeScript.
                            I take pride in writing clean, maintainable code and crafting user-centric experiences.
                            For me, software engineering isn’t just about solving problems , it’s about creating purposeful and intuitive systems that make a real impact.
                        </p>
                        <a href="#contact" className="inline-block px-8 py-3 border-2 border-blue-600 text-blue-300 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300 font-semibold text-lg">
                            Let's Connect
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Bio;
