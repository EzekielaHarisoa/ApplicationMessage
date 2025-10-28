import {Link} from "react-router-dom"
export default function Navbar(){
    return(
        <div className="flex flex-row justify-between items-center gap-4 bg-green-400 p-3">
            <ul className="flex flex-row justify-center items-center gap-6 ml-10">
                <li>
                    <Link>Publication</Link>
                </li>
                <li>
                    <Link>Message</Link>
                </li>
                <li>
                    <Link>Notification</Link>
                </li>
            </ul>
            <div class="avatar avatar-placeholder mr-2">
              <div class="bg-neutral text-neutral-content w-8 rounded-full">
                 <span class="text-xs">UI</span>
              </div>
            </div>

        </div>
    )
}