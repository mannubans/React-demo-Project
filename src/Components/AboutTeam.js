import React, {useState} from 'react';
import AboutTeamAPI from '../API/AboutTeamAPI';
const AboutTeam = () => {
   const [TeamData, setTeamData] = useState(AboutTeamAPI);
   return (
      <>
         <section class="team cmnptb">
            <div class="container">
               <div class="row">
                  {TeamData.map((curElem) => {
                  const { id, image, facebook, instagram, youtube, twitter, name, profile, description } = curElem;
                  return (
                     <>
                     <div class="col-lg-4 col-md-6 d-flex align-items-stretch" key={id}>
                        <div class="team-member">
                           <div class="team-member-img">
                              <div className="sclimg-item bx-sd-none">
                                 <img src={image} class="img-fluid" alt="" />
                              </div>
                              <div class="team-social">
                                 <a href={facebook}><i class="fab fa-facebook-f"></i></a>
                                 <a href={instagram}><i class="fab fa-instagram"></i></a>
                                 <a href={youtube}><i class="fab fa-youtube"></i></a>
                                 <a href={twitter}><i class="fab fa-twitter"></i></a>
                              </div>
                           </div>
                           <div class="team-member-info">
                              <h4>{name}</h4>
                              <span>{profile}</span>
                              <p>{description}</p>
                           </div>
                        </div>
                     </div>
                     </>
                     )
                  })
                  }
               </div>
            </div>
         </section>
      </>
   )
}

export default AboutTeam;
