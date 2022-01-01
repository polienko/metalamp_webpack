import './styles/index.scss';

const userStack = {
	language:'Javascript',
	framework:'Angular'
}

const user = {
	name: 'Dmitriy',
	age: '31',
	...userStack
}

console.log(user)