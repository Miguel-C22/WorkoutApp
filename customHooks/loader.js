import React from "react";

function useLoader(){
    const [loading, setLoading] = React.useState(false)

   function Loader(){
        return (
            <div>
               <span className="loading loading-bars loading-lg"></span>
            </div>
        )
    }
    return { loading, setLoading, Loader }
}
export default useLoader