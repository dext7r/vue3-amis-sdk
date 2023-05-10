/**
 * @author        h7ml <h7ml@qq.com>
 * @date          2023-05-10 13:06:57
 * @lastModified  2023-05-10 13:11:41
 * Copyright © www.h7ml.cn All rights reserved
 */
/*
 * @Author: h7ml <h7ml@qq.com>
 * @Date: 2023-05-10 13:06:57
 * @LastEditors: h7ml <h7ml@qq.com>
 * @LastEditTime: 2023-05-10 13:11:41
 * @FilePath: \vue3-amis-sdk\src\main.ts
 * @Description: 
 * 
 * Copyright (c) 2022 by h7ml<h7ml@qq.com>, All Rights Reserved. 
 */

import { createApp, onBeforeUnmount } from "vue";
import {
  ComponentClass,
  createElement,
  Fragment,
  FunctionComponent,
  useState,
} from "react";
import { createRoot, Root } from "react-dom/client";
import { defineComponent, h, ref, watch } from "vue";
import React, { useState } from 'react';
import { Editor } from 'amis-editor';
import { render as renderAmis } from 'amis';
import { SchemaObject } from 'amis/lib/Schema'
import 'amis/lib/themes/default.css';
import 'amis/lib/helper.css';
import 'amis/sdk/iconfont.css';
import 'amis-editor-core/lib/style.css';
import 'amis-ui/lib/themes/cxd.css'
function react2vue(
  reactComponent: FunctionComponent<any> | ComponentClass<any>,
  props: string[] = []
) {
  return defineComponent({
    props,
    setup(props) {
      const el = ref<HTMLDivElement>();
      let root: Root | null = null;

      watch([props, el], ([props, el]) => {
        !root && (root = createRoot(el as HTMLDivElement));
        const reactElement = createElement(reactComponent, props);
        root.render(reactElement);
      });

      onBeforeUnmount(() => el.value && root?.unmount());

      return { el };
    },
    render() {
      // @ts-ignore
      return h("div", {
        ref: (el: HTMLDivElement) => (this.el = el),
      });
    },
  });
}

function Printer({ text }: { text: string }) {
  return createElement("p", null, `React component: ${text}`);
}

function Counter() {
  const [count, setCount] = useState(0);

  return createElement(
    Fragment,
    null,
    createElement(
      "button",
      {
        onClick: () => setCount((count) => count + 1),
      },
      "+"
    ),
    createElement("span", null, count),
    createElement(
      "button",
      {
        onClick: () => setCount((count) => count - 1),
      },
      "-"
    )
  );
}

const ReactPrinter = react2vue(Printer, ["text"]);
const ReactCounter = react2vue(Counter);

const App = defineComponent({
  setup() {
    const text = ref("114514");
    return {
      text,
      onTextChange(e: any) {
        text.value = e.target.value;
      },
    };
  },
  render() {
    const { text, onTextChange } = this;
    return [
      h("input", { oninput: onTextChange, value: text }),
      h("p", null, `Vue Component: ${text}`),
      h(ReactPrinter, { text }),
      h(ReactCounter),
    ];
  },
});

createApp(App).mount("#app");