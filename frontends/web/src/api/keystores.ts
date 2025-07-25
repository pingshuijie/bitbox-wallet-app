/**
 * Copyright 2023-2024 Shift Crypto AG
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { subscribeEndpoint, TUnsubscribe } from './subscribe';
import { apiGet, apiPost } from '@/utils/request';

export type { TUnsubscribe };

type TKeystore = { type: 'hardware' | 'software' };
export type TKeystores = TKeystore[];

export const subscribeKeystores = (
  cb: (keystores: TKeystores) => void
) => {
  return subscribeEndpoint('keystores', cb);
};

export const getKeystores = (): Promise<TKeystores> => {
  return apiGet('keystores');
};

export const registerTest = (pin: string): Promise<null> => {
  return apiPost('test/register', { pin });
};

export const deregisterTest = (): Promise<null> => {
  return apiPost('test/deregister');
};

export const connectKeystore = (rootFingerprint: string): Promise<{ success: boolean; }> => {
  return apiPost('connect-keystore', { rootFingerprint });
};
