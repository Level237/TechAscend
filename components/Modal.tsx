
"use client"
import { close } from "@/store/store";
import {AnimatePresence, motion} from "framer-motion"
import { useDispatch, useSelector } from "react-redux";
import { Button } from "./ui/button";

const Modal=()=>{
    const isVisible = useSelector((state:any) => state.StartedSlice.isVisible);
    const dispatch=useDispatch()
    return (
<>
<AnimatePresence>
{isVisible && (
    <div id="static-modal" data-modal-backdrop="static" tabIndex={-1} aria-hidden="true" className="max-sm:flex overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full  md:inset-0 h-[calc(100%)] bg-[#000000d7] max-h-full">
    <motion.div
     initial={{ 
       opacity:0,
       scale:0
     }}

     animate={{ 
        y:0,
        opacity:1,
        scale:1
      }}

      exit={{ 
        y:-200,
        opacity:0
       }}
    className="relative p-4 w-full max-w-2xl max-h-full">
      
        <div className="relative bg-[#95c6fd] py-6 max-sm:w-[90vw] rounded-lg shadow dark:bg-gray-200"
       
         
        >
          <h2 className="text-[#003366] text-center text-2xl font-bold">How can TechAscend help you?</h2>
            <div className="flex relative items-center flex-col justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
            <button onClick={()=>dispatch(close())}  type="button" className="text-black bg-transparent  hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="static-modal">
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span className="sr-only">Close modal</span>
                </button>
                <div>
                    
                </div>
                <Button className=" bg-[#003366] py-8 flex flex-col"><div className="text-2xl">I Want to hire Talents</div><div>I{`'`} ready to build my team.</div></Button>
                <Button className="bg-[#003366] py-8 flex flex-col mt-5"><div className="text-2xl">I Want a remote worker</div><div>I{`'`} ready to find a remote opportunity.</div></Button>
                <Button className="bg-[#003366] py-8 flex flex-col mt-5"><div className="text-2xl">I Want to learn new skills</div><div>I{`'`} ready to enchance my capabilities.</div></Button>
            </div>
          
            <div className="p-4 md:p-5 space-y-4">
               
            </div>
           
            
        </div>
    </motion.div>
</div>
)}
</AnimatePresence>

     
        </>
    )

}

export default Modal
