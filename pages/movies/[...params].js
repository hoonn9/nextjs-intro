import Seo from "../../components/Seo";

export default function Detail({ params }) {
  // front 에서 실행 (direct url로 들어오면 params는 존재하지 않음, server side로 가져오기)
  // const router = useRouter();

  const [title, id] = params || [];

  return (
    <div>
      <Seo title={title} />
      <h4>{title || "Loading"}</h4>
    </div>
  );
}

export function getServerSideProps(ctx) {
  console.log(ctx);
  const { params } = ctx.params;
  return {
    props: {
      params,
    },
  };
}
