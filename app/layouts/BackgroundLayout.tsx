export default function BackgroundLayout() {
    return (
        <div className="absolute inset-0 z-0 overflow-hidden">
            <div
                className="absolute left-0 right-0 mx-auto
                    size-100 rounded-full bg-violet-600/45
                    blur-3xl mix-blend-screen
                    translate-y-5
                    animate-float-100"
            ></div>
            <div
                className="absolute left-0 right-0 mx-auto
                    size-100 rounded-full bg-blue-700/35
                    blur-3xl mix-blend-screen
                        translate-y-35 translate-x-35
                    animate-float-200"
            ></div>
            <div
                className="absolute left-0 right-0 mx-auto
                    size-100 rounded-full bg-purple-700/30
                    blur-3xl mix-blend-screen
                        translate-y-35 -translate-x-35
                    animate-float-300"
            ></div>
            <div
                className="absolute left-0 right-0 mx-auto
                    size-150 rounded-full bg-indigo-700/40
                    blur-3xl mix-blend-soft-light
                    translate-y-120"
            ></div>
            <div
                className="absolute left-0 right-0 mx-auto
                    size-75 rounded-full bg-blue-800/35
                    blur-3xl mix-blend-soft-light
                    translate-y-290 translate-x-70
                    animate-float-100"
            ></div>
            <div
                className="absolute left-0 right-0 mx-auto
                    size-75 rounded-full bg-purple-700/30
                    blur-3xl mix-blend-soft-light
                        translate-y-240 -translate-x-70
                    animate-float-200"
            ></div>
            <div
                className="absolute left-0 right-0 mx-auto
                    size-150 rounded-full bg-violet-700/40
                    blur-3xl mix-blend-soft-light
                        translate-y-325"
            ></div>
            <div
                className="absolute left-0 right-0 mx-auto
                    size-75 rounded-full bg-indigo-600/30
                    blur-3xl mix-blend-soft-light
                        translate-y-490 translate-x-70
                    animate-float-200"
            ></div>
            <div
                className="absolute left-0 right-0 mx-auto
                    size-75 rounded-full bg-violet-800/30
                    blur-3xl mix-blend-soft-light
                        translate-y-440 -translate-x-70
                    animate-float-100"
            ></div>
            <div
                className="absolute inset-0 opacity-[0.07] h-200"
                style={{
                    backgroundImage: `
                        linear-gradient(to right, currentColor 1px, transparent 1px),
                        linear-gradient(to bottom, currentColor 1px, transparent 1px)
                    `,
                    backgroundSize: '50px 50px',
                    maskImage: 'radial-gradient(circle, black 40%, transparent 80%)',
                    WebkitMaskImage: 'radial-gradient(circle, black 40%, transparent 80%)'
                }}
            />
        </div>
    );
}
