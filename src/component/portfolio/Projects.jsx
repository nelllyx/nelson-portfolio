import { FiArrowRight } from "react-icons/fi";
import { FaLaptopCode, FaServer, FaGlobe } from "react-icons/fa";

const Projects = () => {
    return (
        <section id="projects" className="w-full pt-16 pb-2 mt-16">
            <div className="max-w-5xl mx-auto px-2 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Projects
                    </h2>
                    <p className="text-lg text-blue-500 max-w-2xl mx-auto">
                        What I Have Done. (Personal Projects)
                    </p>
                </div>
                {/*Cards*/}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">

                    {/*FE Project*/}
                    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 p-6 md:p-8">
                        <div className="flex flex-col items-center text-center mt-9">
                            <FaLaptopCode className="text-4xl text-blue-400 mb-2" />
                            <h3 className="text-xl md:text-2xl font-bold text-blue-600 mb-4">
                                Frontend Projects
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                <a href="#" className="inline-flex items-center text-blue-500 hover:underline font-medium group">
                                    View More
                                    <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                                </a>
                            </p>
                        </div>
                    </div>

                    {/*Live Projects*/}

                    <div
                        className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 p-6 md:p-8">
                        <div className="flex flex-col items-center text-center  mt-9">
                            <FaGlobe className="text-4xl text-green-400 mb-2" />
                            <h3 className="text-xl md:text-2xl font-bold text-blue-600 mb-4">
                                Live Fullstack Projects(Deployed)
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                <a href="#" className="inline-flex items-center text-blue-500 hover:underline font-medium group">
                                    View More
                                    <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                                </a>
                            </p>
                        </div>
                    </div>

                    {/*BE Projects*/}
                    <div
                        className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 p-6 md:p-8">
                        <div className="flex flex-col items-center text-center  mt-9">
                            <FaServer className="text-4xl text-purple-400 mb-2" />
                            <h3 className="text-xl md:text-2xl font-bold text-blue-600 mb-4">
                                Backend Projects(GitHub Repos)
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                <a href="#" className="inline-flex items-center text-blue-500 hover:underline font-medium group">
                                    View More
                                    <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                                </a>
                            </p>
                        </div>
                    </div>
                </div>

            </div>

        </section>
    )
};
export default Projects;
