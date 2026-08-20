# Testomat.io GitHub integration — demo project for screenshots

Playwright demo suite used to produce the screenshots for the GitHub integration page.

7 tests in 5 spec files. `4-file-uploads.spec.js` fails on purpose — it is the source of
the failed test needed for the PR comment and the GitHub issue screenshots.

## One-time setup

### 1. Push to GitHub

```
cd C:\Users\kasia\Downloads\testomat-demo-tests
git init
git add .
git commit -m "Demo Playwright suite for Testomat.io"
git branch -M main
git remote add origin https://github.com/<your-account>/testomat-demo-tests.git
git push -u origin main
```

### 2. Add the API key as a repository secret

GitHub repo → Settings → Secrets and variables → Actions → New repository secret

- Name: `TESTOMATIO`
- Value: the project API key from Testomat.io

### 3. Connect the CI profile in Testomat.io

Settings → Continuous Integration → Connect to CI

- GitHub Username
- API token — GitHub Personal Access Token with `workflow` scope
- Organization/Repository — `<your-account>/testomat-demo-tests`
- Workflow — `testomatio.yml`
- ref — `main`

Enable the `run` and `testomatio` inputs on the **Input Variables** tab, then save.

### 4. Connect GitHub Issues

Settings → Issues Management → GitHub

- Profile name
- GitHub Username
- API token with `workflow` scope and write permissions
- Organization/Repository

## Screenshot checklist

| # | Block | Where |
|---|-------|-------|
| 1 | Import from your GitHub repo | Import wizard + terminal output |
| 2 | Run GitHub Actions from your TMS | Runs → Run Automated Tests in CI |
| 3 | Test reports inside pull requests | PR comment on github.com |
| 4 | GitHub issue in one click | Run report → Defects → created issue |
| 5 | Code-to-TMS linking | Tests → test → CODE tab |
| 6 | Manual tests as Markdown | VS Code Source Control with .md files |

## Commands

Import tests (run inside `e2e-tests`):

```
set TESTOMATIO=<api-key>&& npx check-tests@latest Playwright "**/*{.,_}{test,spec,cy}.js"
```

Same, writing IDs back into the code:

```
set TESTOMATIO=<api-key>&& npx check-tests@latest Playwright "**/*{.,_}{test,spec,cy}.js" --update-ids
```

Pull manual tests as Markdown:

```
set TESTOMATIO=<api-key>&& npx check-tests@latest pull
```

Run tests locally:

```
npm install
npx playwright install chromium
set TESTOMATIO=<api-key>&& npx playwright test
```
