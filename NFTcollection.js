// Creating a variable to hold NFTs.
const nftcoll = [];

// This function will take values as parameters.
function mintnft(name, pttype, ptsize, ptcolour) {
  const nftob = {  yourname: name,  type: pttype,  size: ptsize, colour: ptcolour 
  };
  
  nftcoll.push(nftob);  
  console.log("Minted: " + name);
}

// Function to list all NFTs
function nftlist() {
  for (let i = 0; i < nftcoll.length; i++) {
    console.log("\nSerial No:\t" + (i + 1));
    console.log("Name: \t" + nftcoll[i].yourname);  
    console.log("Type: \t" + nftcoll[i].type);      
    console.log("Size: \t" + nftcoll[i].size);      
    console.log("Colour:\t"+ nftcoll[i].colour);  
  }
}
//function to add nft
function addnft() {
  const name = prompt("Enter the name of the NFT:");
  const pttype = prompt("Enter the type of the NFT:");
  const ptsize = prompt("Enter the size of the NFT:");
  const ptcolour = prompt("Enter the colour of the NFT:");

  mintnft(name, pttype, ptsize, ptcolour);
}

// Function to get the total number of NFTs
function gettotalsupply() {
  console.log("Total number of NFTs: " + nftcoll.length);
}


mintnft("Luffy", "rubber", "infinite", "red");
mintnft("Zoro", "cotton", "medium", "green");
mintnft("Sanji", "silk", "medium", "orange");
mintnft("Nami", "denim", "small", "blue");
mintnft("Brook", "null", "unknown", "white");
mintnft("Robin", "silk", "silk", "ocean");
mintnft("Shank", "water", "large", "deepblue");

nftlist();
gettotalsupply();

addnft();

nftlist();
gettotalsupply();
