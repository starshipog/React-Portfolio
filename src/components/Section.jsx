export default function Pages({ children, ...props }) {
  return (
    <div
      className="list-group-item pt-4 d-flex justify-content-center align-items-center"
      {...props}
    >
      {children}
    </div>
  );
}



