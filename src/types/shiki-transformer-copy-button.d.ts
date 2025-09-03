declare module "shiki-transformer-copy-button" {
    export interface CopyButtonOptions {
        toggle?: number
    }

    export interface NodeLike {
        children: any[]
    }

    export interface TransformerContext {
        source: string
    }

    export interface ShikiTransformer {
        name: string
        pre(this: TransformerContext, node: NodeLike): void
    }

    export function addCopyButton(options?: CopyButtonOptions): ShikiTransformer
}
