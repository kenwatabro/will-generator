'use client'

import React from 'react'
import Link from 'next/link'
import { 
  BarChart, 
  Users, 
  FileText, 
  Edit, 
  MessageSquare, 
  Settings, 
  LogOut,
  ChevronRight
} from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function Dashboard() {
  // 仮のユーザーデータ
  const user = {
    name: "山田 太郎",
    email: "taro.yamada@example.com",
    progress: 60
  }

  // 仮の保存済みドラフトと提案データ
  const savedItems = [
    { id: 1, type: "draft", title: "遺言書ドラフト 2024/03/15", date: "2024-03-15" },
    { id: 2, type: "proposal", title: "相続プラン案 A", date: "2024-03-10" },
    { id: 3, type: "draft", title: "遺言書ドラフト 2024/02/28", date: "2024-02-28" },
  ]

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* ヘッダー */}
      <header className="bg-primary text-primary-foreground py-4 px-6">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">相続プランナー</h1>
          <div className="flex items-center space-x-4">
            <Avatar>
              <AvatarImage src="/placeholder.svg?height=32&width=32" alt={user.name} />
              <AvatarFallback>{user.name[0]}</AvatarFallback>
            </Avatar>
            <span>{user.name}</span>
            <Button variant="secondary" size="sm">
              <LogOut className="mr-2 h-4 w-4" />
              ログアウト
            </Button>
          </div>
        </div>
      </header>

      <div className="flex-1 flex">
        {/* サイドバーナビゲーション */}
        <nav className="w-64 bg-muted p-6 space-y-2">
          <Button variant="ghost" className="w-full justify-start" asChild>
            <Link href="/dashboard">
              <BarChart className="mr-2 h-4 w-4" />
              ダッシュボード
            </Link>
          </Button>
          <Button variant="ghost" className="w-full justify-start" asChild>
            <Link href="/dashboard/asset-input">
              <Users className="mr-2 h-4 w-4" />
              資産情報入力
            </Link>
          </Button>
          <Button variant="ghost" className="w-full justify-start" asChild>
            <Link href="/dashboard/family">
              <Users className="mr-2 h-4 w-4" />
              家族構成入力
            </Link>
          </Button>
          <Button variant="ghost" className="w-full justify-start" asChild>
            <Link href="/dashboard/inheritance-plan-proposal">
              <FileText className="mr-2 h-4 w-4" />
              相続プラン生成
            </Link>
          </Button>
          <Button variant="ghost" className="w-full justify-start" asChild>
            <Link href="/dashboard/will-draft">
              <Edit className="mr-2 h-4 w-4" />
              遺言書ドラフトの編集
            </Link>
          </Button>
          <Button variant="ghost" className="w-full justify-start" asChild>
            <Link href="/dashboard/expert-consultation">
              <MessageSquare className="mr-2 h-4 w-4" />
              専門家への相談
            </Link>
          </Button>
          <Button variant="ghost" className="w-full justify-start" asChild>
            <Link href="/settings">
              <Settings className="mr-2 h-4 w-4" />
              設定
            </Link>
          </Button>
        </nav>

        {/* メインコンテンツ */}
        <main className="flex-1 p-6 overflow-y-auto">
          <div className="max-w-4xl mx-auto space-y-6">
            {/* 進捗状況 */}
            <Card>
              <CardHeader>
                <CardTitle>進捗状況</CardTitle>
                <CardDescription>あなたの相続プランニングの進捗状況です</CardDescription>
              </CardHeader>
              <CardContent>
                <Progress value={user.progress} className="w-full" />
                <p className="mt-2 text-sm text-muted-foreground">全体の {user.progress}% が完了しています</p>
              </CardContent>
            </Card>

            {/* 次のステップ */}
            <Card>
              <CardHeader>
                <CardTitle>次のステップ</CardTitle>
                <CardDescription>相続プランを完成させるために、次のステップを実行してください</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <ChevronRight className="mr-2 h-4 w-4 text-primary" />
                    <span>資産情報を入力する</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="mr-2 h-4 w-4 text-primary" />
                    <span>家族構成を登録する</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="mr-2 h-4 w-4 text-primary" />
                    <span>相続プランを確認する</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* 保存済みドラフトと提案 */}
            <Card>
              <CardHeader>
                <CardTitle>保存済みドラフトと提案</CardTitle>
                <CardDescription>これまでに作成したドラフトと提案の一覧です</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {savedItems.map((item) => (
                    <li key={item.id} className="flex items-center justify-between">
                      <span className="flex items-center">
                        {item.type === 'draft' ? (
                          <Edit className="mr-2 h-4 w-4 text-muted-foreground" />
                        ) : (
                          <FileText className="mr-2 h-4 w-4 text-muted-foreground" />
                        )}
                        {item.title}
                      </span>
                      <span className="text-sm text-muted-foreground">{item.date}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>

      {/* フッター */}
      <footer className="bg-muted py-4 px-6">
        <div className="container mx-auto text-center text-sm text-muted-foreground">
          &copy; 2024 相続プランナー. All rights reserved.
        </div>
      </footer>
    </div>
  )
}