import { IDragLegPane } from '../models';
import { DragLegDefaultTools } from './drag-leg-default-tools';

export const JrDragLegPaneCodingGeneral: IDragLegPane = {
  name: 'General',
  items: [
    ...DragLegDefaultTools,
    {
      label: 'HTML',
      icon: 'html',
    },
    {
      label: 'JavaScript',
      icon: 'javascript',
    },
    {
      label: 'API',
      icon: 'api',
    },
    {
      label: 'Webhook',
      icon: 'webhook',
    },
    {
      label: 'PHP',
      icon: 'php',
    },
    {
      label: 'Integration Instructions',
      icon: 'integration_instructions',
    },
    {
      label: 'Code Blocks',
      icon: 'code_blocks',
    },
    {
      label: 'Code Off',
      icon: 'code_off',
    },
    {
      label: 'Developer Board',
      icon: 'developer_board',
    },
    {
      label: 'Deployed Code Account',
      icon: 'deployed_code_account',
    },
  ],
};
