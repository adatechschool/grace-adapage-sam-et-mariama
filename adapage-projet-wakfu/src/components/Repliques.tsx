import { useState } from 'react';
import replique from '../data/repliques';

interface repliques{
    id:number;
    replique:string;
}

 function Repliques(){
const [repliques, setSelectRepliques] = useState<repliques[]>(replique);

 return (
   <>
     <div className="px-6 py-8">
          <h2 className="text-2xl font-bold mb-2 text-yellow-500 uppercase">
           Répliques
          </h2>
         
<div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
  {repliques.map((repl) => {
    return(
    <div key={repl.id} className='text-white shrink-0 snap-start snap-always w-full'>
      <p>{repl.replique}</p>
    </div>)
 })}
</div>
</div>

</>   
    
)   
}

export default Repliques  ;