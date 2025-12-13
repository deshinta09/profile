export default function MainLayout({ children }) {
  const listMenu = ["Home", "Products", "Facility", "Review", "Contact"];
  return (
    <div>
      <div className="w-full relative">
        <div className="flex justify-between items-center px-3 py-2 sticky top-0 bg-main-orange text-neutral">
          <div className="flex gap-3 items-center">
            <div className="rounded-full bg-black w-15 h-15 flex items-center justify-center">
              <span>img</span>
            </div>
            <h1 className="text-xl">Website</h1>
          </div>
          <div className="flex justify-around w-140">
            {listMenu.map((menu) => (
              <span key={menu}>{menu}</span>
            ))}
          </div>
        </div>
        <main className="bg-gray-50">{children}</main>
      </div>
    </div>
  );
}
