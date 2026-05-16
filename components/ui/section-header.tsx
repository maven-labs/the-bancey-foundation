import type { ReactNode } from "react";

function SectionHeader({
  title,
  action,
}: {
  title: string;
  action?: ReactNode;
}) {
  return (
    <div className="relative flex items-center justify-between gap-4 basis-auto shrink-0 p-0 mb-4 md:mb-6 border-t-3 border-foreground">
      <div className="text-xl md:text-[1.375rem] xl:text-[2rem] leading-6 md:leading-6.25 xl:leading-9 font-heading font-semibold mt-2 lg:mt-4">
        {title}
      </div>
      {action ? <div className="mt-2 lg:mt-4">{action}</div> : null}
    </div>
  );
}

export default SectionHeader;
