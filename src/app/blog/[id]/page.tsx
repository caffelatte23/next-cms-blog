import { client } from "@/lib/microcms";
import { Blog } from "@/model";

const Page = async (props: PageProps<"/blog/[id]">) => {
  const { id } = await props.params;
  const content = await client.getListDetail<Blog>({ endpoint: "blogs", contentId: id });

  return <div>{content.title}</div>;
};

export default Page;
