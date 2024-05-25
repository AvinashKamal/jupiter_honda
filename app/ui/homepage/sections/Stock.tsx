import Image from "next/image";

const Stock = () => {
    return (
        <div>
            <h2 className="text-center text-[40px] md:text-[48px] font-bold text-[#E70323] mb-2">Our Vehicles</h2>
            <div className="container flex flex-col gap-4">
                {/* Vehicle Image */}
                <div className="flex items-center justify-center bg-[#ececec] rounded-md">
                    <Image
                        src={'/images/stock.png'}
                        width={240}
                        height={320}
                        className="rounded-full"
                        alt="stock"
                        priority
                    />
                </div>
                {/* Vehicle Name */}
                <h3 className="text-left text-[24px] md:text-[24px] font-bold text-[#E70323]">Activa</h3> 
                {/* Vehicle Colors */}
                <div className="colors-container p-4 bg-[#ececec] rounded-md flex gap-2 items-center">
                  <div className="color-box w-[32px] h-[32px] rounded-full" style={{backgroundColor: '#E70323'}}></div>
                  <div className="color-box w-[32px] h-[32px] rounded-full" style={{backgroundColor: '#000000'}}></div>
                  <div className="color-box w-[32px] h-[32px] rounded-full" style={{backgroundColor: '#FFF'}}></div>
                </div>
                {/* Call to Action Button*/}
            </div>
        </div>
    )
}

export default Stock;