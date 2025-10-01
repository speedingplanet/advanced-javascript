let employeeId = 1;

export class EmployeeV1 {
	firstName = null;
	lastName = null;
	employeeId = -1;
	salary = 50000;
	jobTitle = 'Associate';
	companyName = 'Sprockets and Cogs, Ltd.';

	constructor(firstName, lastName, jobTitle) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.jobTitle = jobTitle;
		this.employeeId = ++employeeId;
	}

	getSalary() {
		return this.salary;
	}

	setSalary(salary) {
		this.salary = salary;
		return true;
	}

	getJobTitle() {
		return this.jobTitle;
	}

	setJobTitle(jobTitle) {
		this.jobTitle = jobTitle;
		return true;
	}

	toString() {
		return `${this.jobTitle} ${this.firstName} ${this.lastName}`;
	}
}

export class EmployeeV2 {
	// Private members
	#firstName = null;
	#lastName = null;
	#salary = 50000;
	#jobTitle = 'Associate';
	#employeeId = -1;

	// Static members
	static companyName = 'Sprockets and Cogs';
	static employeeIdSrc;

	// Static initializer
	static {
		// Imagine fetching and caching the latest incremental employeeId here
		this.employeeIdSrc = 1;
	}

	constructor(firstName, lastName, jobTitle) {
		this.#firstName = firstName;
		this.#lastName = lastName;
		this.#jobTitle = jobTitle;
		this.#employeeId = ++EmployeeV2.employeeIdSrc;
	}

	getFirstName() {
		return this.#firstName;
	}

	getLastName() {
		return this.#lastName;
	}

	getId() {
		return this.#employeeId;
	}

	// get [property] syntax
	// Runs when accessing emp.jobTitle property
	get jobTitle() {
		return this.#jobTitle;
	}

	// set [property] syntax
	// Runs when changing emp.jobTitle property
	// e.g. emp.jobTitle = 'assistant vice president'
	set jobTitle(jobTitle) {
		this.#jobTitle = jobTitle;
	}

	get salary() {
		return this.#salary;
	}

	set salary(salary) {
		if (this.#validateSalary(salary)) {
			this.#salary = salary;
		}
	}

	// Private method
	#validateSalary(salary) {
		return typeof salary === 'number' && salary >= 0 && salary <= 100000;
	}

	toString() {
		return `${this.#jobTitle} ${this.getFirstName()} ${this.getLastName()}`;
	}
}

export class Person {
	// Private members
	#firstName = null;
	#lastName = null;

	constructor(firstName, lastName) {
		this.#firstName = firstName;
		this.#lastName = lastName;
	}

	getFirstName() {
		return this.#firstName;
	}

	getLastName() {
		return this.#lastName;
	}

	toString() {
		return `${this.getFirstName()} ${this.getLastName()}`;
	}
}

// Inheritance
export class EmployeeV3 extends Person {
	// Private members
	#salary = 50000;
	#jobTitle = 'Associate';
	#employeeId = -1;

	// Static members
	static companyName = 'Sprockets and Cogs';
	static employeeIdSrc;

	// Static initializer
	static {
		// Imagine fetching and caching the latest incremental employeeId here
		this.employeeIdSrc = 1;
	}

	constructor(firstName, lastName, jobTitle) {
		// Call the parent constructor
		// Note, cannot access `this` before calling `super()
		super(firstName, lastName);
		this.#jobTitle = jobTitle;
		this.#employeeId = ++EmployeeV2.employeeIdSrc;
	}

	getId() {
		return this.#employeeId;
	}

	get jobTitle() {
		return this.#jobTitle;
	}

	set jobTitle(jobTitle) {
		this.#jobTitle = jobTitle;
	}

	get salary() {
		return this.#salary;
	}

	set salary(salary) {
		if (this.#validateSalary(salary)) {
			this.#salary = salary;
		}
	}

	#validateSalary(salary) {
		return typeof salary === 'number' && salary >= 0 && salary <= 100000;
	}

	// Overrides the parent version, and uses it as well!
	toString() {
		return `${this.#jobTitle} ${super.toString()}`;
	}
}
