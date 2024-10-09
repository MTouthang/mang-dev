import { useState } from "react";
import { readings } from "../data/data";
import ReadingModal from "./ReadingModal";
const Reading = () => {
  const [visibleCount, setVisibleCount] = useState(4);
  const [readingData, setReadingData] = useState(
    readings.slice(0, visibleCount)
  );

  const [selectBook, setSelectedBook] = useState();

  const selectedBook = (item) => {
    document.getElementById("my_modal2").showModal();
    setSelectedBook(item);
    console.log(selectBook);
  };

  const showMore = () => {
    const newEnd = visibleCount + 4;
    setVisibleCount(newEnd);
    setReadingData(readings.slice(0, newEnd));
  };

  return (
    // <!-- Projects -->
    <section id="readings" className="w-11/12 py-5 mx-auto md:w-3/4 md:py-5 ">
      <div className="flex items-center justify-between gap-10 pb-10">
        <h2 className="w-full pl-3 text-2xl font-semibold text-primary-textHightLight">
          04. Readings
        </h2>
        <div className="w-20 md:w-60 h-[0.5px] bg-primary-textHightLight mr-4"></div>
      </div>
      <div className="flex flex-wrap justify-center gap-2">
        {readingData.map((item, index) => {
          return (
            <div
              key={index}
              className="rounded h-80 w-40 md:w-56 bg-[#262626] hover:bg-[#2c2c2c] group overflow-hidden"
              onClick={() => selectedBook(item)}
            >
              <div className="w-full h-40 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="object-cover w-full h-full transition rounded-t-sm group-hover:scale-125"
                />
              </div>
              <div className="p-1 text-[rgb(208,208,208)] group-hover:text-primary-textHightLight o">
                <h3 className="py-1 mt-2 font-semibold md:line-clamp-1 ">
                  {item.name}
                </h3>
                <p className="hidden h-20 py-1 text-xs md:block">
                  {item?.description?.slice(0, 100)}...
                </p>
                <p className="text-sm md:line-clamp-1">
                  {" "}
                  Author:{item?.author}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <ReadingModal data={selectBook} />
      {visibleCount < readings.length && (
        <p className="py-4 text-center" onClick={showMore}>
          Show more...
        </p>
      )}
    </section>
  );
};

export default Reading;
