import PDF from "../data/Usman.pdf";
export const About = (props) => {
  return (
    <div id="about" style={{width:"100%"}}>
      <div className="container">
        <div className="row">
          <div  className='col-xs-12 col-md-6 col-lg-6 '>
            {" "}
            <img src="img/about.jpg" className="img-responsive" alt="" />{" "}
          </div>
          <div  className='col-xs-12 col-md-6 col-lg-6 '>
            <div className="about-text">
              <br/>
              <h2>About Me</h2>
              <p>{props.data ? props.data.paragraph : "loading..."}</p>
              <h3 style={{cursor:"pointer"}}><a  href= {PDF} style={{all:"none"}} download>Download Resume</a></h3>
          
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
