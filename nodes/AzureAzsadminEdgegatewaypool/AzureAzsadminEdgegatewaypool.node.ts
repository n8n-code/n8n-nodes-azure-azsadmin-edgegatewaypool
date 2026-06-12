import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';


export class AzureAzsadminEdgegatewaypool implements INodeType {
        description: INodeTypeDescription = {
                displayName: 'Azure Azsadmin Edgegatewaypool',
                name: 'N8nDevAzureAzsadminEdgegatewaypool',
                icon: { light: 'file:./azure-azsadmin-edgegatewaypool.png', dark: 'file:./azure-azsadmin-edgegatewaypool.dark.png' },
                group: ['input'],
                version: 1,
                subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
                description: 'Edge gateway pool operation endpoints and objects.',
                defaults: { name: 'Azure Azsadmin Edgegatewaypool' },
                usableAsTool: true,
                inputs: [NodeConnectionTypes.Main],
                outputs: [NodeConnectionTypes.Main],
                credentials: [
                        {
                                name: 'N8nDevAzureAzsadminEdgegatewaypoolApi',
                                required: true,
                        },
                ],
                requestDefaults: {
                        baseURL: '={{\$credentials.url}}',
                        headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                        },
                },
                properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [],
			"default": ""
		},
		
                ],
        };
}
