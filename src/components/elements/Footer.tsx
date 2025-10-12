

const Link = ({ children, href }: { children: string; href: string }) => {
    return <a className="underline opacity-40" href={href}>{children}</a>;
}

export const Footer = () => {
  return (
    <footer className="bg-white h-100 w-screen p-4 relative bottom-0">
        <hr className="p-5 border-gray-300" />
        <div className=" grid grid-cols-1 grid-rows-4 gap-y-8 md:grid-cols-4 md:grid-rows-1 lg:grid-cols-6 lg:ml-16 xl:ml-25" >
            <div className="flex flex-col justify-items-start gap-y-3 lg:gap-y-4">
                <h1 className="font-bold">Resources</h1>
                <Link href="#" children="Gift Cards" />
                <Link href="#" children="Find a Store" />
                <Link href="#" children="Membership" />
                <Link href="#" children="Nike Journal" />
                <Link href="#" children="Site Feedback" />
            </div>
            <div className="flex flex-col justify-items-start gap-y-3 lg:gap-y-4">
                <h1 className="font-bold">Help</h1>
                <Link href="#" children="Get Help" />
                <Link href="#" children="Order Status" />
                <Link href="#" children="Shipping and Delivery" />
                <Link href="#" children="Returns" />
                <Link href="#" children="Contact Us" />
            </div>            
            <div className="flex flex-col justify-items-start gap-y-3 lg:gap-y-4">
                <h1 className="font-bold">Company</h1>
                <Link href="#" children="About Nike" />
                <Link href="#" children="News" />
                <Link href="#" children="Careers" />
                <Link href="#" children="Investors" />
                <Link href="#" children="Purpose" />
            </div>            
            <div className="flex flex-col items-start gap-y-3 lg:gap-y-4">
                <h1 className="font-bold">Promotions & Discounts</h1>
                <Link href="#" children="Student" />
                <Link href="#" children="Military" />
                <Link href="#" children="Teacher" />
                <Link href="#" children="First Responders" />
                <Link href="#" children="Birthday" />
            </div>
            <div className="hidden lg:block"></div>
            <div className="lg:mr-16 xl:mr-5">
                <h2 className="mt-5 relative bottom-0 hidden lg:block ">This website is a non-commercial showcase project. It is not affiliated with, endorsed by, or connected to Nike Inc</h2>
                <img src="src/assets/logonike.png" className="hidden md:block m-auto mt-8 h-10 ml-5" />

            </div>
        </div>


        <h2 className="mt-5 relative bottom-0 lg:hidden">This website is a non-commercial showcase project. It is not affiliated with, endorsed by, or connected to Nike Inc</h2>
        <img src="src/assets/logonike.png" className="inline-block h-10 md:hidden" />

    </footer>
  );
};