export function goTo(){
    window.open('https://grupoisafety.formasegead.com.br/', '_blank', 'noopener,noreferrer');
  }

  export function goToWpp(){
    window.open('https://wa.me/556181894455?text=Ol%C3%A1%21+Quero+saber+mais+sobre+os+treinamentos+do+Grupo+iSafety%2C+pode+me+ajudar%3F', '_blank', 'noopener,noreferrer');
  }

  export function goToWppCourse(course: string){
    window.open(`https://wa.me/556181894455?text=${encodeURIComponent(`Queria saber mais sobre o curso ${course}`)}`, '_blank', 'noopener,noreferrer');
  }


  export function goToEmail(){
    window.open('mailto:comercial@grupoisafety.com.br');
  }

  export function goToInsta(){
    window.open('https://www.instagram.com/grupo.isafety/');
  }
