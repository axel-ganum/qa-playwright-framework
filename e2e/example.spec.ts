import { test, expect } from '@playwright/test';

test('flujo basico de navegacion', async ({ page }) => {
  // 1. Ir a la página
  await page.goto('https://playwright.dev/');

  // 2. Validar que cargó correctamente
  await expect(page).toHaveTitle(/Playwright/);

  // 3. Click en "Get started"
  await page.getByRole('link', { name: 'Get started' }).click();

  // 4. Validar que estamos en la página correcta
  await expect(page).toHaveURL(/.*docs/);

  // 5. Validar contenido clave
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
