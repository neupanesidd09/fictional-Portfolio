const Navbar = () => {
  const navlist=["Home","About me", "Contact","Resume","Project"]
  return (
     
<nav  className=" border-4 py-4 mx-auto w-[62%] my-5 rounded-full mb-5 ">
  <ul className="flex gap-4 justify-around  font-bold ">
    {navlist.map((item,index)=>(
      <li className="text-white hover:text-blue-600 hover:scale-150 transition-all duration- gap-5 " key={index}>{item}</li>
    ))}
  </ul>
</nav>
  )
}

export default Navbar ;