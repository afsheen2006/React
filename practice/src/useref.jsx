import { useId } from 'react';
import { useRef } from 'react';

const Handleform = (e) => {
    e.preventDefault();
    console.log(e.target[0].value);
    console.log(e.target[1].value);
}
export const ForwardRef = () => {
    const Username = useRef(null);
    const Password = useRef(null);
    return (
        <form onSubmit={Handleform}>
            <Beforev19 label="Username" ref={Username} />
            <Beforev19 label="password" ref={Password} />
            <button type="submit" onSubmit={Handleform}>Submit</button>
        </form>
    );
}

const Beforev19 = ({label, ref}) => {
    const id = useId();
    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <input type="text" id={id} ref={ref} />
        </div>
    );
}