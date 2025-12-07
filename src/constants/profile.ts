import { Profile } from '../types'

/**
 * プロフィール情報
 * 名前、肩書き、経験、専門分野、連絡先などを含む
 */
export const PROFILE: Profile = {
  name: "Plum",
  image: "/profile.png",
  title: "フルスタックエンジニア",
  subtitle: "設計 → フロント → バックエンド → インフラまで一貫対応",
  experience: "4年の開発実務経験をもつシステムエンジニアです。",
  description: "業務システム開発、API連携ツール、AWSインフラ構築、業務自動化など、",
  tagline: "業務課題のヒアリングから構成提案・実装まで完結できるエンジニア",
  
  expertise: [
    { title: "Webシステム開発", description: "PHP/Laravel管理システム、React動的UI" },
    { title: "Python自動化/API連携", description: "業務効率化、Webスクレイピング" },
    { title: "AWSインフラ構築", description: "小〜中規模システムの構成設計" },
    { title: "Windows業務アプリ", description: "C#/.NET、Excel VBA自動化" },
    { title: "Excelマクロ/GAS自動化", description: "業務プロセス自動化、データ処理" }
  ],
  
  certifications: [
    { 
      name: "AWS Certified Solutions Architect - Associate",
      icon: "https://images.credly.com/size/340x340/images/0e284c3f-5164-4b21-8660-0d84737941bc/image.png"
    },
    { 
      name: "AWS Certified Cloud Practitioner",
      icon: "https://images.credly.com/size/340x340/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png"
    },
    { 
      name: "OSS-DB Silver"
    },
    { 
      name: "基本情報技術者試験"
    }
  ],
  
  contact: {
    github: "https://github.com/ryuta-umeda99",
    username: "@ryuta-umeda99"
  }
}
