import Helmet from "../components/helmet/helmet";
import CommonSection from "../components/UI/commonSection";
import { Container, Row } from "reactstrap";
import BlogList from "../components/UI/blogList";

const Blog = () => {
  return (
    <Helmet title="Blogs">
      <CommonSection title="Blogs"></CommonSection>
      <section>
        <Container>
          <Row>
            <BlogList />
            <BlogList />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};
export default Blog;
