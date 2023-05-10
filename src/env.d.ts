/**
 * @author        h7ml <h7ml@qq.com>
 * @date          2023-05-10 13:05:52
 * @lastModified  2023-05-10 13:05:58
 * Copyright © www.h7ml.cn All rights reserved
 */
/*
 * @Author: h7ml <h7ml@qq.com>
 * @Date: 2023-05-10 13:05:52
 * @LastEditors: h7ml <h7ml@qq.com>
 * @LastEditTime: 2023-05-10 13:05:53
 * @FilePath: \vue3-amis-sdk\src\env.d.ts
 * @Description: 
 * 
 * Copyright (c) 2022 by h7ml<h7ml@qq.com>, All Rights Reserved. 
 */
/// <reference types="vite/client" />

declare module "*.vue" {
  import type { DefineComponent } from "vue";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>;
  export default component;
}