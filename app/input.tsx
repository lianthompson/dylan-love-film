import cn from 'classnames';

interface InputProps {
    title: string,
    type: string
}

export default function Input({ title, type }: InputProps) {
    const inputClasses = cn("border-2 border-indigo-100/75 rounded-[8px] !focus:border-pink-600 h-[48px] w-[400px]");
    const titleClass = "text-3xl mb-[8px]";
    return <div className="font-[family-name:var(--font-molengo)] text-[#3B3B93]">
        {type !== "textarea" && <div>
            <div className={titleClass}>{title}</div><input type={type} className={inputClasses}></input></div>
        }
        {type === "textarea" && <div>
            <div className={titleClass}>{title}</div>
            <textarea className={cn(inputClasses, "h-[200px]")}></textarea>
        </div>
        }
    </div>
}