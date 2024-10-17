'use client'

import React, { useState } from 'react'
import { Plus, Trash2, MessageCircle } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

type FamilyMember = {
  id: number;
  name: string;
  relation: string;
  age: string;
  specialCircumstances: string;
}

export function FamilyStructure() {
  const [familyMembers, setFamilyMembers] = useState<FamilyMember[]>([])
  const [chatbotOpen, setChatbotOpen] = useState(false)

  const addFamilyMember = () => {
    const newMember: FamilyMember = {
      id: Date.now(),
      name: '',
      relation: '',
      age: '',
      specialCircumstances: ''
    }
    setFamilyMembers([...familyMembers, newMember])
  }

  const updateFamilyMember = (id: number, field: keyof FamilyMember, value: string) => {
    setFamilyMembers(familyMembers.map(member => 
      member.id === id ? { ...member, [field]: value } : member
    ))
  }

  const removeFamilyMember = (id: number) => {
    setFamilyMembers(familyMembers.filter(member => member.id !== id))
  }

  const renderFamilyTree = () => {
    return (
      <div className="mt-8 p-4 bg-muted rounded-lg">
        <h3 className="text-lg font-semibold mb-4">家系図</h3>
        <div className="flex flex-wrap gap-4">
          {familyMembers.map(member => (
            <div key={member.id} className="bg-card p-2 rounded-md text-center">
              <p className="font-medium">{member.name || '名前未入力'}</p>
              <p className="text-sm text-muted-foreground">{member.relation || '関係未入力'}</p>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">家族構成入力</h1>
      <p className="text-muted-foreground mb-8">あなたの家族構成を入力してください。この情報は最適な相続プランの作成に使用されます。</p>

      <div className="space-y-6">
        {familyMembers.map(member => (
          <Card key={member.id}>
            <CardHeader>
              <CardTitle>家族メンバー情報</CardTitle>
              <CardDescription>家族メンバーの詳細情報を入力してください。</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor={`name-${member.id}`}>名前</Label>
                    <Input
                      id={`name-${member.id}`}
                      value={member.name}
                      onChange={(e) => updateFamilyMember(member.id, 'name', e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor={`relation-${member.id}`}>続柄</Label>
                    <Select
                      value={member.relation}
                      onValueChange={(value) => updateFamilyMember(member.id, 'relation', value)}
                    >
                      <SelectTrigger id={`relation-${member.id}`}>
                        <SelectValue placeholder="続柄を選択" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="spouse">配偶者</SelectItem>
                        <SelectItem value="child">子</SelectItem>
                        <SelectItem value="parent">親</SelectItem>
                        <SelectItem value="sibling">兄弟姉妹</SelectItem>
                        <SelectItem value="other">その他</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor={`age-${member.id}`}>年齢</Label>
                  <Input
                    id={`age-${member.id}`}
                    type="number"
                    value={member.age}
                    onChange={(e) => updateFamilyMember(member.id, 'age', e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor={`circumstances-${member.id}`}>特別な事情</Label>
                  <Textarea
                    id={`circumstances-${member.id}`}
                    placeholder="障害、扶養義務などの特別な事情があれば入力してください。"
                    value={member.specialCircumstances}
                    onChange={(e) => updateFamilyMember(member.id, 'specialCircumstances', e.target.value)}
                  />
                </div>
                <Button
                  variant="destructive"
                  onClick={() => removeFamilyMember(member.id)}
                  className="w-full sm:w-auto"
                >
                  <Trash2 className="mr-2 h-4 w-4" />
                  このメンバーを削除
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}

        <Button onClick={addFamilyMember} className="w-full">
          <Plus className="mr-2 h-4 w-4" />
          家族メンバーを追加
        </Button>

        {renderFamilyTree()}

        <div className="mt-8 flex justify-end">
          <Button type="submit">情報を保存</Button>
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
              <CardDescription>家族構成の入力をサポートします。</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p>こんにちは！家族構成の入力について、何かご質問はありますか？</p>
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