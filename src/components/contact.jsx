
export const Contact = (props) => {
  
  return (
    <div style={{width:"100%"}}> 
      <div id='contact' style={{width:"100%"}}>
        <div className='container'>
        <div className='section-title'>
       <h2>Contact Info</h2>
                
              </div>
            <div className='row'>
            <div  className='col-xs-12 col-md-6 col-lg-4 '>
            <div className='contact-item'>
              
              <p>
                <span>
                  <i className='fa fa-map-marker'></i> Address
                </span>
                {props.data ? props.data.address : 'loading'}
              </p>
            </div>
                       
                     </div>
                         
                     <div  className='col-xs-12 col-md-6 col-lg-4 '>
            <div className='contact-item'>
              
            <p>
                <span>
                  <i className='fa fa-phone'></i> Phone
                </span>{' '}
                {props.data ? props.data.phone : 'loading'}
              </p>
            </div>
                       
                     </div>
                     <div  className='col-xs-12 col-md-6 col-lg-4 '>
            <div className='contact-item'>
              
            <p>
                <span>
                  <i className='fa fa-envelope-o'></i> Email
                </span>{' '}
                {props.data ? props.data.email : 'loading'}
              </p>
            </div>
                       
                     </div>
             
            </div>
         
          
          <div className='col-md-12'>
            <div className='row'>
              <div className='social'>
                <ul>
                  <li>
                    <a href={props.data ? props.data.linkedin : '/'}>
                    <i class="fa fa-linkedin" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.twitter : '/'}>
                      <i className='fa fa-twitter'></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.github : '/'}>
                    <i class="fa fa-github" aria-hidden="true"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
     
    </div>
  )
}
