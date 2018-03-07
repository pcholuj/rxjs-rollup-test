import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import uglify from 'rollup-plugin-uglify';
import gzip from "rollup-plugin-gzip";

export default [{
	entry: 'main.js',
	dest: 'bundle.min.js',
	plugins: [
		resolve({
			jsnext: true,
			main: true
		}),
		commonjs(),
		uglify(),
		gzip(),
	],
}, {
	entry: 'main.js',
	dest: 'bundle.min.js',
	plugins: [
		resolve({
			jsnext: true,
			main: true
		}),
		commonjs(),
		uglify(),
		gzip(),
	],
}, {
	entry: 'main.js',
	dest: 'bundle.js',
	plugins: [
		resolve({
			jsnext: true,
			main: true
		}),
		commonjs(),
	],
}, {
	entry: 'main.js',
	dest: 'bundle.js.gz',
	plugins: [
		resolve({
			jsnext: true,
			main: true
		}),
		commonjs(),
		gzip(),
	],
}];