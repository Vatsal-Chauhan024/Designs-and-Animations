import React, { useState } from 'react';

const Sample = () => {
  const [inputFile, setInputFile] = useState(null);

  const handleChange = (e) => {
    const selectedFiles = e.target.files;
    if (selectedFiles.length > 0) {
      setInputFile(selectedFiles[0]);
    } 
  };
  const handleClear = () =>{
    setInputFile(null)
  }

  return (
    <div className='w-screen h-screen flex justify-center items-center flex-col gap-4 '>
      <div className="flex justify-center items-center w-2/3 h-96 outline-none border-[2px] border-[#B8B8B8] border-dashed select-none bg-slate-100 hover:bg-slate-200">
        <input
          type="file"
          className="absolute z-0 opacity-0 h-96 w-2/3 cursor-pointer"
          onChange={handleChange}
        />
        <div className='flex flex-col gap-1 text-center text-orange-500'>
          {inputFile ? (
            <span>{inputFile.name}</span>
          ) : (
            <>
              <span>Drop your Audio</span>
              <span>or</span>
              <span>Drop your Video</span>
            </>
          )}
        </div>
      </div>
      <div className="button flex gap-8">

      <button className={`text-lg text-white ${inputFile? 'bg-orange-500': 'bg-orange-300'} px-4 py-2 rounded-md`}>SEND</button>
      <button className={`text-lg text-white ${inputFile? 'bg-orange-500': 'bg-orange-300'} px-4 py-2 rounded-md`} onClick={handleClear}>CLEAR</button>

      </div>
    </div>
  );
};

export default Sample;
