function BackgroundLayout() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <div
        className="absolute left-0 right-0 mx-auto 
                    size-70 rounded-full bg-violet-800/75
                    blur-3xl mix-blend-soft-light 
                    translate-y-25 
                    animate-float-100"
      ></div>
      <div
        className="absolute left-0 right-0 mx-auto 
                    size-70 rounded-full bg-indigo-800/75
                    blur-3xl mix-blend-soft-light 
                        translate-y-55 translate-x-50
                    animate-float-200"
      ></div>
      <div
        className="absolute left-0 right-0 mx-auto 
                    size-70 rounded-full bg-purple-800/75
                    blur-3xl mix-blend-soft-light 
                        translate-y-55 -translate-x-50
                    animate-float-300"
      ></div>
      <div
        className="absolute left-0 right-0 mx-auto 
                    size-150 rounded-full bg-violet-600/33
                    blur-3xl mix-blend-soft-light 
                    translate-y-120"
      ></div>
      <div
        className="absolute left-0 right-0 mx-auto 
                    size-75 rounded-full bg-purple-800/75
                    blur-3xl mix-blend-soft-light 
                    translate-y-290 translate-x-70
                    animate-float-100"
      ></div>
      <div
        className="absolute left-0 right-0 mx-auto 
                    size-75 rounded-full bg-indigo-800/75
                    blur-3xl mix-blend-soft-light 
                        translate-y-240 -translate-x-70
                    animate-float-200"
      ></div>
      <div
        className="absolute left-0 right-0 mx-auto 
                    size-150 rounded-full bg-violet-600/33
                    blur-3xl mix-blend-soft-light 
                        translate-y-325"
      ></div>
      <div
        className="absolute left-0 right-0 mx-auto 
                    size-75 rounded-full bg-purple-800/75
                    blur-3xl mix-blend-soft-light 
                        translate-y-490 translate-x-70
                    animate-float-200"
      ></div>
      <div
        className="absolute left-0 right-0 mx-auto 
                    size-75 rounded-full bg-indigo-800/75
                    blur-3xl mix-blend-soft-light 
                        translate-y-440 -translate-x-70
                    animate-float-100"
      ></div>
    </div>
  );
}

export default BackgroundLayout;
