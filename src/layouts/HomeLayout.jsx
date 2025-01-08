import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import Navbar from "../components/Navbar";

const HomeLayout = () => {
    return (
        <div className="font-poppins">
            <header>
                <Header></Header>
                <section className="border-2 w-11/12 mx-auto">
                    <LatestNews></LatestNews>
                </section>
            </header>
            <nav className="w-11/12 mx-auto">
                <Navbar></Navbar>
            </nav>
            <main className="w-11/12 mx-auto grid grid-cols-12 gap-4">
                <aside className="col-span-3">left</aside>
                <section className="col-span-6">
                    Main
                </section>
                <aside className="col-span-3">right</aside>
            </main>
        </div>
    );
};

export default HomeLayout;