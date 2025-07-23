import { FiMail } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

const Contact = () => {
    return (
        <section id="contact" className="w-full pt-16 pb-2 mt-16">
            <div className="max-w-5xl mx-auto px-2 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                       Get in touch
                    </h2>
                    <p className="text-lg text-blue-500 max-w-2xl mx-auto">
                        Contact Me
                    </p>
                </div>

                {/*Cards*/}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center items-center w-full max-w-2xl mx-auto">

                    {/* Email Card */}
                    <div className="bg-blue-950 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 p-6 md:p-8 w-full max-w-sm mx-auto">
                        <div className="flex flex-col items-center text-center mt-6">
                            <FiMail className="text-3xl text-white mb-2" />
                            <p className="text-lg md:text-xl text-white mb-2 mt-2 text-center">
                                Email Address
                            </p>
                            <p className="text-sm text-blue-100 leading-relaxed">
                                nelsonakewe0@gmail.com
                            </p>
                            <p className="text-sm text-blue-100 leading-relaxed">
                                <a href="mailto:nelsonakewe0@gmail.com" className="inline-flex items-center text-blue-400 hover:text-blue-300 hover:underline font-medium group text-base">
                                    Write me
                                    <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                                </a>
                            </p>
                        </div>
                    </div>

                    {/* WhatsApp Card */}
                    <div className="bg-blue-950 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 p-6 md:p-8 w-full max-w-sm mx-auto">
                        <div className="flex flex-col items-center text-center mt-6">
                            <FaWhatsapp className="text-3xl text-green-300 mb-2" />
                            <p className="text-lg md:text-xl text-white mb-2 mt-2">
                                Whatsapp
                            </p>
                            <p className="text-sm text-white leading-relaxed">
                                +2348114340839
                            </p>
                            <p className="text-sm text-blue-100 leading-relaxed">
                                <a href="https://wa.me/2348167357272" target="_blank" rel="noopener noreferrer"
                                   className="inline-flex items-center text-blue-400 hover:text-blue-300 hover:underline font-medium group text-base">
                                    Message me
                                    <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                                </a>
                            </p>
                        </div>
                    </div>

                </div>


            </div>
        </section>
    )
}
export default Contact;
