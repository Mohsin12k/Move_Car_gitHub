import Button from "./Button";

const Header = ({start, stop, reset}) => {
  return (
     <header className="w-full bg-gray-500 custom-padding-tb flex gap-2 justify-between items-center">
      <h2 className="text-white ml-6 custom-h2 font-bold tracking-widest mb-2">
        G<span className="text-green-500 custom-h2-span">a</span>me</h2>
        <nav className="mr-6 w-[80%] py-[0.5%] rounded-3xl flex gap-2 justify-around items-center">
          <Button start={start} stop={stop} reset={reset} />
        </nav>
    </header>
  )
}

export default Header