export interface paths {
    "/notes": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Notes by orderId
         * @description Retrieves notes related to a specific `orderId`.
         */
        get: operations["GetNotesbyorderId"];
        put?: never;
        /**
         * Create Note
         * @description This endpoint creates a new note in VTEX DO. Be aware of the following limitations:
         *
         *
        - The maximum number of notes for an order is 30.
         *
         *
        - The maximum number of characters in a note's description is 2000.
         */
        post: operations["NewNote"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/notes/{noteId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Retrieve Note
         * @description Retrieves a given note in VTEX DO, filtering by `noteId`.
         */
        get: operations["GetNote"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tasks": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List tasks
         * @description This endpoint allows you to filter tasks. You can choose between the following filtering options:
         *
         *     - **Assignees:** using `assignee.email` and `status`. Example: `https://{{accountName}}.{{environment}}.com.br/api/do/tasks?assignee.email={{person@email.com}}&status={{open}}`.
         *
         *     - **Targets:** using `targetId` and `status`. Example: `https://{{accountName}}.{{environment}}.com.br/api/do/tasks?target.id={{name}}&status={{open}}`.
         *
         *     - **Paged tasks:** using `page`, `perPage` and `status`. Example: `https://{{accountName}}.{{environment}}.com.br/api/do/tasks?page={{1}}&perPage={{10}}&status=;{{-Closed}}`.
         *
         *     - **Context:** using `context`, `page`, `perPage` and `status`. Example: `https://{{accountName}}.{{environment}}.com.br/api/do/tasks?context={{context}}&page={{1}}&perPage={{10}}&status={{-Closed}}`.
         */
        get: operations["Listtasksbyassignee"];
        put?: never;
        /**
         * Create Task
         * @description Creates a new task in VTEX DO.
         */
        post: operations["NewTask"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tasks/{taskId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Retrieve Task
         * @description Retrieves a given task, filtering by `taskId`.
         */
        get: operations["GetTask"];
        /**
         * Update Task
         * @description Updates a given task's status, for example, filtering by `taskId`.
         */
        put: operations["EditTask"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tasks/{taskId}/comments": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Add Comment on a Task
         * @description Adds a comment to a given task, filtering by `taskId`.
         */
        post: operations["AddComment"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        NewNoteRequest: {
            /** @description Target. */
            target: {
                id?: string;
                type?: string;
                url?: string;
            };
            domain: string;
            description: string;
        };
        /**
         * Target
         * @example {
         *       "id": "v964735bdev-01",
         *       "type": "order",
         *       "url": "https://basedevmkp.vtexcommercebeta.com.br/admin/checkout/#/orders/v964741bdev-01"
         *     }
         */
        Target: {
            id: string;
            type: string;
            url: string;
        };
        /**
         * NewTaskRequest
         * @example {
         *       "target": [
         *         {
         *           "id": "633730670642-01",
         *           "type": "order",
         *           "url": "https://recorrenciaqa.vtexcommercebeta.com.br/admin/checkout/orders/633730670642-01"
         *         }
         *       ],
         *       "domain": "oms",
         *       "context": "Marketplace",
         *       "name": "pricing",
         *       "priority": "Critical",
         *       "surrogateKey": "505224-0",
         *       "description": "Ajudar na doc API para lancar no postman",
         *       "dueDate": "2016-03-01",
         *       "assignee": {
         *         "id": null,
         *         "name": null,
         *         "email": "frederico.santos@vtex.com.br"
         *       },
         *       "followers": [
         *         {
         *           "id": null,
         *           "name": null,
         *           "email": "alan.dantas@vtex.com.br"
         *         }
         *       ],
         *       "parentTaskId": null
         *     }
         */
        NewTaskRequest: {
            target: components["schemas"]["Target"][];
            domain: string;
            context: string;
            name: string;
            priority: string;
            surrogateKey: string;
            description: string;
            dueDate: string;
            assignee: components["schemas"]["Assignee"];
            followers: components["schemas"]["Follower"][];
            parentTaskId: string | null;
        };
        /**
         * Assignee
         * @example {
         *       "id": null,
         *       "name": null,
         *       "email": "frederico.santos@vtex.com.br"
         *     }
         */
        Assignee: {
            id: string | null;
            name: string | null;
            email: string;
        };
        /**
         * Follower
         * @example {
         *       "id": null,
         *       "name": null,
         *       "email": "alan.dantas@vtex.com.br"
         *     }
         */
        Follower: {
            id: string | null;
            name: string | null;
            email: string;
        };
        /**
         * AddCommentRequest
         * @example {
         *       "text": "escreva seu comentário"
         *     }
         */
        AddCommentRequest: {
            text: string;
        };
        /**
         * EditTaskRequest
         * @example {
         *       "status": "InProgress"
         *     }
         */
        EditTaskRequest: {
            status: string;
        };
    };
    responses: never;
    parameters: {
        /** @description This parameter is relevant only for PII-compliant accounts. When sending requests to this endpoint, PII-compliant accounts can use this parameter to declare the reason for requesting unmasked data. Otherwise, this endpoint will return masked PII data. */
        reason: string;
    };
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export interface operations {
    GetNotesbyorderId: {
        parameters: {
            query: {
                /** @description ID of the order. */
                "target.id": string;
                /** @description Number of notes per page. Maximum: 30. */
                perPage?: number;
                /** @description Number of the page to be retrieved. */
                page?: number;
                /** @description This parameter is relevant only for PII-compliant accounts. When sending requests to this endpoint, PII-compliant accounts can use this parameter to declare the reason for requesting unmasked data. Otherwise, this endpoint will return masked PII data. */
                reason?: components["parameters"]["reason"];
            };
            header: {
                /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
                Accept: string;
                /** @description Type of the content being sent. */
                "Content-Type": string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
        };
    };
    NewNote: {
        parameters: {
            query?: never;
            header: {
                /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
                Accept: string;
                /** @description Type of the content being sent. */
                "Content-Type": string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @description Target. */
                    target: {
                        /**
                         * @description Target ID.
                         * @example v964735bdev-01
                         */
                        id?: string;
                        /**
                         * @description Target type.
                         * @example order
                         */
                        type?: string;
                        /**
                         * @description Target URL.
                         * @example https://basedevmkp.vtexcommercebeta.com.br/admin/checkout/#/orders/v964741bdev-01
                         */
                        url?: string;
                    };
                    /**
                     * @description Note domain.
                     * @example oms
                     */
                    domain: string;
                    /**
                     * @description Note description. Maximum number of characters: 2000.
                     * @example Order ID in the marketplace is 786-09.
                     */
                    description: string;
                };
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
        };
    };
    GetNote: {
        parameters: {
            query?: {
                /** @description This parameter is relevant only for PII-compliant accounts. When sending requests to this endpoint, PII-compliant accounts can use this parameter to declare the reason for requesting unmasked data. Otherwise, this endpoint will return masked PII data. */
                reason?: components["parameters"]["reason"];
            };
            header: {
                /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
                Accept: string;
                /** @description Type of the content being sent. */
                "Content-Type": string;
            };
            path: {
                /** @description Note's ID. */
                noteId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
        };
    };
    Listtasksbyassignee: {
        parameters: {
            query?: {
                /** @description If you wish to list tasks by assignee, insert the desired assignee's email and status. */
                "assignee.email"?: string;
                /** @description If you wish to list tasks by target, insert the desired `targetId` and `status`. */
                "target.id"?: string;
                /** @description If you wish to list tasks by context, insert the desired context, `page`, `perPage` and `status`. */
                context?: string;
                /** @description If you wish to list tasks by context, also insert the desired `page`. */
                page?: string;
                /** @description If you wish to list tasks by context, also insert the desired `perPage` value. */
                perPage?: string;
                /** @description If you wish to list tasks by context, also insert the desired `status`. */
                status?: string;
            };
            header: {
                /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
                Accept: string;
                /** @description Type of the content being sent. */
                "Content-Type": string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
        };
    };
    NewTask: {
        parameters: {
            query?: never;
            header: {
                /** @description Type of the content being sent. */
                "Content-Type": string;
                /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
                Accept: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                /** @example {
                 *       "target": [
                 *         {
                 *           "id": "633730670642-01",
                 *           "type": "order",
                 *           "url": "https://recorrenciaqa.vtexcommercebeta.com.br/admin/checkout/orders/633730670642-01"
                 *         }
                 *       ],
                 *       "domain": "oms",
                 *       "context": "Marketplace",
                 *       "name": "pricing",
                 *       "priority": "Critical",
                 *       "surrogateKey": "505224-0",
                 *       "description": "Ajudar na doc API para lancar no postman",
                 *       "dueDate": "2016-03-01",
                 *       "assignee": {
                 *         "id": null,
                 *         "name": null,
                 *         "email": "frederico.santos@vtex.com.br"
                 *       },
                 *       "followers": [
                 *         {
                 *           "id": null,
                 *           "name": null,
                 *           "email": "alan.dantas@vtex.com.br"
                 *         }
                 *       ],
                 *       "parentTaskId": null
                 *     } */
                "application/json": components["schemas"]["NewTaskRequest"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
        };
    };
    GetTask: {
        parameters: {
            query?: never;
            header: {
                /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
                Accept: string;
                /** @description Type of the content being sent. */
                "Content-Type": string;
            };
            path: {
                /** @description Task ID. */
                taskId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
        };
    };
    EditTask: {
        parameters: {
            query?: never;
            header: {
                /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
                Accept: string;
                /** @description Type of the content being sent. */
                "Content-Type": string;
            };
            path: {
                /** @description Task ID. */
                taskId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                /** @example {
                 *       "status": "InProgress"
                 *     } */
                "application/json": components["schemas"]["EditTaskRequest"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
        };
    };
    AddComment: {
        parameters: {
            query?: never;
            header: {
                /** @description HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand. */
                Accept: string;
                /** @description Type of the content being sent. */
                "Content-Type": string;
            };
            path: {
                /** @description Task ID. */
                taskId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                /** @example {
                 *       "text": "write your comment here"
                 *     } */
                "application/json": components["schemas"]["AddCommentRequest"];
            };
        };
        responses: {
            /** @description OK */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
        };
    };
}
