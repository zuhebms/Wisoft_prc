export default function Section1() {
  return (
    <section className="flex justify-center flex-col">
      <h2 className="flex justify-center text-5xl mb-7 max-sm:text-3xl">
        Partners & Awards
      </h2>
      <div className="flex justify-center ">
        <img
          src="src\assets\1.6b056fc.jpg"
          alt=""
          width="100%"
          height="40"
          className="w-1/3 h-1/3 lg:w-2/12 mx-1 p-5 "
        />
        <img
          src="src\assets\2.d7daebb.jpg"
          alt=""
          width="100%"
          height="45"
          className="w-1/3 h-1/3 lg:w-2/12 mx-1 p-5"
        />
        <img
          src="src\assets\3.4b1ea68.jpg"
          alt=""
          width="100%"
          height="45"
          className="w-1/3 h-1/3 lg:w-2/12 mx-1 p-5"
        />
      </div>
      <div className="flex justify-center my-8">
        <div className="container mx-auto mt-8 p-8 mb-8 bg-white border border-customGreyColor rounded-lg text-center">
          <h5 className="font-bold text-sm">TRUSTED BY LEADING BRANDS</h5>
          <div className="flex justify-center p-4 mx-10 -mb-6 gap-8">
            <img src=" src\assets\1.878ed3d.jpg " alt="" className="w-1/5 " />
            <img src=" src\assets\2.2958cc9.jpg " alt="" className="w-1/5" />
            <img src=" src\assets\3.ea00829.jpg " alt="" className="w-1/5" />
            <img src=" src\assets\4.f52720c.jpg " alt="" className="w-1/5" />
            <img src=" src\assets\5.7dc195c.jpg " alt="" className="w-1/5" />
          </div>
        </div>
      </div>
    </section>
  );
}