/**
 * Copyright 2018-2019, Optimizely
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { OptimizelySDKWrapper } from '@optimizely/js-web-sdk'
// @ts-ignore
import { createContext } from 'react-broadcast'

const { Consumer, Provider } = createContext({
  optimizely: null,
  timeout: 0,
})

export const OptimizelyContextConsumer = Consumer
export const OptimizelyContextProvider = Provider
