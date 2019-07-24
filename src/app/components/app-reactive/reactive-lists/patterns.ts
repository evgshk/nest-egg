import { EMAIL_PASSWORD_MESSAGE, EMAIL_PATTERN_MESSAGE } from './messages';

export const EMAIL_PATTERN = '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,6}$';
export const PASSWORD_PATTERN = '^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z \\-]{8,}$';

export const PATTERNS_LIST: Array<{ PATTERN: string, MESSAGE: string }> = [
  {PATTERN: EMAIL_PATTERN, MESSAGE: EMAIL_PATTERN_MESSAGE},
  {PATTERN: PASSWORD_PATTERN, MESSAGE: EMAIL_PASSWORD_MESSAGE},
];
