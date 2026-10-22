import { ShieldCheck, ExternalLink } from 'lucide-react';

export const Fontes = () => {
  return (
    <div className="bg-nevoa/50 border-t border-borda py-8 mt-auto w-full">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex items-center gap-2 mb-4">
          <ShieldCheck className="w-6 h-6 text-vinho" />
          <h2 className="text-xl font-bold text-vinho">Fontes e Referências Médicas</h2>
        </div>
        
        <p className="text-sm text-cinza mb-4">
          O <strong>EntreLaços</strong> tem compromisso com a verdade. Todas as informações educativas apresentadas neste portal foram baseadas em cartilhas, protocolos e dados oficiais das seguintes instituições de referência:
        </p>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
          <li>
            <a href="https://www.gov.br/inca/pt-br" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-vinho font-medium hover:text-rosa transition-colors">
              <ExternalLink className="w-4 h-4" />
              INCA - Instituto Nacional de Câncer
            </a>
          </li>
          <li>
            <a href="https://sbmastologia.com.br/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-vinho font-medium hover:text-rosa transition-colors">
              <ExternalLink className="w-4 h-4" />
              SBM - Sociedade Brasileira de Mastologia
            </a>
          </li>
          <li>
            <a href="https://www.gov.br/saude/pt-br" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-vinho font-medium hover:text-rosa transition-colors">
              <ExternalLink className="w-4 h-4" />
              Ministério da Saúde
            </a>
          </li>
          <li>
            <a href="https://femama.org.br/site/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-vinho font-medium hover:text-rosa transition-colors">
              <ExternalLink className="w-4 h-4" />
              FEMAMA - Apoio à Saúde da Mama
            </a>
          </li>
        </ul>

        <div className="bg-white p-4 rounded-xl border border-borda shadow-sm">
          <p className="text-xs text-cinza/80 leading-relaxed">
            <strong className="text-vinho">Aviso legal e ético:</strong> O conteúdo deste site é estritamente educativo e informativo, desenvolvido para conscientização. <strong>Ele não substitui, em nenhuma hipótese, o diagnóstico, aconselhamento ou tratamento médico profissional.</strong> Em caso de sintomas, dúvidas ou alterações nas mamas, procure imediatamente um mastologista, ginecologista ou a Unidade Básica de Saúde (UBS) mais próxima.
          </p>
        </div>
      </div>
    </div>
  );
};
