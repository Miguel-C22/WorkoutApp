import React, { useEffect } from 'react';


function BIO() {

    // useEffect(() => {
    //     document.getElementById('my_modal_1').showModal();
    // }, []);

  return (
  //   <dialog id="my_modal_1" className="modal">
  //   <div className="modal-box  max-w-screen-xl h-96 relative">
  //     <h3 className="font-bold text-lg">Hello!</h3>
  //     <p className="py-4">BIO</p>
  //     <div className="modal-action">
  //       <form method="dialog">
  //         {/* if there is a button in form, it will close the modal */}
  //         <div className='absolute bottom-4 right-4 flex gap-4'>
  //           <button className="btn btn-success">save</button>
  //           <button className="btn btn-error">cancel</button>
  //         </div>
  //       </form>
  //     </div>
  //   </div>
  // </dialog>
  <div className='flex flex-col items-center 
  justify-center text-center gap-4
  bg-white shadow-2xl w-full p-8 rounded-lg mb-8'>
    <p className='text-2xl font-bold'>Profile BIO</p>
    <form method="dialog" className="flex flex-col gap-4 w-full">
      {/* if there is a button in form, it will close the modal */}
      <textarea 
        className="textarea textarea-bordered  h-48 min-h-48 resize-y p-2 bg-white" 
        placeholder="Bio"
      ></textarea>
      <div className='flex gap-2 justify-center'>
        <button className="btn btn-success">Save</button>
        <button className="btn btn-error">Cancel</button>
      </div>
    </form>
</div>
  )
}

export default BIO