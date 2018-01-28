import React from "react"

export default ({ data }) => {
  console.log(data)
  return (
    <div>
      <h1>My Site Files</h1>
      <h2>GraphiQL</h2>
      <table>
        <thead>
          <tr>
            <th>relativePath</th>
            <th>directory</th>
            <th>name</th>
          </tr>
        </thead>
        <tbody>
          {data.allFile.edges.map(({ node }, index) =>
            <tr key={index}>
              <td>
                {node.relativePath}
              </td>
              <td>
                {node.dir}
              </td>
              <td>
                {node.name}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export const query = graphql`
  query MyFilesQuery {
    allFile {
      edges {
        node {
          relativePath
				  dir
				  name
        }
      }
    }
  }
`
