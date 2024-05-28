function Title(props) {
  return (
    <div className="flex items-center justify-center bg-white">
      <h1 className="text-3xl font-extrabold text-gray-100 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 bg-clip-text text-transparent p-5">
        {props.title}
      </h1>
    </div>
  );
}
export default Title;