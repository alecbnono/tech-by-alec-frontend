import { useState } from "react";
import { LuMail, LuLinkedin, LuGithub, LuFileDown, LuSend } from "react-icons/lu";

export function meta() {
    return [
        { title: "Contact | Tech by Alec" },
        { name: "description", content: "Get in touch with Alec." },
    ];
}

const EMAIL = "alecbnono@gmail.com";

const contactLinks = [
    {
        label: "Email",
        href: `mailto:${EMAIL}`,
        icon: LuMail,
        value: EMAIL,
    },
    {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/alecnono/",
        icon: LuLinkedin,
        value: "alecnono",
    },
    {
        label: "GitHub",
        href: "https://github.com/alecbnono/",
        icon: LuGithub,
        value: "alecbnono",
    },
    {
        label: "Resume",
        href: "Resume.pdf",
        icon: LuFileDown,
        value: "Download",
    },
];

export default function Contact() {
    const [name, setName] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        const subjectLine = subject.trim() || "Hello from the website";
        const body = `${message.trim()}${name.trim() ? `\n\n— ${name.trim()}` : ""}`;

        const mailto = `mailto:${EMAIL}?subject=${encodeURIComponent(subjectLine)}&body=${encodeURIComponent(body)}`;
        window.location.href = mailto;
    }

    const inputClasses =
        "w-full px-4 py-3 bg-[rgba(18,14,50,0.45)] backdrop-blur-md border border-[rgba(255,255,255,0.08)] rounded-xl text-sm text-zinc-200 placeholder:text-zinc-500 focus:outline-none focus:border-[rgba(255,255,255,0.2)] transition-all duration-300";

    return (
        <div className="flex flex-col gap-10">
            {/* Header */}
            <div className="flex flex-col gap-3">
                <h1 className="text-3xl font-semibold text-zinc-50">Contact</h1>
                <p className="text-zinc-400 text-left">
                    Have a project in mind, want to collaborate, or just want to say hi? I'd love to hear from you.
                </p>
            </div>

            {/* Contact links */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {contactLinks.map((link) => (
                    <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 px-4 py-3 glass rounded-xl hover:bg-[rgba(30,22,75,0.65)] transition-all duration-300 group"
                    >
                        <link.icon className="size-5 text-zinc-400 group-hover:text-violet-300 transition-colors duration-300 shrink-0" />
                        <div className="flex flex-col items-start min-w-0">
                            <span className="text-xs text-zinc-500 uppercase tracking-wide">{link.label}</span>
                            <span className="text-sm text-zinc-200 truncate">{link.value}</span>
                        </div>
                    </a>
                ))}
            </div>

            {/* Mailto form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <h2 className="text-lg font-semibold text-zinc-100">Send a message</h2>

                <input
                    type="text"
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={inputClasses}
                />

                <input
                    type="text"
                    placeholder="Subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className={inputClasses}
                />

                <textarea
                    placeholder="Your message..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={6}
                    required
                    className={`${inputClasses} resize-none`}
                />

                <button
                    type="submit"
                    className="flex items-center justify-center gap-2 w-full py-3 glass rounded-xl text-zinc-200 hover:bg-[rgba(30,22,75,0.65)] transition-all duration-300 cursor-pointer font-medium"
                >
                    <LuSend className="size-4" />
                    Open in Email Client
                </button>
            </form>
        </div>
    );
}
