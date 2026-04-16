import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'gallery',
  title: 'Gallery',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Title will go here!',
    }),
    // defineField({
    //   name: 'slug',
    //   title: 'Slug',
    //   type: 'slug',
    //   options: {
    //     source: 'title',
    //     maxLength: 96,
    //   },
    // }),
    defineField({
      name: 'galleryDescription',
      title: 'GalleryDescription',
      type: 'string',
      description: 'Gallery Description will go here and live under the "title" above.',
    }),
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      description:
        'Upload high-quality images. Recommended: 16:9 ratio. First image will be used as preview.',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            defineField({
              name: 'alt',
              title: 'Alt Text',
              type: 'string',
              description: 'Important for SEO and accessibility',
            }),
            defineField({
              name: 'caption',
              title: 'Caption',
              type: 'string',
            }),
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'images.0', // first image as preview
    },
  },
})
