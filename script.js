const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

const update = () => {

const target = +counter.dataset.target;
const count = +counter.innerText;

const increment = target / 100;

if(count < target){

counter.innerText =
Math.ceil(count + increment);

setTimeout(update,20);

}else{

counter.innerText = target + "+";

}

};

update();

});

const form =
document.getElementById("waitlistForm");

const success =
document.getElementById("successMsg");

form.addEventListener("submit",(e)=>{

e.preventDefault();

success.innerText =
"🎉 You have joined the ZEVIAN waitlist.";

form.reset();

});