# JavaScript Labs

## Lab 1: Generate vehicle data

In **ajs-app** run `npm install` to add new dependencies.

Create a file called **generate-vehicles.js** which, when run, will print out ten generated vehicles,
as JavaScript objects.

Generate according to this spec:

- vehicleId: Incremented number or Suggestion: nanoid
- make: ['Ford', 'Chevrolet', 'Dodge', 'Honda', ,...]
- model: Dependent on make
- year: 1990-2025
- vin: Custom String (or FakerJs)
- status: ['new', 'active', 'sold', 'outofservice']
- vehicleType: ['car', 'truck', 'equipment']
  mileage: 0-100000

We can have individual functions like `generateMake()` for example.

Add a parent/top level function like `generateVehicle()` that calls the various
sub-generators and returns a vehicle object

A vehicle looks like this:

```javascript
{
	vehicleld,
	vin,
	make,
	model,
	year,
	status,
	vehicle Type,
	mileage
}
```

Create the code in the ajs-app/src folder.

Run the code with `node src/generate-vehicles.js`.
