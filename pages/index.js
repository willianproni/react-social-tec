import React from "react"

import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import { AlurakutMenu, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons'
import { ProfileRelationsBoxWrapper } from "../src/components/ProfileRelations"

//------------------------------------------------------------

  function ProfileSidebar(Usuario) {
    console.log(Usuario)
    return(
      <Box>
        <img style={{ borderRadius: '5px' }} src={`https://github.com/${Usuario.gitHubUser}.png`}/>
     </Box>
    )
  }

export default function Home() {
  const GitHubUser = 'willianproni';

  const FriendsUser = [
    'juunegreiros',
    'omariosouto',
    'peas',
    'rafaballerini',
    'facebook',
    'riot'
     ]

  return (
    <>

    <AlurakutMenu/>

  <MainGrid>

    <div className="profileArea" style={{ gridArea: 'profileArea' }}>
      <ProfileSidebar gitHubUser={GitHubUser} />
    </div>

    <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>
      <Box >
        <h1 className="title">
          Bem vindo(a) {GitHubUser}
        </h1>

      <OrkutNostalgicIconSet/>

      </Box>
    </div>

    <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }} >
      <ProfileRelationsBoxWrapper>
        
        <h2 className='smallTitle'>
          Amigos ({FriendsUser.length})
          </h2>

      <ul>
        {FriendsUser.map((Friends) => {
          return(
            <li>  
              <a href={`/users/${Friends}`}>
              <img src={`https://github.com/${Friends}.png`} />
              <span>{Friends}</span>
          </a></li>
          )
        })}
        </ul>

      </ProfileRelationsBoxWrapper>

      <Box>
        Comunidades
      </Box>
    </div>

  </MainGrid>

</>
)}
