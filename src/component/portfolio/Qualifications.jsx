import { FaGraduationCap, FaBriefcase } from 'react-icons/fa';
import { FiCalendar } from 'react-icons/fi';

const Qualifications = () => {
    return (
        <section className="w-full pt-16 pb-2 mt-16">
            <div className="max-w-5xl mx-auto px-2 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Qualifications
                    </h2>
                    <p className="text-lg text-blue-500 max-w-2xl mx-auto">
                        Why you should hire me
                    </p>
                </div>
                {/* Tabs */}
                <div className="flex justify-center gap-8 mb-10">
                    <div className="flex items-center gap-2 text-blue-500 text-xl font-semibold">
                        <FaGraduationCap className="text-2xl" />
                        Education
                    </div>
                    <div className="flex items-center gap-2 text-blue-400 text-xl font-semibold">
                        <FaBriefcase className="text-2xl" />
                        Work
                    </div>
                </div>
                {/* Timeline */}
                <div className="flex justify-center">
                    <div className="relative flex flex-col md:flex-row md:justify-center w-full max-w-3xl">
                        {/* Left (Education) */}
                        <div className="flex-1 flex flex-col gap-12">
                            {/* Semicolon */}
                            <div className="relative flex flex-col items-end pr-8">
                                <div className="bg-blue-900 text-white rounded-lg p-4 w-full max-w-xs shadow">
                                    <div className="font-bold text-lg">Diploma in Software Engineering</div>
                                    <div className="text-sm mb-2">Semicolon Africa</div>
                                    <div className="flex items-center text-blue-300 text-xs">
                                        <FiCalendar className="mr-1" /> 2024 - 2025
                                    </div>
                                </div>
                            </div>
                            {/* Henley business school */}
                            <div className="relative flex flex-col items-end pr-8">
                                <div className="bg-blue-900 text-white rounded-lg p-4 w-full max-w-xs shadow">
                                    <div className="font-bold text-lg">Diploma in Business Education</div>
                                    <div className="text-sm mb-2">Henley Business School, UK</div>
                                    <div className="flex items-center text-blue-300 text-xs">
                                        <FiCalendar className="mr-1" /> 2025
                                    </div>
                                </div>
                            </div>
                            {/* Moat Academy*/}
                            <div className="relative flex flex-col items-end pr-8">
                                <div className="bg-blue-900 text-white rounded-lg p-4 w-full max-w-xs shadow">
                                    <div className="font-bold text-lg">Web Developer</div>
                                    <div className="text-sm mb-2">Moat Academy</div>
                                    <div className="flex items-center text-blue-300 text-xs">
                                        <FiCalendar className="mr-1" /> 2022
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Timeline Line and Dots */}
                        <div className="hidden md:flex flex-col items-center mx-4">
                            <div className="h-6" />
                            <div className="w-4 h-4 bg-blue-600 rounded-full mb-8" />
                            <div className="h-20 w-1 bg-blue-600 mb-8" />
                            <div className="w-4 h-4 bg-blue-600 rounded-full mb-8" />
                            <div className="h-20 w-1 bg-blue-600 mb-8" />
                            <div className="w-4 h-4 bg-blue-600 rounded-full mb-8" />
                            <div className="h-6" />
                        </div>
                        {/* Right (Work) */}
                        <div className="flex-1 flex flex-col gap-12 mt-16 md:mt-0">

                            {/* Entek Company */}
                            <div className="relative flex flex-col items-start pl-8 mt-16 md:mt-0">
                                <div className="bg-blue-900 text-white rounded-lg p-4 w-full max-w-xs shadow">
                                    <div className="font-bold text-lg">Backend Engineer</div>
                                    <div className="text-sm mb-2">Entek company</div>
                                    <div className="flex items-center text-blue-300 text-xs">
                                        <FiCalendar className="mr-1" /> June 2025 - Date
                                    </div>
                                </div>
                            </div>

                            {/* Software Engineering */}
                            <div className="relative flex flex-col items-start pl-8 mt-16 md:mt-0">
                                <div className="bg-blue-900 text-white rounded-lg p-4 w-full max-w-xs shadow">
                                    <div className="font-bold text-lg">Backend Engineer</div>
                                    <div className="text-sm mb-2">Hydrogen Group</div>
                                    <div className="flex items-center text-blue-300 text-xs">
                                        <FiCalendar className="mr-1" />March 2025 - May 2025
                                    </div>
                                </div>
                            </div>
                            {/* Semicolon */}
                            <div className="relative flex flex-col items-start pl-8">
                                <div className="bg-blue-900 text-white rounded-lg p-4 w-full max-w-xs shadow">
                                    <div className="font-bold text-lg">Software Engineer Trainee</div>
                                    <div className="text-sm mb-2">Semicolon Africa</div>
                                    <div className="flex items-center text-blue-300 text-xs">
                                        <FiCalendar className="mr-1" /> Feb 2024 - March 2025
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
};
export default Qualifications;
