'use client'

import React, { useState } from 'react'
import { Calendar } from '@/components/ui/calendar'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MessageCircle, Phone, Mail, MapPin } from 'lucide-react'

// 仮の専門家データ
const experts = [
  {
    id: 1,
    name: "山田 太郎",
    title: "弁護士",
    specialization: "相続法",
    image: "/placeholder.svg?height=100&width=100",
    phone: "03-1234-5678",
    email: "yamada@example.com",
    address: "東京都千代田区丸の内1-1-1",
  },
  {
    id: 2,
    name: "佐藤 花子",
    title: "司法書士",
    specialization: "遺言・相続手続き",
    image: "/placeholder.svg?height=100&width=100",
    phone: "03-2345-6789",
    email: "sato@example.com",
    address: "東京都新宿区西新宿2-8-1",
  },
]

export function ExpertConsultation() {
  const [selectedExpert, setSelectedExpert] = useState(experts[0])
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined)
  const [consultationType, setConsultationType] = useState<string>("")
  const [chatbotOpen, setChatbotOpen] = useState(false)

  const handleExpertSelect = (expertId: number) => {
    const expert = experts.find(e => e.id === expertId)
    if (expert) {
      setSelectedExpert(expert)
    }
  }

  const handleDateSelect = (date: Date | undefined) => {
    setSelectedDate(date)
  }

  const handleConsultationTypeChange = (value: string) => {
    setConsultationType(value)
  }

  const handleReservation = () => {
    // ここで実際の予約処理を行います（バックエンドとの連携が必要）
    alert(`予約が完了しました。\n専門家: ${selectedExpert.name}\n日時: ${selectedDate?.toLocaleString()}\n相談方法: ${consultationType}`)
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">専門家への相談</h1>
      <p className="text-muted-foreground mb-8">
        相続に関する専門家に相談することができます。以下から専門家を選び、予約を行ってください。
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">専門家一覧</h2>
          {experts.map((expert) => (
            <Card key={expert.id} className="mb-4">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage src={expert.image} alt={expert.name} />
                    <AvatarFallback>{expert.name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle>{expert.name}</CardTitle>
                    <CardDescription>{expert.title} - {expert.specialization}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Phone className="mr-2 h-4 w-4" />
                    <span>{expert.phone}</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="mr-2 h-4 w-4" />
                    <span>{expert.email}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="mr-2 h-4 w-4" />
                    <span>{expert.address}</span>
                  </div>
                </div>
                <Button 
                  className="mt-4 w-full"
                  onClick={() => handleExpertSelect(expert.id)}
                >
                  この専門家を選択
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">予約</h2>
          <Card>
            <CardHeader>
              <CardTitle>相談予約</CardTitle>
              <CardDescription>日時と相談方法を選択してください。</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="expert">選択中の専門家</Label>
                  <Input id="expert" value={selectedExpert.name} readOnly />
                </div>
                <div>
                  <Label>日付を選択</Label>
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={handleDateSelect}
                    className="rounded-md border"
                  />
                </div>
                <div>
                  <Label htmlFor="consultation-type">相談方法</Label>
                  <Select onValueChange={handleConsultationTypeChange}>
                    <SelectTrigger id="consultation-type">
                      <SelectValue placeholder="相談方法を選択" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="online">オンライン相談</SelectItem>
                      <SelectItem value="phone">電話相談</SelectItem>
                      <SelectItem value="in-person">対面相談</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button onClick={handleReservation} className="w-full">
                  予約する
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* チャットボットサポート */}
      <div className="fixed bottom-4 right-4">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full h-12 w-12"
          onClick={() => setChatbotOpen(!chatbotOpen)}
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
        {chatbotOpen && (
          <Card className="absolute bottom-16 right-0 w-80">
            <CardHeader>
              <CardTitle>チャットボットサポート</CardTitle>
              <CardDescription>相談の準備をサポートします。</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p>こんにちは！専門家への相談について、何か準備すべきことはありますか？</p>
                <Textarea placeholder="ここに質問を入力してください..." />
                <Button className="w-full">送信</Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}