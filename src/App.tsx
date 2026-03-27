import Bokeh from "@/components/ui/bokeh"
import Header from "@/layout/Header"

const App = () => {  
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      <Bokeh />
      <Header />
      <main>
      </main>
    </div>
  )
}

export default App