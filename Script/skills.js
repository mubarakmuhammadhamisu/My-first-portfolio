const lebel1 = document.getElementById("label1");
const lebel2 = document.getElementById("label2");
const lebel3 = document.getElementById("label3");
const lebel4 = document.getElementById("label4");
const lebel5 = document.getElementById("label5");
const lebel6 = document.getElementById("label6");

function dynamic (idname,stop){
    var count = 0;
let interval = setInterval(() => {
    idname.innerText = count + '%';
  count++;
    if (count >= stop){
        clearInterval(interval);
    }
        
    },20);
}

dynamic(label1,95);
dynamic(label2,86);
dynamic(label3,68);
dynamic(label4,91);
dynamic(label5,79);
dynamic(label6,96);

// Add this to your existing JS
const skillLevels = {
  1: "Expert",
  2: "Advanced",
  3: "Intermediate", 
  4: "Expert",
  5: "Advanced",
  6: "Expert"
};

document.querySelectorAll('.s').forEach((card, index) => {
  const levelElement = document.createElement('div');
  levelElement.className = 'skill-level';
  levelElement.textContent = skillLevels[index+1];
  card.querySelector('.circle.small').appendChild(levelElement);
});
