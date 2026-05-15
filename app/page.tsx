import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      {/* HEADER */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            {/* Gọi logo từ thư mục public */}
            <Image 
              src="/logo-sunny-farm.jpg" 
              alt="Sunny Farm Logo" 
              width={60} 
              height={60} 
              className="rounded-full object-cover"
            />
            <h1 className="text-2xl font-bold text-blue-900 tracking-tight">SUNNY FARM</h1>
          </div>
          <nav className="hidden md:flex gap-8 font-medium text-gray-600">
            <a href="#ve-chung-toi" className="hover:text-green-600 transition">Về Chúng Tôi</a>
            <a href="#san-pham" className="hover:text-green-600 transition">Sản Phẩm</a>
            <a href="#lien-he" className="hover:text-green-600 transition">Liên Hệ</a>
          </nav>
        </div>
      </header>

      {/* HERO SECTION - GIỚI THIỆU */}
      <section id="ve-chung-toi" className="bg-gradient-to-br from-green-50 to-blue-50 py-20">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            Công Ty Cổ Phần Đầu Tư Ứng Dụng Khoa Học <br/>
            <span className="text-green-600">Công Nghệ Cao SUNNY FARM</span>
          </h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Hành trình từ sự tận tâm với thực phẩm thuần chay, hướng về thiên nhiên và cuộc sống xanh. 
            Nay vươn mình mang đến các giải pháp nông nghiệp công nghệ cao, nhập khẩu và phân phối 
            các sản phẩm chất lượng hàng đầu cho nền nông nghiệp Việt Nam.
          </p>
          <a href="#san-pham" className="inline-block bg-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-700 hover:shadow-lg transition-all">
            Khám Phá Sản Phẩm
          </a>
        </div>
      </section>

      {/* SẢN PHẨM SECTION */}
      <section id="san-pham" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold text-gray-900">Danh Mục Sản Phẩm</h3>
          <div className="w-24 h-1 bg-green-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Card 1: Phân bón lá */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 hover:shadow-md transition">
            <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-6">
              <span className="text-2xl text-green-600">🌾</span>
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-4">Phân Bón Lá</h4>
            <ul className="space-y-3 text-gray-600">
              <li><strong className="text-gray-800">Dòng cho lúa:</strong></li>
              <li>• Kích rễ</li>
              <li>• Đẻ nhánh Canxi - Bo - Kẽm</li>
              <li>• Siêu vô gạo</li>
              <li className="pt-2"><strong className="text-gray-800">Cây công nghiệp:</strong> Sầu riêng, Cà phê</li>
            </ul>
          </div>

          {/* Card 2: Trị bệnh */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 hover:shadow-md transition">
            <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center mb-6">
              <span className="text-2xl text-red-600">🛡️</span>
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-4">Sản Phẩm Trị Bệnh</h4>
            <ul className="space-y-3 text-gray-600">
              <li>• Ngăn ngừa nấm PHITOPTHORA</li>
              <li>• Agrifosss ngừa bệnh</li>
            </ul>
          </div>

          {/* Card 3: Men vi sinh */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 hover:shadow-md transition">
            <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
              <span className="text-2xl text-blue-600">🔬</span>
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-4">Men Vi Sinh</h4>
            <ul className="space-y-3 text-gray-600">
              <li>• Men vi sinh Trichoderma</li>
              <li>• Chế phẩm EM1</li>
              <li>• Chế phẩm EM2</li>
            </ul>
          </div>

          {/* Card 4: Mật rỉ đường */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 hover:shadow-md transition">
            <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-6">
              <span className="text-2xl text-amber-600">🍯</span>
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-4">Mật Rỉ Đường</h4>
            <ul className="space-y-3 text-gray-600">
              <li>• <strong className="text-gray-800">75% BRIX:</strong> Dùng trong thủy hải sản</li>
              <li>• <strong className="text-gray-800">73% BRIX:</strong> Dùng cho ủ vi sinh</li>
            </ul>
          </div>

        </div>
      </section>

      {/* FOOTER - THÔNG TIN LIÊN HỆ */}
      <footer id="lien-he" className="bg-gray-900 text-gray-300 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <h2 className="text-2xl font-bold text-white tracking-tight">SUNNY FARM</h2>
            </div>
            <p className="mb-4">Hướng về thiên nhiên & cuộc sống xanh.</p>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-white mb-4">Thông Tin Liên Hệ</h4>
            <p><strong>Công Ty:</strong> Cổ Phần Đầu Tư Ứng Dụng Khoa Học Công Nghệ Cao Sunny Farm</p>
            <p><strong>MST:</strong> 0318724484</p>
            <p><strong>Địa chỉ:</strong> 28E Nguyễn Hữu Cảnh, phường Thạnh Mỹ Tây, Thành phố Hồ Chí Minh</p>
            <p><strong>Website / Fanpage / Tiktok:</strong> (Đang cập nhật)</p>
            <p><strong>Hotline:</strong> (Đang cập nhật)</p>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm">
          <p>© {new Date().getFullYear()} Sunny Farm. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}