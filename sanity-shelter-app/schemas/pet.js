export default {
  name: 'pet',
  title: 'Pet',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'array',
      of: [{  name: 'imgUrl', title: 'ImageUrl', type: 'image', imgurl: 'imgUrl' }],
      options: {
        hotspot: true,
      }
    },
    { 
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    { 
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 90,
      }
    },
    { 
      name: 'age',
      title: 'Age',
      type: 'string',
    },
    { 
      name: 'gender',
      title: 'Gender',
      type: 'string',
    },
    { 
      name: 'details',
      title: 'Details',
      type: 'string',
    }
  ]
}