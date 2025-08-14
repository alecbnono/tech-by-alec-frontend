function ContactLink({ icon: Icon, display, link }) {
  return (
    <div className="flex items-center gap-5 text-lg md:text-2xl text-slate-400">
      <Icon />
      <a href={link} target="_blank" className="text-slate-50">
        {display}
      </a>
    </div>
  );
}

export default ContactLink;
