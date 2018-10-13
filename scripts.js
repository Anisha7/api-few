OscillatorNode.type = 'sine'|'square'|'triangle'|'sawtooth';
let context = new (window.AudioContext || window.webkitAudioContext)();
class Sound {

    constructor(context) {
      this.context = context;
    }
  
    init() {
      this.oscillator = this.context.createOscillator();
      this.gainNode = this.context.createGain();
  
      this.oscillator.connect(this.gainNode);
      this.gainNode.connect(this.context.destination);
      this.oscillator.type = 'sine';
    }
  
    play(value, time) {
      this.init();
  
      this.oscillator.frequency.value = value;
      this.gainNode.gain.setValueAtTime(1, this.context.currentTime);
              
      this.oscillator.start(time);
      this.stop();
  
    }
  
    stop() {
      this.gainNode.gain.exponentialRampToValueAtTime(0.001, this.context.currentTime + 1);
      this.oscillator.stop(this.context.currentTime + 1);
    }
  
  }


  function playSound(i) {
    let sound = new Sound(context);
    let id = 'freq' + i;
    value = document.getElementById(id).value;
    sound.play(value);
    sound.stop();
  }

  function addNew() {
    let forms = document.getElementsByClassName('box');
    let len = forms.length + 1;
    var container = document.getElementById('c');
    let id = 'freq' + len.toString();
    let s = `<div class = "box">
                <form>
                    <label for="freq2">Frequency: </label>
                    <input type="text" id=${id} name=${id} placeholder="Enter value 100 or more"/>
                </form>
                <h2 id = "note2" onclick="playSound(${len.toString()})" > Play Sound</h2>
            </div>`;
    container.innerHTML += s;
  }

  function deleteOne() {
    let forms = document.getElementsByClassName('box');
    let len = forms.length;
    forms[len-1].remove();
  }


