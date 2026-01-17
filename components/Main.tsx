import ButtonAudio from './ButtonAudio';
import * as Section from './section';

export default function Main() {
    return (
        <main className='space-y-16'>
            <ButtonAudio />
            <Section.SectionIntro />
            <Section.SectionBrideGroom />
            <Section.SectionSchedule />
            <Section.SectionStory />
            {/* <Section.SectionGift /> */}
            <Section.SectionGallery />
            <Section.SectionTimer />
        </main>
    );
}
