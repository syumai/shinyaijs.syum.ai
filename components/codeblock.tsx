"use client";
import type { JSX } from "react";
import type { BundledLanguage } from "shiki/bundle/web";
import { toJsxRuntime } from "hast-util-to-jsx-runtime";
import { useLayoutEffect, useState, Fragment } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { codeToHast } from "shiki/bundle/web";
import { Card } from "./ui/card";

async function highlight(code: string, lang: BundledLanguage) {
  const out = await codeToHast(code, {
    lang,
    theme: "github-light",
  });

  return toJsxRuntime(out, {
    Fragment,
    jsx,
    jsxs,
  }) as JSX.Element;
}

export function CodeBlock({
  children,
  lang,
}: {
  children?: string;
  lang: BundledLanguage;
}) {
  const [nodes, setNodes] = useState<JSX.Element | undefined>(undefined);

  useLayoutEffect(() => {
    if (!children) {
      return;
    }
    (async () => {
      const node = await highlight(children, lang);
      setNodes(node);
    })();
  }, [children, lang]);

  return <Card className="p-2.5 text-sm">{nodes ?? <p>Loading...</p>}</Card>;
}
