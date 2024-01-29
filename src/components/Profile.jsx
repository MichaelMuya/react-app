import "../App.css";
const Profile = () => {
    return ( 
      <section className="profileh">
        <div className="section__text">
          <h1 className="title">Michael Muya</h1>
          <p>Software Developer</p>
          <div className="socials-containerh">
            <button><a href="https://github.com/MichaelMuya/" target="_blank">Github</a></button>
            <button><a href="https://www.linkedin.com/in/michael-kimuri-868135242/" target="_blank">LinkedIn</a></button>
          </div>
        </div>
      </section>
     );
}
 
export default Profile;