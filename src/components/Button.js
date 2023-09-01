import className from "classnames";
import { twMerge } from 'tailwind-merge';
function Button({
    children,
    primary,
    secondary,
    success,
    warning,
    danger,
    outline,
    rounded,
    ...rest
}){

    let names = twMerge(rest.className,className('flex items-center px-3 py-1.5',{
        'px-3 py-1.5 border border-blue-500 bg-blue-500 text-white':primary,
        'px-3 py-1.5 border border-gray-500 bg-gray-500 text-white':secondary,
        'px-3 py-1.5 border border-green-500 bg-green-500 text-white':success,
        'px-3 py-1.5 border border-yellow-500 bg-yellow-500 text-white':warning,
        'rounded-full':rounded

    }));



    return(
        <div>
        <button {...rest} className={names}>{children}</button>
        </div>
    );
    

}

export default Button;