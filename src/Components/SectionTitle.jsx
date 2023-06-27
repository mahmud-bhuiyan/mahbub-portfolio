const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="mb-6 text-center lg:text-left md:ml-2">
      <h3 className="text-orange-500 uppercase text-sm">{subHeading}</h3>
      <h1 className="text-3xl font-bold">{heading}</h1>
    </div>
  );
};

export default SectionTitle;
