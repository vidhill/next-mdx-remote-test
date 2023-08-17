import styles from "./index.module.css";

import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";

import { MyButton } from "../components";

const components = { MyButton };

export default function TestPage({ source }) {
  return (
    <div className={styles.wrapper}>
      <MDXRemote {...source} components={components} />
    </div>
  );
}

// MDX text - can be from a local file, database, anywhere
const source = `
<div className="doo"> 
  Some **mdx** text, with a component


  <MyButton>My Button Component</MyButton>

   
  {/* can also embed vanilla html */}
  <table>
    <thead>
      <tr>
        <th>Col 1</th>
        <th>Col 2</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Cat</td>
        <td>Dog</td>
      </tr>
    </tbody>
  </table>

</div>
`;

export async function getStaticProps() {
  const mdxSource = await safeSerializeMDX(source);
  return {
    props: {
      source: mdxSource,
    },
  };
}

/**
 * Return default html if passed mdx has errors
 */
async function safeSerializeMDX(src) {
  return serialize(src).catch((err) => {
    console.log(err.message);
    return serialize("Invalid mdx");
  });
}
