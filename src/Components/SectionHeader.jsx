const SectionHeader = ({ heading, subHeading }) => {
  return (
    <div className="mb-10 text-center">
      <h3 className="text-orange-500 uppercase text-sm mb-2">
        ----- {subHeading} -----
      </h3>
      <h1 className="text-3xl capitalize font-bold">{heading}</h1>
    </div>
  );
};

export default SectionHeader;
