import LogoSection from "../2. Logo section/logo-section";
import AboutSection from "../3. About section/about-section";
import TeamShowing from "../4. Team showing/team-showing";
import PosterShow from "../5. Poster showing/poster-showing";
import AppFeatures from "../6. App features/app-features";
import DocumentationSection from "../7. Documentation section/documentation-section";

import "./main-structure.css"

const MainStructure = () => {

    return (
        <div className="main-structure-wrapper">

            <LogoSection />

            <AboutSection />

            <TeamShowing />

            <PosterShow />

            <AppFeatures />

            <DocumentationSection />
        </div>
    )
}

export default MainStructure;