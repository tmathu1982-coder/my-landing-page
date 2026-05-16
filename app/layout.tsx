import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // 1. Tiêu đề hiển thị trên Tab và kết quả Google (Nên chứa từ khóa chính)
  title: "Sunny Farm | Nông Nghiệp Công Nghệ Cao & Men Vi Sinh",
  
  // 2. Đoạn mô tả ngắn dưới link Google (Kích thích người ta bấm vào)
  description: "Công Ty Cổ Phần Đầu Tư Ứng Dụng Khoa Học Công Nghệ Cao Sunny Farm. Chuyên phân phối phân bón lá (kích rễ, siêu vô gạo), men vi sinh (Trichoderma, EM), vật tư nông nghiệp và mật rỉ đường.",
  
  // 3. Bộ từ khóa (Keywords) cho Search Engine
  keywords: [
    "Sunny Farm", 
    "nông nghiệp công nghệ cao", 
    "phân bón lá", 
    "kích rễ", 
    "siêu vô gạo",
    "phân bón sầu riêng",
    "ngừa nấm Phytophthora",
    "men vi sinh Trichoderma", 
    "chế phẩm EM1",
    "mật rỉ đường"
  ],

  // 4. Khai báo tác giả/Thương hiệu
  authors: [{ name: "Sunny Farm" }],

  // 5. Thẻ Open Graph (Khi share link qua Zalo, Facebook sẽ hiện rất đẹp)
  openGraph: {
    title: "Sunny Farm | Nông nghiệp Công nghệ cao",
    description: "Giải pháp toàn diện cho nông nghiệp xanh: Phân bón, men vi sinh và mật rỉ đường chất lượng cao.",
    url: "https://sunnyfarm.com.vn", // Trò thay bằng tên miền thật của mình vào đây nhé
    siteName: "Sunny Farm",
    images: [
      {
        url: "/logo-sunny-farm.jpg", // Đổi thành .jpg nếu file của trò là .jpg
        width: 800,
        height: 600,
        alt: "Logo Sunny Farm",
      },
    ],
    locale: "vi_VN",
    type: "website",
  },

  // 6. Favicon (Logo trên tab trình duyệt)
  icons: {
    icon: "/logo-sunny-farm.png", // Tương tự, đổi đuôi file nếu cần
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
