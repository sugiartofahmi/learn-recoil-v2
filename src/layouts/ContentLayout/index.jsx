const ContentLayout = ({ children }) => {
  return (
    <main className="flex flex-col w-full h-screen justify-center items-center">
      {children}
    </main>
  );
};

export default ContentLayout;
