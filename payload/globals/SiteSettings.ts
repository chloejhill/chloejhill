import type { GlobalConfig } from 'payload';

import { textareaField, textField } from '../fields/pages/shared';

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  label: 'Site settings',
  access: {
    read: () => true,
    update: ({ req }) => Boolean(req.user)
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Navigation',
          fields: [
            {
              name: 'navLinks',
              type: 'array',
              label: 'Navigation links',
              labels: {
                singular: 'Link',
                plural: 'Links'
              },
              admin: {
                description:
                  'Shared by the header and footer. Reorder links to change display order on both.'
              },
              fields: [
                textField('label', 'Label'),
                textField('href', 'URL', 'e.g. /about or https://example.com'),
                {
                  name: 'openInNewTab',
                  type: 'checkbox',
                  label: 'Open in new tab',
                  defaultValue: false
                }
              ]
            },
            textField(
              'linkedInUrl',
              'LinkedIn URL',
              'Shown as the LinkedIn icon in the header and footer.'
            )
          ]
        },
        {
          label: 'Footer',
          fields: [
            {
              name: 'footer',
              type: 'group',
              fields: [
                textField('newsletterTitle', 'Newsletter title'),
                textareaField('newsletterText', 'Newsletter description'),
                textField('copyrightText', 'Copyright line'),
                textField('privacyLabel', 'Privacy policy label'),
                textField('privacyHref', 'Privacy policy URL'),
                textField('creditLabel', 'Website credit label'),
                textField(
                  'creditHref',
                  'Website credit URL',
                  'e.g. https://www.moderndaystrategy.com/'
                )
              ]
            }
          ]
        }
      ]
    }
  ]
};
