import type { Technology } from "../types/technology";

type TechnologyCardProps = {
  technology: Technology;
  onAdd: (technology: Technology) => void;
  isSelected: boolean;
  categorySelected: boolean;
};

function TechnologyCard({
  technology,
  onAdd,
  isSelected,
  categorySelected,
}: TechnologyCardProps) {
//   const iconKey =
//     "iconTone" in technology && technology.iconTone
//       ? technology.iconTone
//       : technology.icon;

  const buttonText = isSelected
    ? "Added ✓"
    : categorySelected
      ? "Replace"
      : "Add to Stack";

  return (
    <div className="flex flex-col rounded-xl border border-slate-100 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      {/* Top */}
      <div className="flex items-start justify-between p-3">
        <div className="flex items-center justify-center rounded-lg bg-slate-50">
          <img
            src={technology.icon}
            alt={`${technology.name} logo`}
            className="h-12 w-12 object-contain"
          />
        </div>

        {technology.badge && (
          <span className="rounded-full bg-pink-50 px-2.5 py-1 text-[12px] font-semibold text-pink-500">
            {technology.badge}
          </span>
        )}
      </div>

      {/* Name */}
      <h3 className="mt-3 text-[20px] font-bold text-slate-800">
        {technology.name}
      </h3>

      {/* Description */}
      <p className="mt-3 line-clamp-3 text-[14px] leading-4 text-slate-400">
        {technology.description}
      </p>

      {/* Information */}
      <div className="mt-auto">
        <div className="mt-4 flex items-center justify-between gap-1 text-[12px]">
          <span className="rounded bg-slate-50 px-2 py-1 text-slate-500">
            {technology.category}
          </span>

          <span className="text-slate-400">{technology.level}</span>

          <span className="font-medium text-slate-600">
            <span className="text-yellow-400">★</span> {technology.rating}
          </span>
        </div>

        {/* Add Button */}
        <button
          onClick={() => onAdd(technology)}
          disabled={isSelected}
          className={`mt-3 w-full rounded-md py-2 text-[13px] font-semibold transition ${
            isSelected
              ? "cursor-default bg-pink-50 text-pink-500"
              : categorySelected
                ? "bg-slate-100 text-slate-700 hover:bg-slate-200"
                : "bg-slate-950 text-white hover:bg-slate-800"
          }`}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
}

export default TechnologyCard;
