import bcrypt from 'bcrypt';
import dotenv from 'dotenv';

dotenv.config();

const username = process.argv[2];
const password = process.argv[3];
const name = process.argv[4];

if (!username || !password || !name) {
  console.log('Usage: node create-user.js <username> <password> <name>');
  process.exit(1);
}

const hash = await bcrypt.hash(password, 10);
console.log('SQL to create user:');
console.log(`INSERT INTO users (username, password, name) VALUES ('${username}', '${hash}', '${name}');`);
