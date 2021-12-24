import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-keys',
  templateUrl: './keys.component.html',
  styleUrls: ['./keys.component.css']
})
export class KeysComponent implements OnInit {
  isShownD:boolean=true;
  isShownP:boolean=false;
  item:any="";
   bankOne :any= [
    {
      keyCode: 81,
      keyTrigger: 'Q',
      id: 'Heater-1',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
    },
    {
      keyCode: 87,
      keyTrigger: 'W',
      id: 'Heater-2',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
    },
    {
      keyCode: 69,
      keyTrigger: 'E',
      id: 'Heater-3',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
    },
    {
      keyCode: 65,
      keyTrigger: 'A',
      id: 'Heater-4',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
    },
    {
      keyCode: 83,
      keyTrigger: 'S',
      id: 'Clap',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
    },
    {
      keyCode: 68,
      keyTrigger: 'D',
      id: 'Open-HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
    },
    {
      keyCode: 90,
      keyTrigger: 'Z',
      id: "Kick-n'-Hat",
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
    },
    {
      keyCode: 88,
      keyTrigger: 'X',
      id: 'Kick',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
    },
    {
      keyCode: 67,
      keyTrigger: 'C',
      id: 'Closed-HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
    }
  ];

   bankTwo :any= [
    {
      keyCode: 81,
      keyTrigger: 'Q',
      id: 'Chord-1',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
    },
    {
      keyCode: 87,
      keyTrigger: 'W',
      id: 'Chord-2',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
    },
    {
      keyCode: 69,
      keyTrigger: 'E',
      id: 'Chord-3',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'
    },
    {
      keyCode: 65,
      keyTrigger: 'A',
      id: 'Shaker',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
    },
    {
      keyCode: 83,
      keyTrigger: 'S',
      id: 'Open-HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'
    },
    {
      keyCode: 68,
      keyTrigger: 'D',
      id: 'Closed-HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
    },
    {
      keyCode: 90,
      keyTrigger: 'Z',
      id: 'Punchy-Kick',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
    },
    {
      keyCode: 88,
      keyTrigger: 'X',
      id: 'Side-Stick',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'
    },
    {
      keyCode: 67,
      keyTrigger: 'C',
      id: 'Snare',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }
  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    this.item = event.key;
    //console.log("working",this.item)
    if(event.key=='q' && this.isShownD==true){
      let audio = new Audio();

      audio.src = 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3';
      console.log("This is", audio.src)
    //  audio.load();
    const promise = audio.play();
  if (promise !== undefined) { // On older browsers play() does not return anything, so the value would be undefined.

    promise.then(() => {
      // Audio is playing.
    })
    .catch(error => {
      console.log(error);
    });
    }
  }
  else if(event.key=='w' && this.isShownD==true){
    let audio = new Audio();

    audio.src = 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
    console.log("This is", audio.src)
  //  audio.load();
  const promise = audio.play();
if (promise !== undefined) { // On older browsers play() does not return anything, so the value would be undefined.

  promise.then(() => {
    // Audio is playing.
  })
  .catch(error => {
    console.log(error);
  });
  }
}
else if(event.key=='e' && this.isShownD==true){
  let audio = new Audio();

  audio.src = 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3';
  console.log("This is", audio.src)
//  audio.load();
const promise = audio.play();
if (promise !== undefined) { // On older browsers play() does not return anything, so the value would be undefined.

promise.then(() => {
  // Audio is playing.
})
.catch(error => {
  console.log(error);
});
}
}
else if(event.key=='a'  && this.isShownD==true){
  let audio = new Audio();

  audio.src = 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3';
  console.log("This is", audio.src)
//  audio.load();
const promise = audio.play();
if (promise !== undefined) { // On older browsers play() does not return anything, so the value would be undefined.

promise.then(() => {
  // Audio is playing.
})
.catch(error => {
  console.log(error);
});
}
}
else if(event.key=='s'  && this.isShownD==true){
  let audio = new Audio();

  audio.src = 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3';
  console.log("This is", audio.src)
//  audio.load();
const promise = audio.play();
if (promise !== undefined) { // On older browsers play() does not return anything, so the value would be undefined.

promise.then(() => {
  // Audio is playing.
})
.catch(error => {
  console.log(error);
});
}
}
else if(event.key=='d' && this.isShownD==true){
  let audio = new Audio();

  audio.src = 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3';
  console.log("This is", audio.src)
//  audio.load();
const promise = audio.play();
if (promise !== undefined) { // On older browsers play() does not return anything, so the value would be undefined.

promise.then(() => {
  // Audio is playing.
})
.catch(error => {
  console.log(error);
});
}
}
else if(event.key=='z' && this.isShownD==true){
  let audio = new Audio();

  audio.src = 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3';
  console.log("This is", audio.src)
//  audio.load();
const promise = audio.play();
if (promise !== undefined) { // On older browsers play() does not return anything, so the value would be undefined.

promise.then(() => {
  // Audio is playing.
})
.catch(error => {
  console.log(error);
});
}
}
else if(event.key=='x' && this.isShownD==true){
  let audio = new Audio();

  audio.src = 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3';
  console.log("This is", audio.src)
//  audio.load();
const promise = audio.play();
if (promise !== undefined) { // On older browsers play() does not return anything, so the value would be undefined.

promise.then(() => {
  // Audio is playing.
})
.catch(error => {
  console.log(error);
});
}
}
else if(event.key=='c' && this.isShownD==true){
  let audio = new Audio();

  audio.src = 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3';
  console.log("This is", audio.src)
//  audio.load();
const promise = audio.play();
if (promise !== undefined) { // On older browsers play() does not return anything, so the value would be undefined.

promise.then(() => {
  // Audio is playing.
})
.catch(error => {
  console.log(error);
});
}
}
else if(event.key=='q' && this.isShownD==false){
  let audio = new Audio();

  audio.src = 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3';
  console.log("This is", audio.src)
//  audio.load();
const promise = audio.play();
if (promise !== undefined) { // On older browsers play() does not return anything, so the value would be undefined.

promise.then(() => {
  // Audio is playing.
})
.catch(error => {
  console.log(error);
});
}
}
else if(event.key=='w' && this.isShownD==false){
  let audio = new Audio();

  audio.src = 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
  console.log("This is", audio.src)
//  audio.load();
const promise = audio.play();
if (promise !== undefined) { // On older browsers play() does not return anything, so the value would be undefined.

promise.then(() => {
  // Audio is playing.
})
.catch(error => {
  console.log(error);
});
}
}
else if(event.key=='e' && this.isShownD==false){
  let audio = new Audio();

  audio.src = 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3';
  console.log("This is", audio.src)
//  audio.load();
const promise = audio.play();
if (promise !== undefined) { // On older browsers play() does not return anything, so the value would be undefined.

promise.then(() => {
  // Audio is playing.
})
.catch(error => {
  console.log(error);
});
}
}
else if(event.key=='a'  && this.isShownD==false){
  let audio = new Audio();

  audio.src = 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3';
  console.log("This is", audio.src)
//  audio.load();
const promise = audio.play();
if (promise !== undefined) { // On older browsers play() does not return anything, so the value would be undefined.

promise.then(() => {
  // Audio is playing.
})
.catch(error => {
  console.log(error);
});
}
}
else if(event.key=='s'  && this.isShownD==false){
  let audio = new Audio();

  audio.src = 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3';
  console.log("This is", audio.src)
//  audio.load();
const promise = audio.play();
if (promise !== undefined) { // On older browsers play() does not return anything, so the value would be undefined.

promise.then(() => {
  // Audio is playing.
})
.catch(error => {
  console.log(error);
});
}
}
else if(event.key=='d' && this.isShownD==false){
  let audio = new Audio();

  audio.src = 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3';
  console.log("This is", audio.src)
//  audio.load();
const promise = audio.play();
if (promise !== undefined) { // On older browsers play() does not return anything, so the value would be undefined.

promise.then(() => {
  // Audio is playing.
})
.catch(error => {
  console.log(error);
});
}
}
else if(event.key=='z' && this.isShownD==false){
  let audio = new Audio();

  audio.src = 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3';
  console.log("This is", audio.src)
//  audio.load();
const promise = audio.play();
if (promise !== undefined) { // On older browsers play() does not return anything, so the value would be undefined.

promise.then(() => {
  // Audio is playing.
})
.catch(error => {
  console.log(error);
});
}
}
else if(event.key=='x' && this.isShownD==false){
  let audio = new Audio();

  audio.src = 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3';
  console.log("This is", audio.src)
//  audio.load();
const promise = audio.play();
if (promise !== undefined) { // On older browsers play() does not return anything, so the value would be undefined.

promise.then(() => {
  // Audio is playing.
})
.catch(error => {
  console.log(error);
});
}
}
else if(event.key=='c' && this.isShownD==false){
  let audio = new Audio();

  audio.src = 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3';
  console.log("This is", audio.src)
//  audio.load();
const promise = audio.play();
if (promise !== undefined) { // On older browsers play() does not return anything, so the value would be undefined.

promise.then(() => {
  // Audio is playing.
})
.catch(error => {
  console.log(error);
});
}
}
}
  toggle(){
    if(this.isShownD==true){
    this.isShownD=false;
    this.isShownP=true;
    }
    else{
      this.isShownD=true;
      this.isShownP=false;
    }
  }
  playAudio(e:any){
    console.log(e)
     let audio = new Audio();
      audio.src = e;
      console.log("This is", audio.src)
    //  audio.load();
    const promise = audio.play();
if (promise !== undefined) { // On older browsers play() does not return anything, so the value would be undefined.

    promise.then(() => {
      // Audio is playing.
    })
    .catch(error => {
      console.log(error);
    });
     //this.playAudio(e);
    // console.log(audio.src)
  }
}
// keyupfunc(e:any){
//   console.log("working")
// if(e=='x' || e=='X'){
//   console.log('X');
// }
// }
}
