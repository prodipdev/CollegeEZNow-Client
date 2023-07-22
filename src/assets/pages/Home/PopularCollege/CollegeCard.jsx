/* eslint-disable react/prop-types */

const CollegeCard = ({
  collegeImage,
  collegeName,
  admissionDates,
  events,
  researchHistory,
  sports,
}) => {
  return (
    <div className="college-card bg-white shadow-lg rounded-xl overflow-hidden">
      <img
        className="w-full h-56 object-cover"
        src={collegeImage}
        alt={collegeName}
      />
      <div className="p-6">
        <h2 className="text-2xl font-semibold mb-3">{collegeName}</h2>
        <div className="mb-4">
          <h3 className="text-lg font-medium">Admission Dates:</h3>
          <p>{admissionDates}</p>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-medium">Events:</h3>
          <p>{events}</p>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-medium">Research History:</h3>
          <p>{researchHistory}</p>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-medium">Sports:</h3>
          <p>{sports}</p>
        </div>
        <a href="#">
          <button className="bg-cyan-300 px-7 py-2 font-semibold">
            Details
          </button>
        </a>
      </div>
    </div>
  );
};

export default CollegeCard;
