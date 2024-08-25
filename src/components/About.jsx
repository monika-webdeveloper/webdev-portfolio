import SectionTitle from "./SectionTitle";
import aboutSvg from "../assets/about.svg";

const About = () => {
  return (
    <section className='bg-white py-20' id='about'>
      <div className=' align-element grid md:grid-cols-2 items-center gap-16'>
        <img src={aboutSvg} alt='image' className='w-full h-64' />
        <article className='align-element'>
          <SectionTitle text='code and coffee' />
          <p className='text-slate-600 mt-8 leading-loose'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab cumque
            ratione, ea voluptas quam minus dicta commodi fugit esse pariatur
            saepe! Necessitatibus dolore eaque quae magnam vel facere adipisci
            minus? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab
            cumque ratione, ea voluptas quam minus dicta commodi fugit esse
            pariatur saepe! Necessitatibus dolore eaque quae magnam vel facere
            adipisci minus?
          </p>
        </article>
      </div>
    </section>
  );
};
export default About;
