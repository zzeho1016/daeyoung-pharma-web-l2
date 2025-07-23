"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  Award,
  Building2,
  ChevronRight,
  FlaskConical,
  Heart,
  Leaf,
  Mail,
  MapPin,
  Menu,
  Phone,
  Shield,
  ShoppingCart,
  Users,
} from "lucide-react"
import Link from "next/link"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Component() {
  return (
    <div className="min-h-screen bg-white">
      {/* Top Header */}
      <div className="bg-gray-100 border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-10 items-center justify-between text-sm">
            <div className="flex items-center space-x-4">
              <span className="text-gray-600">대영제약에 오신 것을 환영합니다</span>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/login" className="text-gray-600 hover:text-green-600">
                로그인
              </Link>
              <Link href="/signup" className="text-gray-600 hover:text-green-600">
                회원가입
              </Link>
              <Link href="/mypage" className="text-gray-600 hover:text-green-600">
                마이페이지
              </Link>
              <Link href="/customer" className="text-gray-600 hover:text-green-600">
                고객센터
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="border-b bg-white sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-2">
                <div className="h-10 w-10 bg-green-600 rounded-lg flex items-center justify-center">
                  <Leaf className="h-6 w-6 text-white" />
                </div>
                <span className="text-2xl font-bold text-gray-900">대영제약</span>
              </div>
            </div>

            {/* Search Bar */}
            <div className="hidden md:flex flex-1 max-w-lg mx-8">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="한약재, 건강식품을 검색하세요"
                  className="w-full px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-green-500"
                />
                <Button className="bg-green-600 hover:bg-green-700 rounded-l-none">검색</Button>
              </div>
            </div>

            {/* Cart & User Actions */}
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm" className="hidden md:flex bg-transparent">
                <Heart className="h-4 w-4 mr-2" />
                찜목록
              </Button>
              <Button variant="outline" size="sm" className="relative bg-transparent">
                <ShoppingCart className="h-4 w-4 mr-2" />
                장바구니
                <Badge className="absolute -top-2 -right-2 bg-green-600 text-white text-xs">3</Badge>
              </Button>

              {/* Mobile Menu */}
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon" className="md:hidden bg-transparent">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <div className="flex flex-col space-y-4 mt-8">
                    <Link href="#home" className="text-lg font-medium">
                      홈
                    </Link>
                    <Link href="#products" className="text-lg font-medium">
                      전체상품
                    </Link>
                    <Link href="#herbal" className="text-lg font-medium">
                      한약재
                    </Link>
                    <Link href="#health" className="text-lg font-medium">
                      건강식품
                    </Link>
                    <Link href="#medical" className="text-lg font-medium">
                      의료기기
                    </Link>
                    <Link href="#about" className="text-lg font-medium">
                      회사소개
                    </Link>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>

          {/* Category Navigation */}
          <nav className="hidden md:flex items-center space-x-8 py-4 border-t">
            <Link href="#products" className="text-gray-700 hover:text-green-600 font-medium transition-colors">
              전체상품
            </Link>
            <Link href="#herbal" className="text-gray-700 hover:text-green-600 font-medium transition-colors">
              한약재
            </Link>
            <Link href="#health" className="text-gray-700 hover:text-green-600 font-medium transition-colors">
              건강식품
            </Link>
            <Link href="#medical" className="text-gray-700 hover:text-green-600 font-medium transition-colors">
              의료기기
            </Link>
            <Link href="#bulk" className="text-gray-700 hover:text-green-600 font-medium transition-colors">
              대량구매
            </Link>
            <Link href="#about" className="text-gray-700 hover:text-green-600 font-medium transition-colors">
              회사소개
            </Link>
            <Link href="#contact" className="text-gray-700 hover:text-green-600 font-medium transition-colors">
              고객지원
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-br from-green-50 to-emerald-100 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-100">혁신적인 의약품 개발</Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                전통 한의학과 현대 기술의 만남
                <span className="text-green-600 block">믿을 수 있는 한약재 유통 파트너</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                대영제약은 30년간 축적된 전문성으로 최고 품질의 한약재를 공급하며, 한의원과 약국의 신뢰받는
                파트너입니다.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-green-600 hover:bg-green-700">
                  제품 카탈로그 보기
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline">
                  유통 문의
                </Button>
              </div>
            </div>
            <div className="relative">
              <img src="/placeholder.svg?height=500&width=600" alt="제약 연구소" className="rounded-2xl shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-green-600 mb-2">30+</div>
              <div className="text-gray-600">년간의 경험</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-green-600 mb-2">500+</div>
              <div className="text-gray-600">한약재 품목</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-green-600 mb-2">1000+</div>
              <div className="text-gray-600">거래처</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-green-600 mb-2">99%</div>
              <div className="text-gray-600">고객 만족도</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">MediCorp 소개</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              혁신적인 의약품 개발을 통해 전 세계 환자들의 건강한 삶을 지원합니다
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>안전성</CardTitle>
                <CardDescription>
                  엄격한 품질관리와 안전성 검증을 통해 신뢰할 수 있는 의약품을 제공합니다
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <FlaskConical className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>혁신</CardTitle>
                <CardDescription>
                  최첨단 연구개발 시설과 우수한 연구진을 통한 지속적인 혁신을 추구합니다
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle>환자 중심</CardTitle>
                <CardDescription>환자의 삶의 질 향상을 최우선으로 하는 환자 중심의 의약품을 개발합니다</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">인기 상품</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">엄선된 한약재와 건강식품을 특가로 만나보세요</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover:shadow-lg transition-shadow group">
              <div className="relative overflow-hidden">
                <img
                  src="/placeholder.svg?height=200&width=200"
                  alt="홍삼"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                />
                <Badge className="absolute top-2 right-2 bg-red-500">특가</Badge>
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">6년근 홍삼</CardTitle>
                <CardDescription>프리미엄 홍삼 600g</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <span className="text-lg font-bold text-green-600">89,000원</span>
                    <span className="text-sm text-gray-500 line-through ml-2">120,000원</span>
                  </div>
                </div>
                <Button className="w-full bg-green-600 hover:bg-green-700">
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  장바구니
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow group">
              <div className="relative overflow-hidden">
                <img
                  src="/placeholder.svg?height=200&width=200"
                  alt="녹용"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                />
                <Badge className="absolute top-2 right-2 bg-green-500">신상품</Badge>
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">러시아산 녹용</CardTitle>
                <CardDescription>1등급 녹용 300g</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <span className="text-lg font-bold text-green-600">450,000원</span>
                  </div>
                </div>
                <Button className="w-full bg-green-600 hover:bg-green-700">
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  장바구니
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow group">
              <div className="relative overflow-hidden">
                <img
                  src="/placeholder.svg?height=200&width=200"
                  alt="동충하초"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">티벳산 동충하초</CardTitle>
                <CardDescription>프리미엄 동충하초 100g</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <span className="text-lg font-bold text-green-600">280,000원</span>
                  </div>
                </div>
                <Button className="w-full bg-green-600 hover:bg-green-700">
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  장바구니
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow group">
              <div className="relative overflow-hidden">
                <img
                  src="/placeholder.svg?height=200&width=200"
                  alt="영지버섯"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                />
                <Badge className="absolute top-2 right-2 bg-blue-500">베스트</Badge>
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">영지버섯 분말</CardTitle>
                <CardDescription>유기농 영지버섯 500g</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <span className="text-lg font-bold text-green-600">65,000원</span>
                  </div>
                </div>
                <Button className="w-full bg-green-600 hover:bg-green-700">
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  장바구니
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              variant="outline"
              className="border-green-600 text-green-600 hover:bg-green-50 bg-transparent"
            >
              전체 상품 보기
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section id="research" className="py-20 bg-gradient-to-br from-green-50 to-emerald-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">연구개발</h2>
              <p className="text-lg text-gray-600 mb-8">
                MediCorp는 전 세계 5개 연구소에서 1,000명 이상의 연구진이 차세대 의약품 개발을 위해 노력하고 있습니다.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="h-8 w-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Award className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">혁신적 연구</h3>
                    <p className="text-gray-600">AI와 빅데이터를 활용한 신약 개발 플랫폼</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="h-8 w-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Building2 className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">글로벌 협력</h3>
                    <p className="text-gray-600">세계 유수 대학 및 연구기관과의 공동 연구</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="h-8 w-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <FlaskConical className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">임상시험</h3>
                    <p className="text-gray-600">현재 50여 개의 임상시험이 진행 중</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <img src="/placeholder.svg?height=400&width=500" alt="연구개발" className="rounded-2xl shadow-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section id="news" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">최신 뉴스</h2>
            <p className="text-xl text-gray-600">MediCorp의 최신 소식과 연구 성과를 확인하세요</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Badge className="w-fit mb-2">보도자료</Badge>
                <CardTitle className="text-lg">신약 임상 3상 시험 성공</CardTitle>
                <CardDescription>
                  당뇨병 치료제 'MediDiab'의 임상 3상 시험에서 우수한 효과를 입증했습니다.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500 mb-4">2024년 1월 15일</p>
                <Button variant="outline" size="sm">
                  자세히 보기
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Badge className="w-fit mb-2" variant="secondary">
                  연구성과
                </Badge>
                <CardTitle className="text-lg">AI 신약개발 플랫폼 구축</CardTitle>
                <CardDescription>인공지능을 활용한 신약 개발 플랫폼을 성공적으로 구축했습니다.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500 mb-4">2024년 1월 10일</p>
                <Button variant="outline" size="sm">
                  자세히 보기
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Badge className="w-fit mb-2" variant="outline">
                  수상
                </Badge>
                <CardTitle className="text-lg">혁신 제약기업 대상 수상</CardTitle>
                <CardDescription>2023년 혁신 제약기업 대상을 수상하며 기술력을 인정받았습니다.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500 mb-4">2024년 1월 5일</p>
                <Button variant="outline" size="sm">
                  자세히 보기
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">연락처</h2>
            <p className="text-xl text-gray-600">궁금한 사항이 있으시면 언제든지 연락주세요</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">본사 정보</h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">주소</h4>
                    <p className="text-gray-600">
                      서울특별시 강남구 테헤란로 123
                      <br />
                      MediCorp 빌딩 10층
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">전화번호</h4>
                    <p className="text-gray-600">02-1234-5678</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">이메일</h4>
                    <p className="text-gray-600">info@medicorp.com</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>문의하기</CardTitle>
                <CardDescription>궁금한 사항을 남겨주시면 빠르게 답변드리겠습니다</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">이름</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      placeholder="이름을 입력하세요"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">이메일</label>
                    <input
                      type="email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      placeholder="이메일을 입력하세요"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">제목</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="문의 제목을 입력하세요"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">내용</label>
                  <textarea
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="문의 내용을 입력하세요"
                  />
                </div>
                <Button className="w-full bg-green-600 hover:bg-green-700">문의 보내기</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="h-8 w-8 bg-green-600 rounded-lg flex items-center justify-center">
                  <Leaf className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold">대영제약</span>
              </div>
              <p className="text-gray-400 mb-4">전통 한의학과 현대 기술의 만남</p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">회사</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    회사소개
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    주요연혁
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    사회공헌
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    채용정보
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">제품</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    건강기능식품
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    한약재
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    의료기기
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    OEM/ODM
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">지원</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    파트너 문의
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    개인정보처리방침
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    이용약관
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <Separator className="my-8 bg-gray-800" />

          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2024 대영제약. All rights reserved.</p>
            <p className="text-gray-400 text-sm mt-4 md:mt-0">
              서울특별시 강남구 테헤란로 123 | 대표전화: 02-1234-5678
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
