import type { Field, UploadField } from 'payload';

export function whenSlug(slug: string) {
  return (_: unknown, siblingData: { slug?: string }) => siblingData?.slug === slug;
}

export function textField(name: string, label: string, description?: string): Field {
  return {
    name,
    type: 'text',
    label,
    ...(description ? { admin: { description } } : {})
  };
}

export function textareaField(
  name: string,
  label: string,
  description?: string
): Field {
  return {
    name,
    type: 'textarea',
    label,
    ...(description ? { admin: { description } } : {})
  };
}

export function uploadField(name: string, label: string): UploadField {
  return {
    name,
    type: 'upload',
    relationTo: 'media',
    label
  };
}

export function pageContentGroup(
  slug: string,
  groupName: string,
  label: string,
  fields: Field[]
): Field {
  return {
    name: groupName,
    type: 'group',
    label,
    admin: {
      condition: whenSlug(slug),
      description: `Content shown on the ${label} page.`
    },
    fields
  };
}
