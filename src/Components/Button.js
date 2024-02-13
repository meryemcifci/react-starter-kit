import classNames from "classnames"
function Button({text,variant='default'}){
    return(
        <button className="p-4 h-10 flex items-center bg-pink-50 rounded">{text}</button>
    )
}

export default Button
