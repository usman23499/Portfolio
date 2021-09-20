import Web from '../components/Images/Services/web.jpg';
import Mobile from '../components/Images/Services/mobile.jpg';
import Software from '../components/Images/Services/software.png';
import Testing from '../components/Images/Services/testing.png';

export const Services = (props) => {
  return (
    <div id='services' className='text-center' style={{backgroundColor:"black",width:"100%"}}>
      <div className='container' >
        <div className='section-title'>
          <h2>My Services</h2>
          
        </div>
        <div className='row'>
         
         
         
         

            <div  className='col-xs-12 col-md-6 col-lg-3 '>
                                  
            <div className="card" style={{width:"100%",borderRadius:"5px 5px",border:"1px solid #313131",marginBottom:"20px"}} >
                    <img style={{width:"100%"}} src={Web} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title" style={{fontWeight:"600"}}>WEB DEVELOPMENT</h5>
                      <p className="card-text" > I can develop responsive web application according to your need by using react, redux , javascript and wordpress.</p>
                      
                    </div>
                  </div>
                          
                        </div>
          <div  className='col-xs-12 col-md-6 col-lg-3 '>
                                  
            <div className="card" style={{width:"100%",borderRadius:"5px 5px",border:"1px solid #313131",marginBottom:"20px"}} >
                    <img style={{width:"100%"}} src={Mobile} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title" style={{fontWeight:"600"}}>Mobile DEVELOPMENT</h5>
                      <p className="card-text">I can develop mobile application according to your need by using react native and android studio for both ios and andriod.</p>
                      
                    </div>
                  </div>
                          
                        </div>
                        <div  className='col-xs-12 col-md-6 col-lg-3 '>
                                  
            <div className="card" style={{width:"100%",borderRadius:"5px 5px",border:"1px solid #313131",marginBottom:"20px"}} >
                    <img style={{width:"100%"}} src={Software} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title" style={{fontWeight:"600"}}>DESKTOP APPLICATIONS</h5>
                      <p className="card-text">I can create desktop application using java and python and can also develop the Ai based applications.<br/><br/></p>
                      
                    </div>
                  </div>
                          
                        </div><div  className='col-xs-12 col-md-6 col-lg-3 '>
                                  
            <div className="card" style={{width:"100%",borderRadius:"5px 5px",border:"1px solid #313131",marginBottom:"20px"}} >
                    <img style={{width:"100%"}} src={Testing} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title" style={{fontWeight:"600"}}>TESTING</h5>
                      <p className="card-text">I can also test the web applications using jmeter and selenium and use jira for manual testing <br/> <br/></p>
                      
                    </div>
                  </div>
                          
                        </div>
                        

        </div>
      </div>
    </div>
  )
}
