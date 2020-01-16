import React from 'react';
import { graphql } from 'gatsby';
import {plugins} from '../../gatsby-config'

export default ({ data }) => {
    console.log(data)
    let counter = 0;
    const s3PluginName = 'gatsby-source-s3-image'
    console.log(plugins);
    const resolvedPlugins = plugins.filter( (plugin) => typeof(plugin) === 'object');
    const s3Plugin = resolvedPlugins.filter( (plugin) => plugin.resolve === s3PluginName).reduce(plugin => plugin);
    console.log(s3Plugin);
    return (
        <div>
            <p>Hello images</p>
            <div>
                {data.allS3ImageAsset.edges.map( ({node}, index) => (
                    <img key={index} id={index} src={node.childImageSharp.original.src} alt={node.Name}/>
                ))}
            </div>
        </div>
    )
  }

export const query = graphql`
query MyQuery {
    allS3ImageAsset {
      edges {
        node {
          id
          Key
          absolutePath
          ETag
          childImageSharp {
            original {
              src
            }
          }
        }
      }
    }
  }
  
`