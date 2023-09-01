import classNames from "classnames";


function Panel({children,className,...rest}){
    const classnames = classNames('porder rounded p-3 shadow bg-white w-full',
    className
    );
    return(
        <div className={classnames} {...rest}>
        {children}
        </div>
    );
}

export default Panel;