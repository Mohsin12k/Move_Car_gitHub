
const Button = ({start, stop, reset}) => {
  return (
    <>
          <button type="button" onClick={() => start()} 
          className="bg-white px-[3%] py-[1%] custom-btn-text text-black font-bold tracking-widest 
          uppercase 
          rounded-3xl cursor-pointer transition-all ease-in-out duration-300 focus:bg-black 
          focus:text-white 
          focus:border focus:border-solid focus:border-black focus:shadow-[0px_0px_20px_5px_#4ade80] 
          focus:[text-shadow:0_0_20px_#4ade80] hover:bg-black hover:text-white 
          hover:border hover:border-solid hover:border-black hover:shadow-[0px_0px_20px_5px_#4ade80] 
          hover:[text-shadow:0_0_20px_#4ade80]">
            Start
        </button>
        <button type="button" onClick={() => stop()}
            className="bg-white px-[3%] py-[1%] custom-btn-text text-black font-bold tracking-widest 
            uppercase 
          rounded-3xl cursor-pointer transition-all ease-in-out duration-300 focus:bg-black 
          focus:text-white 
          focus:border focus:border-solid focus:border-black focus:shadow-[0px_0px_20px_5px_#4ade80] 
          focus:[text-shadow:0_0_20px_#4ade80] hover:bg-black hover:text-white 
          hover:border hover:border-solid hover:border-black hover:shadow-[0px_0px_20px_5px_#4ade80] 
          hover:[text-shadow:0_0_20px_#4ade80]"
            >
              Stop
        </button>
        <button type="button" onClick={() => reset()}
         className="bg-white px-[3%] py-[1%] custom-btn-text text-black font-bold tracking-widest 
          uppercase 
          rounded-3xl cursor-pointer transition-all ease-in-out duration-300 focus:bg-black 
          focus:text-white 
          focus:border focus:border-solid focus:border-black focus:shadow-[0px_0px_20px_5px_#4ade80] 
          focus:[text-shadow:0_0_20px_#4ade80] hover:bg-black hover:text-white 
          hover:border hover:border-solid hover:border-black hover:shadow-[0px_0px_20px_5px_#4ade80] 
          hover:[text-shadow:0_0_20px_#4ade80]"
            >
            Reset
        </button>
    </>
  )
}

export default Button