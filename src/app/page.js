import './globals.css'
import HeroComponent from './Components/HeroComponent'
import Header from './Components/Header'
import InitialFeatures from './Components/InitialFeatures'
import TrustedBy from './Components/TrustedBy'
import ApplicationFeature1 from './Components/ApplicationFeature1'
import BetterCas from './Components/Bettercas'


export default function Page() {
    return (
        <>
            <main>
                <Header />
                <HeroComponent />
                <InitialFeatures />
                {/* <TrustedBy /> */}
                <ApplicationFeature1 />
                <BetterCas />
                
                
            </main>
        </>
    )
} 
