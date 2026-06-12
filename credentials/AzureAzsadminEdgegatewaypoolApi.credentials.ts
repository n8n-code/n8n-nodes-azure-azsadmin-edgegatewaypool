import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class AzureAzsadminEdgegatewaypoolApi implements ICredentialType {
        name = 'N8nDevAzureAzsadminEdgegatewaypoolApi';

        displayName = 'Azure Azsadmin Edgegatewaypool API';

        icon: Icon = { light: 'file:../nodes/AzureAzsadminEdgegatewaypool/azure-azsadmin-edgegatewaypool.png', dark: 'file:../nodes/AzureAzsadminEdgegatewaypool/azure-azsadmin-edgegatewaypool.dark.png' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: '',
                        required: true,
                        placeholder: 'https://api.example.com',
                        description: 'The base URL of your Azure Azsadmin Edgegatewaypool API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                Authorization: '=Bearer {{$credentials.apiKey}}',
                        },
                },
        };


}
