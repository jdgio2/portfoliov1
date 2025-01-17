import { validIcons, IconKey } from "../../assets/validicons";
interface Props {
  icon: IconKey;
}

export default function SkillHoverableIcon({ icon }: Props) {
  const iconName: string = validIcons[icon].name;
  const iconClassName: string = validIcons[icon].className;
  return (
    <div className="flex flex-col-reverse relative justify-items-center group">
      <i
        className={`text-8xl ${iconClassName} peer`}
        aria-label={iconClassName}
      ></i>
      <span
        className="absolute -top-14 left-[50%] -translate-x-[50%] 
  z-20 scale-0 px-3 rounded-lg border 
  border-gray-300 bg-white py-2 text-sm font-bold
  shadow-md transition-all duration-100 ease-in-out 
  group-hover:scale-100"
      >
        {iconName}
      </span>
    </div>
  );
}
