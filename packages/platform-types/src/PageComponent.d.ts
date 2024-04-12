import type { ReactNode } from "react"

/**
 * Components witch have path in interface configs, should implement this interface.
 * ```json
 * "admin.component": {
 *   "component": "Component",
 *   "path": "/admin/app/my-app/page/:id"
 * }
 * ```
 * ---
 * 
 * ```tsx
 * import { PageComponent } from '@vtex-miss/platform-types'
 * 
 * const Page: FC<PageComponent<{ id: string }>> = ({ params }) => {
 *  return <div>{params.id}</div>
 * }
 * ```
 */
export type PageComponent<TParams extends Record<string, string> = Record<string, string>> = {
    query: Record<string, unknown>;
    params: TParams;
    page: string;
    children?: ReactNode | undefined
}

