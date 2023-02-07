import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Home from "@/components/Home";

export default function home(){
    return(
        <>

        <Header />
        <Home />
        <About />
        <Experience />
        <Contact />
        <Footer />
        </>
    )
}