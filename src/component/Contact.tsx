import { useRef } from "react";
import emailjs from "@emailjs/browser";

import {
    FaEnvelope,
    FaPhone,
    FaMapMarkerAlt,
    FaPaperPlane,
} from "react-icons/fa";
import { RiMailSendLine } from "react-icons/ri";
import { useTheme } from "../App";





const Contact = () => {
    const { darkMode } = useTheme();


    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!form.current) return;

        emailjs
            .sendForm(
                "service_f58jhzf",
                "template_ugh5lr5",
                form.current,
                {
                    publicKey: "sVIrBzrCOnyI_X5fP",
                }
            )
            .then(
                () => {
                    alert("Message sent successfully!");
                    form.current?.reset();
                },
                (error) => {
                    console.log(error.text);
                    alert("Failed to send message.");
                }
            );
    };

    return (
        <section id="contact" className="py-24 px-6">
            <div className="max-w-6xl mx-auto">

                <div className="text-center mb-16">
                    <p className="text-cyan-400 text-sm font-semibold uppercase tracking-[0.25em]">
                        Contact
                    </p>

                    <h2
                        className={`text-4xl md:text-5xl font-bold mt-3 ${darkMode ? "text-white" : "text-slate-900"
                            }`}
                    >
                        Let’s Work Together
                    </h2>

                    <p
                        className={`max-w-2xl mx-auto mt-5 ${darkMode ? "text-gray-400" : "text-slate-600"
                            }`}
                    >
                        Have a project or opportunity in mind? Feel free to get in touch.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-10">

                    {/* Contact Info */}
                    <div
                        className={`p-8 md:p-10 rounded-3xl border transition-colors duration-500 ${darkMode
                            ? "bg-white/[0.04] border-white/10"
                            : "bg-white border-slate-200 shadow-sm"
                            }`}
                    >
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-14 h-14 rounded-2xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center">
                                <RiMailSendLine className="text-3xl text-cyan-400" />
                            </div>

                            <div>
                                <h3
                                    className={`text-2xl font-semibold ${darkMode ? "text-white" : "text-slate-900"
                                        }`}
                                >
                                    Get In Touch
                                </h3>

                                <p
                                    className={`text-sm mt-1 ${darkMode ? "text-gray-500" : "text-slate-500"
                                        }`}
                                >
                                    I’d love to hear from you
                                </p>
                            </div>
                        </div>

                        <div className="space-y-6">

                            <div className="flex items-center gap-4">
                                <FaEnvelope className="text-cyan-400 text-lg" />
                                <div>
                                    <p
                                        className={`text-sm ${darkMode ? "text-gray-500" : "text-slate-500"
                                            }`}
                                    >
                                        Email
                                    </p>

                                    <p
                                        className={
                                            darkMode
                                                ? "text-gray-300"
                                                : "text-slate-700"
                                        }
                                    >
                                        madiha.waleed17@gmail.com
                                    </p>
                                </div>
                            </div>



                            <div className="flex items-center gap-4">
                                <FaPhone className="text-cyan-400 text-lg" />
                                <div>
                                    <p
                                        className={`text-sm ${darkMode ? "text-gray-500" : "text-slate-500"
                                            }`}
                                    >
                                        Phone
                                    </p>

                                    <p
                                        className={
                                            darkMode
                                                ? "text-gray-300"
                                                : "text-slate-700"
                                        }
                                    >
                                        +1 469-540-9948
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <FaMapMarkerAlt className="text-cyan-400 text-lg" />
                                <div>
                                    <p
                                        className={`text-sm ${darkMode ? "text-gray-500" : "text-slate-500"
                                            }`}
                                    >
                                        Location
                                    </p>

                                    <p
                                        className={
                                            darkMode
                                                ? "text-gray-300"
                                                : "text-slate-700"
                                        }
                                    >
                                        Texas, USA
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Contact Form */}
                    <form
                        ref={form}
                        onSubmit={sendEmail}
                        className={`p-8 md:p-10 rounded-3xl border transition-colors duration-500 ${darkMode
                            ? "bg-white/[0.04] border-white/10"
                            : "bg-white border-slate-200 shadow-sm"
                            }`}
                    >

                        <div className="grid md:grid-cols-2 gap-5">

                            <div>
                                <label
                                    className={`text-sm ${darkMode
                                        ? "text-gray-300"
                                        : "text-slate-700"
                                        }`}
                                >
                                    Your Name
                                </label>

                                <input
                                    type="text"
                                    name="name"
                                    required
                                    placeholder="Full Name"
                                    className={`w-full mt-2 px-4 py-3 rounded-xl border outline-none transition ${darkMode
                                        ? "bg-black/20 border-white/10 text-white placeholder-gray-600 focus:border-cyan-400/50"
                                        : "bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400 focus:border-cyan-400"
                                        }`}
                                />
                            </div>

                            <div>
                                <label
                                    className={`text-sm ${darkMode
                                        ? "text-gray-300"
                                        : "text-slate-700"
                                        }`}
                                >
                                    Email Address
                                </label>

                                <input
                                    type="email"
                                    name="email"
                                    required
                                    placeholder="xyz@example.com"
                                    className={`w-full mt-2 px-4 py-3 rounded-xl border outline-none transition ${darkMode
                                        ? "bg-black/20 border-white/10 text-white placeholder-gray-600 focus:border-cyan-400/50"
                                        : "bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400 focus:border-cyan-400"
                                        }`}
                                />
                            </div>

                        </div>

                        <div className="mt-5">
                            <label
                                className={`text-sm ${darkMode
                                    ? "text-gray-300"
                                    : "text-slate-700"
                                    }`}
                            >
                                Subject
                            </label>

                            <input
                                type="text"
                                name="subject"
                                required
                                placeholder="Project or Job Opportunity"
                                className={`w-full mt-2 px-4 py-3 rounded-xl border outline-none transition ${darkMode
                                    ? "bg-black/20 border-white/10 text-white placeholder-gray-600 focus:border-cyan-400/50"
                                    : "bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400 focus:border-cyan-400"
                                    }`}
                            />
                        </div>

                        <div className="mt-5">
                            <label
                                className={`text-sm ${darkMode
                                    ? "text-gray-300"
                                    : "text-slate-700"
                                    }`}
                            >
                                Message
                            </label>

                            <textarea
                                rows={5}
                                name="message"
                                required
                                placeholder="Write your message..."
                                className={`w-full mt-2 px-4 py-3 rounded-xl border outline-none transition resize-none ${darkMode
                                    ? "bg-black/20 border-white/10 text-white placeholder-gray-600 focus:border-cyan-400/50"
                                    : "bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400 focus:border-cyan-400"
                                    }`}
                            />
                        </div>

                        <button
                            type="submit"
                            className="mt-6 w-full flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl bg-cyan-400 text-black font-semibold hover:bg-cyan-300 transition"
                        >
                            <FaPaperPlane />
                            Send Message
                        </button>

                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;