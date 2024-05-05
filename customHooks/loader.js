import React from "react";

function useLoader(){
    const [loading, setLoading] = React.useState(false)

   function Loader(){
        return (
            <div className="mt-24">
               <span className="loading loading-ring loading-lg"></span>
            </div>
        )
    }
    return { loading, setLoading, Loader }
}
export default useLoader