import { forwardRef } from "react";

const MyInput = forwardRef((props, ref) => {
    return <input type="text"  ref={ref}/>
})

export default MyInput;