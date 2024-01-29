import "../App.css";
const About = () => {
    return (  

        <section className="abouth">
        <h1 className="title">About Me</h1>
        <div className="about_sec">
          <div className="pic_div">
            <img
              src="../src/assets/Photos.jpg"
            />
          </div>
          <div className="about-details-container">
            <div className="about-containers">
              <div className="education">
                <h3>Education</h3>
                <p>Strathmore University - Bachelor of Informatics and Computer Science (2020-2023)</p>
                <p>Alliance High School - Kenya Certificate of Secondary Education (KCSE) (2016-2019)</p>
                <p>Mt. Laverna Primary School - Certificate of Primary Education (KCPE) (2008-2015)</p>
              </div>
              <div className="exper">
                <h3>Work Experience</h3>
                <p>Attachee - Safari Park Hotel</p>
                <p>Voluntary Community Service - Happy Life Children's Home</p>
              </div>
            </div>
            <div className="text-container">
              <p>
                Hello there! I'm Michael Muya, a dedicated software developer driven by a profound love for crafting innovative solutions. 
                Specializing in software evelopment, I bring expertise in HTML, CSS, and JavaScript, along with proficiency in other frameworks. 
                My academic journey includes a Bachelor of Science in Informatics and Computer Science, providing a robust foundation in computer science principles. 
                Beyond coding, I'm fueled by a passion for creating software that not only meets technical standards but also delivers a delightful user experience. 
                Outside the computer science, I explore the world of jazz music and maintain a challenging workout routine to keep both mind and body in peak condition. 
                It's this blend of technical prowess and personal interests that defines my approach to software development.  I alsofind joy in the culinary realm. Cooking is more than a hobby as its creative. I get
                to experiment with flavors and textures, and also try out different recipes which is fun. These hobbies collectively
                reflect my well-rounded nature both inside and outside the tech world. 
              </p>
            </div>
          </div>
        </div>
      </section>
    );
}
 
export default About;