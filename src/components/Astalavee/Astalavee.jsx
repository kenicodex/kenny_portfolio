import React, { useEffect } from 'react'
import grapesjs from 'grapesjs'
import 'grapesjs/dist/css/grapes.min.css'
import 'grapesjs/dist/grapes.min.js'
import 'grapesjs-preset-webpage/dist/grapesjs-preset-webpage.min.css'
import 'grapesjs-preset-webpage/dist/grapesjs-preset-webpage.min.js'

function Astalavee() {
  useEffect(() => {
    const editor = grapesjs.init({
      container: '#gjs',
      height: '700px',
      width: '100%',
      plugins: ['gjs-preset-webpage'],
      storageManager: {
        id: 'gjs-',
        type: 'local',
        autosave: true,
        storeComponents: true,
        storeStyles: true,
        storeHtml: true,
        storeCss: true,
      },
      deviceManager: {
        devices:
          [
            {
              id: 'desktop',
              name: 'Desktop',
              width: '',
            },
            {
              id: 'tablet',
              name: 'Tablet',
              width: '768px',
              widthMedia: '992px',
            },
            {
              id: 'mobilePortrait',
              name: 'Mobile portrait',
              width: '320px',
              widthMedia: '575px',
            },
          ]
      },
      pluginsOpts: {
        'grapesjs-preset-webpage': {
          blocksBasicOpts: {
            blocks: ['column1', 'column2', 'column3', 'column3-7', 'text', 'link', 'image', 'video'],
            flexGrid: 1,
          },
          blocks: ['link-block', 'quote', 'text-basic'],
        },
      }
    })
    var blocks = editor.Blocks;
    blocks.add('my-first-block', {
      label: 'astalavee hero text',
      content: '<h1>Put your title here</h1>',
    })
    editor.addComponents({
      type : 'text',
      attributes : {
        name : 'user-input',
        title : 'ddd'
      }
    })
  }, [])
  return (
    <div id="gjs" style={{backgroundColor:"black"}}>Astalavee</div>
  )
}

export default Astalavee