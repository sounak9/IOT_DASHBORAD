import { Icons } from "./icons";

export function Header() {
  return (
    <div className="flex flex-col justify-center md:items-start md:flex-row md:justify-between md:mt-3 md:mx-3">
      <div className="flex flex-col md:mt-0 text-center md:text-left ">
        <h1 className="text-xl md:text-4xl font-bold text-shadow-lg shadow-slate-800 uppercase">
          IOT Dashboard
        </h1>
        <div className="flex justify-center md:justify-start items-center gap-1">
          

          <p className="text-sm md:text-xl text-shadow shadow-slate-800 ">
            BATTERY MANAGE SYSTEM
          </p>
        </div>
      </div>
      <div className="flex flex-col  justify-center items-center text-center">
        
        
      </div>
    </div>
  );
}
