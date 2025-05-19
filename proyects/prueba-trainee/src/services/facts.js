const ENPOINT_RANDOM_FACT = "https://catfact.ninja/fact";

export const getRadomFact = async () => {
  const res = await fetch(ENPOINT_RANDOM_FACT);
  const data = await res.json();
  const { fact } = data;
  return fact;
};
