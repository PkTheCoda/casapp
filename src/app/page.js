import './globals.css'
import HeroComponent from './Components/HeroComponent'
import Header from './Components/Header'
import InitialFeatures from './Components/InitialFeatures'
import ApplicationFeature1 from './Components/ApplicationFeature1'
import StepsComponent from './Components/StepsComponent'
import CasComponent from './Components/CasComponent'


export default function Page() {
    return (
        <>
            <main>
                <Header />
                <HeroComponent />
                <InitialFeatures />
                <ApplicationFeature1 />
                <StepsComponent />
                <CasComponent />
                
                
            </main>
        </>
    )
} 
