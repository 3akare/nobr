const NotFound = () => {
  return (
    <main className="p-4 h-[calc(100vh-224px)] w-full flex items-center justify-center">
      <p className="text-2xl font-semibold">404</p>
      <div className="h-8 w-[0.5px] bg-foreground mx-2"></div>
      <p>Page Not Found</p>
    </main>
  );
};

export default NotFound;
