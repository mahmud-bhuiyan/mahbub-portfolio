const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="mb-10 text-center lg:text-left md:ml-2">
      <h3 className="text-orange-500 uppercase text-sm mb-2">
        <span className="show lg:hidden ">-----</span> {subHeading}
        <span className="show lg:hidden ">-----</span>
      </h3>
      <h1 className="text-3xl capitalize font-bold">{heading}</h1>
    </div>
  );
};

export default SectionTitle;
