function SectionHeader({ title }: { title: string }) {
  return (
    <div className="relative flex items-center justify-between gap-4 basis-auto shrink-0 p-0 mb-4 md:mb-6">
      <div className="text-xl md:text-[1.375rem] xl:text-[2rem] leading-6 md:leading-6.25 xl:leading-9 font-heading font-semibold">
        {title}
      </div>
    </div>
  );
}

export default SectionHeader;
