import Link from "next/link";   
export default async function About(){
    await new Promise((resolve) => {
        setTimeout(resolve, 5000);
    })
    
    return(
        <div>
         <h1 className=" flex justify-center bg-pink-300 text-white-800 border-2 border-pink-600 text-lg">
            This is an ABOUT Page</h1>
            <p className="m-5 ml-8  text-xl">This is something about me.</p>
            <h2 className="m-8  mt-8 border-2 border-blue-300 text-2xl" >
                I am First Year Student in field of Science <b>PRE-ENGINEERING</b> but my Aim is to be a Web Developer.I am learning 
                <b> Next.JS</b> , <b>Node JS</b>,<b> react JS</b>,<b> Cloud native</b>, <b>Javascript</b> and <b>Typescript </b> 
        From Governor House.
      </h2>
      <div> 
      <h1 className="text-xl">MY GITHUB</h1>
            <h2>HERE IS MY GITHUB </h2>
          <div className="flex justify-center">
            <div>HERE YOU CAN SEE MY PROJECT REPO.
            <Link href="https://github.com/USMAN-BABA">
            Click<p className="text-blue-500  border-2 bg-blue-100 border-yellow-400 flex justify-center text-xl">
                MY GITHUB</p></Link>
                </div>
        </div>

        <div> 
      <h1 className="text-xl">MY LINKEDIN</h1>
            <h2>HERE IS MY LINKEDIN. </h2>
          <div className="flex justify-center">
            <div>HERE IS MY LINKEDIN.
            <Link href="https://www.linkedin.com/in/usman-khalil-0352672ba/">
            Click<p className="text-blue-500  border-2 bg-blue-100 border-yellow-400 flex justify-center text-xl">
                MY LINKEDIN</p></Link>
                </div>
        </div>
        </div>
      </div>
        </div>
    )
}