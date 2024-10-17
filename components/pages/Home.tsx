'use client'

import React from 'react'
import Link from 'next/link'
import { ChevronRight, Globe, Facebook, Twitter, Instagram } from 'lucide-react'

import { Button } from "@/components/ui/button"

export function HomePageComponent() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-primary text-primary-foreground py-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <img src="/placeholder.svg?height=40&width=40" alt="Logo" className="h-10 w-10" />
            <h1 className="text-2xl font-bold">相続プランナー</h1>
          </div>
          <nav>
            <ul className="flex space-x-6">
              <li><Link href="/" className="hover:underline">ホーム</Link></li>
              <li><Link href="/services" className="hover:underline">サービス紹介</Link></li>
              <li><Link href="/support" className="hover:underline">サポート</Link></li>
              <li><Link href="/auth" className="hover:underline">ログイン</Link></li>
              <li><Link href="/dashboard" className="hover:underline">ダッシュボード</Link></li>
              <li>
                <Button variant="outline" size="icon">
                  <Globe className="h-4 w-4" />
                  <span className="sr-only">言語切替</span>
                </Button>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-secondary text-primary-foreground py-20">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">あなたの大切な資産を、次の世代へ</h2>
            <p className="text-xl mb-8">AI搭載の相続プランニングで、家族の未来を守ります</p>
            <Button size="lg" asChild>
              <Link href="/register">
                始める
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto">
            <h3 className="text-3xl font-bold text-center mb-12">サービス紹介</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "資産情報入力", description: "簡単な質問に答えるだけで、あなたの資産を整理します", icon: "💼" },
                { title: "相続プラン提案", description: "AIが最適な相続プランを提案し、節税対策もサポート", icon: "🤖" },
                { title: "遺言書ドラフト生成", description: "法的要件を満たす遺言書のドラフトを自動生成", icon: "📄" }
              ].map((service, index) => (
                <div key={index} className="bg-card text-card-foreground rounded-lg p-6 shadow-lg">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h4 className="text-xl font-semibold mb-2">{service.title}</h4>
                  <p>{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* User Voice Section */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto">
            <h3 className="text-3xl font-bold text-center mb-12">ユーザーの声</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { quote: "複雑だった相続の問題が、このサービスのおかげでスムーズに解決できました。", author: "T.S. 様 (50代)" },
                { quote: "AIの提案は驚くほど的確で、専門家のアドバイスと合わせて最適な相続プランが立てられました。", author: "K.M. 様 (60代)" }
              ].map((testimonial, index) => (
                <div key={index} className="bg-card text-card-foreground rounded-lg p-6 shadow-lg">
                  <blockquote className="text-lg italic mb-4">"{testimonial.quote}"</blockquote>
                  <p className="text-right">- {testimonial.author}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-semibold mb-4">相続プランナー</h4>
              <p>あなたの大切な資産を、次の世代へ</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">リンク</h4>
              <ul className="space-y-2">
                <li><Link href="/terms" className="hover:underline">利用規約</Link></li>
                <li><Link href="/privacy" className="hover:underline">プライバシーポリシー</Link></li>
                <li><Link href="/support" className="hover:underline">サポート</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">お問い合わせ</h4>
              <p>support@souzoku-planner.jp</p>
              <p>0120-XXX-XXX</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">フォローする</h4>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-secondary"><Facebook /></a>
                <a href="#" className="hover:text-secondary"><Twitter /></a>
                <a href="#" className="hover:text-secondary"><Instagram /></a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-primary-foreground/10 text-center">
            <p>&copy; 2024 相続プランナー. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}