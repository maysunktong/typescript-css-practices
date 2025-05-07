const FetchButton = ({ onClick }: FetchButtonProps) => {
  return (<button type="button" onClick={onClick} className="border-2 border-green-700 bg-green-300 font-bold rounded-3xl p-4 uppercase">Randomize a Pokemon
  </button>);
}
export default FetchButton;
