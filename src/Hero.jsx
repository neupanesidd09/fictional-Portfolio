import Button from "./Button";
import MyPhoto from "./assets/image.webp"


const Hero = () => {
  return (
    <div className="flex flex-col space-y-3 items-center justify-center  "> 
      <img className="rounded-full" src={MyPhoto} alt="hello"  height={200} width={200}   />

      <h1 className=" text-3xl font-bold italic "> Mr. HACKER👋</h1>
      <h3 className=" text-2xl font-semibold ">full stack developer</h3>
      <p className=" text-center w-3/4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, consectetur nesciunt. Temporibus dolorum odit quam maiores neque. Aliquam numquam ex eius enim, itaque recusandae ipsam consectetur molestiae sint sequi reprehenderit.</p>
      <div className="flex gap-4 ">
        <Button title="Contact Me" type="orange"  icon="contact" />

        <Button title="My Projects" type="blue" icon="github" />
      </div>
    </div>
  );
};

export default Hero;
