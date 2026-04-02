declare module "*.mdx" {
  import type { ComponentType } from "react";

  export const frontmatter: Record<string, unknown>;

  interface MDXProps {
    components?: Record<string, ComponentType<any>>;
  }

  const MDXComponent: ComponentType<MDXProps>;
  export default MDXComponent;
}
