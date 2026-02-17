import scanner from '../assets/audios/scanner.mp3';

export function loadBeep() {
  const audio = new Audio(scanner);
  audio.load();

  return () => {
    audio.currentTime = 0;
    audio.play().catch(error => {
      console.error('Erro ao tocar o som', error);
    });
  };
}
