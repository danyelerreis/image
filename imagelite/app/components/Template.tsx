interface TemplateProps{
  children: React.ReactNode;
}
export const Template: React.FC<TemplateProps> = ({ children }: TemplateProps) => {
  return(
    <>
    <Header />
    {children}
    <Footer />
    </>
  );
}
const Header : React.FC = () => {
  return (
    <header className = "bg-purple-400 text-black py-3">
    <div className = "container mx-auto px-4 flex justify-between items-center px-4">
      <h1>ImageLite</h1>
      </div>
    </header>
  );
}
const Footer : React.FC = () => {
  return (
    <footer className = "bg-cyan-200 text-black py-3">
    <div className = "container mx-auto px-4 flex justify-between items-center px-4">
      <h1>Developed by dany</h1>
      </div>
    </footer>
  );
}
