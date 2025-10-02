// Only needed if you're using the ChanceJS library

import * as ChanceFactory from 'chance';
import { faker } from '@faker-js/faker';

let chance = ChanceFactory.Chance();
let status = ['new', 'active', 'sold', 'outofservice'];

export function generateVehicle() {
	let {
		make,
		model: { modelName, modelType: vehicleType },
	} = generateMakeAndModel();

	let vehicle = {
		vehicleId: chance.guid(),
		vin: faker.vehicle.vin(),
		make,
		model: modelName,
		year: getRandomIntInclusive(1990, new Date().getFullYear()),
		status: status[getRandomIntInclusive(0, status.length - 1)],
		vehicleType,
		mileage: getRandomIntInclusive(0, 100000),
	};

	return vehicle;
}

function generateMakeAndModel() {
	let makesAndModels = {
		Ford: [
			{ modelName: 'Mustang', modelType: 'car' },
			{ modelName: 'F-150', modelType: 'truck' },
			{ modelName: 'Bronco', modelType: 'car' },
		],
		Chevrolet: [
			{ modelName: 'Volt', modelType: 'car' },
			{ modelName: 'Blazer', modelType: 'truck' },
			{ modelName: 'Silverado', modelType: 'truck' },
		],
		Dodge: [
			{ modelName: 'Charger', modelType: 'car' },
			{ modelName: 'Durango', modelType: 'car' },
			{ modelName: 'RAM 1500', modelType: 'truck' },
		],
		Honda: [
			{ modelName: 'Civic', modelType: 'car' },
			{ modelName: 'Accord', modelType: 'car' },
			{ modelName: 'CR-V', modelType: 'car' },
		],
	};

	let makes = Object.keys(makesAndModels);
	let makeIndex = getRandomIntInclusive(0, makes.length - 1);
	let make = makes[makeIndex];
	let modelIndex = getRandomIntInclusive(0, makesAndModels[make].length - 1);
	let model = makesAndModels[make][modelIndex];
	return { make, model };
}

// @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#examples
function getRandomIntInclusive(min, max) {
	const minCeiled = Math.ceil(min);
	const maxFloored = Math.floor(max);
	return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
}

let vehicles = [];
for (let x = 0; x < 10; x++) {
	vehicles.push(generateVehicle());
}

console.log(vehicles);
