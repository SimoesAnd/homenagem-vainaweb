import { useState, useEffect } from 'react';

const agradecimentos = [
  "Obrigado, Vini!",
  "Obrigado, Jef!",
  "Obrigada, Fernanda!",
  "Obrigada, Karynne!"
];

function App() {
  const [indexAtual, setIndexAtual] = useState(0);
  const [textoVisivel, setTextoVisivel] = useState(true);
  const [cartaAberta, setCartaAberta] = useState(false);

  const mostrarBotao = indexAtual >= agradecimentos.length;

  useEffect(() => {
    if (indexAtual < agradecimentos.length) {
      const fadeOutTimer = setTimeout(() => {
        setTextoVisivel(false);
      }, 2000);

      const proximoTextoTimer = setTimeout(() => {
        setIndexAtual((prev) => prev + 1);
        setTextoVisivel(true); 
      }, 3000);

      return () => {
        clearTimeout(fadeOutTimer);
        clearTimeout(proximoTextoTimer);
      };
    }
  }, [indexAtual]);

  return (
    <div className="relative bg-slate-950 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] text-slate-100 min-h-screen flex flex-col items-center justify-center font-sans p-4 md:p-6 overflow-hidden">
      
      {/* Marca d'água de Código */}
      <div 
        aria-hidden="true" 
        className="absolute inset-0 flex items-center justify-center opacity-[0.02] pointer-events-none select-none overflow-hidden font-mono text-[30rem] font-bold text-slate-400"
      >
        {`</>`}
      </div>

      {/* Glows sutis */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <main className="max-w-3xl w-full text-center flex flex-col items-center justify-center min-h-[400px] relative z-10">
        
        {/* Área da animação dos textos sequenciais */}
        {!mostrarBotao && !cartaAberta && (
          <section aria-live="polite" className="h-40 flex items-center justify-center">
            {indexAtual < agradecimentos.length && (
              <h1 
                className={`pb-4 leading-tight text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-emerald-400 transition-all duration-1000 ease-in-out transform ${
                  textoVisivel 
                    ? 'opacity-100 translate-y-0 scale-100 drop-shadow-2xl' 
                    : 'opacity-0 -translate-y-8 scale-95'
                }`}
              >
                {agradecimentos[indexAtual]}
              </h1>
            )}
          </section>
        )}

        {/* Botão final */}
        {mostrarBotao && !cartaAberta && (
          <section 
            className="flex flex-col items-center transition-all duration-1000 ease-in-out animate-[fadeIn_1s_ease-out]"
            aria-label="Ação final"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-200 mb-10 tracking-tight drop-shadow-lg">
              Fim de Ciclo: VaiNaWeb
            </h2>
            <button 
              onClick={() => setCartaAberta(true)}
              className="group relative px-8 py-4 bg-slate-900 border border-slate-700 text-white font-bold rounded-full overflow-hidden shadow-[0_0_40px_rgba(52,211,153,0.15)] transition-all hover:scale-105 hover:border-emerald-500/50 active:scale-95 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-slate-950"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-500 to-emerald-500 opacity-80 group-hover:opacity-100 transition-opacity"></div>
              <span className="relative flex items-center gap-2">
                Ler mensagem
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </span>
            </button>
          </section>
        )}

        {/* Carta final estilizada como Terminal */}
        {cartaAberta && (
          <article 
            className="animate-[fadeIn_1s_ease-out] w-full bg-[#0d1117] rounded-xl shadow-2xl border border-slate-700/60 overflow-hidden text-left"
          >
            {/* Header do Terminal (Estilo macOS) */}
            <header className="bg-slate-800/80 px-4 py-3 flex items-center border-b border-slate-700/60">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/90 shadow-[0_0_5px_rgba(239,68,68,0.4)]"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/90 shadow-[0_0_5px_rgba(234,179,8,0.4)]"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/90 shadow-[0_0_5px_rgba(34,197,94,0.4)]"></div>
              </div>
              <div className="flex-1 text-center font-mono text-xs text-slate-400">
                andrewsincer0: ~/vainaweb/agradecimentos
              </div>
            </header>

            {/* Corpo do Terminal */}
            <div className="p-6 md:p-8 font-mono text-sm md:text-base">
              
              {/* Linha de Comando */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-emerald-400 font-bold">andrewsincer0<span className="text-white">:</span><span className="text-blue-400">~/vainaweb</span><span className="text-white">$</span></span>
                <span className="text-slate-200">carta_professores.txt</span>
              </div>

              {/* Conteúdo do Arquivo */}
              <div className="text-slate-300 space-y-6 leading-relaxed pl-2 border-l-2 border-slate-700/50">
                <h2 className="text-xl md:text-2xl font-bold text-white mb-2">Aos meus professores,</h2>
                
                <p>
                  Quero agradecer por todo o suporte e orientação que vocês nos deram ao longo deste percurso. A paixão de vocês pelo ensino e compromisso com o nosso aprendizado são inspiradores para todos os alunos do curso, gostaria de compartilhar com palavras faladas mas sei que não irei conseguir, então fiz esse site não só por mim mas em nome de toda turma M1 e M2 do VaiNaWeb/Kodie. Vocês foram mais do que professores, foram mentores e guias que nos ajudaram a navegar pelo mundo do desenvolvimento web. Cada aula, cada desafio e cada feedback foram fundamentais para o nosso crescimento como desenvolvedores.
                </p>
                
                <p>
                  E hoje encerramos este ciclo incrível no VaiNaWeb/Kodie. Quero expressar minha profunda gratidão por todo o conhecimento compartilhado, pela paciência nas explicações e por toda a dedicação que vocês tiveram com a nossa turma.
                </p>

                <p>
                  Vocês foram peças fundamentais para o meu crescimento como desenvolvedor. Levarei os ensinamentos de vocês para todos os meus próximos projetos. Muito sucesso para todos nós!
                </p>  

                <footer className="pt-4 text-emerald-400/80">
                  <p>{"// Com gratidão,"}</p>
                  <p className="text-emerald-400 font-bold text-lg mt-1">toda turma VNW/Kodie</p>
                </footer>
              </div>

              {/* Nova Linha de Comando com Cursor Piscando */}
              <div className="flex items-center gap-3 mt-8">
                <span className="text-emerald-400 font-bold">andrewsincer0<span className="text-white">:</span><span className="text-blue-400">~/vainaweb</span><span className="text-white">$</span></span>
                <span className="w-2.5 h-5 bg-slate-300 animate-pulse"></span>
              </div>

            </div>
          </article>
        )}

      </main>
    </div>
  );
}

export default App;