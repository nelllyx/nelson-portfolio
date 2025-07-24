import {FiArrowRight, FiX} from "react-icons/fi";
import {FaLaptopCode, FaServer, FaGlobe} from "react-icons/fa";
import {useEffect, useState} from "react";

const Projects = () => {

    const [isOpen, setIsOpen] = useState(null);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = "auto"
        }

    }, [isOpen]);


    const openModal = (modalType) => {
        setIsOpen(modalType)
    }

    const closeModal = () => {
        setIsOpen(null)
    }


    const modalData = {
        frontend: {
            title: "Frontend Projects",
            content: (
                <div className="space-y-4">
                    <p className="text-gray-600 mb-4">Here are my frontend projects built with modern technologies:</p>
                    <div className="space-y-3">
                        <div className="p-3 bg-blue-50 rounded-lg">
                            <h4 className="font-semibold text-blue-800">React Dashboard</h4>
                            <p className="text-sm text-gray-600">Interactive dashboard with charts and data
                                visualization</p>
                        </div>
                        <div className="p-3 bg-blue-50 rounded-lg">
                            <h4 className="font-semibold text-blue-800">E-commerce UI</h4>
                            <p className="text-sm text-gray-600">Modern shopping interface with responsive design</p>
                        </div>
                        <div className="p-3 bg-blue-50 rounded-lg">
                            <h4 className="font-semibold text-blue-800">Portfolio Website</h4>
                            <p className="text-sm text-gray-600">Personal portfolio showcasing my work and skills</p>
                        </div>
                    </div>
                </div>
            ),
        },
        live: {
            title: "Live Fullstack Projects",
            content: (
                <div className="space-y-4">
                    <p className="text-gray-600 mb-4">These are my deployed fullstack applications:</p>
                    <div className="space-y-3">
                        <div className="p-3 bg-green-50 rounded-lg">
                            <h4 className="font-semibold text-green-800">Anonymous Therapy App</h4>
                            <p className="text-sm text-gray-600">Online therapy with a real time chat with therapist</p>
                            <a href="#" className="text-green-600 text-sm hover:underline">
                                View Live →
                            </a>
                        </div>
                        <div className="p-3 bg-green-50 rounded-lg">
                            <h4 className="font-semibold text-green-800">Blog Platform</h4>
                            <p className="text-sm text-gray-600">Content management system with admin panel</p>
                            <a href="#" className="text-green-600 text-sm hover:underline">
                                View Live →
                            </a>
                        </div>
                    </div>
                </div>
            ),
        },
        backend: {
            title: "Backend Projects",
            content: (
                <div className="space-y-4">
                    <p className="text-gray-600 mb-4">Server-side projects and APIs available on GitHub:</p>
                    <div className="space-y-3">
                        <div className="p-3 bg-purple-50 rounded-lg">
                            <h4 className="font-semibold text-purple-800">Logistic Application</h4>
                            <p className="text-sm text-gray-600">Spring boot</p>
                            <a href="https://github.com/nelllyx/LogisticApp" className="text-purple-600 text-sm hover:underline">
                                View on GitHub →
                            </a>
                        </div>
                        <div className="p-3 bg-purple-50 rounded-lg">
                            <h4 className="font-semibold text-purple-800">Data Structures & Algorithms</h4>
                            <p className="text-sm text-gray-600">Java</p>
                            <a href="https://github.com/nelllyx/Kata-functions" className="text-purple-600 text-sm hover:underline">
                                View on GitHub →
                            </a>
                        </div>
                        <div className="p-3 bg-purple-50 rounded-lg">
                            <h4 className="font-semibold text-purple-800">Data Structures & Algorithms</h4>
                            <p className="text-sm text-gray-600">Python</p>
                            <a href="#" className="text-purple-600 text-sm hover:underline">
                                View on GitHub →
                            </a>
                        </div>
                    </div>
                </div>
            ),
        },
    }

    const currentModal = modalData[isOpen] || {title: "", content: null}


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
                    <div
                        className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 p-6 md:p-8">
                        <div className="flex flex-col items-center text-center mt-9">
                            <FaLaptopCode className="text-4xl text-blue-400 mb-2"/>
                            <h3 className="text-xl md:text-2xl font-bold text-blue-600 mb-4">
                                Frontend Projects
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                <button onClick={() => openModal("frontend")}
                                        className="inline-flex items-center text-blue-500 hover:underline font-medium group">
                                    View More
                                    <FiArrowRight
                                        className="ml-2 group-hover:translate-x-1 transition-transform duration-200"/>
                                </button>
                            </p>

                        </div>
                    </div>

                    {/*Live Projects*/}

                    <div
                        className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 p-6 md:p-8">
                        <div className="flex flex-col items-center text-center  mt-9">
                            <FaGlobe className="text-4xl text-green-400 mb-2"/>
                            <h3 className="text-xl md:text-2xl font-bold text-blue-600 mb-4">
                                Live Fullstack Projects(Deployed)
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                <button onClick={() => openModal("live")}
                                        className="inline-flex items-center text-blue-500 hover:underline font-medium group">
                                    View More
                                    <FiArrowRight
                                        className="ml-2 group-hover:translate-x-1 transition-transform duration-200"/>
                                </button>
                            </p>
                        </div>
                    </div>

                    {/*BE Projects*/}
                    <div
                        className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 p-6 md:p-8">
                        <div className="flex flex-col items-center text-center  mt-9">
                            <FaServer className="text-4xl text-purple-400 mb-2"/>
                            <h3 className="text-xl md:text-2xl font-bold text-blue-600 mb-4">
                                Backend Projects(GitHub Repos)
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                <button onClick={() => openModal("backend")}
                                        className="inline-flex items-center text-blue-500 hover:underline font-medium group">
                                    View More
                                    <FiArrowRight
                                        className="ml-2 group-hover:translate-x-1 transition-transform duration-200"/>
                                </button>
                            </p>

                        </div>
                    </div>
                </div>

                {isOpen && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                        <div
                            className="bg-white p-6 rounded-xl shadow-lg max-w-lg w-full relative max-h-[80vh] overflow-y-auto transition-shadow duration-300">
                            {/* Close Icon (X) */}
                            <button
                                onClick={closeModal}
                                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
                            >
                                <FiX className="h-6 w-6"/>
                            </button>

                            {/* Modal Content */}
                            <h2 className="text-xl text-blue-600 font-bold mb-4">{currentModal.title}</h2>
                            {currentModal.content}
                        </div>
                    </div>
                )}

            </div>

        </section>
    )
};
export default Projects;

