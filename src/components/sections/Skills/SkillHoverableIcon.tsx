import { validIcons, IconKey } from "./validicons.ts";
interface Props {
    icon: IconKey;
    hovered: boolean;
    setHovered: (arg0: boolean) => void;
}

export default function SkillHoverableIcon({
    icon,
    hovered,
    setHovered,
}: Props) {
    const iconName: string = validIcons[icon].name;
    const iconUrl: string = validIcons[icon].imgUrl;
    return (
        <div
            // onMouseEnter={setHovered(true)}
            // onMouseLeave={setHovered(false)}
            className="flex flex-col-reverse relative justify-items-center group"
        >
            <img
                src={iconUrl}
                className="h-24 w-24"
                aria-label={iconName}
            ></img>

            <span
                className="absolute -top-11 left-[50%] -translate-x-[50%] 
  z-100 px-3 rounded-lg border 
  border-gray-300 bg-white py-2 text-sm/4 font-bold
  shadow-md transition-all duration-100 ease-in-out 
  group-hover:scale-100"
                style={hovered ? { scale: 1 } : { scale: 0 }}
            >
                {iconName}
            </span>
        </div>
    );
}
