import { graphql, HeadFC, useStaticQuery } from "gatsby";
import * as React from "react";
import styled from 'styled-components';

const IndexPage = () => {
  const posts = useStaticQuery(graphql`
    query {
      allWpPost {
        edges {
          node {
            id
            title
            content
            date
          }
        }
      }
    }
  `);

  // TODO: Type GraphQL query properly

  return (
    <IndexPageStyles>
      {posts.allWpPost.edges.map((post: any) => {
        const { content, date, title } = post.node;
        return (
          <article>
            <h1>{title}</h1>
            <small>{date}</small>
            <p dangerouslySetInnerHTML={{ __html: content }} />
          </article>
        );
      })}
    </IndexPageStyles>
  );
};

const IndexPageStyles = styled.main`
h1 {
  color: red;
}

p {
  color: blue;
}
`;

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
