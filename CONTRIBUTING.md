# Contributing Guidelines

Thank you for your interest in contributing to the AI Robotics Visionary portfolio! We welcome contributions from the community. Please follow these guidelines to ensure a smooth contribution process.

## Code of Conduct

This project adheres to a [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code. Please report unacceptable behavior to the project maintainers.

## Getting Started

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/Piyush2005-code/ai-robotics-visionary.git
   cd ai-robotics-visionary
   ```
3. **Install dependencies**:
   ```bash
   npm install
   ```
4. **Create a new branch** for your feature or bugfix:
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/your-bugfix-name
   ```

## Development Workflow

### Running the Development Server
```bash
npm run dev
```
The application will be available at `http://localhost:5173`

### Code Quality Checks
```bash
npm run lint      # Check for linting issues
npm run test      # Run tests
```

## Making Changes

1. **Make your modifications** to the codebase
2. **Follow the existing code style** - we use ESLint for consistency
3. **Test your changes** locally before submitting
4. **Write clear commit messages** following conventional commits:
   - `feat: add new feature`
   - `fix: resolve issue`
   - `docs: update documentation`
   - `style: format code`
   - `refactor: restructure code`
   - `test: add or update tests`

## Submitting Changes

1. **Ensure all tests pass**:
   ```bash
   npm run test
   npm run lint
   ```

2. **Build the project** to ensure no build errors:
   ```bash
   npm run build
   ```

3. **Push your branch** to your fork:
   ```bash
   git push origin your-branch-name
   ```

4. **Create a Pull Request** (PR) on GitHub with:
   - Clear description of changes
   - Reference to related issues (if any)
   - Screenshots for UI changes (if applicable)
   - Explanation of why this change is needed

5. **Respond to feedback** from code reviewers and implement requested changes

## Pull Request Guidelines

- **Title**: Short, descriptive summary of changes
- **Description**: Detailed explanation of:
  - What problem does this solve?
  - How does it solve the problem?
  - Are there any side effects?
  - Screenshots/demos (for UI changes)
- **Linked Issues**: Reference related issues with `#issue-number`
- **Tests**: Include tests for new functionality
- **Documentation**: Update README or docs if needed

### PR Checklist
- [ ] Code follows project style guidelines
- [ ] All tests pass locally
- [ ] Build completes without errors
- [ ] Changes are documented
- [ ] No breaking changes (or clearly documented)
- [ ] Commits are well-organized and descriptive

## Types of Contributions

### Bug Reports
- Clear, descriptive title
- Step-by-step reproduction instructions
- Expected vs actual behavior
- Environment details (OS, browser, Node version)
- Screenshots/error logs if applicable

### Feature Requests
- Clear description of the proposed feature
- Use cases and benefits
- Possible implementation ideas (optional)
- Examples from similar projects (if applicable)

### Documentation
- Typo fixes
- Clarity improvements
- Missing information
- Updated examples

### Code Improvements
- Performance optimizations
- Refactoring for better maintainability
- Error handling improvements
- Test coverage enhancements

## Coding Standards

- **TypeScript**: Use strict type checking
- **React**: Follow React best practices and hooks conventions
- **Components**: Keep components focused and reusable
- **Naming**: Use clear, descriptive names for variables and functions
- **Comments**: Add comments for complex logic
- **Testing**: Write tests for new features and bugfixes

## Project Structure

```
src/
├── components/     # Reusable React components
├── pages/          # Page components
├── hooks/          # Custom React hooks
├── lib/            # Utility functions
└── assets/         # Static assets
```

## Deployment & Releases

- Main deployments happen from the `main` branch
- Development work should branch from `main`
- Release versions follow [Semantic Versioning](https://semver.org/)

## Questions or Need Help?

- Check existing [Issues](https://github.com/Piyush2005-code/ai-robotics-visionary/issues)
- Review [Discussions](https://github.com/Piyush2005-code/ai-robotics-visionary/discussions)
- Open a new issue with your question

## License

By contributing to this project, you agree that your contributions will be licensed under its MIT License.

---

Thank you for contributing to making this project better! 🙏
