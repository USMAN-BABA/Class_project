import Link from "next/link"

export default function Important() {
    return (
        <div>
            <div className=" w-half  pl-8 pt-2 bg-red-100">
            <h1 className= "text-xl">Important</h1>
            <h2>HERE ARE MOST IMPORTANT VIDEOS ABOUT <b>HTML</b>For biggener. </h2>
          <div className="flex justify-center">
            <p>This is a list of Important videos about HTML.
            <Link href="https://www.youtube.com/playlist?list=PLr6-GrHUlVf_ZNmuQSXdS197Oyr1L9sPB">
            Click<h3 className="text-blue-500  border-2 bg-blue-100 border-yellow-400 flex justify-center text-xl">HERE</h3>
            To Watch</Link></p>
        </div>

        <h1 className="text-xl">Important</h1>
            <h2>HERE ARE MOST IMPORTANT VIDEOS ABOUT <b>CSS</b>For biggener. </h2>
          <div className="flex justify-center">
            <p>This is a list of Important videos about CSS.
            <Link href="https://www.youtube.com/playlist?list=PLr6-GrHUlVf8JIgLcu3sHigvQjTw_aC9C">
            Click<h3 className="text-blue-500  border-2 bg-blue-100 border-yellow-400 flex justify-center text-xl">HERE</h3>
            To Watch</Link></p>
        </div>

        <h1 className="text-xl">Important</h1>
            <h2>HERE ARE MOST IMPORTANT VIDEOS ABOUT <b>JAVA SCRIPT</b>.</h2>
          <div className="flex justify-center">
            <p>This is a list of Important videos about JAVA SCRIPT.
            <Link href="https://www.youtube.com/playlist?list=PL4cUxeGkcC9i9Ae2D9Ee1RvylH38dKuET">
            Click<h3 className="text-blue-500  border-2 bg-blue-100 border-yellow-400 flex justify-center text-xl">HERE</h3>
            To Watch</Link></p>
        </div>
        </div>
        </div>
    );
}