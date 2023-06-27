import SectionHeader from "../../../Components/SectionHeader";
import { FaArrowLeft, FaArrowRight, FaQuoteRight } from "react-icons/fa6";

const Testimonial = () => {
  return (
    <div className="pt-20 pb-24 lg:px-48">
      <SectionHeader subHeading="what clients say" heading="Testimonial" />
      <div className="grid sm:grid-cols-1 lg:grid-cols-3 lg:gap-4 px-4">
        <div className="card sm:card-side md:card lg:w-64 bg-base-100 shadow-xl mb-4">
          <figure className="px-4 pt-4 sm:pt-0 md:pt-4">
            <img
              src="https://i.ibb.co/M2yV05y/instructor-4.png"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body pt-4 pb-6">
            <h2 className="card-title font-bold">Customer Name</h2>
            <p>Customer Email</p>
          </div>
        </div>
        <div className="col-span-2">
          <div className=" hidden md:flex justify-between">
            <FaQuoteRight className="text-8xl" />
            <div className="flex gap-4">
              <button className="btn btn-sm text-red-600 bg-[#ECF0F3] drop-shadow-lg">
                <FaArrowLeft className="text-xl" />
              </button>
              <button className="btn btn-sm text-red-600 bg-[#ECF0F3] drop-shadow-lg">
                <FaArrowRight className="text-xl" />
              </button>
            </div>
          </div>
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <div className="flex justify-between">
                <div>
                  <h2 className="card-title">Card title!</h2>
                  <h4>Date</h4>
                </div>
                <div>
                  <p>Rating</p>
                </div>
              </div>
              <hr />
              <p>Review</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
