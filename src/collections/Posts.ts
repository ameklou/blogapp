import {  CollectionConfig } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'

export const Posts:CollectionConfig={
  slug:"posts",
  admin:{
    useAsTitle:"title",
    defaultColumns:["title","slug", "category", "publishedDate", "status"],

  },
  access:{
    read:()=>true,
  },
  fields:[
    {
      name:"title",
      type:"text",
      required:true,
    },
    {
      name:"slug",
      type:"text",
      required:true,
      unique:true,
      admin:{
        position:"sidebar"
      }
    },
    {
      name:"excerpt",
      type:"textarea",
      required:true,
      maxLength:200,
    },
    {
      name:"content",
      type:"richText",
      required:true,
      editor:lexicalEditor(),
    },
    {
      name:"featuredImage",
      type:"upload",
      relationTo:"media"
    },
    {
      name:"category",
      type:"relationship",
      relationTo:"categories"
    },
    {
      name: 'author',
      type: 'relationship',
      relationTo: 'users',
      required: true,
    },
    {
      name: 'publishedDate',
      type: 'date',
      required: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'status',
      type: 'select',
      required: true,
      defaultValue: 'draft',
      options: [
        {
          label: 'Draft',
          value: 'draft',
        },
        {
          label: 'Published',
          value: 'published',
        },
      ],
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'tags',
      type: 'array',
      fields: [
        {
          name: 'tag',
          type: 'text',
        },
      ],
    },
  ],
  hooks: {
    beforeChange: [
      ({ data, operation }) => {
        if (operation === 'create' && !data.slug) {
          data.slug = data.title
            .toLowerCase()
            .replace(/ /g, '-')
            .replace(/[^\w-]+/g, '');
        }
        return data;
      },
    ],
  },
}