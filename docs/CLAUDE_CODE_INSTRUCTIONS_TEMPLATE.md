# Claude Code Instructions Template

**Version:** 1.2  
**Purpose:** Standardized format for all Claude Code instructions to prevent scope creep, config rot, and undisciplined changes.

---

## Why This Template Exists

**Problem:** Claude Code has a tendency to:
- Make "helpful" changes outside requested scope
- Modify config files unnecessarily
- Refactor working code that wasn't broken
- Add features not specified
- Create cascading changes across the codebase

**Solution:** Every instruction to Claude Code follows this template with explicit boundaries and guardrails.

---

## Standard Instruction Format

Every Claude Code instruction MUST include these 6 sections:

### 1. CONTEXT & SPEC REFERENCE

```
Read [relevant spec file/section] to understand:
- What this task is building
- How it fits into the system
- What dependencies exist
- What the acceptance criteria are
```

**Why:** Claude Code needs to understand the bigger picture before touching code.

**Example:**
```
Read docs/phases/PHASE_1_FOUNDATION_BUILD_SPEC.md section on "Testing Requirements"
to understand what tests need to run and how they integrate.
```

---

### 2. EXACT SCOPE (What TO Touch)

```
Files you ARE ALLOWED to create/modify:
- [exact file path 1]
- [exact file path 2]
- [exact file path 3]

If you need to modify any file not on this list, STOP and ASK first.
```

**Why:** Prevents scope creep. If it's not on the list, don't touch it.

**Example:**
```
Files you ARE ALLOWED to create/modify:
- package.json (add Jest dependencies only)
- jest.config.js (create new)
- package-lock.json (will auto-update)

If you need to modify any file not on this list, STOP and ASK first.
```

---

### 3. EXPLICIT EXCLUSIONS (What NOT To Touch)

```
DO NOT TOUCH:
- [file/directory 1] - reason why
- [file/directory 2] - reason why
- [category of files] - reason why

These are WORKING and must remain unchanged.

EXCEPTION: If verification reveals bugs in excluded files, you ARE ALLOWED to fix those bugs.
- "DO NOT TOUCH" means: don't refactor, don't optimize, don't make "improvements"
- "DO NOT TOUCH" does NOT mean: ignore bugs that tests/verification reveal
- If unsure whether it's a bug or wrong expectation, STOP and ASK
```

**Why:** Prevents collateral damage to working systems while allowing necessary bug fixes.

**Example:**
```
DO NOT TOUCH:
- .github/workflows/ci.yml - CI/CD checks are the independent quality gate (NEVER modify)
- next.config.js - deployment config is stable
- tailwind.config.ts - styling config is working
- tsconfig.json - TypeScript config is correct
- lib/voice.ts - voice system is working
- lib/evaluation.ts - evaluation system is working
- Any test files (tests/*.test.ts) - only fix infrastructure, not tests themselves

These are WORKING and must remain unchanged.

CRITICAL: .github/workflows/ci.yml has NO EXCEPTIONS. Never modify CI/CD checks.
If a check is wrong, STOP and report it. Only humans can modify quality gates.

EXCEPTION for other files: If tests fail because of bugs in these files (not because tests are wrong),
you ARE ALLOWED to fix the bugs. Example: if lib/embeddings.ts has a chunking bug
that a test correctly identifies, fix the bug in lib/embeddings.ts.
```

---

### 4. VERIFICATION REQUIREMENTS

```
Before committing, you MUST verify:
1. [specific test/check 1]
2. [specific test/check 2]
3. [specific test/check 3]

If ANY verification fails, STOP and report what's broken.
Do NOT commit broken code.
```

**Why:** Ensures work is complete and correct before committing.

**Example:**
```
Before committing, you MUST verify:
1. npm install completes without errors
2. npm test runs (even if tests fail, command must execute)
3. All Phase 1 tests in tests/embeddings.test.ts pass
4. All Phase 1 tests in tests/projects.test.ts pass
5. TypeScript compiles with no errors (npm run build)

If ANY verification fails, STOP and report what's broken.
Do NOT commit broken code.
```

---

### 5. ROLLBACK PLAN

```
If something breaks:
1. [how to undo the changes]
2. [how to restore working state]
3. Report what broke and why
```

**Why:** Provides escape hatch if changes cause problems.

**Example:**
```
If something breaks:
1. Run: git reset --hard HEAD~1
2. Run: npm install (restore original dependencies)
3. Report what broke and why before trying again
```

---

### 6. COMMIT REQUIREMENTS

```
Commit message format:
[type]: [short description]

[detailed explanation of what changed and why]

Include in commit message:
- What was modified
- Why it was modified
- What was verified
```

**Why:** Creates clear git history for debugging and auditing.

**Example:**
```
Commit message format:
test: configure Jest testing infrastructure

Added Jest dependencies and configuration to support Phase 1 tests:
- jest, @jest/globals, ts-jest, @types/jest added to package.json
- jest.config.js created with TypeScript support
- Verified all Phase 1 tests pass
- No changes to source code or other config files
```

---

## Complete Instruction Example

Here's what a bulletproof Claude Code instruction looks like:

```
TASK: Configure Jest testing infrastructure for Phase 1 tests

1. CONTEXT & SPEC REFERENCE
Read docs/phases/PHASE_1_FOUNDATION_BUILD_SPEC.md section on "Testing Requirements"
to understand what tests need to run and how they integrate.

2. EXACT SCOPE
Files you ARE ALLOWED to create/modify:
- package.json (add Jest dependencies only)
- jest.config.js (create new)
- package-lock.json (will auto-update)

If you need to modify any file not on this list, STOP and ASK first.

3. EXPLICIT EXCLUSIONS
DO NOT TOUCH:
- next.config.js - deployment config is stable
- tailwind.config.ts - styling config is working  
- tsconfig.json - TypeScript config is correct
- lib/* - all source files are working
- tests/*.test.ts - don't modify test files, only infrastructure
- components/* - UI is working
- contexts/* - state management is working

These are WORKING and must remain unchanged.

4. VERIFICATION REQUIREMENTS
Before committing, you MUST verify:
1. npm install completes without errors
2. npm test runs successfully
3. All tests in tests/embeddings.test.ts pass
4. All tests in tests/projects.test.ts pass
5. TypeScript compiles: npm run build succeeds
6. No new TypeScript errors introduced

If ANY verification fails, STOP and report what's broken.
Do NOT commit broken code.

5. ROLLBACK PLAN
If something breaks:
1. Run: git reset --hard HEAD~1
2. Run: npm install (restore dependencies)
3. Report what broke and why before trying again

6. COMMIT REQUIREMENTS
Commit message format:
test: configure Jest testing infrastructure

Added Jest dependencies and configuration for Phase 1 tests:
- jest@^29.7.0, @jest/globals, ts-jest, @types/jest
- jest.config.js with TypeScript support
- Verified embeddings and projects tests pass
- No source code or config file changes

EXECUTE THIS TASK EXACTLY AS SPECIFIED.
If anything is unclear, ASK before proceeding.
```

---

## Bad Instruction Example (Do NOT Use)

❌ **BAD:**
```
Fix the Jest tests
```

**Why this is bad:**
- No scope boundaries
- No spec reference
- No verification requirements
- Claude Code will wander and touch everything
- No rollback plan
- Vague commit message

---

## Checklist Before Sending Instructions

Before sending ANY instruction to Claude Code, verify:

- [ ] Context/spec section referenced
- [ ] Exact files to modify listed
- [ ] Explicit exclusions listed
- [ ] Verification steps defined
- [ ] Rollback plan included
- [ ] Commit message format specified
- [ ] All 6 sections complete

**If you're missing any section, STOP and complete the instruction first.**

---

## Emergency Stop Commands

If Claude Code starts doing something wrong:

1. **Stop immediately:** Type "STOP" in all caps
2. **Ask what it's doing:** "What files are you modifying right now?"
3. **Revert if needed:** "Undo all changes and return to last commit"
4. **Clarify scope:** Re-send instruction with tighter guardrails

---

## Integration with Working Protocols

This template enforces the principles from `docs/WORKING_PROTOCOLS.md`:

- **Answer First, Then Explain** - Instructions are direct and clear
- **Before Creating Anything** - Always get approval on instruction before Claude Code executes
- **Standards & Quality** - No lowering standards, no shortcuts
- **Challenge Framework** - Trust execution, challenge strategy

---

## Template Updates

This template will evolve as we learn what works:

**When to update:**
- Claude Code repeatedly violates a boundary
- New patterns emerge that need guardrails
- Testing reveals gaps in instructions

**Version history:**
- v1.2 (Nov 22, 2025) - CRITICAL: Added .github/workflows/ci.yml to exclusions with NO EXCEPTIONS - Claude Code can never modify CI/CD checks
- v1.1 (Nov 22, 2025) - Added clarification to Section 3: "DO NOT TOUCH" excludes refactoring but allows bug fixes revealed by tests/verification
- v1.0 (Nov 22, 2025) - Initial template created after Phase 1 Jest issue

---

## Usage in Project

**For every Claude Code task:**

1. Copy this template
2. Fill in the 6 sections for the specific task
3. Get approval from Stafford on the instruction
4. Send complete instruction to Claude Code
5. Monitor execution
6. Verify all checks pass

**Store completed instructions in:** `docs/claude-code-tasks/[task-name].md`

This creates audit trail of what was requested vs what was delivered.

---

**END OF TEMPLATE**

This is a living document. Update as needed to prevent future scope creep and maintain code quality.
