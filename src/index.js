import './styles/index.scss';
import $ from "jquery";

const userStack = {
	language:'Javascript',
	framework:'Angular'
}

const user = {
	name: 'Dmitriy',
	age: '31',
	...userStack
}

$('.block').html('jQuery is working');

console.log(user)