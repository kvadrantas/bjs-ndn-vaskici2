const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function skaiciausIvedimas(msg) {
  return new Promise((resolve, reject) => {
    rl.question(msg, (data) => {
      resolve(parseInt(data));
    });
  });
}

async function tekstoIvedimas(msg) {
  return new Promise((resolve, reject) => {
    rl.question(msg, (data) => {
      resolve(data);
    });
  });
}

async function main() {
  var i = 0;
  var partijuSkaicius = 0;
  var kompiuterio1Pergales = 0;
  var kompiuterio2Pergales = 0;
  var lygiosios = 0;
  var akmuo = 0;
  var popierius = 0;
  var zirkles = 0;

  console.log(
    "--------------------- ZAIDIMO PRADZIA --------------------------"
  );

  var partijuSkaicius = await skaiciausIvedimas(
    "Zaidzia kompiuteris vs kompiuteris. Ivesk partiju skaiciu:"
  );

  while (i < partijuSkaicius) {
    var kompiuterioPasirinkimas1 = Math.trunc(Math.random() * 3 + 1);
    if (kompiuterioPasirinkimas1 === 1) {
      kompiuterioPasirinkimas1 = "A";
    } else if (kompiuterioPasirinkimas1 === 2) {
      kompiuterioPasirinkimas1 = "P";
    } else {
      kompiuterioPasirinkimas1 = "Z";
    }

    var kompiuterioPasirinkimas2 = Math.trunc(Math.random() * 3 + 1);
    if (kompiuterioPasirinkimas2 === 1) {
      kompiuterioPasirinkimas2 = "A";
    } else if (kompiuterioPasirinkimas2 === 2) {
      kompiuterioPasirinkimas2 = "P";
    } else {
      kompiuterioPasirinkimas2 = "Z";
    }

    console.log("Kompiuterio 1 pasirinkimas: ", kompiuterioPasirinkimas1);
    if (kompiuterioPasirinkimas1 != "X") {
      console.log("Kompiuterio 2 pasirinkimas: ", kompiuterioPasirinkimas2);
    }

    if (kompiuterioPasirinkimas1 === "A" && kompiuterioPasirinkimas2 === "Z") {
      console.log("Laimejo 1-as kompiuteris");
      kompiuterio1Pergales += 1;
      akmuo += 1;
      zirkles += 1;
    } else if (
      kompiuterioPasirinkimas2 === "A" &&
      kompiuterioPasirinkimas1 === "Z"
    ) {
      console.log("Laimejo 2-as kompiuteris");
      kompiuterio2Pergales += 1;
      akmuo += 1;
      zirkles += 1;
    } else if (
      kompiuterioPasirinkimas1 === "P" &&
      kompiuterioPasirinkimas2 === "A"
    ) {
      console.log("Laimejo 1-as kompiuteris");
      kompiuterio1Pergales += 1;
      popierius += 1;
      akmuo += 1;
    } else if (
      kompiuterioPasirinkimas2 === "P" &&
      kompiuterioPasirinkimas1 === "A"
    ) {
      console.log("Laimejo 2-as kompiuteris");
      kompiuterio2Pergales += 1;
      popierius += 1;
      akmuo += 1;
    } else if (
      kompiuterioPasirinkimas1 === "Z" &&
      kompiuterioPasirinkimas2 === "P"
    ) {
      console.log("Laimejo 1-as kompiuteris");
      kompiuterio1Pergales += 1;
      zirkles += 1;
      popierius += 1;
    } else if (
      kompiuterioPasirinkimas2 === "Z" &&
      kompiuterioPasirinkimas1 === "P"
    ) {
      console.log("Laimejo 2-as kompiuteris");
      kompiuterio2Pergales += 1;
      zirkles += 1;
      popierius += 1;
    } else if (kompiuterioPasirinkimas1 === kompiuterioPasirinkimas2) {
      console.log("Lygiosios!");
      lygiosios += 1;
      if (kompiuterioPasirinkimas1 === "A") {
        akmuo += 2;
      } else if (kompiuterioPasirinkimas1 === "P") {
        popierius += 2;
      } else if (kompiuterioPasirinkimas1 === "Z") {
        zirkles += 2;
      }
    } else if (kompiuterioPasirinkimas1 === "X") {
      console.log("Zaidimo pabaiga!");
    } else {
      console.log("Tokio pasirinkimo nera, prasom ivesti teisinga pasirinkima");
    }
    console.log("\n");
    i += 1;
  }
  console.log("1-as kompiuteris laimejo: ", kompiuterio1Pergales);
  console.log("2-as kompiuteris laimejo: ", kompiuterio2Pergales);
  console.log("Lygiosios: ", lygiosios);
  console.log("Akmuo pasirinktas: ", akmuo);
  console.log("Popierius pasirinktas: ", popierius);
  console.log("Zirkles pasirinktos: ", zirkles);
  if (kompiuterio1Pergales > kompiuterio2Pergales) {
    console.log("Finalinis laimetojas: 1-as kompiuteris");
  } else if (kompiuterio2Pergales > kompiuterio1Pergales) {
    console.log("Finalinis laimetojas: 2-as kompiuteris");
  } else {
    console.log("Lygioios");
  }
  console.log(
    "--------------------- ZAIDIMO PABAIGA --------------------------\n"
  );
  rl.close();
}
main();
