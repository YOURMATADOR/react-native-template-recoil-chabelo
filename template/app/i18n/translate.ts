import I18n from 'i18n-js';

import { TxKeyPath } from './i18n';

export const translate = (
  scope: TxKeyPath,
  params?: I18n.TranslateOptions,
): string | null => (scope ? I18n.t(scope, { ...params }) : null);
