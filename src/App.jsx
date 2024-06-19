import { useState } from "react"
import "./App.css"
import CardTitle from "./components/CardTitle"
import Modal from "./components/modal"



function App() {
  

  const [modalOpen, setModalOpen] = useState(false)
  
  function testFunc(){
    const age = prompt("Quantos anos vc tem?")
    // setName(age)
  }

  function handleModalOpen() {
    setModalOpen(true)
  }

  function handModalClose() {
    setModalOpen(false)
  }

  return (
    <div className="container">
      <div>
        {/* <button>
          Nova transação
        </button> */}
        <button onClick={() => handleModalOpen()}>
          Testando function
        </button>
      </div>
      <div className="top-container">
        <CardTitle 
          title="VAI CORINTHIANS" 
          subtitle="Repositório do meu portfólio pessoal! Este projeto foi desenvolvido utilizando React para mostrar meus trabalhos, conhecimentos e informações de contato de forma interativa e moderna. A interface é responsiva e otimizada para uma excelente experiência de usuário em todos os dispositivos." 
          cima
        />
        <CardTitle 
          title="YEEEES" 
          subtitle="Exibição de projetos com descrições e links
          Lista de conhecimentos
          Redes sociais e outras formas de contato
          Alternância de idiomas (português e inglês)
          Responsividade total
          Muita acessibilidade
          Ainda preciso fazer:" 
          cima
        />
      </div>
      <div className="bottom">
        
        <CardTitle
          subtitle={"Exibição de projetos com descrições e links"}
          title={"Lista de conhecimentos"}
          position={"baixo"}
        />
      </div>
      <Modal />
    </div>
  )
}

export default App
