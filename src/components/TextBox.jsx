function TextBox({ title, text, image }) {
  if (image !== undefined) {
    return (
      <div className="flex flex-col-reverse justify-between items-center gap-5 md:flex-row p-5 rounded-xl border-2 border-white bg-slate-950/50">
        <div className="flex flex-col items-start gap-5 ">
          <h1 className="font-semibold text-2xl text-slate-50">{title}</h1>
          <p className="text-lg text-slate-200 text-justify">{text}</p>
        </div>
        <img src={image} alt="" className="md:h-50 rounded-xl" />
      </div>
    );
  } else if (Array.isArray(text)) {
    return (
      <div className="flex flex-col items-start gap-5 p-5 rounded-xl border-2 border-white bg-slate-950/50">
        <h1 className="font-semibold text-2xl text-slate-50">{title}</h1>
        <ul className="pl-4">
          {text.map((item) => {
            return (
              <li className="list-disc text-slate-200 text-lg text-left">
                {item}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-start gap-5 p-5 rounded-xl border-2 border-white bg-slate-950/50 whitespace-pre-line">
      <h1 className="font-semibold text-2xl text-slate-50">{title}</h1>
      <p className="text-lg text-slate-200 text-justify">{text}</p>
    </div>
  );
}

export default TextBox;
