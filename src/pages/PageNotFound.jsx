import { IoHammer } from "react-icons/io5";
function PageNotFound() {
  return (
    <section className="flex flex-col gap-5 py-20">
      <h1 className="font-bold text-4xl md:text-8xl align-middle">
        <IoHammer className="inline" /> <span>Under Construction</span>
      </h1>
      <p>We're sorry for the inconvenience :((</p>
    </section>
  );
}

export default PageNotFound;
