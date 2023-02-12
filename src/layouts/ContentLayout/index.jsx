const ContentLayout = ({ children }) => {
  return (
    <main className="flex flex-col w-full h-screen justify-center items-center bg-[#18181B] text-white gap-y-10">
      {children}
    </main>
  );
};

export default ContentLayout;
