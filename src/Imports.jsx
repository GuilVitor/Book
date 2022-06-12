import React from "react";
import {  Routes, Route} from 'react-router-dom';

// Destaque

import Inflivro from "./Destaque/Cortico/inf-Livro/inf-livro";
import InfImposto from "./Destaque/Imposto/inf-Imposto/inf-imposto";
import Tentativainf from "./Destaque/Tentativa/inf-Tentativa/Inf-Tentativa";
import Classicosinf from "./Destaque/Classicos/inf-Classicos/Inf-Classicos";
import Guerrainf from "./Destaque/Guerra/inf-guerra/Inf-guerra";
import Senhorainf from "./Destaque/Senhora/inf-Senhora/Inf-Senhora";
import Julietainf from "./Destaque/Romeu-julieta/inf-Romeu-julieta/Inf-Romeu";
import TesouroInf from "./Destaque/Ilha-tesouro/inf-Tesouro/Inf-Tesouro";
import BichoInf from "./Destaque/Bichos/inf-Bichos/Inf-Bichos";
import CasmurroInf from "./Destaque/Dom-casmurro/inf-Casmurro/Inf-Casmurro";


// acao
import MundoInf from "./Acao/Bichos/inf-Mundo/Inf-Mundo";
import Viageminf from "./Acao/Viagem/inf-Viagem/Inf-Viagem";
import Influa from "./Acao/Lua/inf-Lua/inf-lua";
import Submarinoinf from "./Acao/Submarinas/inf-Submarinas/Inf-Submarinas";
import Diligienciainf from "./Acao/Diligencia/inf-Diligencia/Inf-Diligencia";
import InfMulheres from "./Acao/Mulhesres/inf-Mulheres/inf-Mulheres";
import Polvorainf from "./Acao/Polvora/inf-Polvora/Inf-Polvora";
import MorteInf from "./Acao/Morte/inf-Morte/Inf-morte";
import Temploinf from "./Acao/Templo/inf-Templo/Inf-Templo";
import CompanheiroInf from "./Acao/Companheira/inf-Companheira/Inf-Companheira";


// Romance
import InfComoEra from "./Romance/ComoEra/inf-ComoEra/inf-ComoEra";
import GarotaInf from "./Romance/Garota/inf-Garota/Inf-Garota";
import Fogoinf from "./Romance/Fogo/inf-Fogo/Inf-Fogo";
import Golfinf from "./Romance/Golf/inf-Golf/Inf-Golf";
import Ameiinf from "./Romance/Amei/inf-Amei/Inf-Amei";
import InfEternamente from "./Romance/Eternamente/inf-Eternamente/inf-Eternamente";
import CartaInf from "./Romance/Morte/inf-Carta/Inf-Carta";
import Desejoinf from "./Romance/Desejo/inf-Desejo/Inf-Desejo";
import Terrasinf from "./Romance/Terra-altas/inf-Teraa/Inf-Terra";
import RecordaInf from "./Romance/Recorda/inf-Recorda/Inf-Recorda";


// Infantis 

import Solinf from "./Infantis/Sol/inf-Sol/Inf-Sol";
import Maluquinhoinf from "./Infantis/Maluquinho/inf-Maluquinho/Inf-Maluquinho";
import InfPrincipe from "./Infantis/Principe/inf-Principe/inf-Principe";
import Motoinf from "./Infantis/Moto/inf-Moto/Inf-Moto";
import RelogioInf from "./Infantis/Relogio/inf-Relogio/Inf-Relogio";
import InfPerguntadeira from "./Infantis/Perguntadeira/inf-Perguntadeira/inf-Perguntadeira";
import HistoriasInf from "./Infantis/100/inf-Historias/inf-Historias";
import VoaJoaoinf from "./Infantis/Voa-joao/inf-voa/Inf-voa";
import Elefanteinf from "./Infantis/Elefante/inf-Elefante/Inf-Elefante";
import PorquinhosInf from "./Infantis/3Porquinhos/inf-Porquinos/Inf-Porquinhos";

//Cursos

import Javainf from "./Cursos/Javaa/inf-Javaa/Inf-Javaa";
import Criptografiainf from "./Cursos/Criptografia/inf-Criptografia/Inf-Criptografia";
import InfMicroeconomia from "./Cursos/Microeconomia/inf-Microeconomia/inf-Microeconomia";
import Inglesinf from "./Cursos/Ingles/inf-Ingles/Inf-Ingles";
import MarketingInf from "./Cursos/Marketing/inf-Marketing/Inf-Marketing";
import InfInglesIniciantes from "./Cursos/Ingles-Iniciantes/inf-Ingles-Iniciantes/inf-Ingles-Iniciantes";
import AgropecuariaInf from "./Cursos/Agropecuaria/inf-Agropecuaria/inf-Agropecuaria";
import Eletricistainf from "./Cursos/Eletricista/inf-Eletricista/Inf-Eletricista";
import Desenhoinf from "./Cursos/Desenho/inf-Desenho/Inf-Desenho";
import CabelereiroInf from "./Cursos/Cabeleireiro/inf-Cabeleireiro/Inf-Cabeleireiro";


// Historia


import Antigasinf from "./Historia/Antigas/inf-Antigas/Inf-Antigas";
import AbolicaoInf from "./Historia/Abolicao/inf-Abolicao/inf-Abolicao";
import InfEscravidao from "./Historia/Escravidao/inf-Escravidao/inf-Escravidao";
import Cienciainf from "./Historia/Ciencia/inf-Ciencia/Inf-Ciencia";
import BrasilInf from "./Historia/Brasil/inf-Brasil/Inf-Brasil";
import InfTrono from "./Historia/Trono/inf-Trono/inf-Trono";
import Intelectualinf from "./Historia/Intelectual/inf-Intelectual/Inf-Intelectual";
import Proclamacaoinf from "./Historia/Proclamacao/inf-Proclamacao/Inf-Proclamacao";
import HistoriaBrasilinf from "./Historia/HistoriaBrasil/inf-HistoriaBrasil/Inf-HistoriaBrasil";
import CivilizacaoInf from "./Historia/Civilacacao/inf-Civilacacao/Inf-Civilacacao";

//Literatura
import Iracemainf from "./Literatura/Iracema/inf-Iracema/Inf-Iracema";
import ObrasInf from "./Literatura/Obras/inf-Obras/inf-Obras";
import InfFluminense from "./Literatura/Fluminense/inf-Fluminense/inf-Fluminense";
import Reliquiasinf from "./Literatura/Reliquias/inf-Reliquias/Inf-Reliquias";
import BanqueteInf from "./Literatura/Banquete/inf-Banquete/Inf-Banquete";
import InfFedom from "./Literatura/Fedom/inf-Fedom/inf-Fedom";
import Isaurainf from "./Literatura/Isaura/inf-Isaura/Inf-Isaura";
import Graciliânicosinf from "./Literatura/Graciliânicos/inf-Graciliânicos/Inf-Graciliânicos";
import ObrasCompletainf from "./Literatura/ObrasCompleta/inf-ObrasCompleta/Inf-ObrasCompleta";
import MonteiroInf from "./Literatura/Monteiro/inf-Monteiro/Inf-Monteiro";


//Medicina
import EmbriologiaHumanainf from "./Medicina/EmbriologiaHumana/inf-EmbriologiaHumana/Inf-EmbriologiaHumana";
import EmbriologiaInf from "./Medicina/Embriologia/inf-Embriologia/inf-Embriologia";
import InfCinesiologia from "./Medicina/Cinesiologia/inf-Cinesiologia/inf-Cinesiologia";
import GestacaodeAltoRiscoinf from "./Medicina/GestaçãodeAltoRisco/inf-GestaçãodeAltoRisco/Inf-GestaçãodeAltoRisco";
import SaudedaMulherInf from "./Medicina/SaudedaMulher/inf-SaudedaMulher/Inf-SaudedaMulher";
import InfBularioVeterinario from "./Medicina/BularioVeterinario/inf-BularioVeterinario/inf-BularioVeterinario";
import SaudeDoencasBrasilinf from "./Medicina/SaudeDoençasBrasil/inf-SaudeDoençasBrasil/Inf-SaudeDoencasBrasil";
import IntroducaoMedicinainf from "./Medicina/IntroducaoMedicina/inf-IntroducaoMedicina/Inf-IntroducaoMedicina";
import ConceitosdeGeneticainf from "./Medicina/ConceitosGenetica/inf-ConceitosdeGenetica/Inf-ConceitosdeGenetica";
import ArtigosCOVID19Inf from "./Medicina/Artigos COVID-19/inf-Artigos COVID-19/Inf-ArtigosCOVID-19";

//Cordel 

import Coronavírusinf from "./Cordel/Coronavírus/inf-Coronavírus/Inf-Coronavírus";
import SusInf from "./Cordel/Sus/inf-Sus/inf-Sus";
import InfNossosCordeis from "./Cordel/NossosCordeis/inf-NossosCordeis/inf-NossosCordeis";
import CoxinhaMacaxeirainf from "./Cordel/CoxinhaMacaxeira/inf-CoxinhaMacaxeira/Inf-CoxinhaMacaxeira";
import ForcaSuaEsperaInf from "./Cordel/ForcaSuaEspera/inf-ForcaSuaEspera/Inf-ForcaSuaEspera";
import InfPistoleiros from "./Cordel/Pistoleiros/inf-Pistoleiros/inf-Pistoleiros";
import ProtecaooTestemunhainf from "./Cordel/ProtecaooTestemunha/inf-ProtecaooTestemunha/Inf-ProtecaooTestemunha";
import HorasdeTerrorinf from "./Cordel/HorasdeTerror/inf-HorasdeTerror/Inf-HorasdeTerror";
import LuaComancheinf from "./Cordel/LuaComanche/inf-LuaComanche/Inf-LuaComanche";
import SalarioTerrivelInf from "./Cordel/SalarioTerrivel/inf-SalarioTerrivel/Inf-SalarioTerrivel";


//Religiao

import MestreEspiritualidadeinf from "./Religiao/MestreEspiritualidade/inf-MestreEspiritualidade/Inf-MestreEspiritualidade";
import QuaresmaInf from "./Religiao/Quaresma/inf-Quaresma/inf-Quaresma";
import InfNovenaNatal from "./Religiao/NovenaNatal/inf-NovenaNatal/inf-NovenaNatal";
import BíbliaCatólicainf from "./Religiao/BíbliaCatólica/inf-BíbliaCatólica/Inf-BíbliaCatólica";
import SemanaSantaInf from "./Religiao/SemanaSanta/inf-SemanaSanta/Inf-SemanaSanta";
import InfSinodoApocalipse from "./Religiao/SinodoApocalipse/inf-SinodoApocalipse/inf-SinodoApocalipse";
import ABoaVontadeinf from "./Religiao/ABoaVontade/inf-ABoaVontade/Inf-ABoaVontade";
import HumildadeCristainf from "./Religiao/HumildadeCrista/inf-HumildadeCrista/Inf-HumildadeCrista";


function Imports() {
    return (
     
  
    <div className="App">
  
     
      
  
      <Routes>
  
      <Route path='/inf' element={<Inflivro />} />
      <Route path='/Imposto' element={<InfImposto />} />
      <Route path='/Tentativa' element={<Tentativainf />} />
      <Route path='/classicos' element={<Classicosinf />} />
      <Route path='/guerra' element={<Guerrainf />} />
      <Route path='/Senhora' element={<Senhorainf />} />
      <Route path='/Romeu-julieta' element={<Julietainf />} />
      <Route path='/tesouro' element={<TesouroInf />} />
      <Route path='/Bichos' element={<BichoInf />} />
      <Route path='/Casmurro' element={<CasmurroInf />} />
  
  
  
      <Route path='/Volta-Mundo' element={<MundoInf />} />
      <Route path='/Aventura' element={<Viageminf />} />
      <Route path='/Lua' element={<Influa />} />
      <Route path='/Submarino' element={<Submarinoinf />} />
      <Route path='/Diligencia' element={<Diligienciainf />} />
      <Route path='/Mulheres' element={<InfMulheres />} />
      <Route path='/Polvora' element={<Polvorainf />} />
      <Route path='/Morte' element={<MorteInf />} />
      <Route path='/Templo' element={<Temploinf />} />
      <Route path='/Companheira' element={<CompanheiroInf />} />

        
      <Route path='/Garota' element={<GarotaInf />} />
      <Route path='/ComoEra' element={<InfComoEra />} />
      <Route path='/Fogo' element={<Fogoinf />} />
      <Route path='/Golf' element={<Golfinf />} />
      <Route path='/Amei' element={<Ameiinf />} />
      <Route path='/Eternamente' element={<InfEternamente />} />
      <Route path='/Carta' element={<CartaInf />} />
      <Route path='/Desejo' element={<Desejoinf />} />
      <Route path='/Terras' element={<Terrasinf />} />
      <Route path='/Recorda' element={<RecordaInf />} />



      <Route path='/Sol' element={<Solinf />} />
      <Route path='/Maluquinho' element={<Maluquinhoinf />} />
      <Route path='/Principe' element={<InfPrincipe />} />
      <Route path='/Moto' element={<Motoinf />} />
      <Route path='/Relogio' element={<RelogioInf />} />
      <Route path='/Perguntadeira' element={<InfPerguntadeira />} />
      <Route path='/Historias' element={<HistoriasInf />} />
      <Route path='/VoaJoao' element={<VoaJoaoinf />} />
      <Route path='/Elefante' element={<Elefanteinf />} />
      <Route path='/Porquinhos' element={<PorquinhosInf />} />


      <Route path='/Java' element={<Javainf />} />
      <Route path='/Criptografia' element={<Criptografiainf />} />
      <Route path='/Microeconomia' element={<InfMicroeconomia />} />
      <Route path='/Ingles' element={<Inglesinf />} />
      <Route path='/Marketing' element={<MarketingInf />} />
      <Route path='/InglesIniciantes' element={<InfInglesIniciantes />} />
      <Route path='/Agropecuaria' element={<AgropecuariaInf />} />
      <Route path='/Eletricista' element={<Eletricistainf />} />
      <Route path='/Desenho' element={<Desenhoinf />} />
      <Route path='/Cabeleireiro' element={<CabelereiroInf />} />


      <Route path='/Antigas' element={<Antigasinf />} />
      <Route path='/Abolicao' element={<AbolicaoInf />} />
      <Route path='/Escravidao' element={<InfEscravidao />} />
      <Route path='/Ciencia' element={<Cienciainf />} />
      <Route path='/Brasil' element={<BrasilInf />} />
      <Route path='/Trono' element={<InfTrono />} />
      <Route path='/Intelectual' element={<Intelectualinf />} />
      <Route path='/Proclamacao' element={<Proclamacaoinf />} />
      <Route path='/HistoriaBrasil' element={<HistoriaBrasilinf />} />
      <Route path='/Civilizacao' element={<CivilizacaoInf />} />



      <Route path='/Iracema' element={<Iracemainf />} />
      <Route path='/Obras' element={<ObrasInf />} />
      <Route path='/Fluminense' element={<InfFluminense />} />
      <Route path='/Reliquias' element={<Reliquiasinf />} />
      <Route path='/Banquete' element={<BanqueteInf />} />
      <Route path='/Fedom' element={<InfFedom />} />
      <Route path='/Isaura' element={<Isaurainf />} />
      <Route path='/Gracilianicos' element={<Graciliânicosinf />} />
      <Route path='/ObrasCompleta' element={<ObrasCompletainf />} />
      <Route path='/Monteiro' element={<MonteiroInf />} />


      <Route path='/EmbriologiaHumana' element={<EmbriologiaHumanainf />} />
      <Route path='/Embriologiaa' element={<EmbriologiaInf />} />
      <Route path='/Cinesiologia' element={<InfCinesiologia />} />
      <Route path='/GestacaodeAltoRisco' element={<GestacaodeAltoRiscoinf />} />
      <Route path='/SaudedaMulher' element={<SaudedaMulherInf />} />
      <Route path='/BularioVeterinario' element={<InfBularioVeterinario />} />
      <Route path='/SaudeDoencasBrasil' element={<SaudeDoencasBrasilinf />} />
      <Route path='/IntroducaoMedicina' element={<IntroducaoMedicinainf />} />
      <Route path='/ConceitosdeGenetica' element={<ConceitosdeGeneticainf />} />
      <Route path='/ArtigosCOVID19' element={<ArtigosCOVID19Inf />} />




      <Route path='/Coronaviruss' element={<Coronavírusinf />} />
      <Route path='/Susa' element={<SusInf />} />
      <Route path='/NossosCordeis' element={<InfNossosCordeis />} />
      <Route path='/CoxinhaMacaxeira' element={<CoxinhaMacaxeirainf />} />
      <Route path='/ForcaSuaEspera' element={<ForcaSuaEsperaInf />} />
      <Route path='/Pistoleiros' element={<InfPistoleiros />} />
      <Route path='/ProtecaooTestemunha' element={<ProtecaooTestemunhainf />} />
      <Route path='/HorasdeTerror' element={<HorasdeTerrorinf/>} />
      <Route path='/LuaComanche' element={<LuaComancheinf/>} />
      <Route path='/SalarioTerrivel' element={<SalarioTerrivelInf/>} />



      <Route path='/MestreEspiritualidade' element={<MestreEspiritualidadeinf/>} />
      <Route path='/Quaresmaa' element={<QuaresmaInf/>} />
      <Route path='/NovenaNatal' element={<InfNovenaNatal/>} />
      <Route path='/BibliaCatolica' element={<BíbliaCatólicainf/>} />
      <Route path='/SemanaSanta' element={<SemanaSantaInf/>} />
      <Route path='/SinodoApocalipse' element={<InfSinodoApocalipse/>} />
      <Route path='/ABoaVontade' element={<ABoaVontadeinf/>} />
      <Route path='/HumildadeCrista' element={<HumildadeCristainf/>} />
    
      


              
  
  
  
      </Routes>
  
  
    </div>
  
  
  
    );
  }
  
  export default Imports;
  