import Card from "./Card.jsx"


export const Project = (props) => {
  const arr=[
  {name:"UBER-CLONE",theory:"This is a mobile application build using React Native Expo with the help of firebase storage and Redux",pic:"../img/projects/UberEats.jpg",link:"https://github.com/usman23499/UberEats" },
  {name:"MREN-BLOG",theory:"This application is develop using mern stack redux and scss",pic:"../img/projects/mern.png",link:"https://frozen-hamlet-45306.herokuapp.com/" },

  {name:"SPACEX-GQL-PWA",theory:"Spacex application on typescript with graph QL and PWA ",pic:"../img/projects/spaceX.png",link:"https://notification-b267836217.web.app/" },
  {name:"GATSBY-CMS-BLOG",theory:"This webapplication is develop on Gatsby with contentful CMS and deploy on netlify",pic:"../img/projects/CMS.png" ,link:"https://gatsbyblogbootcamp2020.netlify.app/blog"},
  {name:"CURDAPP-NETLIFY-FAUNADB-EMS",theory:"EMS with serverless netlify function, this application also deploy on netlify with CICD.",pic:"../img/projects/netlify.png",link:"https://emswithfanuadb.netlify.app/" },
  {name:"PWA-COVID-TRACKER",theory:"This is PWA Application with push notification",pic:"../img/projects/pwacovid.png",link:"https://databaseproject1-e14d9.firebaseapp.com/"},
  {name:"CMS NATIVE",theory:"React Native Mobile Application using firebase data base",pic:"../img/projects/cmsnative.png",link:"https://github.com/usman23499/Native-App-CampusRecruitmentSystem"},
  {name:"BLOOD APPLICATION",theory:"React Native Mobile Application using firebase data base",pic:"../img/projects/bloodapp.png",link:"https://github.com/usman23499/Blood-app/tree/main"},

  {name:"TASKBOX PACKAGE USING STORYBOOK",
  theory:"Create Task Box library in type script Using StoryBook",
  pic:"../img/projects/tool.png",
  link:"http://deafening-crack.surge.sh/"},
  {name:"SHOPPING-BASKET-REDUX",
  theory:"Shopping basket with redux toolkit",
  pic:"../img/projects/shopping.png",
  link:"http://spiritual-protest.surge.sh/"},
  {name:"COVID-19 TRACKER",
  theory:"With react also include Material UI and Charts js",
  pic:"../img/projects/covid.png",
  link:"http://bright-temper.surge.sh/"},
  {name:"QUIZAPP",
  theory:"Develop on React Type Script",
  pic:"../img/projects/quiz.png",
  link:"http://yummy-sticks.surge.sh/"},
  {name:"FORMIK&YUP",
  theory:"Signup with Formik&Yup",
  pic:"../img/projects/fromik.png",
  link:"http://grotesque-visitor.surge.sh/"},
  {name:"WEB ANNIMATION",
  theory:"Annimation for business websites",
  pic:"../img/projects/annimations.png",
  link:"http://undesirable-debt.surge.sh/"},
  {name:"DIARIES USING REDUXTOOLKIT",
  theory:"Due to miragejs server, this project only working perfectly on local host",
  pic:"../img/projects/daries.png",
  link:"https://github.com/usman23499/diaries-app-boot-camp-26"},





  {name:"ANNIMATION-REACT",
  theory:"small game like annimation on react",
  pic:"../img/projects/gameaani.png",
  link:"http://nasty-clam.surge.sh/"},

  
  {name:"TIMER USING TDD",
  theory:"Timer application using test driven development in typescript using enzyme pakedge",
  pic:"../img/projects/timer.png",
  link:"http://versed-liquid.surge.sh/"},

  {name:"SHOES STORE",
  theory:"with react and react-router with custom routes ",
  pic:"../img/projects/shoes.png",
  link:"http://fascinated-zinc.surge.sh/"},


  {name:"EXPENSE TRACKER",
  theory:"With react and also include context API and reducer",
  pic:"../img/projects/expense.png",
  link:"http://irritating-smile.surge.sh/"},

  {name:"CHAT APP",
  theory:"with facebook authentication",
  pic:"../img/projects/chartapp.png",
  link:"https://quizapp-b92c8.web.app/index.html"},


]
  return (
    <div style={{backgroundColor:"black",width:"100%"}} id='projects' className='text-center'>
      <div className='container'>
        <div className='col-md-10 col-md-offset-1 section-title'>
          <h2 style={{marginTop:"20px",color:"white"}}>My Practice Projects (During Graduation)</h2>
        </div>
        <div className='row'>
         

       {arr.map((value,key)=>{
        
         return(
          <div key={key} className='col-xs-12 col-md-6 col-lg-4 '>
          <a href={value.link} style={{all:"none"}}>
            
          <Card name={value.name} theory={value.theory} pic={value.pic}  />
          
          </a>
        </div>
         )
       })}
                        
                        
        </div>
      </div>

      
    </div>
  )
}
