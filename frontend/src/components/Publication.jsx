import { Heart, Heater, LifeBuoy } from 'lucide-react'
import Img from '../assets/photo.jpg'
export default function Publication(){
    return(
     <div>
          <div className="flex flex-col items-center justify-center ">
           
        <div className=' bg-base-100 image-full  shadow-lg w-3/6  mt-4 p-10 '>
            <div className=' flex flex-row gap-4'>
               <div class="avatar avatar-placeholder mr-2">
                 <div class="bg-neutral text-neutral-content w-8 rounded-full">
                 <span class="text-xs">UI</span>
               </div>
               <h2 className='font-bold ml-4 items-center pt-2'>Ezekiela Harisoa</h2>
            </div> 
            </div>
            <div class="mt-3 ">
                <figure>
                  <img
                       className=''
                       src={Img}
                       alt="Shoes" />
                </figure>
             <div class=" items-center text-center ">
                  <h2 class="card-title mt-4">Card Title</h2>
                  <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                  <div class="card-actions ">
                        <button class="btn btn-primary"> <Heart size={16}/></button>
                        <button class="btn btn-primary"> <LifeBuoy size={16}/> </button>
                        <button class="btn btn-primary"><Heater size={16}/> </button>

                 </div>
             </div>
            </div>
        </div>
    </div>

    <div className="flex flex-col items-center justify-center ">
           
        <div className=' bg-base-100 image-full  shadow-lg w-3/6  mt-4 p-10 '>
            <div className=' flex flex-row gap-4'>
               <div class="avatar avatar-placeholder mr-2">
                 <div class="bg-neutral text-neutral-content w-8 rounded-full">
                 <span class="text-xs">UI</span>
               </div>
               <h2 className='font-bold ml-4 items-center pt-2'>Ezekiela Harisoa</h2>
            </div> 
            </div>
            <div class="mt-3 ">
                <figure>
                  <img
                       className=''
                       src={Img}
                       alt="Shoes" />
                </figure>
             <div class=" items-center text-center ">
                  <h2 class="card-title mt-4">Card Title</h2>
                  <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                  <div class="card-actions ">
                        <button class="btn btn-primary"> <Heart size={16}/></button>
                        <button class="btn btn-primary"> <LifeBuoy size={16}/> </button>
                        <button class="btn btn-primary"><Heater size={16}/> </button>

                 </div>
             </div>
            </div>
        </div>
    </div>
     </div>
    )
}