import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      {/* HEADER */}
      <header className="bg-white shadow-sm sticky top-0 z-50 border-b-4 border-amber-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
          <div className="flex items-center gap-4">
            {/* Khối nền trắng làm nổi bật logo */}
            <div className="bg-white p-1.5 rounded-xl shadow-sm border border-gray-100">
              <Image 
                src="/logo-sunny-farm.jpg" // Trò nhớ dùng ảnh PNG đã tách nền nhé
                alt="Sunny Farm Logo" 
                width={50} 
                height={50} 
                className="object-contain"
              />
            </div>
            <h1 className="text-2xl font-black text-amber-500 tracking-tight drop-shadow-sm">
              SUNNY FARM
            </h1>
          </div>
          <nav className="hidden md:flex gap-8 font-medium text-gray-600">
            <a href="#ve-chung-toi" className="hover:text-green-600 transition">Về Chúng Tôi</a>
            <a href="#san-pham" className="hover:text-green-600 transition">Sản Phẩm</a>
            <a href="#lien-he" className="hover:text-amber-500 transition">Liên Hệ</a>
          </nav>
        </div>
      </header>

      {/* HERO SECTION - GIỚI THIỆU */}
      <section id="ve-chung-toi" className="bg-gradient-to-br from-green-50 via-white to-amber-50 py-24">
        <div className="max-w-4xl mx-auto text-center px-4">
          {/* Phân cấp typography: Tên công ty nhỏ, SUNNY FARM cực to và đổi màu */}
          <h2 className="text-xl md:text-2xl font-semibold text-gray-600 mb-2 uppercase tracking-wide">
            Công Ty Cổ Phần Đầu Tư Ứng Dụng Khoa Học Công Nghệ Cao
          </h2>
          <h1 className="text-6xl md:text-8xl font-black text-amber-500 mb-8 drop-shadow-md">
            SUNNY FARM
          </h1>
          
          <p className="text-lg text-gray-700 mb-10 leading-relaxed max-w-3xl mx-auto">
            Hành trình từ sự tận tâm với thực phẩm thuần chay, hướng về thiên nhiên và cuộc sống xanh. 
            Nay vươn mình mang đến các giải pháp nông nghiệp công nghệ cao, nhập khẩu và phân phối 
            các sản phẩm chất lượng hàng đầu cho nền nông nghiệp Việt Nam.
          </p>
          <a href="#san-pham" className="inline-block bg-green-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-green-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            Khám Phá Sản Phẩm
          </a>
        </div>
      </section>

      {/* SẢN PHẨM SECTION */}
      <section id="san-pham" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold text-gray-900">Danh Mục Sản Phẩm</h3>
          <div className="w-24 h-1.5 bg-amber-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Card 1: Phân bón lá */}
          <div className="bg-white rounded-2xl shadow-sm border-t-4 border-t-green-500 p-8 hover:shadow-lg transition-shadow">
            <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-6">
              <span className="text-2xl text-green-600">🌾</span>
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-4">Phân Bón Lá</h4>
            <ul className="space-y-3 text-gray-600 text-sm">
              <li><strong className="text-green-700">Dòng cho lúa:</strong></li>
              <li>• Kích rễ</li>
              <li>• Đẻ nhánh Canxi - Bo - Kẽm</li>
              <li>• Siêu vô gạo</li>
              <li className="pt-2"><strong className="text-green-700">Cây công nghiệp:</strong> <br/>Sầu riêng, Cà phê</li>
            </ul>
          </div>

          {/* Card 2: Trị bệnh */}
          <div className="bg-white rounded-2xl shadow-sm border-t-4 border-t-amber-500 p-8 hover:shadow-lg transition-shadow">
            <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-6">
              <span className="text-2xl text-amber-600">🛡️</span>
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-4">Trị Bệnh</h4>
            <ul className="space-y-3 text-gray-600 text-sm">
              <li>• Ngăn ngừa nấm PHITOPTHORA</li>
              <li>• Agrifosss ngừa bệnh</li>
            </ul>
          </div>

          {/* Card 3: Men vi sinh */}
          <div className="bg-white rounded-2xl shadow-sm border-t-4 border-t-green-500 p-8 hover:shadow-lg transition-shadow">
            <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-6">
              <span className="text-2xl text-green-600">🔬</span>
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-4">Men Vi Sinh</h4>
            <ul className="space-y-3 text-gray-600 text-sm">
              <li>• Men vi sinh Trichoderma</li>
              <li>• Chế phẩm EM1</li>
              <li>• Chế phẩm EM2</li>
            </ul>
          </div>

          {/* Card 4: Mật rỉ đường */}
          <div className="bg-white rounded-2xl shadow-sm border-t-4 border-t-amber-500 p-8 hover:shadow-lg transition-shadow">
            <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-6">
              <span className="text-2xl text-amber-600">🍯</span>
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-4">Mật Rỉ Đường</h4>
            <ul className="space-y-3 text-gray-600 text-sm">
              <li>• <strong className="text-amber-700">75% BRIX:</strong> Dùng trong thủy hải sản</li>
              <li>• <strong className="text-amber-700">73% BRIX:</strong> Dùng cho ủ vi sinh</li>
            </ul>
          </div>

        </div>
      </section>

      {/* FOOTER - THU GỌN 1/3 */}
      <footer id="lien-he" className="bg-gray-900 text-gray-400 py-6 text-sm border-t-4 border-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="font-black text-white text-lg tracking-wider mb-1">SUNNY FARM</p>
            <p>MST: 0318724484 | ĐC: 28E Nguyễn Hữu Cảnh, Phường Thạnh Mỹ Tây, TP.HCM</p>
          </div>
          <div className="text-center md:text-right">
            <p>Hotline: (Đang cập nhật)</p>
            <p>© {new Date().getFullYear()} Sunny Farm. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}