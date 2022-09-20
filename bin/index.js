#! /usr/bin/env node
import chalk from "chalk"
import crypto from "crypto"

let length = process.argv[2]*1

if(!length) {
    length = 72
}

if(typeof length !== 'number') {

console.error(chalk.red("Error: length must be a number"))
process.exit(1)
}

if(length < 1) {
    console.error(chalk.red("Error: length must be greater than -1"))
process.exit(1)
} 

const secret = crypto.randomBytes(length).toString('hex')
console.log(secret)

