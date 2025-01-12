import { validIcons, IconKey } from "../../assets/validicons";
interface Props {
  icon: IconKey;
}

export default function SkillHoverableIcon({ icon }: Props) {
  const iconName: string = validIcons[icon].name;
  const iconClassName: string = validIcons[icon].className;
  return (
    <div className="flex flex-col-reverse relative justify-items-center">
      <i
        className={`text-8xl ${iconClassName} peer`}
        aria-label={iconClassName}
      ></i>
      <p
        className="hidden bg-slate-800 text-indigo-50 top-0 
      -translate-y-10 left-1/2 -translate-x-1/2 absolute peer-hover:inline-block
      p-1 rounded-md"
      >
        {iconName}
      </p>
    </div>
  );
}
