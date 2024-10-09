/* eslint-disable react/prop-types */
import defaultImage from "../assets/projects-default.jpg";
const ReadingModal = ({ data }) => {
  return (
    <>
      <dialog id="my_modal2" className="rounded-md modal text-[#D0D0D0] ">
        <div className="overflow-hidden modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="absolute btn btn-sm right-2 top-2">✕</button>
          </form>
          <h3 className="text-lg font-bold "> {data?.name}</h3>

          {data?.image ? (
            <img
              className="m-auto rounded-md "
              src={data?.image}
              alt={data?.name}
            />
          ) : (
            <img
              className="m-auto rounded-md "
              src={defaultImage}
              alt={data?.name}
            />
          )}

          <p className="py-4 w-72 md:w-[480px]">{data?.description}</p>

          {data?.author && <p>By - {data.author}</p>}
        </div>
      </dialog>
    </>
  );
};

export default ReadingModal;
