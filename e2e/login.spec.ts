  
import { users } from '../data/users';
import { generateFakeUser } from '../utils/helpers';
import { test} from '../fixtures/testBase';

test('login exitoso', async ({ loginPage }) => {
await loginPage.goto()
await loginPage.login(users.valid.username, users.valid.password);
await loginPage.assertLoginSuccess();
});

test('login fallido', async ({ loginPage }) => {
  await loginPage.goto()
  await loginPage.login(users.invalid.username, users.invalid.password);
  await loginPage.assertLoginError();
});

test('login con usuario bloqueado', async ({ loginPage }) => {
  await loginPage.goto();
  await loginPage.login('locked_out_user', 'secret_sauce');
  await loginPage.assertLoginError();
});

test('login con usuario inexistente', async ({ loginPage }) => {  
  const fakeUser = generateFakeUser();

  await loginPage.goto();
  await loginPage.login(fakeUser.username, fakeUser.password);
  await loginPage.assertLoginError();
});