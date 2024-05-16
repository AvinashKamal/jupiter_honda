import Image from "next/image";

/**
 * Renders the hero section of the homepage.
 */
const Hero: React.FC = () => {
    return (
        <div className="hero flex flex-col text-center lg:flex-row gap-8 justify-center items-center">
            <div className="left">
                <h1 className="text-[16px] text-[#808080]">Ride with us.</h1>
                <h1 className="text-[40px] md:text-[48px] font-bold text-[#E70323] mb-2">Jupiter Honda</h1>
                <h2 className="text-[24px] md:text-[28px] font-medium text-[#808080] mb-2">Your Honda Service and Sales Hub</h2>
                <button className="btn btn-primary py-4 px-12 bg-[#E70323] rounded-md text-[#f6f6f6]">Schedule a test ride</button>
            </div>
            <div className="right">
                <Image src="/images/hero-image.png" width={500} height={500} alt="Hero Image" />
            </div>
        </div>
    )

}

export default Hero;