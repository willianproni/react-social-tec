import React from "react"
import { useState } from "react"

import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import { AlurakutMenu, AlurakutProfileSidebarMenuDefault, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons'
import { ProfileRelationsBoxWrapper } from "../src/components/ProfileRelations"

//------------------------------------------------------------

  function ProfileSidebar(Usuario) {
    console.log(Usuario)
    return(
      <Box>
        <img style={{ borderRadius: '5px' }} src={`https://github.com/${Usuario.gitHubUser}.png`}/>
        <hr />
      <p>
        <a className="boxLink" href={`http://github.com/${Usuario.gitHubUser}`}>
        @{Usuario.gitHubUser}
        </a>
      </p>

        <hr />

        <AlurakutProfileSidebarMenuDefault/>
     </Box>
    )
  }

export default function Home() {
  React.useState(['Will o maior']);

  const GitHubUser = 'willianproni';

  const [comunidades, setComunidades] = React.useState(['Will o maior']);
  // const comunidades = comunidades[0];
  //const alteradorDeComunidades = comunidades[1];

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

      
      </Box>

      <Box>
        <h2 className="subTitle">O que deseja fazer?</h2>

        <form onSubmit={function handleCreateComunity(e){
          e.preventDefault();
          console.log(e);

          setComunidades(['willianproni'])
          console.log(comunidades)

          'Alura 5tars'
        }}>

          <div>
            <input 
              placeholder="Digite seu pensamento" 
              name="Title" 
              aria-label="Digite seu pensamento"
              type="Text"
              />  

          </div>

          <div>
            <input 
              placeholder="Digite seu pensamento" 
              name="Title" 
              aria-label="Digite seu pensamento"
              type="text"
              />  
          </div>

        <button>
          Criar comunidade
        </button>
        <button>
          Publicar
        </button>


        
         
        </form>

      </Box>
    </div>

    <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }} >
      <ProfileRelationsBoxWrapper>
      <ul>
        {comunidades.map((Friends) => {
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
