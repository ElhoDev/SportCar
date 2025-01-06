
const carsData = [
	{
	  brand: "BMW",
	  image: "https://images.hdqwalls.com/download/bmw-f82-dark-side-car-digital-art-4k-3d-1336x768.jpg",
	  subtitle: "BMW 5 Series, Sedan, 2019",
	},
	{
	  brand: "Porshe",
	  image: "https://99px.ru/sstorage/53/2021/06/mid_329745_825256.jpg",
	  subtitle: "Porshe, SUV, 2020",
	},
	{
	  brand: "Supra",
	  image: "https://99px.ru/sstorage/53/2022/08/tmb_344182_716015.jpg",
	  subtitle: "Supra C-Class, Coupe, 2021",
	},
	{
		brand: "Mustang",
		image: "https://gamerwall.pro/uploads/posts/2022-03/1648751594_2-gamerwall-pro-p-ford-mustang-tyomnii-fon-krasivie-2.jpg",
		subtitle: "Mustang B-Class, Coupe, 2021",
	  },
	  {
		brand: "Lamborghini",
		image: "https://sportishka.com/uploads/posts/2021-12/1639170822_34-sportishka-com-p-mashina-na-chernom-fone-sport-krasivo-foto-42.jpg",
		subtitle: "Lamborghini B-Class, Coupe, 2021",
	  },

	  {
		brand: "Carvet",
		image: "https://avatars.mds.yandex.net/get-verba/216201/2a000001609d583ad809d9fb8cf2a7c2c677/cattouchret",
		subtitle: "Carvet C-Class, Coupe, 2022",
	  },
	  {
	  brand: "Mercedes",
	  image: "https://cdn.autocentre.ua/images/stories/january14/m/amgvision1.jpg",
	  subtitle: "Mercedes D-Class, Coupe, 2022",
	},
	{
		brand: "Bugatti",
		image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjjFKtMaI4rIEHrsAE6CFh4HBEFJdp9NaCJ7unZwH_ye05NX_ZoLomhtePs39lbuLQYK4&usqp=CAU",
		subtitle: "Bugatti A-Class, Coupe, 2019",
	  },
  ];
  
  
  const getCars = () => {
	return new Promise((resolve, reject) => {
	  setTimeout(() => {
		resolve(carsData);
	  }, 1000);
	});
  };
  
 
  const updateCarsData = () => {
	const boxElement = document.getElementById("box");
  boxElement.innerHTML = 
	getCars()
	  .then((cars) => {
		for (const car of cars) {
		  const divElement = document.createElement("div");
		  divElement.classList.add("section-box");
  
		  const imgElement = document.createElement("img");
		  imgElement.classList.add("image");
		  imgElement.src = car.image;
  
		  const h1Element = document.createElement("h1");
		  h1Element.classList.add("title");
		  h1Element.textContent = car.brand;
  
		  const pElement = document.createElement("p");
		  pElement.classList.add("subtitle");
		  pElement.textContent = car.subtitle;

		  divElement.appendChild(imgElement);
		  divElement.appendChild(h1Element);
		  divElement.appendChild(pElement);
  
		  boxElement.appendChild(divElement);
		}
	  })
	  .catch((error) => {
		console.error("Error fetching car data:", error);
	  });
  };
  
  
  updateCarsData();
  