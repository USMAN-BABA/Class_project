// They are Components Which are used to create to Website. 
// we import them. They can be Import dirctly or by Curly Braces{}.

export default function Home() {
  return (
 <div>
  <center><h1 className = "ml-2 mr-2 bg-yellow-300 text-red-800 border-2 border-yellow-400 text-lg">Tis is a Home Page.</h1></center> 
  <center><h1 className ="m-2 bg-yellow-300 text-red-800 border-2 border-yellow-400 text-lg">Hello World</h1></center>
  <div className = "m-5 flex justify-center">
    <p className="text-red-700 bg-blue-300 text-3xl border-2 border-red-700">This is my first project.I made it on 
      behalf of "Sir Mubashir" my <b>next.js</b> Teacher.This is so basic as I learned in my class.I will make it more
      advanced later when I learn more.</p>
    </div> 
    </div>

  )
}
