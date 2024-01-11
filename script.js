class Pet {
    constructor(id) {
      this.id = id;
      this.fedLevel = 100;
      this.fedElement = document.getElementById(`hunger${id}`);
      this.messageElement = document.getElementById(`message${id}`);
      this.displayElement = document.getElementById(`pet${id}`);
      this.decreaseFedLevel();
    }
    
    feed(amount) {
      if ((this.fedLevel + amount) <= 100) {
        this.fedLevel += amount;
      } else {
        this.fedLevel = 100;
      }
      this.fedElement.textContent = this.fedLevel;
    }
    
    decreaseFedLevel() {
      setInterval(() => {
        if (this.fedLevel > 0) {
          this.fedLevel -= 1;
          this.fedElement.textContent = this.fedLevel;
        }
        if (this.fedLevel === 0) {
          this.messageElement.textContent = "Pet ran away";
        }
      }, 1000);
    }
  }
  
  function selectPet(petId) {
    let petElement = document.getElementById(`pet${petId}`);
    petElement.classList.toggle("selected");
  }
  
  const pet1 = new Pet(1);
  const pet2 = new Pet(2);
  
  function feedPet(petId, amount) {
    if (petId === 1) {
      pet1.feed(amount);
    } else if (petId === 2) {
      pet2.feed(amount);
    }
  }