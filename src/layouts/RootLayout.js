import Nav from "../components/Nav"
import About from "../components/About"
import Video from "../components/Video"

function RootLayout() {
    return (
        <main>
            <div>
                <Nav />
                <About />
            </div>
            <div>
                <Video />
            </div>
        </main>
    )
}

export default RootLayout