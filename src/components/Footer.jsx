
const Footer = () => {
    
  const today = new Date();
  const calenderProvider = {
    day : "2-digit",
    weekday : "short",
    month : "short",
    year : "numeric"

  };
  return (
    <footer className="w-full bg-gray-500 custom-padding-tb text-center fixed bottom-0 z-20 text-white">
      <p className="custom-btn-text font-bold tracking-widest capitalize">
        Copyright &copy; Game Company <span
          className="underline text-[#e3ebf7]"
        >{today.toLocaleDateString("en-US", calenderProvider)}</span>
      </p>
    </footer>
  )
}

export default Footer