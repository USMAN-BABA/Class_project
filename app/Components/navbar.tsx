import Link from "next/link"

/* there are 5 internal Components in components Heraarque
1.Layout: Layout is a parent component.It encapsolate all components.
 2.Error: Rensering is Optional.When its need.
  3.Loading: Rensering is Optional.When its need.
   4.Error: Rensering is Optional.when its need.
    5.Page: A page where all files is made
     */
export default function Navbar() {
 return(
    <div className = "bg-blue-100 h-12">
      <div className = "flex justify-between">
        <h1 className = "text-xl m-2  ml-40 text-red-900">MY WEB</h1>
      <ul className = "flex gap-5 m-3 mr-40">
       <Link className = " text-xl text-red-500" href = "http://localhost:3000">Home</Link>
       <Link className = " text-xl text-red-500" href = "http://localhost:3000/Contact">Contact Page</Link>
      <Link className = " text-xl text-red-500" href = "http://localhost:3000/about">About</Link>
      <Link className = "text-xl text-red-500" href = "http://localhost:3000/about/job">Jobs</Link>
      <Link className = "text-xl text-red-500" href = "http://localhost:3000/important">IMP-VIDEOS</Link>
      </ul>
  </div>
  </div>
 )

}