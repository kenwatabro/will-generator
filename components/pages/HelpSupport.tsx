'use client'

import React, { useState } from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { AlertCircle, PlayCircle } from 'lucide-react'

const faqs = [
  {
    category: "アカウント管理",
    questions: [
      {
        q: "パスワードを忘れた場合はどうすればいいですか？",
        a: "ログインページの「パスワードを忘れた方」リンクをクリックし、登録されているメールアドレスを入力してください。パスワードリセットの手順が記載されたメールが送信されます。"
      },
      {
        q: "アカウントを削除するにはどうすればいいですか？",
        a: "設定ページの「アカウント」セクションにある「アカウントの削除」ボタンをクリックしてください。確認後、アカウントが完全に削除されます。"
      }
    ]
  },
  {
    category: "相続プラン",
    questions: [
      {
        q: "相続プランはどのように作成されますか？",
        a: "AIが入力された資産情報と家族構成を分析し、最適な相続プランを提案します。法定相続分や税制も考慮されます。"
      },
      {
        q: "提案された相続プランを変更できますか？",
        a: "はい、提案されたプランは編集可能です。各相続人の割合を調整したり、特定の資産の分配を変更したりできます。"
      }
    ]
  },
  {
    category: "法的アドバイス",
    questions: [
      {
        q: "このアプリで作成した遺言書は法的に有効ですか？",
        a: "アプリで作成した遺言書のドラフトは、法的助言ではありません。正式な遺言書として認められるためには、法律の定める方式に従って作成する必要があります。専門家（弁護士や公証人）に相談することをおすすめします。"
      },
      {
        q: "専門家への相談は必要ですか？",
        a: "複雑な資産状況や家族関係がある場合は、専門家への相談をおすすめします。アプリ内で専門家との相談予約も可能です。"
      }
    ]
  }
]

const userGuides = [
  {
    title: "はじめての相続プラン作成",
    description: "相続プランナーを使って初めての相続プランを作成する方法を説明します。",
    videoUrl: "https://example.com/tutorial1.mp4",
    thumbnailUrl: "/placeholder.svg?height=200&width=300"
  },
  {
    title: "資産情報の入力方法",
    description: "正確な相続プランのために、資産情報を詳細に入力する方法を解説します。",
    videoUrl: "https://example.com/tutorial2.mp4",
    thumbnailUrl: "/placeholder.svg?height=200&width=300"
  },
  {
    title: "遺言書ドラフトの編集",
    description: "AIが生成した遺言書ドラフトをカスタマイズする方法を紹介します。",
    videoUrl: "https://example.com/tutorial3.mp4",
    thumbnailUrl: "/placeholder.svg?height=200&width=300"
  }
]

export function HelpSupport() {
  const [contactName, setContactName] = useState('')
  const [contactEmail, setContactEmail] = useState('')
  const [contactMessage, setContactMessage] = useState('')

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // ここで実際のお問い合わせ送信処理を行います（バックエンドとの連携が必要）
    alert('お問い合わせが送信されました。')
    setContactName('')
    setContactEmail('')
    setContactMessage('')
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">ヘルプ＆サポート</h1>
      <p className="text-muted-foreground mb-8">
        相続プランナーの使い方や、よくある質問への回答を提供しています。
      </p>

      <Tabs defaultValue="faq">
        <TabsList>
          <TabsTrigger value="faq">よくある質問</TabsTrigger>
          <TabsTrigger value="guide">ユーザーガイド</TabsTrigger>
          <TabsTrigger value="contact">お問い合わせ</TabsTrigger>
          <TabsTrigger value="accessibility">アクセシビリティ</TabsTrigger>
        </TabsList>

        <TabsContent value="faq">
          <Card>
            <CardHeader>
              <CardTitle>よくある質問（FAQ）</CardTitle>
              <CardDescription>カテゴリ別に整理された質問と回答をご覧ください。</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((category, index) => (
                  <AccordionItem value={`category-${index}`} key={index}>
                    <AccordionTrigger>{category.category}</AccordionTrigger>
                    <AccordionContent>
                      <Accordion type="single" collapsible className="w-full">
                        {category.questions.map((item, qIndex) => (
                          <AccordionItem value={`question-${index}-${qIndex}`} key={qIndex}>
                            <AccordionTrigger>{item.q}</AccordionTrigger>
                            <AccordionContent>{item.a}</AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="guide">
          <Card>
            <CardHeader>
              <CardTitle>ユーザーガイド</CardTitle>
              <CardDescription>相続プランナーの使い方を動画で解説しています。</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {userGuides.map((guide, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle>{guide.title}</CardTitle>
                      <CardDescription>{guide.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="relative">
                        <img src={guide.thumbnailUrl} alt={guide.title} className="w-full h-auto rounded-md" />
                        <a href={guide.videoUrl} target="_blank" rel="noopener noreferrer" className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white rounded-md">
                          <PlayCircle className="w-12 h-12" />
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="contact">
          <Card>
            <CardHeader>
              <CardTitle>お問い合わせ</CardTitle>
              <CardDescription>ご質問やご意見がございましたら、以下のフォームからお問い合わせください。</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">お名前</Label>
                  <Input id="name" value={contactName} onChange={(e) => setContactName(e.target.value)} required />
                </div>
                <div>
                  <Label htmlFor="email">メールアドレス</Label>
                  <Input id="email" type="email" value={contactEmail} onChange={(e) => setContactEmail(e.target.value)} required />
                </div>
                <div>
                  <Label htmlFor="message">お問い合わせ内容</Label>
                  <Textarea id="message" value={contactMessage} onChange={(e) => setContactMessage(e.target.value)} required />
                </div>
                <Button type="submit">送信</Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="accessibility">
          <Card>
            <CardHeader>
              <CardTitle>アクセシビリティ情報</CardTitle>
              <CardDescription>相続プランナーのアクセシビリティ機能について説明します。</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">キーボードナビゲーション</h3>
                <p>すべての機能はキーボードのみで操作可能です。Tabキーで要素間を移動し、Enterキーで選択します。</p>

                <h3 className="text-lg font-semibold">スクリーンリーダー対応</h3>
                <p>適切なARIAラベルとランドマークを使用しており、スクリーンリーダーでの閲覧に最適化されています。</p>

                <h3 className="text-lg font-semibold">テキストサイズの調整</h3>
                <p>ブラウザの設定でテキストサイズを変更できます。レイアウトはテキストサイズの変更に対応しています。</p>

                <h3 className="text-lg font-semibold">コントラスト</h3>
                <p>テキストと背景のコントラスト比は、WCAG 2.1のレベルAAに準拠しています。</p>

                <h3 className="text-lg font-semibold">代替テキスト</h3>
                <p>すべての画像に適切な代替テキストが提供されています。</p>

                <div className="flex items-center mt-4 p-4 bg-yellow-100 rounded-md">
                  <AlertCircle className="text-yellow-500 mr-2" />
                  <p>アクセシビリティに関する問題や改善のご提案がございましたら、お問い合わせフォームからご連絡ください。</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}