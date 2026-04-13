import { test as base, expect, Page } from '@playwright/test';
import { LoginPage } from '../pages/LogingPage';

type MyFixtures = {
  loginPage: LoginPage;
};

export const test = base.extend<MyFixtures>({
  loginPage: async ({ page }: { page: Page }, use: (loginPage: LoginPage) => Promise<void>) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },
});

export { expect };