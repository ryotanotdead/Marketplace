import { ref } from "vue";

const useLayout = () => {
  const counter = ref(1);
  const incrementHandler = () => {
    counter.value += 1;
};
    return {
      counter,
      incrementHandler,
    };
};
export default useLayout