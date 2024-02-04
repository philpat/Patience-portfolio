const TimelineItem = ({ number, context, totalItems }) => {
  const isLastItem = number === totalItems;

  return (
    <div className="flex items-center relative mb-8">
  {!isLastItem && (
    <div className="h-full w-px bg-[#f8830a] absolute left-4 md:top-[63px] top-[90px]"></div>
  )}
  <div className="mr-4">
    <div className="bg-[#f8830a] text-white w-8 h-8 flex items-center justify-center rounded-full">
      {number}
    </div>
  </div>
  <div className='border border-slate-100 rounded-sm px-5 md:px-8 w-[900px] py-4'>
    <div className="text-lg font-semibold mb-2 text-[#f8830a] ">{context.title}</div>
    <p className="text-white">{context.description}</p>
  </div>
</div>

  );
};

export default TimelineItem;
