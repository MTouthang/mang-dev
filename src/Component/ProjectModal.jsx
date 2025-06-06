/* eslint-disable react/prop-types */
import defaultImage from "../assets/projects-default.jpg";
const ProjectModal = ({ data }) => {
  console.log(data);
  return (
    <>
      <dialog id="my_modal" className="rounded-md modal text-[#D0D0D0] ">
        <div className="overflow-hidden modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="absolute btn btn-sm right-2 top-2">✕</button>
          </form>
          <h3 className="text-lg font-bold "> {data?.title}</h3>
          <div className="overflow-hidden rounded max-h-72">
            {data?.image ? (
              <img
                className="m-auto rounded-md "
                src={data?.image}
                alt={data?.title}
              />
            ) : (
              <img
                className="m-auto rounded-md "
                src={defaultImage}
                alt={data?.title}
              />
            )}
          </div>

          <p className="py-4 w-72 md:w-[480px]">{data?.description}</p>

          {data?.live ? (
            <a
              className="mr-5 text-sm transition hover:underline"
              href={data?.live}
              target="__blank"
            >
              Live
            </a>
          ) : (
            ""
          )}

          {data?.source ? (
            <a
              className="text-sm transition hover:underline"
              href={data?.source}
              target="__blank"
            >
              Code
            </a>
          ) : (
            ""
          )}
        </div>
      </dialog>
    </>
  );
};

export default ProjectModal;
