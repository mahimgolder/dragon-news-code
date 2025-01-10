import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import Navbar from "../components/Navbar";
import LeftNavbar from "../layoutComponents/LeftNavbar";
import MainSection from "../layoutComponents/MainSection";
import RightNavbar from "../layoutComponents/RightNavbar";

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
                <aside className="col-span-3 border-2">
                    <LeftNavbar></LeftNavbar>
                </aside>
                <section className="col-span-6">
                    <MainSection></MainSection>
                </section>
                <aside className="col-span-3">
                    <RightNavbar></RightNavbar>
                </aside>
            </main>
        </div>
    );
};

export default HomeLayout;