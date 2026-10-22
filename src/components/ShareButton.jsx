import { useState } from 'react';
import { Share2, MessageCircle, Link2, X } from 'lucide-react';

export const ShareButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const url = window.location.href;
  const text = "Olha que site incrível sobre saúde das mamas que eu encontrei:";

  const handleCopyLink = () => {
    navigator.clipboard.writeText(`${text} ${url}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const openWhatsApp = () => {
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text + " " + url)}`, '_blank');
  };

  return (
    <div className="fixed bottom-28 left-6 z-40 flex flex-col-reverse items-center gap-3">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 bg-white text-vinho border-2 border-vinho rounded-full flex items-center justify-center shadow-lg hover:bg-vinho hover:text-white transition-all animate-fade-in-up"
        aria-label="Compartilhar página"
      >
        {isOpen ? <X className="w-5 h-5" /> : <Share2 className="w-5 h-5" />}
      </button>

      {isOpen && (
        <div className="flex flex-col gap-3 animate-fade-in-up">
          <button
            onClick={openWhatsApp}
            className="w-10 h-10 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform"
            aria-label="Compartilhar no WhatsApp"
            title="WhatsApp"
          >
            <MessageCircle className="w-5 h-5" />
          </button>
          
          <button
            onClick={handleCopyLink}
            className="w-10 h-10 bg-cinza text-white rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform relative"
            aria-label="Copiar link"
            title="Copiar Link"
          >
            <Link2 className="w-5 h-5" />
            {copied && (
              <span className="absolute left-12 bg-cinza text-white text-[10px] px-2 py-1 rounded-md whitespace-nowrap">
                Copiado!
              </span>
            )}
          </button>
        </div>
      )}
    </div>
  );
};
