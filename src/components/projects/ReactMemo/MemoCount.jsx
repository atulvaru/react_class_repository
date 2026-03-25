/* eslint-disable react-hooks/refs */
import { memo, useRef } from "react"



// export const Counts= memo(()=>{
//     const renderCount =useRef(0);
//     console.log(renderCount)
//     return(
//         <div>
//             <p>
//                 Nothing changed here but i have now rendered.
                
//                 <span>{renderCount.current++}</span>
//             </p>
//         </div>
//     )
// });

const Counts= ()=>{
    const renderCount =useRef(0);
    console.log(renderCount)
    return(
        <div>
            <p>
                Nothing changed here but i have now rendered.
                
                <span>{renderCount.current++}</span>
            </p>
        </div>
    )
};
export default memo(Counts);