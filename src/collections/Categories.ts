import { CollectionConfig } from 'payload'

export const Categories:CollectionConfig = {
  slug:"categories",
  admin:{

  },
  fields:[
    {
      name:"name",
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
      name:"description",
      type:"textarea",
    }
  ]
}