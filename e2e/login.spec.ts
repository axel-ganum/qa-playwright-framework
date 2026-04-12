import { test, expect } from '@playwright/test';
import { LoginPage } from '../page/LodingPage';
import { users } from '../data/users';
import { generateFakeUser } from '../utils/helpers';

test('login exitoso', async ({ page }) => {
const loginPage =  new LoginPage(page);
  
await loginPage.goto()
await loginPage.login(users.valid.username, users.valid.password);
await loginPage.assertLoginSuccess();
});

test('login fallido', async ({ page }) => {
  const loginPage =  new LoginPage(page);
  
  await loginPage.goto()
  await loginPage.login(users.invalid.username, users.invalid.password);
  await loginPage.assertLoginError();
});

test('login con usuario bloqueado', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login('locked_out_user', 'secret_sauce');
  await loginPage.assertLoginError();
});

test('login con usuario inexistente', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const fakeUser = generateFakeUser();

  await loginPage.goto();
  await loginPage.login(fakeUser.username, fakeUser.password);
  await loginPage.assertLoginError();
});