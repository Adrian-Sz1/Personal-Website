// @ts-check
import { test, expect } from '@playwright/test';


test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test.describe('Navbar functionality', () => {
  test('should allow to navigate pages using links', async ({ page }) => {
    const navbar = page.getByTestId('navbar');
    await expect(navbar).toBeVisible();

    const navbarLogo = navbar.getByTestId('logo-link');
    const homeLink = navbar.getByTestId('home-link');
    const aboutLink = navbar.getByTestId('about-link');
    const experienceLink = navbar.getByTestId('experience-link');
    const projectsLink = navbar.getByTestId('projects-link');
    const downloadCvLink = navbar.getByTestId('download-cv-link');

    await expect(navbarLogo).toBeVisible();
    await expect(homeLink).toBeVisible();
    await expect(aboutLink).toBeVisible();
    await expect(experienceLink).toBeVisible();
    await expect(projectsLink).toBeVisible();
    await expect(downloadCvLink).toBeVisible();

    await aboutLink.click();
    await page.waitForURL('/about');
    await expect(page).toHaveURL('/about');

    await experienceLink.click();
    await page.waitForURL('/experience');
    await expect(page).toHaveURL('/experience');

    await projectsLink.click();
    await page.waitForURL('/projects');
    await expect(page).toHaveURL('/projects');

    await homeLink.click();
    await page.waitForURL('/');
    await expect(page).toHaveURL('/');
  });

  test('should allow to navigate home when pressing navbar logo', async ({ page }) => {
    const logoLink = page.getByTestId('logo-link');
    await expect(logoLink).toBeVisible();

    await logoLink.click();

    await page.waitForURL('/');
    await expect(page).toHaveURL('/');

    await expect(page.getByTestId('navbar')).toBeVisible();
  });

  test('should allow to download CV', async ({ page }) => {
    const downloadButton = page.getByTestId('download-cv-link');
    await expect(downloadButton).toBeVisible();

    const downloadPromise = page.waitForEvent('download');

    await downloadButton.click();

    const download = await downloadPromise;

    expect(download).toBeDefined();
    expect(download.suggestedFilename().endsWith('.pdf')).toBe(true);
  });

});
