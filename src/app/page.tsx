import {HeroSectionComponent} from "@/components/hero-section-component/HeroSectionComponent";
import {
    ContactSectionComponent
} from "@/components/contact-section-component/ContactSectionComponent";
import {AboutSectionComponent} from "@/components/about-section-component/AboutSectionComponent";
import {ProjectsSectionComponent} from "@/components/projects-section-component/ProjectsSectionComponent";
import {SkillsSectionComponent} from "@/components/skills-section-component/SkillsSectionComponent";
import {ButtonScrollTopComponent} from "@/components/button-scroll-top-component/ButtonScrollTopComponent";

export default function Home() {
    return (
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <HeroSectionComponent/>
            <AboutSectionComponent/>
            <ProjectsSectionComponent/>
            <SkillsSectionComponent/>
            <ContactSectionComponent/>
            <ButtonScrollTopComponent/>
        </div>
    );
}
