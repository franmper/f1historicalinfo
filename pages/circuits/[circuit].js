import { Title } from "../../components/layout/title";
import { useRouter } from "next/router";
import { getOneCircuit } from "../../services/circuitsFetchers";
import useSWR from "swr";
import { Loading } from "../../components/layout/loading";
import { Error } from "../../components/layout/error";

const Circuit = () => {
  const router = useRouter();
  const { circuit } = router.query;

  const { data, error } = useSWR(circuit, getOneCircuit);

  console.log(data)

  if (error) return <Error />;
  if (!data) return <Loading />;
  return (
    <div className="max-w-2xl sm:w-10/12 w-full rounded overflow-hidden m-auto mt-1 flex justify-center items-center flex-col">
      <Title title={data.Circuits[0].circuitName} />
      <div className="max-w-2xl sm:w-10/12 w-full bg-f1-black text-f1-white p-6 mt-3">
        
      </div>
    </div>
  );
};

export default Circuit;
