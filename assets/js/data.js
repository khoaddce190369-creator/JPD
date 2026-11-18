/* ============================================================
   data.js — JPD123 Study Hub Ultimate Engine
   - 500 từ vựng Bài 1–7 kèm cách đọc chuẩn
   - 10 Đề Midterm chuẩn Bài 4–5 (150 câu không trùng lặp)
   - Lộ trình 21 Ngày thi đấu bám sát lịch 30/11 -> 20/12
   - Ngân hàng Speaking FE chuẩn Min Thep (35 bài đọc audio + 63 câu talking + 62 tranh)
   - Đầy đủ GRAMMAR_BANK, ROADMAP, SPEAKING_BANK, SPEAKING_DATA
   ============================================================ */

const LESSONS = [
  {
    "id": 1,
    "title": "Bài 1 - はじめまして",
    "vnTitle": "Tự giới thiệu: tên, quốc tịch, tuổi, sinh nhật, sở thích",
    "days": "Ngày 1-4",
    "objective": "Dùng được các mẫu tự giới thiệu cơ bản, trả lời được câu hỏi về tên, quốc gia, ngày sinh, tuổi và sở thích.",
    "katakana": [
      {
        "word": "スポーツ",
        "note": "trường âm ー"
      },
      {
        "word": "サッカー",
        "note": "âm ngắt ッ"
      },
      {
        "word": "テニス",
        "note": "katakana cơ bản"
      },
      {
        "word": "ブラジル",
        "note": "âm ngoại lai"
      }
    ],
    "vocab": [
      {
        "jp": "私",
        "vi": "tôi",
        "reading": "わたし"
      },
      {
        "jp": "（お）名前",
        "vi": "tên",
        "reading": "なまえ"
      },
      {
        "jp": "（お）国",
        "vi": "nước",
        "reading": "くに"
      },
      {
        "jp": "日本",
        "vi": "Nhật Bản",
        "reading": "にほん"
      },
      {
        "jp": "アメリカ",
        "vi": "Mỹ",
        "reading": "アメリカ"
      },
      {
        "jp": "イタリア",
        "vi": "Ý",
        "reading": "イタリア"
      },
      {
        "jp": "オーストラリア",
        "vi": "Úc",
        "reading": "オーストラリア"
      },
      {
        "jp": "韓国",
        "vi": "Hàn Quốc",
        "reading": "かんこく"
      },
      {
        "jp": "タイ",
        "vi": "Thái Lan",
        "reading": "タイ"
      },
      {
        "jp": "中国",
        "vi": "Trung Quốc",
        "reading": "ちゅうごく"
      },
      {
        "jp": "ロシア",
        "vi": "Nga",
        "reading": "ロシア"
      },
      {
        "jp": "高校",
        "vi": "trung học phổ thông",
        "reading": "こうこう"
      },
      {
        "jp": "大学",
        "vi": "đại học",
        "reading": "だいがく"
      },
      {
        "jp": "日本語学校",
        "vi": "trường tiếng Nhật",
        "reading": "にほんごがっこう"
      },
      {
        "jp": "（お）仕事",
        "vi": "công việc",
        "reading": "しごと"
      },
      {
        "jp": "学生",
        "vi": "học sinh / sinh viên",
        "reading": "がくせい"
      },
      {
        "jp": "先生",
        "vi": "giáo viên",
        "reading": "せんせい"
      },
      {
        "jp": "教師",
        "vi": "giáo viên",
        "reading": "きょうし"
      },
      {
        "jp": "会社員",
        "vi": "nhân viên công ty",
        "reading": "かいしゃいん"
      },
      {
        "jp": "社員",
        "vi": "nhân viên công ty",
        "reading": "しゃいん"
      },
      {
        "jp": "～さん",
        "vi": "anh/chị ~",
        "reading": "～さん"
      },
      {
        "jp": "～人",
        "vi": "người ~",
        "reading": "じん"
      },
      {
        "jp": "どちら",
        "vi": "nào / ở đâu",
        "reading": "どちら"
      },
      {
        "jp": "はじめまして",
        "vi": "rất hân hạnh gặp lần đầu",
        "reading": "はじめまして"
      },
      {
        "jp": "（どうぞ）よろしくお願いします",
        "vi": "rất mong được giúp đỡ",
        "reading": "よろしくおねがいします"
      },
      {
        "jp": "こちらこそ",
        "vi": "chính tôi cũng vậy",
        "reading": "こちらこそ"
      },
      {
        "jp": "あのう",
        "vi": "à... / ừm...",
        "reading": "あのう"
      },
      {
        "jp": "すみません",
        "vi": "xin lỗi",
        "reading": "すみません"
      },
      {
        "jp": "そうですか",
        "vi": "thế à",
        "reading": "そうですか"
      },
      {
        "jp": "はい",
        "vi": "vâng",
        "reading": "はい"
      },
      {
        "jp": "いいえ",
        "vi": "không",
        "reading": "いいえ"
      },
      {
        "jp": "誕生日",
        "vi": "sinh nhật",
        "reading": "たんじょうび"
      },
      {
        "jp": "ブラジル",
        "vi": "Brazil",
        "reading": "ブラジル"
      },
      {
        "jp": "～月",
        "vi": "tháng ~",
        "reading": "がつ"
      },
      {
        "jp": "～日",
        "vi": "ngày ~",
        "reading": "にち"
      },
      {
        "jp": "～歳",
        "vi": "~ tuổi",
        "reading": "さい"
      },
      {
        "jp": "いつ",
        "vi": "khi nào",
        "reading": "いつ"
      },
      {
        "jp": "趣味",
        "vi": "sở thích",
        "reading": "しゅみ"
      },
      {
        "jp": "スポーツ",
        "vi": "thể thao",
        "reading": "スポーツ"
      },
      {
        "jp": "サッカー",
        "vi": "bóng đá",
        "reading": "サッカー"
      },
      {
        "jp": "テニス",
        "vi": "quần vợt",
        "reading": "テニス"
      },
      {
        "jp": "水泳",
        "vi": "bơi",
        "reading": "すいえい"
      },
      {
        "jp": "映画",
        "vi": "điện ảnh / phim",
        "reading": "えいが"
      },
      {
        "jp": "音楽",
        "vi": "âm nhạc",
        "reading": "おんがく"
      },
      {
        "jp": "読書",
        "vi": "đọc sách",
        "reading": "どくしょ"
      },
      {
        "jp": "旅行",
        "vi": "du lịch",
        "reading": "りょこう"
      },
      {
        "jp": "料理",
        "vi": "nấu ăn",
        "reading": "りょうり"
      },
      {
        "jp": "何",
        "vi": "gì / cái gì",
        "reading": "なに・なん"
      },
      {
        "jp": "あ（っ）",
        "vi": "a / à",
        "reading": "あ（っ）"
      },
      {
        "jp": "わあ",
        "vi": "ôi",
        "reading": "わあ"
      },
      {
        "jp": "同じですね",
        "vi": "giống nhau nhỉ",
        "reading": "おなじですね"
      },
      {
        "jp": "国",
        "reading": "くに",
        "vi": "Đất nước"
      },
      {
        "jp": "大学生",
        "reading": "だいがくせい",
        "vi": "Sinh viên đại học"
      },
      {
        "jp": "日本人",
        "reading": "にほんじん",
        "vi": "Người Nhật"
      },
      {
        "jp": "初めまして",
        "reading": "はじめまして",
        "vi": "Rất vui được làm quen"
      },
      {
        "jp": "どうぞよろしく",
        "reading": "どうぞよろしく",
        "vi": "Mong được giúp đỡ"
      },
      {
        "jp": "お名前",
        "reading": "おなまえ",
        "vi": "Tên (lịch sự)"
      },
      {
        "jp": "お国",
        "reading": "おくに",
        "vi": "Đất nước (lịch sự)"
      },
      {
        "jp": "年齢",
        "reading": "ねんれい",
        "vi": "Tuổi"
      }
    ],
    "grammar": [
      {
        "pattern": "N1 は N2 です",
        "use": "Giới thiệu / khẳng định",
        "example": "わたしはベトナム人です。",
        "vocabLink": "Gắn với 国, 学生, 大学生."
      },
      {
        "pattern": "N1 は N2 ですか",
        "use": "Hỏi xác nhận",
        "example": "ミンさんは学生ですか。",
        "vocabLink": "Gắn với 学生, 日本人."
      },
      {
        "pattern": "N は どちら / いつ / 何ですか",
        "use": "Hỏi quốc gia, sinh nhật, sở thích",
        "example": "お国はどちらですか。誕生日はいつですか。趣味は何ですか。",
        "vocabLink": "Gắn với 国, 誕生日, 趣味."
      },
      {
        "pattern": "N1 の N2",
        "use": "Sở hữu / bổ nghĩa",
        "example": "わたしの誕生日は五月四日です。",
        "vocabLink": "Gắn với 名前, 趣味."
      },
      {
        "pattern": "N1 と N2",
        "use": "Liệt kê 2 danh từ",
        "example": "趣味は音楽と旅行です。",
        "vocabLink": "Gắn với sở thích."
      },
      {
        "pattern": "N も",
        "use": "Cũng",
        "example": "わたしの趣味も料理です。",
        "vocabLink": "Làm câu tự nhiên hơn."
      }
    ],
    "kanji": [
      {
        "word": "私",
        "reading": "わたし",
        "meaning": "tôi"
      },
      {
        "word": "人",
        "reading": "ひと / じん",
        "meaning": "người"
      },
      {
        "word": "才",
        "reading": "さい",
        "meaning": "tuổi"
      },
      {
        "word": "学校",
        "reading": "がっこう",
        "meaning": "trường học"
      },
      {
        "word": "大学",
        "reading": "だいがく",
        "meaning": "đại học"
      },
      {
        "word": "大学生",
        "reading": "だいがくせい",
        "meaning": "sinh viên đại học"
      },
      {
        "word": "日本",
        "reading": "にほん",
        "meaning": "Nhật Bản"
      },
      {
        "word": "日本語",
        "reading": "にほんご",
        "meaning": "tiếng Nhật"
      },
      {
        "word": "日本人",
        "reading": "にほんじん",
        "meaning": "người Nhật"
      },
      {
        "word": "名前",
        "reading": "なまえ",
        "meaning": "tên"
      },
      {
        "word": "国",
        "reading": "くに",
        "meaning": "quốc gia"
      }
    ],
    "reading": "はじめまして。わたしはミンです。ベトナム人です。大学生です。日本語を勉強しています。誕生日は五月四日です。趣味は音楽と旅行です。スポーツも好きです。サッカーはあまり上手じゃありませんが、見るのは好きです。",
    "speaking": [
      {
        "q": "お名前は何ですか。",
        "a": "わたしの名前は ___ です。"
      },
      {
        "q": "お国はどちらですか。",
        "a": "ベトナムです。"
      },
      {
        "q": "趣味は何ですか。",
        "a": "趣味は 音楽 と 読書 です。"
      }
    ]
  },
  {
    "id": 2,
    "title": "Bài 2 - 買い物・食事",
    "vnTitle": "Mua sắm, hỏi chỗ, hỏi giá, gọi món",
    "days": "Ngày 5-8",
    "objective": "Xử lý được các mẫu hỏi địa điểm, hỏi giá, gọi món.",
    "katakana": [
      {
        "word": "スーパー",
        "note": "trường âm ー"
      },
      {
        "word": "レストラン",
        "note": "katakana dài"
      },
      {
        "word": "エレベーター",
        "note": "trường âm ー"
      },
      {
        "word": "Tシャツ",
        "note": "chữ cái Latin + katakana"
      }
    ],
    "vocab": [
      {
        "jp": "おいしい",
        "vi": "ngon",
        "reading": "おいしい"
      },
      {
        "jp": "ここ／こちら",
        "vi": "chỗ này",
        "reading": "ここ"
      },
      {
        "jp": "そこ／そちら",
        "vi": "chỗ đấy",
        "reading": "そこ"
      },
      {
        "jp": "あそこ／あちら",
        "vi": "chỗ kia",
        "reading": "あそこ"
      },
      {
        "jp": "インフォメーション",
        "vi": "thông tin",
        "reading": "インフォメーション"
      },
      {
        "jp": "ＡＴＭ",
        "vi": "máy rút tiền",
        "reading": "ＡＴＭ"
      },
      {
        "jp": "エスカレーター",
        "vi": "cầu thang cuốn",
        "reading": "カレー"
      },
      {
        "jp": "エレベーター",
        "vi": "thang máy",
        "reading": "エレベーター"
      },
      {
        "jp": "喫煙所",
        "vi": "chỗ hút thuốc",
        "reading": "きつえんじょ"
      },
      {
        "jp": "トイレ",
        "vi": "toilet",
        "reading": "トイレ"
      },
      {
        "jp": "レジ",
        "vi": "quầy tính tiền",
        "reading": "レジ"
      },
      {
        "jp": "喫茶店",
        "vi": "quán trà / cà phê",
        "reading": "きっさてん"
      },
      {
        "jp": "スーパー",
        "vi": "siêu thị",
        "reading": "スーパー"
      },
      {
        "jp": "100円ショップ",
        "vi": "cửa hàng 100 yên",
        "reading": "ひゃくえんショップ"
      },
      {
        "jp": "レストラン",
        "vi": "nhà hàng",
        "reading": "レストラン"
      },
      {
        "jp": "地下",
        "vi": "dưới lòng đất",
        "reading": "ちか"
      },
      {
        "jp": "カメラ",
        "vi": "máy ảnh",
        "reading": "カメラ"
      },
      {
        "jp": "携帯電話",
        "vi": "điện thoại cầm tay",
        "reading": "けいたいでんわ"
      },
      {
        "jp": "電子辞書",
        "vi": "từ điển điện tử",
        "reading": "でんしじしょ"
      },
      {
        "jp": "パソコン",
        "vi": "máy vi tính",
        "reading": "パソコン"
      },
      {
        "jp": "靴",
        "vi": "giày",
        "reading": "くつ"
      },
      {
        "jp": "消しゴム",
        "vi": "tẩy",
        "reading": "けしゴム"
      },
      {
        "jp": "ペン",
        "vi": "bút",
        "reading": "ペン"
      },
      {
        "jp": "トイレットペーパー",
        "vi": "giấy vệ sinh",
        "reading": "トイレットペーパー"
      },
      {
        "jp": "本",
        "vi": "sách",
        "reading": "ほん"
      },
      {
        "jp": "油",
        "vi": "dầu",
        "reading": "あぶら"
      },
      {
        "jp": "ケーキ",
        "vi": "bánh ngọt",
        "reading": "ケーキ"
      },
      {
        "jp": "米",
        "vi": "gạo",
        "reading": "こめ"
      },
      {
        "jp": "卵",
        "vi": "trứng",
        "reading": "たまご"
      },
      {
        "jp": "パン",
        "vi": "bánh mì",
        "reading": "パン"
      },
      {
        "jp": "水",
        "vi": "nước",
        "reading": "みず"
      },
      {
        "jp": "店員",
        "vi": "người bán hàng",
        "reading": "てんいん"
      },
      {
        "jp": "～階",
        "vi": "tầng ~",
        "reading": "かい"
      },
      {
        "jp": "～屋",
        "vi": "cửa hàng ~",
        "reading": "や"
      },
      {
        "jp": "どこ",
        "vi": "ở đâu",
        "reading": "どこ"
      },
      {
        "jp": "いらっしゃいませ",
        "vi": "xin chào quý khách",
        "reading": "いらっしゃいませ"
      },
      {
        "jp": "（どうも）ありがとうございます",
        "vi": "xin cảm ơn",
        "reading": "（どうも）ありがとうございます"
      },
      {
        "jp": "これ",
        "vi": "cái này",
        "reading": "これ"
      },
      {
        "jp": "それ",
        "vi": "cái đó",
        "reading": "それ"
      },
      {
        "jp": "あれ",
        "vi": "cái kia",
        "reading": "あれ"
      },
      {
        "jp": "この",
        "vi": "này",
        "reading": "この"
      },
      {
        "jp": "その",
        "vi": "đó",
        "reading": "その"
      },
      {
        "jp": "あの",
        "vi": "kia",
        "reading": "あの"
      },
      {
        "jp": "かばん",
        "vi": "túi / cặp",
        "reading": "かばん"
      },
      {
        "jp": "ズボン",
        "vi": "quần",
        "reading": "ズボン"
      },
      {
        "jp": "Ｔシャツ",
        "vi": "áo phông",
        "reading": "Ｔシャツ"
      },
      {
        "jp": "時計",
        "vi": "đồng hồ",
        "reading": "とけい"
      },
      {
        "jp": "～円",
        "vi": "~ yên",
        "reading": "えん"
      },
      {
        "jp": "いくら",
        "vi": "bao nhiêu tiền",
        "reading": "いくら"
      },
      {
        "jp": "じゃ",
        "vi": "thế thì",
        "reading": "じゃ"
      },
      {
        "jp": "魚",
        "vi": "cá",
        "reading": "さかな"
      },
      {
        "jp": "肉",
        "vi": "thịt",
        "reading": "にく"
      },
      {
        "jp": "牛肉",
        "vi": "thịt bò",
        "reading": "ぎゅうにく"
      },
      {
        "jp": "鶏肉",
        "vi": "thịt gà",
        "reading": "とりにく"
      },
      {
        "jp": "豚肉",
        "vi": "thịt lợn",
        "reading": "ぶたにく"
      },
      {
        "jp": "野菜",
        "vi": "rau",
        "reading": "やさい"
      },
      {
        "jp": "イチゴ",
        "vi": "dâu tây",
        "reading": "イチゴ"
      },
      {
        "jp": "リンゴ",
        "vi": "táo",
        "reading": "リンゴ"
      },
      {
        "jp": "料理",
        "vi": "món ăn",
        "reading": "りょうり"
      },
      {
        "jp": "カレー",
        "vi": "cà ri",
        "reading": "カレー"
      },
      {
        "jp": "スープ",
        "vi": "súp",
        "reading": "スープ"
      },
      {
        "jp": "とんかつ",
        "vi": "thịt heo chiên xù",
        "reading": "とんかつ"
      },
      {
        "jp": "ハンバーグ",
        "vi": "thịt băm rán",
        "reading": "ハンバーグ"
      },
      {
        "jp": "ご飯",
        "vi": "cơm",
        "reading": "ごはん"
      },
      {
        "jp": "ライス",
        "vi": "cơm / rice",
        "reading": "ライス"
      },
      {
        "jp": "ジュース",
        "vi": "nước hoa quả",
        "reading": "ジュース"
      },
      {
        "jp": "コーヒー",
        "vi": "cà phê",
        "reading": "コーヒー"
      },
      {
        "jp": "紅茶",
        "vi": "trà đen",
        "reading": "こうちゃ"
      },
      {
        "jp": "（お）茶",
        "vi": "trà xanh",
        "reading": "ちゃ"
      },
      {
        "jp": "ビール",
        "vi": "bia",
        "reading": "ビール"
      },
      {
        "jp": "ワイン",
        "vi": "rượu vang",
        "reading": "ワイン"
      },
      {
        "jp": "インド",
        "vi": "Ấn Độ",
        "reading": "インド"
      },
      {
        "jp": "ドイツ",
        "vi": "Đức",
        "reading": "ドイツ"
      },
      {
        "jp": "フランス",
        "vi": "Pháp",
        "reading": "フランス"
      },
      {
        "jp": "財布",
        "vi": "ví",
        "reading": "さいふ"
      },
      {
        "jp": "英語",
        "vi": "tiếng Anh",
        "reading": "えいご"
      },
      {
        "jp": "～語",
        "vi": "tiếng ~",
        "reading": "ご"
      },
      {
        "jp": "～つ",
        "vi": "~ cái",
        "reading": "～つ"
      },
      {
        "jp": "誰",
        "vi": "ai",
        "reading": "だれ"
      },
      {
        "jp": "注文をお願いします",
        "vi": "cho tôi gọi món",
        "reading": "ちゅうもんをおねがいします"
      },
      {
        "jp": "どうぞ",
        "vi": "xin mời",
        "reading": "どうぞ"
      },
      {
        "jp": "こちらへどうぞ",
        "vi": "xin mời đến đây",
        "reading": "こちらへどうぞ"
      },
      {
        "jp": "メニュー",
        "vi": "thực đơn",
        "reading": "メニュー"
      },
      {
        "jp": "少々お待ちください",
        "vi": "xin đợi một chút",
        "reading": "しょうしょうおまちください"
      },
      {
        "jp": "ATM",
        "reading": "エーティーエム",
        "vi": "Máy ATM"
      },
      {
        "jp": "ショッピングビル",
        "reading": "ショッピングビル",
        "vi": "Tòa nhà mua sắm"
      },
      {
        "jp": "案内所",
        "reading": "あんないじょ",
        "vi": "Quầy hướng dẫn"
      },
      {
        "jp": "売り場",
        "reading": "うりば",
        "vi": "Quầy bán hàng"
      },
      {
        "jp": "場所",
        "reading": "ばしょ",
        "vi": "Địa điểm"
      },
      {
        "jp": "値段",
        "reading": "ねだん",
        "vi": "Giá cả"
      },
      {
        "jp": "店",
        "reading": "みせ",
        "vi": "Cửa hàng"
      },
      {
        "jp": "Tシャツ",
        "reading": "ティーシャツ",
        "vi": "Áo thun"
      },
      {
        "jp": "誰の",
        "reading": "だれの",
        "vi": "Của ai"
      },
      {
        "jp": "何の",
        "reading": "なんの",
        "vi": "Loại gì, của gì"
      },
      {
        "jp": "どこの",
        "reading": "どこの",
        "vi": "Của nước nào, ở đâu"
      },
      {
        "jp": "お茶",
        "reading": "おちゃ",
        "vi": "Trà xanh"
      },
      {
        "jp": "お金",
        "reading": "おかね",
        "vi": "Tiền"
      }
    ],
    "grammar": [
      {
        "pattern": "これ / それ / あれ",
        "use": "Chỉ đồ vật",
        "example": "これは10,000円です。",
        "vocabLink": "Gắn với かばん, 時計."
      },
      {
        "pattern": "この / その / あの + N",
        "use": "Chỉ danh từ cụ thể",
        "example": "あのTシャツは3,000円です。",
        "vocabLink": "Gắn với đồ mua sắm."
      },
      {
        "pattern": "ここ / そこ / あそこ / どこ",
        "use": "Hỏi địa điểm",
        "example": "トイレはどこですか。― あそこです。",
        "vocabLink": "Cực hay ra speaking."
      },
      {
        "pattern": "N を（〜つ）ください",
        "use": "Gọi món / mua đồ",
        "example": "カレーを一つください。",
        "vocabLink": "Gắn với カレー, スープ."
      },
      {
        "pattern": "これは いくらですか",
        "use": "Hỏi giá",
        "example": "このかばんはいくらですか。",
        "vocabLink": "Gắn với Tシャツ, かばん."
      },
      {
        "pattern": "何の N / どこの N / 誰の N",
        "use": "Hỏi loại / xuất xứ / chủ sở hữu",
        "example": "これは何のカレーですか。",
        "vocabLink": "Hay ra hỏi đáp."
      },
      {
        "pattern": "〜で 何ですか",
        "use": "Hỏi bằng ngôn ngữ",
        "example": "『ぶたにく』は英語で何ですか。",
        "vocabLink": "Gắn với 英語 / 日本語."
      }
    ],
    "kanji": [
      {
        "word": "一円",
        "reading": "いちえん",
        "meaning": "1 yên"
      },
      {
        "word": "百円",
        "reading": "ひゃくえん",
        "meaning": "100 yên"
      },
      {
        "word": "千円",
        "reading": "せんえん",
        "meaning": "1000 yên"
      },
      {
        "word": "一万円",
        "reading": "いちまんえん",
        "meaning": "10,000 yên"
      },
      {
        "word": "一月",
        "reading": "いちがつ",
        "meaning": "tháng 1"
      },
      {
        "word": "三月",
        "reading": "さんがつ",
        "meaning": "tháng 3"
      },
      {
        "word": "五月",
        "reading": "ごがつ",
        "meaning": "tháng 5"
      },
      {
        "word": "七月",
        "reading": "しちがつ",
        "meaning": "tháng 7"
      },
      {
        "word": "八月",
        "reading": "はちがつ",
        "meaning": "tháng 8"
      },
      {
        "word": "十月",
        "reading": "じゅうがつ",
        "meaning": "tháng 10"
      },
      {
        "word": "十一月",
        "reading": "じゅういちがつ",
        "meaning": "tháng 11"
      },
      {
        "word": "十二月",
        "reading": "じゅうにがつ",
        "meaning": "tháng 12"
      },
      {
        "word": "二人",
        "reading": "ふたり",
        "meaning": "2 người"
      },
      {
        "word": "九人",
        "reading": "きゅうにん",
        "meaning": "9 người"
      }
    ],
    "reading": "きょう、スーパーへ行きました。レジの近くでTシャツを見ました。あのTシャツはきれいでした。店員さんに『これはいくらですか』と聞きました。三千円でした。それからレストランでカレーとスープを注文しました。コーヒーも飲みました。",
    "speaking": [
      {
        "q": "トイレはどこですか。",
        "a": "あそこです。/ こちらです。"
      },
      {
        "q": "このTシャツはいくらですか。",
        "a": "三千円です。"
      },
      {
        "q": "これは何の料理ですか。",
        "a": "豚肉の料理です。"
      }
    ]
  },
  {
    "id": 3,
    "title": "Bài 3 - スケジュール",
    "vnTitle": "Giờ giấc, lịch trình, sinh hoạt hằng ngày",
    "days": "Ngày 9-12",
    "objective": "Nắm vững giờ, ngày trong tuần, lịch hàng ngày và mẫu từ ... đến ....",
    "katakana": [
      {
        "word": "スケジュール",
        "note": "ngoại lai dài"
      },
      {
        "word": "アルバイト",
        "note": "katakana dài"
      },
      {
        "word": "バーベキュー",
        "note": "âm ghép + trường âm"
      },
      {
        "word": "ホームステイ",
        "note": "trường âm"
      }
    ],
    "vocab": [
      {
        "jp": "週末",
        "vi": "cuối tuần",
        "reading": "しゅうまつ"
      },
      {
        "jp": "今",
        "vi": "bây giờ",
        "reading": "いま"
      },
      {
        "jp": "午前",
        "vi": "buổi sáng",
        "reading": "ごぜん"
      },
      {
        "jp": "午後",
        "vi": "buổi chiều",
        "reading": "ごご"
      },
      {
        "jp": "昼",
        "vi": "buổi trưa",
        "reading": "ひる"
      },
      {
        "jp": "銀行",
        "vi": "ngân hàng",
        "reading": "ぎんこう"
      },
      {
        "jp": "体育館",
        "vi": "nhà thi đấu",
        "reading": "たいいくかん"
      },
      {
        "jp": "図書館",
        "vi": "thư viện",
        "reading": "としょかん"
      },
      {
        "jp": "病院",
        "vi": "bệnh viện",
        "reading": "びょういん"
      },
      {
        "jp": "郵便局",
        "vi": "bưu điện",
        "reading": "ゆうびんきょく"
      },
      {
        "jp": "授業",
        "vi": "giờ học",
        "reading": "じゅぎょう"
      },
      {
        "jp": "テスト",
        "vi": "bài kiểm tra",
        "reading": "テスト"
      },
      {
        "jp": "休み",
        "vi": "giờ nghỉ / nghỉ",
        "reading": "やすみ"
      },
      {
        "jp": "時間",
        "vi": "thời gian",
        "reading": "じかん"
      },
      {
        "jp": "～時",
        "vi": "~ giờ",
        "reading": "じ"
      },
      {
        "jp": "～分",
        "vi": "~ phút",
        "reading": "ふん・ぷん"
      },
      {
        "jp": "～時半",
        "vi": "~ giờ rưỡi",
        "reading": "じはん"
      },
      {
        "jp": "～曜日",
        "vi": "thứ ~",
        "reading": "ようび"
      },
      {
        "jp": "スケジュール",
        "vi": "lịch trình",
        "reading": "スケジュール"
      },
      {
        "jp": "アルバイト",
        "vi": "việc làm thêm",
        "reading": "アルバイト"
      },
      {
        "jp": "スキー",
        "vi": "trượt tuyết",
        "reading": "スキー"
      },
      {
        "jp": "パーティー",
        "vi": "bữa tiệc",
        "reading": "パーティー"
      },
      {
        "jp": "バーベキュー",
        "vi": "tiệc thịt nướng",
        "reading": "バーベキュー"
      },
      {
        "jp": "花火",
        "vi": "pháo hoa",
        "reading": "はなび"
      },
      {
        "jp": "（お）花見",
        "vi": "ngắm hoa",
        "reading": "はなみ"
      },
      {
        "jp": "ホームステイ",
        "vi": "ở homestay",
        "reading": "ホームステイ"
      },
      {
        "jp": "（お）祭り",
        "vi": "lễ hội",
        "reading": "まつり"
      },
      {
        "jp": "海",
        "vi": "biển",
        "reading": "うみ"
      },
      {
        "jp": "公園",
        "vi": "công viên",
        "reading": "こうえん"
      },
      {
        "jp": "桜",
        "vi": "hoa anh đào",
        "reading": "さくら"
      },
      {
        "jp": "（お）酒",
        "vi": "rượu",
        "reading": "さけ"
      },
      {
        "jp": "（お）すし",
        "vi": "sushi",
        "reading": "（お）すし"
      },
      {
        "jp": "バス",
        "vi": "xe buýt",
        "reading": "バス"
      },
      {
        "jp": "（お）弁当",
        "vi": "cơm hộp",
        "reading": "べんとう"
      },
      {
        "jp": "留学生",
        "vi": "lưu học sinh",
        "reading": "りゅうがくせい"
      },
      {
        "jp": "１年",
        "vi": "năm thứ nhất",
        "reading": "いちねん"
      },
      {
        "jp": "春",
        "vi": "mùa xuân",
        "reading": "はる"
      },
      {
        "jp": "夏",
        "vi": "mùa hè",
        "reading": "なつ"
      },
      {
        "jp": "秋",
        "vi": "mùa thu",
        "reading": "あき"
      },
      {
        "jp": "冬",
        "vi": "mùa đông",
        "reading": "ふゆ"
      },
      {
        "jp": "ゴールデンウィーク",
        "vi": "Tuần lễ vàng",
        "reading": "ゴールデンウィーク"
      },
      {
        "jp": "何",
        "vi": "gì",
        "reading": "なに・なん"
      },
      {
        "jp": "行きます",
        "vi": "đi",
        "reading": "いきます"
      },
      {
        "jp": "帰ります",
        "vi": "về",
        "reading": "かえります"
      },
      {
        "jp": "飲みます",
        "vi": "uống",
        "reading": "のみます"
      },
      {
        "jp": "食べます",
        "vi": "ăn",
        "reading": "たべます"
      },
      {
        "jp": "見ます",
        "vi": "xem",
        "reading": "みます"
      },
      {
        "jp": "します",
        "vi": "làm",
        "reading": "します"
      },
      {
        "jp": "いいですね",
        "vi": "hay nhỉ / thích nhỉ",
        "reading": "いいですね"
      },
      {
        "jp": "聞きます",
        "vi": "nghe / hỏi",
        "reading": "ききます"
      },
      {
        "jp": "働きます",
        "vi": "làm việc",
        "reading": "はたらきます"
      },
      {
        "jp": "読みます",
        "vi": "đọc",
        "reading": "よみます"
      },
      {
        "jp": "起きます",
        "vi": "thức dậy",
        "reading": "おきます"
      },
      {
        "jp": "寝ます",
        "vi": "ngủ",
        "reading": "ねます"
      },
      {
        "jp": "勉強します",
        "vi": "học",
        "reading": "べんきょうします"
      },
      {
        "jp": "来ます",
        "vi": "đến",
        "reading": "きます"
      },
      {
        "jp": "朝",
        "reading": "あさ",
        "vi": "Buổi sáng"
      },
      {
        "jp": "夜",
        "reading": "よる",
        "vi": "Buổi tối"
      },
      {
        "jp": "毎日",
        "reading": "まいにち",
        "vi": "Hằng ngày"
      },
      {
        "jp": "毎朝",
        "reading": "まいあさ",
        "vi": "Mỗi sáng"
      },
      {
        "jp": "毎晩",
        "reading": "まいばん",
        "vi": "Mỗi tối"
      },
      {
        "jp": "朝ご飯",
        "reading": "あさごはん",
        "vi": "Bữa sáng"
      },
      {
        "jp": "昼ご飯",
        "reading": "ひるごはん",
        "vi": "Bữa trưa"
      },
      {
        "jp": "学校",
        "reading": "がっこう",
        "vi": "Trường học"
      },
      {
        "jp": "会社",
        "reading": "かいしゃ",
        "vi": "Công ty"
      },
      {
        "jp": "コンビニ",
        "reading": "コンビニ",
        "vi": "Cửa hàng tiện lợi"
      },
      {
        "jp": "買います",
        "reading": "かいます",
        "vi": "Mua"
      }
    ],
    "grammar": [
      {
        "pattern": "Vます / Vません",
        "use": "Hoạt động hiện tại / thói quen",
        "example": "毎日、朝ご飯を食べます。",
        "vocabLink": "Gắn với 起きます, 寝ます."
      },
      {
        "pattern": "N へ Vます",
        "use": "Đi đâu",
        "example": "日曜日、図書館へ行きます。",
        "vocabLink": "Gắn với 図書館, 公園."
      },
      {
        "pattern": "N を Vます",
        "use": "Tân ngữ trực tiếp",
        "example": "日本語を勉強します。",
        "vocabLink": "Gắn với 朝ご飯, 日本語."
      },
      {
        "pattern": "N に Vます",
        "use": "Mốc thời gian",
        "example": "六時に起きます。",
        "vocabLink": "Cực quan trọng cho bài 3."
      },
      {
        "pattern": "N で Vます",
        "use": "Nơi diễn ra hành động / phương tiện",
        "example": "北海道でスキーをします。",
        "vocabLink": "Hay tái dùng về sau."
      },
      {
        "pattern": "〜から 〜まで",
        "use": "Từ ... đến ...",
        "example": "郵便局は午前九時から午後五時までです。",
        "vocabLink": "Câu điểm cao."
      },
      {
        "pattern": "N や N など",
        "use": "Liệt kê mở",
        "example": "朝、パンやサラダなどを食べます。",
        "vocabLink": "Câu tự nhiên hơn."
      }
    ],
    "kanji": [
      {
        "word": "何",
        "reading": "なに / なん",
        "meaning": "cái gì"
      },
      {
        "word": "月曜日",
        "reading": "げつようび",
        "meaning": "thứ hai"
      },
      {
        "word": "火曜日",
        "reading": "かようび",
        "meaning": "thứ ba"
      },
      {
        "word": "水曜日",
        "reading": "すいようび",
        "meaning": "thứ tư"
      },
      {
        "word": "木曜日",
        "reading": "もくようび",
        "meaning": "thứ năm"
      },
      {
        "word": "金曜日",
        "reading": "きんようび",
        "meaning": "thứ sáu"
      },
      {
        "word": "土曜日",
        "reading": "どようび",
        "meaning": "thứ bảy"
      },
      {
        "word": "日曜日",
        "reading": "にちようび",
        "meaning": "chủ nhật"
      },
      {
        "word": "二時",
        "reading": "にじ",
        "meaning": "2 giờ"
      },
      {
        "word": "四時",
        "reading": "よじ",
        "meaning": "4 giờ"
      },
      {
        "word": "七時",
        "reading": "しちじ",
        "meaning": "7 giờ"
      },
      {
        "word": "九時",
        "reading": "くじ",
        "meaning": "9 giờ"
      },
      {
        "word": "十分",
        "reading": "じゅっぷん",
        "meaning": "10 phút"
      },
      {
        "word": "時間",
        "reading": "じかん",
        "meaning": "thời gian/tiếng"
      }
    ],
    "reading": "わたしは毎日六時に起きます。午前七時に朝ご飯を食べます。八時から授業があります。午後、図書館で日本語を勉強します。日曜日は公園へ行きます。ときどきアルバイトもします。ホームステイの友だちとバーベキューをすることもあります。",
    "speaking": [
      {
        "q": "図書館は何時から何時までですか。",
        "a": "午前九時から午後五時までです。"
      },
      {
        "q": "毎日、何時に起きますか。",
        "a": "毎日、六時に起きます。"
      },
      {
        "q": "日曜日にどこへ行きますか。",
        "a": "公園へ行きます。"
      }
    ]
  },
  {
    "id": 4,
    "title": "Bài 4 - 私の国・町",
    "vnTitle": "Nói về quốc gia, thành phố, khoảng cách, đặc điểm nơi chốn",
    "days": "Ngày 13-16",
    "objective": "Diễn tả được quê hương/quốc gia/thành phố, hỏi khoảng cách và mô tả nơi chốn.",
    "katakana": [
      {
        "word": "チョコレート",
        "note": "katakana dài"
      },
      {
        "word": "ビル",
        "note": "katakana đơn"
      },
      {
        "word": "メロン",
        "note": "katakana đơn"
      },
      {
        "word": "ツアー",
        "note": "trường âm"
      }
    ],
    "vocab": [
      {
        "jp": "チョコレート",
        "vi": "sô-cô-la",
        "reading": "チョコレート"
      },
      {
        "jp": "美術館",
        "vi": "bảo tàng mỹ thuật",
        "reading": "びじゅつかん"
      },
      {
        "jp": "皆さん",
        "vi": "các bạn / quý vị",
        "reading": "みなさん"
      },
      {
        "jp": "いろいろ（な）",
        "vi": "nhiều / đa dạng",
        "reading": "いろいろ（な）"
      },
      {
        "jp": "～から来ました",
        "vi": "đến từ ~",
        "reading": "からきました"
      },
      {
        "jp": "ぜひ来てください",
        "vi": "rất mong anh/chị đến",
        "reading": "ぜひきてください"
      },
      {
        "jp": "北",
        "vi": "bắc",
        "reading": "きた"
      },
      {
        "jp": "南",
        "vi": "nam",
        "reading": "みなみ"
      },
      {
        "jp": "東",
        "vi": "đông",
        "reading": "ひがし"
      },
      {
        "jp": "西",
        "vi": "tây",
        "reading": "にし"
      },
      {
        "jp": "真ん中",
        "vi": "giữa",
        "reading": "まんなか"
      },
      {
        "jp": "車",
        "vi": "xe ô tô",
        "reading": "くるま"
      },
      {
        "jp": "新幹線",
        "vi": "tàu cao tốc",
        "reading": "しんかんせん"
      },
      {
        "jp": "電車",
        "vi": "tàu điện",
        "reading": "でんしゃ"
      },
      {
        "jp": "飛行機",
        "vi": "máy bay",
        "reading": "ひこうき"
      },
      {
        "jp": "駅",
        "vi": "nhà ga",
        "reading": "えき"
      },
      {
        "jp": "町",
        "vi": "thành phố / khu phố",
        "reading": "まち"
      },
      {
        "jp": "～時間",
        "vi": "~ tiếng",
        "reading": "じかん"
      },
      {
        "jp": "～時間半",
        "vi": "~ tiếng rưỡi",
        "reading": "じかんはん"
      },
      {
        "jp": "～分",
        "vi": "~ phút",
        "reading": "ふん・ぷん"
      },
      {
        "jp": "歩いて",
        "vi": "đi bộ",
        "reading": "あるいて"
      },
      {
        "jp": "～くらい",
        "vi": "khoảng ~",
        "reading": "～くらい"
      },
      {
        "jp": "どのくらい",
        "vi": "khoảng bao nhiêu",
        "reading": "どのくらい"
      },
      {
        "jp": "温泉",
        "vi": "suối nước nóng",
        "reading": "おんせん"
      },
      {
        "jp": "川",
        "vi": "sông",
        "reading": "かわ"
      },
      {
        "jp": "山",
        "vi": "núi",
        "reading": "やま"
      },
      {
        "jp": "教会",
        "vi": "nhà thờ",
        "reading": "きょうかい"
      },
      {
        "jp": "（お）城",
        "vi": "lâu đài",
        "reading": "しろ"
      },
      {
        "jp": "神社",
        "vi": "đền thần đạo",
        "reading": "じんじゃ"
      },
      {
        "jp": "（お）寺",
        "vi": "chùa",
        "reading": "てら"
      },
      {
        "jp": "ビル",
        "vi": "tòa nhà",
        "reading": "ビル"
      },
      {
        "jp": "ところ",
        "vi": "chỗ / nơi",
        "reading": "ところ"
      },
      {
        "jp": "人",
        "vi": "người",
        "reading": "ひと"
      },
      {
        "jp": "緑",
        "vi": "màu xanh lá",
        "reading": "みどり"
      },
      {
        "jp": "あります",
        "vi": "có",
        "reading": "あります"
      },
      {
        "jp": "新しい",
        "vi": "mới",
        "reading": "あたらしい"
      },
      {
        "jp": "古い",
        "vi": "cũ",
        "reading": "ふるい"
      },
      {
        "jp": "いい",
        "vi": "tốt / được",
        "reading": "いい"
      },
      {
        "jp": "（～が）多い",
        "vi": "nhiều",
        "reading": "おおい"
      },
      {
        "jp": "（～が）少ない",
        "vi": "ít",
        "reading": "すくない"
      },
      {
        "jp": "大きい",
        "vi": "to",
        "reading": "おおきい"
      },
      {
        "jp": "小さい",
        "vi": "nhỏ",
        "reading": "ちいさい"
      },
      {
        "jp": "高い",
        "vi": "cao",
        "reading": "たかい"
      },
      {
        "jp": "低い",
        "vi": "thấp",
        "reading": "ひくい"
      },
      {
        "jp": "きれい（な）",
        "vi": "đẹp / sạch",
        "reading": "きれい（な）"
      },
      {
        "jp": "静か（な）",
        "vi": "yên tĩnh",
        "reading": "しずか"
      },
      {
        "jp": "にぎやか（な）",
        "vi": "nhộn nhịp",
        "reading": "にぎやか（な）"
      },
      {
        "jp": "有名（な）",
        "vi": "nổi tiếng",
        "reading": "ゆうめい"
      },
      {
        "jp": "どんな",
        "vi": "như thế nào",
        "reading": "どんな"
      },
      {
        "jp": "そして",
        "vi": "và",
        "reading": "そして"
      },
      {
        "jp": "雨",
        "vi": "mưa",
        "reading": "あめ"
      },
      {
        "jp": "雪",
        "vi": "tuyết",
        "reading": "ゆき"
      },
      {
        "jp": "日",
        "vi": "ngày",
        "reading": "ひ"
      },
      {
        "jp": "メロン",
        "vi": "dưa lưới",
        "reading": "メロン"
      },
      {
        "jp": "暖かい",
        "vi": "ấm",
        "reading": "あたたかい"
      },
      {
        "jp": "涼しい",
        "vi": "mát",
        "reading": "すずしい"
      },
      {
        "jp": "暑い",
        "vi": "nóng",
        "reading": "あつい"
      },
      {
        "jp": "寒い",
        "vi": "lạnh",
        "reading": "さむい"
      },
      {
        "jp": "天気がいい",
        "vi": "trời đẹp",
        "reading": "てんきがいい"
      },
      {
        "jp": "天気が悪い",
        "vi": "trời xấu",
        "reading": "てんきがわるい"
      },
      {
        "jp": "温かい",
        "vi": "ấm",
        "reading": "あたたかい"
      },
      {
        "jp": "熱い",
        "vi": "nóng",
        "reading": "あつい"
      },
      {
        "jp": "冷たい",
        "vi": "lạnh",
        "reading": "つめたい"
      },
      {
        "jp": "おいしい",
        "vi": "ngon",
        "reading": "おいしい"
      },
      {
        "jp": "甘い",
        "vi": "ngọt",
        "reading": "あまい"
      },
      {
        "jp": "辛い",
        "vi": "cay",
        "reading": "からい"
      },
      {
        "jp": "苦い",
        "vi": "đắng",
        "reading": "にがい"
      },
      {
        "jp": "すっぱい",
        "vi": "chua",
        "reading": "すっぱい"
      },
      {
        "jp": "一年中",
        "vi": "quanh năm",
        "reading": "いちねんじゅう"
      },
      {
        "jp": "あまり",
        "vi": "không ~ lắm",
        "reading": "あまり"
      },
      {
        "jp": "少し",
        "vi": "ít / hơi",
        "reading": "すこし"
      },
      {
        "jp": "とても",
        "vi": "rất",
        "reading": "とても"
      },
      {
        "jp": "どう",
        "vi": "thế nào",
        "reading": "どう"
      },
      {
        "jp": "そうですね",
        "vi": "đúng thế / ừ nhỉ",
        "reading": "そうですね"
      },
      {
        "jp": "たくさん",
        "vi": "nhiều",
        "reading": "たくさん"
      },
      {
        "jp": "お城",
        "reading": "おしろ",
        "vi": "Lâu đài"
      },
      {
        "jp": "お寺",
        "reading": "おてら",
        "vi": "Chùa"
      }
    ],
    "grammar": [
      {
        "pattern": "N は A です / くないです / じゃありません",
        "use": "Nói đặc điểm nơi chốn",
        "example": "わたしの町はきれいです。",
        "vocabLink": "Gắn với きれい, 静か, にぎやか."
      },
      {
        "pattern": "A + N / ナA + な + N",
        "use": "Bổ nghĩa danh từ",
        "example": "きれいなところです。",
        "vocabLink": "Cực hay dùng khi speaking."
      },
      {
        "pattern": "N に N があります",
        "use": "Nói nơi có gì",
        "example": "町にきれいな川があります。",
        "vocabLink": "Gắn với 山, 川, 温泉."
      },
      {
        "pattern": "N は N の 東/西/南/北/真ん中です",
        "use": "Nói vị trí",
        "example": "沖縄は日本の南です。",
        "vocabLink": "Rất quan trọng."
      },
      {
        "pattern": "〜から〜までどのくらいですか",
        "use": "Hỏi khoảng cách / thời lượng",
        "example": "東京から箱根までどのくらいですか。",
        "vocabLink": "Speaking trọng điểm."
      },
      {
        "pattern": "N で",
        "use": "Bằng phương tiện",
        "example": "電車で三十分です。",
        "vocabLink": "Gắn với 車, 電車, 飛行機."
      },
      {
        "pattern": "どんな N ですか",
        "use": "Hỏi nơi chốn thế nào",
        "example": "アユタヤはどんなところですか。",
        "vocabLink": "Câu mẫu speaking."
      },
      {
        "pattern": "そして / が",
        "use": "Nối ý / đối lập nhẹ",
        "example": "この町はきれいです。そして、にぎやかです。",
        "vocabLink": "Giúp câu không quá ngắn."
      }
    ],
    "kanji": [
      {
        "word": "東",
        "reading": "ひがし / とう",
        "meaning": "đông"
      },
      {
        "word": "市",
        "reading": "し",
        "meaning": "thành phố / thị"
      },
      {
        "word": "前日",
        "reading": "ぜんじつ",
        "meaning": "ngày hôm trước"
      },
      {
        "word": "午前",
        "reading": "ごぜん",
        "meaning": "buổi sáng"
      },
      {
        "word": "外国",
        "reading": "がいこく",
        "meaning": "nước ngoài"
      },
      {
        "word": "区",
        "reading": "く",
        "meaning": "quận/khu"
      },
      {
        "word": "国",
        "reading": "くに / こく",
        "meaning": "nước"
      },
      {
        "word": "東京",
        "reading": "とうきょう",
        "meaning": "Tokyo"
      },
      {
        "word": "女の人",
        "reading": "おんなのひと",
        "meaning": "người phụ nữ"
      },
      {
        "word": "男の人",
        "reading": "おとこのひと",
        "meaning": "người đàn ông"
      },
      {
        "word": "男女",
        "reading": "だんじょ",
        "meaning": "nam nữ"
      }
    ],
    "reading": "わたしの町はベトナムの北です。にぎやかで、きれいなところです。町の近くに山と川があります。駅まで十分くらいです。ハノイからホーチミンまで飛行機で二時間くらいです。チョコレートやメロンもおいしいです。",
    "speaking": [
      {
        "q": "ハノイからホーチミンまでどのくらいですか。",
        "a": "飛行機で二時間くらいです。"
      },
      {
        "q": "あなたの町はどんなところですか。",
        "a": "きれいで、にぎやかなところです。"
      },
      {
        "q": "あなたの国に何がありますか。",
        "a": "きれいな山や川があります。"
      }
    ]
  },
  {
    "id": 5,
    "title": "Bài 5 - 休みの日",
    "vnTitle": "Ngày nghỉ, quá khứ, thích/ghét, muốn, muốn làm",
    "days": "Ngày 17-20",
    "objective": "Nói được việc đã làm vào ngày nghỉ, cảm nhận sau hoạt động, điều mình thích/muốn.",
    "katakana": [
      {
        "word": "アニメ",
        "note": "katakana ngắn"
      },
      {
        "word": "パソコン",
        "note": "ngoại lai cơ bản"
      },
      {
        "word": "インターネット",
        "note": "katakana dài"
      },
      {
        "word": "テスト",
        "note": "katakana cơ bản"
      }
    ],
    "vocab": [
      {
        "jp": "先週",
        "vi": "tuần trước",
        "reading": "せんしゅう"
      },
      {
        "jp": "先月",
        "vi": "tháng trước",
        "reading": "せんげつ"
      },
      {
        "jp": "先日",
        "vi": "hôm trước",
        "reading": "せんじつ"
      },
      {
        "jp": "昨日",
        "vi": "hôm qua",
        "reading": "きのう"
      },
      {
        "jp": "去年",
        "vi": "năm ngoái",
        "reading": "きょねん"
      },
      {
        "jp": "映画館",
        "vi": "rạp chiếu phim",
        "reading": "えいがかん"
      },
      {
        "jp": "デパート",
        "vi": "trung tâm thương mại",
        "reading": "デパート"
      },
      {
        "jp": "レストラン",
        "vi": "nhà hàng",
        "reading": "レストラン"
      },
      {
        "jp": "公園",
        "vi": "công viên",
        "reading": "こうえん"
      },
      {
        "jp": "図書館",
        "vi": "thư viện",
        "reading": "としょかん"
      },
      {
        "jp": "水族館",
        "vi": "thủy cung",
        "reading": "すいぞくかん"
      },
      {
        "jp": "動物園",
        "vi": "vườn thú",
        "reading": "どうぶつえん"
      },
      {
        "jp": "美術館",
        "vi": "bảo tàng mỹ thuật",
        "reading": "びじゅつかん"
      },
      {
        "jp": "遊園地",
        "vi": "công viên giải trí",
        "reading": "ゆうえんち"
      },
      {
        "jp": "旅行",
        "vi": "du lịch",
        "reading": "りょこう"
      },
      {
        "jp": "見学",
        "vi": "tham quan",
        "reading": "けんがく"
      },
      {
        "jp": "食事",
        "vi": "bữa ăn",
        "reading": "しょくじ"
      },
      {
        "jp": "散歩",
        "vi": "đi dạo",
        "reading": "さんぽ"
      },
      {
        "jp": "休み",
        "vi": "kỳ nghỉ",
        "reading": "やすみ"
      },
      {
        "jp": "（お）みやげ",
        "vi": "quà lưu niệm",
        "reading": "（お）みやげ"
      },
      {
        "jp": "写真",
        "vi": "ảnh",
        "reading": "しゃしん"
      },
      {
        "jp": "天気",
        "vi": "thời tiết",
        "reading": "てんき"
      },
      {
        "jp": "アニメ",
        "vi": "anime",
        "reading": "アニメ"
      },
      {
        "jp": "パソコン",
        "vi": "máy vi tính",
        "reading": "パソコン"
      },
      {
        "jp": "インターネット",
        "vi": "internet",
        "reading": "インターネット"
      },
      {
        "jp": "テスト",
        "vi": "bài kiểm tra",
        "reading": "テスト"
      },
      {
        "jp": "パーティー",
        "vi": "bữa tiệc",
        "reading": "パーティー"
      },
      {
        "jp": "ゲーム",
        "vi": "trò chơi",
        "reading": "ゲーム"
      },
      {
        "jp": "音楽",
        "vi": "âm nhạc",
        "reading": "おんがく"
      },
      {
        "jp": "映画",
        "vi": "phim",
        "reading": "えいが"
      },
      {
        "jp": "好き（な）",
        "vi": "thích",
        "reading": "すき"
      },
      {
        "jp": "嫌い（な）",
        "vi": "ghét",
        "reading": "きらい"
      },
      {
        "jp": "上手（な）",
        "vi": "giỏi",
        "reading": "じょうず"
      },
      {
        "jp": "下手（な）",
        "vi": "kém",
        "reading": "へた"
      },
      {
        "jp": "得意（な）",
        "vi": "sở trường",
        "reading": "とくい"
      },
      {
        "jp": "苦手（な）",
        "vi": "không giỏi",
        "reading": "にがて"
      },
      {
        "jp": "楽しい",
        "vi": "vui vẻ",
        "reading": "たのしい"
      },
      {
        "jp": "おもしろい",
        "vi": "thú vị",
        "reading": "おもしろい"
      },
      {
        "jp": "つまらない",
        "vi": "nhàm chán",
        "reading": "つまらない"
      },
      {
        "jp": "忙しい",
        "vi": "bận",
        "reading": "いそがしい"
      },
      {
        "jp": "疲れました",
        "vi": "mệt rồi",
        "reading": "つかれました"
      },
      {
        "jp": "晴れ",
        "vi": "trời nắng",
        "reading": "はれ"
      },
      {
        "jp": "曇り",
        "vi": "trời âm u",
        "reading": "くもり"
      },
      {
        "jp": "雨",
        "vi": "mưa",
        "reading": "あめ"
      },
      {
        "jp": "雪",
        "vi": "tuyết",
        "reading": "ゆき"
      },
      {
        "jp": "行きました",
        "vi": "đã đi",
        "reading": "いきました"
      },
      {
        "jp": "見ました",
        "vi": "đã xem",
        "reading": "みました"
      },
      {
        "jp": "食べました",
        "vi": "đã ăn",
        "reading": "たべました"
      },
      {
        "jp": "飲みました",
        "vi": "đã uống",
        "reading": "のみました"
      },
      {
        "jp": "しました",
        "vi": "đã làm",
        "reading": "しました"
      },
      {
        "jp": "買いました",
        "vi": "đã mua",
        "reading": "かいました"
      },
      {
        "jp": "撮りました",
        "vi": "đã chụp",
        "reading": "とりました"
      },
      {
        "jp": "会いました",
        "vi": "đã gặp",
        "reading": "あいました"
      },
      {
        "jp": "もらいました",
        "vi": "đã nhận",
        "reading": "もらいました"
      },
      {
        "jp": "あげました",
        "vi": "đã tặng",
        "reading": "あげました"
      },
      {
        "jp": "どこかへ",
        "vi": "có đi đâu",
        "reading": "どこかへ"
      },
      {
        "jp": "どこへも",
        "vi": "không đi đâu cả",
        "reading": "どこへも"
      },
      {
        "jp": "何も",
        "vi": "không ~ gì cả",
        "reading": "なにも"
      },
      {
        "jp": "誰も",
        "vi": "không ai",
        "reading": "だれも"
      },
      {
        "jp": "それから",
        "vi": "sau đó",
        "reading": "それから"
      },
      {
        "jp": "でも",
        "vi": "nhưng",
        "reading": "でも"
      },
      {
        "jp": "だから",
        "vi": "vì vậy",
        "reading": "だから"
      },
      {
        "jp": "だって",
        "vi": "vì mà / bởi vì",
        "reading": "だって"
      },
      {
        "jp": "ほしい",
        "vi": "muốn có",
        "reading": "ほしい"
      },
      {
        "jp": "Vたい",
        "vi": "muốn làm",
        "reading": "Vたい"
      },
      {
        "jp": "今日",
        "reading": "きょう",
        "vi": "Hôm nay"
      },
      {
        "jp": "明日",
        "reading": "あした",
        "vi": "Ngày mai"
      },
      {
        "jp": "あさって",
        "reading": "あさって",
        "vi": "Ngày kia"
      },
      {
        "jp": "おととい",
        "reading": "おととい",
        "vi": "Hôm kia"
      },
      {
        "jp": "週末",
        "reading": "しゅうまつ",
        "vi": "Cuối tuần"
      },
      {
        "jp": "家",
        "reading": "いえ",
        "vi": "Nhà"
      },
      {
        "jp": "部屋",
        "reading": "へや",
        "vi": "Phòng"
      },
      {
        "jp": "家族",
        "reading": "かぞく",
        "vi": "Gia đình"
      },
      {
        "jp": "恋人",
        "reading": "こいびと",
        "vi": "Người yêu"
      },
      {
        "jp": "友達",
        "reading": "ともだち",
        "vi": "Bạn bè"
      },
      {
        "jp": "ルームメイト",
        "reading": "ルームメイト",
        "vi": "Bạn cùng phòng"
      },
      {
        "jp": "どこか（へ）",
        "reading": "どこか（へ）",
        "vi": "(Đi) đâu đó"
      },
      {
        "jp": "会います",
        "reading": "あいます",
        "vi": "Gặp gỡ"
      },
      {
        "jp": "作ります",
        "reading": "つくります",
        "vi": "Làm, nấu, chế tạo"
      },
      {
        "jp": "買い物をします",
        "reading": "かいものをします",
        "vi": "Mua sắm"
      },
      {
        "jp": "食事をします",
        "reading": "しょくじをします",
        "vi": "Dùng bữa, ăn uống"
      },
      {
        "jp": "洗濯をします",
        "reading": "せんたくをします",
        "vi": "Giặt giũ"
      },
      {
        "jp": "掃除をします",
        "reading": "そうじをします",
        "vi": "Dọn dẹp"
      },
      {
        "jp": "一人で",
        "reading": "ひとりで",
        "vi": "Một mình"
      },
      {
        "jp": "今朝",
        "reading": "けさ",
        "vi": "Sáng nay"
      },
      {
        "jp": "風邪",
        "reading": "かぜ",
        "vi": "Cảm cúm"
      }
    ],
    "grammar": [
      {
        "pattern": "Vました / Vませんでした",
        "use": "Quá khứ động từ",
        "example": "昨日、勉強しました。",
        "vocabLink": "Nói việc đã làm."
      },
      {
        "pattern": "イAかったです / ナAでした",
        "use": "Quá khứ tính từ",
        "example": "旅行は楽しかったです。",
        "vocabLink": "Câu speaking rất hay dùng."
      },
      {
        "pattern": "N が 好きです / 嫌いです",
        "use": "Nói thích/ghét",
        "example": "日本のアニメが好きです。",
        "vocabLink": "Gắn với アニメ, 音楽."
      },
      {
        "pattern": "N が ほしいです",
        "use": "Muốn có",
        "example": "パソコンがほしいです。",
        "vocabLink": "Speaking cá nhân."
      },
      {
        "pattern": "Vたいです",
        "use": "Muốn làm gì",
        "example": "北海道へ行きたいです。",
        "vocabLink": "Gắn với động từ."
      },
      {
        "pattern": "N へ Vます-に行きます",
        "use": "Đi đâu để làm gì",
        "example": "渋谷へ買い物に行きます。",
        "vocabLink": "Rất quan trọng."
      },
      {
        "pattern": "どこかへ / どこへも",
        "use": "Có đi đâu không / không đi đâu cả",
        "example": "どこへも行きませんでした。",
        "vocabLink": "Hay gặp trong hỏi đáp."
      },
      {
        "pattern": "どうして ... から",
        "use": "Hỏi/nói lý do",
        "example": "忙しかったですから、何も食べませんでした。",
        "vocabLink": "Giúp câu có lý do."
      },
      {
        "pattern": "それから / N と Vます",
        "use": "Nối mạch kể chuyện",
        "example": "映画を見ました。それから、食事をしました。",
        "vocabLink": "Giúp kể chuyện mượt."
      }
    ],
    "kanji": [
      {
        "word": "先生",
        "reading": "せんせい",
        "meaning": "giáo viên"
      },
      {
        "word": "買い物",
        "reading": "かいもの",
        "meaning": "mua sắm"
      },
      {
        "word": "見学",
        "reading": "けんがく",
        "meaning": "tham quan học tập"
      },
      {
        "word": "午後",
        "reading": "ごご",
        "meaning": "buổi chiều"
      },
      {
        "word": "午前",
        "reading": "ごぜん",
        "meaning": "buổi sáng"
      },
      {
        "word": "先週",
        "reading": "せんしゅう",
        "meaning": "tuần trước"
      },
      {
        "word": "食事",
        "reading": "しょくじ",
        "meaning": "bữa ăn"
      },
      {
        "word": "先月",
        "reading": "せんげつ",
        "meaning": "tháng trước"
      },
      {
        "word": "先日",
        "reading": "せんじつ",
        "meaning": "hôm trước"
      },
      {
        "word": "飲み物",
        "reading": "のみもの",
        "meaning": "đồ uống"
      },
      {
        "word": "毎日",
        "reading": "まいにち",
        "meaning": "mỗi ngày"
      },
      {
        "word": "毎週",
        "reading": "まいしゅう",
        "meaning": "mỗi tuần"
      },
      {
        "word": "毎月",
        "reading": "まいつき / まいげつ",
        "meaning": "mỗi tháng"
      },
      {
        "word": "毎年",
        "reading": "まいとし / まいねん",
        "meaning": "mỗi năm"
      },
      {
        "word": "休日",
        "reading": "きゅうじつ",
        "meaning": "ngày nghỉ"
      }
    ],
    "reading": "先週の土曜日、友だちと公園へ行きました。天気がよかったですから、写真をたくさん撮りました。それから、レストランで食事をしました。食べ物はおいしかったです。夜はアニメを見ました。とても楽しかったです。",
    "speaking": [
      {
        "q": "きのう、どこかへ行きましたか。",
        "a": "はい、公園へ行きました。/ いいえ、どこへも行きませんでした。"
      },
      {
        "q": "旅行はどうでしたか。",
        "a": "とても楽しかったです。"
      },
      {
        "q": "何がほしいですか。",
        "a": "新しいパソコンがほしいです。"
      }
    ]
  },
  {
    "id": 6,
    "title": "Bài 6 - 一緒に！",
    "vnTitle": "Rủ rê, so sánh, chọn lựa, hẹn gặp",
    "days": "Ngày 21-24",
    "objective": "Rủ được bạn, so sánh được 2 lựa chọn, hẹn thời gian/địa điểm.",
    "katakana": [
      {
        "word": "カラオケ",
        "note": "katakana cơ bản"
      },
      {
        "word": "コンサート",
        "note": "trường âm ー"
      },
      {
        "word": "チケット",
        "note": "âm ngắt nhỏ"
      },
      {
        "word": "ジャズ",
        "note": "âm ngoại lai"
      }
    ],
    "vocab": [
      {
        "jp": "約束",
        "vi": "lời hẹn",
        "reading": "やくそく"
      },
      {
        "jp": "試合",
        "vi": "trận đấu",
        "reading": "しあい"
      },
      {
        "jp": "コンサート",
        "vi": "buổi biểu diễn",
        "reading": "コンサート"
      },
      {
        "jp": "パーティー",
        "vi": "bữa tiệc",
        "reading": "パーティー"
      },
      {
        "jp": "デート",
        "vi": "hẹn hò",
        "reading": "デート"
      },
      {
        "jp": "映画",
        "vi": "phim",
        "reading": "えいが"
      },
      {
        "jp": "野球",
        "vi": "bóng chày",
        "reading": "やきゅう"
      },
      {
        "jp": "サッカー",
        "vi": "bóng đá",
        "reading": "サッカー"
      },
      {
        "jp": "テニス",
        "vi": "quần vợt",
        "reading": "テニス"
      },
      {
        "jp": "ゴルフ",
        "vi": "golf",
        "reading": "ゴルフ"
      },
      {
        "jp": "スポーツ",
        "vi": "thể thao",
        "reading": "スポーツ"
      },
      {
        "jp": "音楽",
        "vi": "âm nhạc",
        "reading": "おんがく"
      },
      {
        "jp": "ジャズ",
        "vi": "jazz",
        "reading": "ジャズ"
      },
      {
        "jp": "クラシック",
        "vi": "nhạc cổ điển",
        "reading": "クラシック"
      },
      {
        "jp": "カラオケ",
        "vi": "karaoke",
        "reading": "カラオケ"
      },
      {
        "jp": "チケット",
        "vi": "vé",
        "reading": "チケット"
      },
      {
        "jp": "映画館",
        "vi": "rạp phim",
        "reading": "えいがかん"
      },
      {
        "jp": "レストラン",
        "vi": "nhà hàng",
        "reading": "レストラン"
      },
      {
        "jp": "居酒屋",
        "vi": "quán nhậu",
        "reading": "いざかや"
      },
      {
        "jp": "喫茶店",
        "vi": "quán cà phê",
        "reading": "きっさてん"
      },
      {
        "jp": "春",
        "vi": "mùa xuân",
        "reading": "はる"
      },
      {
        "jp": "夏",
        "vi": "mùa hè",
        "reading": "なつ"
      },
      {
        "jp": "秋",
        "vi": "mùa thu",
        "reading": "あき"
      },
      {
        "jp": "冬",
        "vi": "mùa đông",
        "reading": "ふゆ"
      },
      {
        "jp": "今週",
        "vi": "tuần này",
        "reading": "こんしゅう"
      },
      {
        "jp": "来週",
        "vi": "tuần sau",
        "reading": "らいしゅう"
      },
      {
        "jp": "今月",
        "vi": "tháng này",
        "reading": "こんげつ"
      },
      {
        "jp": "来月",
        "vi": "tháng sau",
        "reading": "らいげつ"
      },
      {
        "jp": "今晩",
        "vi": "tối nay",
        "reading": "こんばん"
      },
      {
        "jp": "明日",
        "vi": "ngày mai",
        "reading": "あした"
      },
      {
        "jp": "明後日",
        "vi": "ngày kia",
        "reading": "あさって"
      },
      {
        "jp": "大丈夫",
        "vi": "ổn thôi",
        "reading": "だいじょうぶ"
      },
      {
        "jp": "いちばん",
        "vi": "nhất",
        "reading": "いちばん"
      },
      {
        "jp": "～より",
        "vi": "hơn ~",
        "reading": "～より"
      },
      {
        "jp": "どちら",
        "vi": "cái nào",
        "reading": "どちら"
      },
      {
        "jp": "のほうが",
        "vi": "hơn là",
        "reading": "のほうが"
      },
      {
        "jp": "～枚",
        "vi": "~ tờ / ~ vé",
        "reading": "まい"
      },
      {
        "jp": "もう",
        "vi": "đã rồi",
        "reading": "もう"
      },
      {
        "jp": "まだ",
        "vi": "vẫn chưa",
        "reading": "まだ"
      },
      {
        "jp": "どうですか",
        "vi": "thế nào",
        "reading": "どうですか"
      },
      {
        "jp": "〜ね",
        "vi": "nhỉ / phải không",
        "reading": "〜ね"
      },
      {
        "jp": "〜よ",
        "vi": "đấy / nhé",
        "reading": "〜よ"
      },
      {
        "jp": "Vましょうか",
        "vi": "hãy cùng ~ nhé",
        "reading": "Vましょうか"
      },
      {
        "jp": "Vませんか",
        "vi": "~ thì sao",
        "reading": "Vませんか"
      },
      {
        "jp": "一緒に",
        "vi": "cùng nhau",
        "reading": "いっしょに"
      },
      {
        "jp": "楽しみ",
        "vi": "trông chờ",
        "reading": "たのしみ"
      },
      {
        "jp": "～のほうが",
        "reading": "～のほうが",
        "vi": "Phía ~, bên ~ hơn (so sánh)"
      },
      {
        "jp": "北海道",
        "reading": "ほっかいどう",
        "vi": "Hokkaido"
      },
      {
        "jp": "楽しみですね",
        "reading": "たのしみですね",
        "vi": "Mong chờ, háo hức quá nhỉ"
      }
    ],
    "grammar": [
      {
        "pattern": "Vませんか / Vましょう",
        "use": "Rủ rê / cùng làm",
        "example": "今晩、ご飯を食べに行きませんか。",
        "vocabLink": "Cực kỳ quan trọng."
      },
      {
        "pattern": "N があります / Nで Nがあります",
        "use": "Có lịch hẹn / sự kiện",
        "example": "明日、約束があります。",
        "vocabLink": "Gắn với 約束, 試合, コンサート."
      },
      {
        "pattern": "N が（〜枚）あります",
        "use": "Có số lượng vật",
        "example": "映画のチケットが二枚あります。",
        "vocabLink": "Hay đi với lời rủ."
      },
      {
        "pattern": "Nで Nがいちばん Aです",
        "use": "Cái gì nhất trong một nhóm",
        "example": "スポーツで野球がいちばんおもしろいです。",
        "vocabLink": "Hay ra sở thích."
      },
      {
        "pattern": "N1 は N2 より Aです",
        "use": "So sánh hơn",
        "example": "七月は八月より雨が多いです。",
        "vocabLink": "Gắn với thời tiết / mùa."
      },
      {
        "pattern": "N1 と N2 と どちらが Aですか / N のほうが Aです",
        "use": "So sánh 2 lựa chọn",
        "example": "夏と冬とどちらが好きですか。",
        "vocabLink": "Speaking trọng điểm."
      },
      {
        "pattern": "もう Vましたか。― はい、Vました / いいえ、まだです",
        "use": "Hỏi đã làm chưa",
        "example": "もう行きましたか。",
        "vocabLink": "Phản xạ hội thoại."
      },
      {
        "pattern": "N はどうですか / 〜ね / 〜よ",
        "use": "Gợi ý, xác nhận, nhấn thông tin",
        "example": "おすしはどうですか。",
        "vocabLink": "Câu tự nhiên hơn."
      }
    ],
    "kanji": [
      {
        "word": "今週",
        "reading": "こんしゅう",
        "meaning": "tuần này"
      },
      {
        "word": "来年",
        "reading": "らいねん",
        "meaning": "năm sau"
      },
      {
        "word": "来月",
        "reading": "らいげつ",
        "meaning": "tháng sau"
      },
      {
        "word": "来週",
        "reading": "らいしゅう",
        "meaning": "tuần sau"
      },
      {
        "word": "読書",
        "reading": "どくしょ",
        "meaning": "đọc sách"
      },
      {
        "word": "辞書",
        "reading": "じしょ",
        "meaning": "từ điển"
      },
      {
        "word": "電話",
        "reading": "でんわ",
        "meaning": "điện thoại"
      },
      {
        "word": "今年",
        "reading": "ことし",
        "meaning": "năm nay"
      },
      {
        "word": "今日",
        "reading": "きょう",
        "meaning": "hôm nay"
      },
      {
        "word": "言語",
        "reading": "げんご",
        "meaning": "ngôn ngữ"
      },
      {
        "word": "言葉",
        "reading": "ことば",
        "meaning": "từ/ngôn ngữ"
      },
      {
        "word": "今月",
        "reading": "こんげつ",
        "meaning": "tháng này"
      },
      {
        "word": "帰国",
        "reading": "きこく",
        "meaning": "về nước"
      },
      {
        "word": "会社",
        "reading": "かいしゃ",
        "meaning": "công ty"
      },
      {
        "word": "新聞",
        "reading": "しんぶん",
        "meaning": "báo"
      },
      {
        "word": "会話",
        "reading": "かいわ",
        "meaning": "hội thoại"
      }
    ],
    "reading": "来週、友だちとコンサートへ行きます。チケットが二枚あります。今月は忙しいですが、土曜日の夜は大丈夫です。映画館もいいですが、わたしはジャズのコンサートのほうが好きです。五時に駅で会いましょう。楽しみですね。",
    "speaking": [
      {
        "q": "今晩、一緒にご飯を食べに行きませんか。",
        "a": "いいですね。行きましょう。/ すみません、今日はちょっと……。"
      },
      {
        "q": "夏と冬とどちらが好きですか。",
        "a": "夏のほうが好きです。"
      },
      {
        "q": "もうその映画を見ましたか。",
        "a": "はい、見ました。/ いいえ、まだです。"
      }
    ]
  },
  {
    "id": 7,
    "title": "Bài 7 - 友達の家で",
    "vnTitle": "Chỉ đường, vị trí, nhờ vả, chuẩn bị tiệc, đang làm gì",
    "days": "Ngày 25-28",
    "objective": "Nói được vị trí đồ vật/người, xin chỉ đường, nhờ người khác làm gì, tự đề nghị giúp.",
    "katakana": [
      {
        "word": "アパート",
        "note": "trường âm ー"
      },
      {
        "word": "ポスト",
        "note": "katakana cơ bản"
      },
      {
        "word": "スプーン",
        "note": "trường âm ー"
      },
      {
        "word": "ギター",
        "note": "trường âm ー"
      }
    ],
    "vocab": [
      {
        "jp": "アパート",
        "vi": "căn hộ",
        "reading": "アパート"
      },
      {
        "jp": "家",
        "vi": "nhà",
        "reading": "いえ・うち"
      },
      {
        "jp": "部屋",
        "vi": "phòng",
        "reading": "へや"
      },
      {
        "jp": "台所",
        "vi": "bếp",
        "reading": "だいどころ"
      },
      {
        "jp": "リビング",
        "vi": "phòng khách",
        "reading": "リビング"
      },
      {
        "jp": "ポスト",
        "vi": "hộp thư",
        "reading": "ポスト"
      },
      {
        "jp": "交番",
        "vi": "đồn cảnh sát",
        "reading": "こうばん"
      },
      {
        "jp": "コンビニ",
        "vi": "cửa hàng tiện lợi",
        "reading": "コンビニ"
      },
      {
        "jp": "バス停",
        "vi": "trạm xe buýt",
        "reading": "バスてい"
      },
      {
        "jp": "本屋",
        "vi": "hiệu sách",
        "reading": "ほんや"
      },
      {
        "jp": "銀行",
        "vi": "ngân hàng",
        "reading": "ぎんこう"
      },
      {
        "jp": "病院",
        "vi": "bệnh viện",
        "reading": "びょういん"
      },
      {
        "jp": "学校",
        "vi": "trường học",
        "reading": "がっこう"
      },
      {
        "jp": "駅",
        "vi": "nhà ga",
        "reading": "えき"
      },
      {
        "jp": "スーパー",
        "vi": "siêu thị",
        "reading": "スーパー"
      },
      {
        "jp": "前",
        "vi": "phía trước",
        "reading": "まえ"
      },
      {
        "jp": "後ろ",
        "vi": "phía sau",
        "reading": "うしろ"
      },
      {
        "jp": "右",
        "vi": "bên phải",
        "reading": "みぎ"
      },
      {
        "jp": "左",
        "vi": "bên trái",
        "reading": "ひだり"
      },
      {
        "jp": "横",
        "vi": "bên cạnh",
        "reading": "よこ"
      },
      {
        "jp": "中",
        "vi": "bên trong",
        "reading": "なか"
      },
      {
        "jp": "外",
        "vi": "bên ngoài",
        "reading": "そと"
      },
      {
        "jp": "上",
        "vi": "phía trên",
        "reading": "うえ"
      },
      {
        "jp": "下",
        "vi": "phía dưới",
        "reading": "した"
      },
      {
        "jp": "近く",
        "vi": "gần",
        "reading": "ちかく"
      },
      {
        "jp": "スプーン",
        "vi": "thìa",
        "reading": "スプーン"
      },
      {
        "jp": "フォーク",
        "vi": "dĩa",
        "reading": "フォーク"
      },
      {
        "jp": "ナイフ",
        "vi": "dao",
        "reading": "ナイフ"
      },
      {
        "jp": "皿",
        "vi": "đĩa",
        "reading": "さら"
      },
      {
        "jp": "コップ",
        "vi": "cốc",
        "reading": "コップ"
      },
      {
        "jp": "ギター",
        "vi": "guitar",
        "reading": "ギター"
      },
      {
        "jp": "ピアノ",
        "vi": "piano",
        "reading": "ピアノ"
      },
      {
        "jp": "テレビ",
        "vi": "TV",
        "reading": "テレビ"
      },
      {
        "jp": "ラジオ",
        "vi": "đài",
        "reading": "ラジオ"
      },
      {
        "jp": "カメラ",
        "vi": "máy ảnh",
        "reading": "カメラ"
      },
      {
        "jp": "牛肉",
        "vi": "thịt bò",
        "reading": "ぎゅうにく"
      },
      {
        "jp": "豚肉",
        "vi": "thịt heo",
        "reading": "ぶたにく"
      },
      {
        "jp": "鶏肉",
        "vi": "thịt gà",
        "reading": "とりにく"
      },
      {
        "jp": "野菜",
        "vi": "rau",
        "reading": "やさい"
      },
      {
        "jp": "塩",
        "vi": "muối",
        "reading": "しお"
      },
      {
        "jp": "砂糖",
        "vi": "đường",
        "reading": "さとう"
      },
      {
        "jp": "醤油",
        "vi": "nước tương",
        "reading": "しょうゆ"
      },
      {
        "jp": "料理",
        "vi": "nấu ăn",
        "reading": "りょうり"
      },
      {
        "jp": "ピザ",
        "vi": "pizza",
        "reading": "ピザ"
      },
      {
        "jp": "サラダ",
        "vi": "salad",
        "reading": "サラダ"
      },
      {
        "jp": "います",
        "vi": "có (người/động vật)",
        "reading": "います"
      },
      {
        "jp": "あります",
        "vi": "có (đồ vật)",
        "reading": "あります"
      },
      {
        "jp": "Vてください",
        "vi": "xin hãy ~",
        "reading": "Vてください"
      },
      {
        "jp": "Vています",
        "vi": "đang ~",
        "reading": "Vています"
      },
      {
        "jp": "Vましょうか",
        "vi": "để tôi ~ nhé",
        "reading": "Vましょうか"
      },
      {
        "jp": "取ります",
        "vi": "lấy",
        "reading": "とります"
      },
      {
        "jp": "開けます",
        "vi": "mở",
        "reading": "あけます"
      },
      {
        "jp": "閉めます",
        "vi": "đóng",
        "reading": "しめます"
      },
      {
        "jp": "切ります",
        "vi": "cắt",
        "reading": "きります"
      },
      {
        "jp": "混ぜます",
        "vi": "trộn",
        "reading": "まぜます"
      },
      {
        "jp": "まだ",
        "vi": "vẫn còn",
        "reading": "まだ"
      },
      {
        "jp": "もう",
        "vi": "đã / không còn",
        "reading": "もう"
      },
      {
        "jp": "まっすぐ",
        "vi": "thẳng",
        "reading": "まっすぐ"
      },
      {
        "jp": "右に曲がります",
        "vi": "rẽ phải",
        "reading": "みぎにまがります"
      },
      {
        "jp": "左に曲がります",
        "vi": "rẽ trái",
        "reading": "ひだりにまがります"
      },
      {
        "jp": "作り方",
        "reading": "つくりかた",
        "vi": "Cách làm, công thức"
      },
      {
        "jp": "電話",
        "reading": "でんわ",
        "vi": "Điện thoại"
      },
      {
        "jp": "手伝います",
        "reading": "てつだいます",
        "vi": "Giúp đỡ"
      },
      {
        "jp": "お皿",
        "reading": "おさら",
        "vi": "Cái đĩa đựng thức ăn"
      },
      {
        "jp": "料金",
        "reading": "りょうきん",
        "vi": "Tiền phí, cước phí"
      }
    ],
    "grammar": [
      {
        "pattern": "N は 場所 に います / あります",
        "use": "Nói người/vật ở đâu",
        "example": "わたしは本屋にいます。",
        "vocabLink": "Cực quan trọng cho vị trí."
      },
      {
        "pattern": "場所 に N が います / あります",
        "use": "Nói ở đâu có ai/có gì",
        "example": "銀行の前に本屋があります。",
        "vocabLink": "Chỉ đường."
      },
      {
        "pattern": "Vてください",
        "use": "Nhờ / hướng dẫn",
        "example": "かばんを取ってください。",
        "vocabLink": "Bài 7 phải phản xạ được."
      },
      {
        "pattern": "Vています",
        "use": "Đang làm gì",
        "example": "電話をかけています。",
        "vocabLink": "Tả tranh speaking."
      },
      {
        "pattern": "Vましょうか",
        "use": "Đề nghị giúp",
        "example": "手伝いましょうか。",
        "vocabLink": "Điểm cộng tự nhiên."
      },
      {
        "pattern": "（Nの）V方を教えてください",
        "use": "Xin hướng dẫn cách làm",
        "example": "料理の作り方を教えてください。",
        "vocabLink": "Gắn với nấu ăn / làm việc."
      },
      {
        "pattern": "まだ / もう",
        "use": "Còn chưa / đã rồi",
        "example": "サラダはまだありますか。― いいえ、もうありません。",
        "vocabLink": "Rất hay gặp."
      },
      {
        "pattern": "誰が / どのN / どれ / NでV",
        "use": "Hỏi ai làm; chọn đồ; công cụ",
        "example": "誰が作りましたか。塩はどれですか。",
        "vocabLink": "Phủ rộng câu hỏi."
      }
    ],
    "kanji": [
      {
        "word": "牛肉",
        "reading": "ぎゅうにく",
        "meaning": "thịt bò"
      },
      {
        "word": "一時半",
        "reading": "いちじはん",
        "meaning": "1 giờ rưỡi"
      },
      {
        "word": "大学",
        "reading": "だいがく",
        "meaning": "đại học"
      },
      {
        "word": "小学生",
        "reading": "しょうがくせい",
        "meaning": "học sinh tiểu học"
      },
      {
        "word": "大学生",
        "reading": "だいがくせい",
        "meaning": "sinh viên đại học"
      },
      {
        "word": "小学校",
        "reading": "しょうがっこう",
        "meaning": "trường tiểu học"
      },
      {
        "word": "大会",
        "reading": "たいかい",
        "meaning": "đại hội/giải đấu"
      },
      {
        "word": "大人",
        "reading": "おとな",
        "meaning": "người lớn"
      },
      {
        "word": "鶏肉",
        "reading": "とりにく",
        "meaning": "thịt gà"
      },
      {
        "word": "野菜",
        "reading": "やさい",
        "meaning": "rau"
      },
      {
        "word": "半年",
        "reading": "はんとし / はんねん",
        "meaning": "nửa năm"
      },
      {
        "word": "豚肉",
        "reading": "ぶたにく",
        "meaning": "thịt heo"
      },
      {
        "word": "半分",
        "reading": "はんぶん",
        "meaning": "một nửa"
      },
      {
        "word": "料金",
        "reading": "りょうきん",
        "meaning": "phí"
      },
      {
        "word": "料理",
        "reading": "りょうり",
        "meaning": "món ăn/nấu ăn"
      }
    ],
    "reading": "きょう、友だちのアパートへ行きました。でも、道がわかりませんでした。駅で電話をかけて、『いま、交番の前にいます』と言いました。友だちは『そこからまっすぐ来てください。ポストの横にわたしがいます』と言いました。家でピザを食べて、ギターを聞きました。",
    "speaking": [
      {
        "q": "あなたは今どこにいますか。",
        "a": "わたしは本屋の前にいます。"
      },
      {
        "q": "バス停はどこにありますか。",
        "a": "コンビニの前にあります。"
      },
      {
        "q": "手伝いましょうか。",
        "a": "はい、お願いします。/ ありがとうございます。"
      }
    ]
  }
];

const MIDTERM_POOLS = {
  "vocab": [
    {
      "q": "ハノイは ベトナムの（　　）に あります。",
      "choices": [
        "東",
        "北",
        "西",
        "南"
      ],
      "answer": 1,
      "explain": "Hà Nội nằm ở phía Bắc (北 - きた) của Việt Nam."
    },
    {
      "q": "私の町には 古い（　　）が あります。多くの人が お参りに行きます。",
      "choices": [
        "メロン",
        "電車",
        "お寺",
        "飛行機"
      ],
      "answer": 2,
      "explain": "お寺 (おてら): Chùa. Người ta thường đến chùa cầu nguyện."
    },
    {
      "q": "ホーチミン市は とても（　　）町です。",
      "choices": [
        "にぎやかな",
        "苦い",
        "甘い",
        "静かな"
      ],
      "answer": 0,
      "explain": "にぎやかな町: Thành phố náo nhiệt, sầm uất."
    },
    {
      "q": "駅まで 歩いて（　　）くらいですか。",
      "choices": [
        "どこ",
        "どのくらい",
        "どの",
        "だれ"
      ],
      "answer": 1,
      "explain": "どのくらい: Mất khoảng bao lâu / bao xa."
    },
    {
      "q": "沖縄（おきなわ）は 日本の（　　）です。",
      "choices": [
        "南",
        "北",
        "真ん中",
        "東"
      ],
      "answer": 0,
      "explain": "Okinawa nằm ở phía Nam (南 - みなみ) của Nhật Bản."
    },
    {
      "q": "東京から 京都まで（　　）で 行きました。とても 速かったです。",
      "choices": [
        "歩いて",
        "川",
        "自転車",
        "新幹線"
      ],
      "answer": 3,
      "explain": "新幹線 (しんかんせん): Tàu cao tốc Shinkansen."
    },
    {
      "q": "箱根（はこね）に 有名な（　　）が あります。",
      "choices": [
        "雪",
        "雨",
        "温泉",
        "デパート"
      ],
      "answer": 2,
      "explain": "温泉 (おんせん): Suối nước nóng nổi tiếng ở Hakone."
    },
    {
      "q": "この町は 緑が（　　）、空気が きれいです。",
      "choices": [
        "高くて",
        "低くて",
        "多くて",
        "熱くて"
      ],
      "answer": 2,
      "explain": "緑が多い (みどりがおおい): Nhiều cây xanh."
    },
    {
      "q": "日本の冬は とても（　　）です。",
      "choices": [
        "暑い",
        "甘い",
        "寒い",
        "辛い"
      ],
      "answer": 2,
      "explain": "冬 (mùa đông) thì 寒い (lạnh)."
    },
    {
      "q": "この メロンは とても（　　）です。",
      "choices": [
        "すっぱい",
        "狭い",
        "甘い",
        "苦い"
      ],
      "answer": 2,
      "explain": "甘い (あまい): Ngọt (dưa lê ngọt)."
    },
    {
      "q": "アユタヤは（　　）ところですか。― 古くて きれいなところです。",
      "choices": [
        "どこ",
        "どうして",
        "だれ",
        "どんな"
      ],
      "answer": 3,
      "explain": "どんなところ: Nơi như thế nào?"
    },
    {
      "q": "昨日、デパートへ（　　）に 行きました。",
      "choices": [
        "掃除",
        "洗濯",
        "食事",
        "買い物"
      ],
      "answer": 3,
      "explain": "買い物に行きます: Đi mua sắm."
    },
    {
      "q": "ダナンは ベトナムの（　　）に あります。",
      "choices": [
        "外",
        "北",
        "真ん中",
        "西"
      ],
      "answer": 2,
      "explain": "真ん中 (まんなか): Ở chính giữa, miền Trung."
    },
    {
      "q": "富士山は とても（　　）山です。",
      "choices": [
        "苦い",
        "甘い",
        "低い",
        "高い"
      ],
      "answer": 3,
      "explain": "高い山: Núi cao."
    },
    {
      "q": "この料理は 少し（　　）ですが、おいしいです。",
      "choices": [
        "辛い",
        "静か",
        "にぎやか",
        "親切"
      ],
      "answer": 0,
      "explain": "辛い (からい): Cay."
    },
    {
      "q": "週末、部屋で（　　）を しました。",
      "choices": [
        "駅",
        "掃除",
        "川",
        "山"
      ],
      "answer": 1,
      "explain": "掃除をします (そうじをします): Dọn dẹp phòng."
    },
    {
      "q": "町に 高い（　　）が たくさん あります。",
      "choices": [
        "雪",
        "風邪",
        "雨",
        "ビル"
      ],
      "answer": 3,
      "explain": "ビル: Tòa nhà cao tầng."
    },
    {
      "q": "夏休みに 家族と（　　）へ 行って、絵を 見ました。",
      "choices": [
        "駅",
        "新幹線",
        "美術館",
        "温泉"
      ],
      "answer": 2,
      "explain": "美術館 (びじゅつかん): Bảo tàng mỹ thuật để xem tranh."
    },
    {
      "q": "今日は 天気が（　　）、散歩に 行きましょう。",
      "choices": [
        "あつくて",
        "さむくて",
        "わるくて",
        "よくて"
      ],
      "answer": 3,
      "explain": "天気がいい (てんきがいい): Thời tiết đẹp."
    },
    {
      "q": "週末、友だちと（　　）を します。レストランに 行きます。",
      "choices": [
        "食事",
        "洗濯",
        "掃除",
        "勉強"
      ],
      "answer": 0,
      "explain": "食事をします (しょくじをします): Dùng bữa, ăn uống."
    },
    {
      "q": "ここから 空港まで（　　）で 1時間くらいです。",
      "choices": [
        "車",
        "川",
        "城",
        "山"
      ],
      "answer": 0,
      "explain": "車 (くるま): Xe ô tô (đi bằng ô tô mất khoảng 1 tiếng)."
    },
    {
      "q": "秋の 京都は（　　）て、とても 過ごしやすいです。",
      "choices": [
        "涼しく",
        "苦く",
        "辛く",
        "暑く"
      ],
      "answer": 0,
      "explain": "涼しい (すずしい): Mát mẻ (mùa thu mát mẻ)."
    },
    {
      "q": "昨日、服を たくさん（　　）しました。",
      "choices": [
        "食事",
        "買い物",
        "旅行",
        "洗濯"
      ],
      "answer": 3,
      "explain": "洗濯をします (せんたくをします): Giặt giũ quần áo."
    },
    {
      "q": "（　　）は 忙しかったですが、今日は 暇です。",
      "choices": [
        "あさって",
        "来週",
        "昨日",
        "明日"
      ],
      "answer": 2,
      "explain": "昨日 (きのう): Hôm qua (hợp ngữ cảnh quá khứ でした)."
    },
    {
      "q": "日本の 古い（　　）を 見学しました。",
      "choices": [
        "電車",
        "お城",
        "飛行機",
        "メロン"
      ],
      "answer": 1,
      "explain": "お城 (おしろ): Lâu đài cổ Nhật Bản."
    },
    {
      "q": "この お茶は とても（　　）です。",
      "choices": [
        "暑い",
        "にぎやか",
        "苦い",
        "涼しい"
      ],
      "answer": 2,
      "explain": "苦い (にがい): Đắng (trà đắng)."
    },
    {
      "q": "週末は どこへも 行かないで、（　　）で テレビを 見ました。",
      "choices": [
        "川",
        "空港",
        "駅",
        "家"
      ],
      "answer": 3,
      "explain": "家 (いえ): Nhà (ở nhà xem tivi)."
    },
    {
      "q": "（　　）は 雨が 降りましたが、今朝は 晴れています。",
      "choices": [
        "明日",
        "来年",
        "昨日",
        "あさって"
      ],
      "answer": 2,
      "explain": "昨日 (きのう): Hôm qua."
    },
    {
      "q": "私の町には きれいな（　　）が 流れています。",
      "choices": [
        "電車",
        "駅",
        "川",
        "ビル"
      ],
      "answer": 2,
      "explain": "川 (かわ): Con sông."
    },
    {
      "q": "レモンは（　　）です。",
      "choices": [
        "すっぱい",
        "甘い",
        "苦い",
        "暑い"
      ],
      "answer": 0,
      "explain": "すっぱい: Chua (chanh chua)."
    },
    {
      "q": "（　　）映画を 見ました。それから、買い物を しました。",
      "choices": [
        "すこし",
        "まず",
        "とても",
        "あまり"
      ],
      "answer": 1,
      "explain": "まず: Trước tiên / đầu tiên."
    },
    {
      "q": "風邪を 引きましたから、今日（　　）へ 行きません。",
      "choices": [
        "どこ",
        "どこでも",
        "どこへも",
        "どこも"
      ],
      "answer": 2,
      "explain": "どこへも + Phủ định: Không đi bất kỳ đâu."
    },
    {
      "q": "東京は（　　）が 多いですから、とても にぎやかです。",
      "choices": [
        "人",
        "川",
        "山",
        "城"
      ],
      "answer": 0,
      "explain": "人 (ひと): Người (nhiều người nên náo nhiệt)."
    },
    {
      "q": "スープが（　　）ですから、気をつけて 飲んでください。",
      "choices": [
        "冷たい",
        "苦い",
        "熱い",
        "甘い"
      ],
      "answer": 2,
      "explain": "熱い (あつい): Nóng (dùng cho đồ ăn, thức uống nóng)."
    },
    {
      "q": "休みの日、友だちと オンライン（　　）を しました。",
      "choices": [
        "新幹線",
        "温泉",
        "ゲーム",
        "飛行機"
      ],
      "answer": 2,
      "explain": "ゲーム: Trò chơi điện tử."
    },
    {
      "q": "（　　）は 熱が ありましたが、今は 大丈夫です。",
      "choices": [
        "明日",
        "あさって",
        "来週",
        "今朝"
      ],
      "answer": 3,
      "explain": "今朝 (けさ): Sáng nay."
    },
    {
      "q": "ハノイから フエまで（　　）で 1時間くらいです。",
      "choices": [
        "歩いて",
        "飛行機",
        "自転車",
        "温泉"
      ],
      "answer": 1,
      "explain": "飛行機 (ひこうき): Máy bay (đi bằng máy bay mất khoảng 1 tiếng)."
    },
    {
      "q": "この町は（　　）で、住みやすいです。",
      "choices": [
        "静か",
        "辛い",
        "甘い",
        "苦い"
      ],
      "answer": 0,
      "explain": "静か (しずか): Yên tĩnh (yên tĩnh và dễ sống)."
    },
    {
      "q": "休みの日、だれとも 会わないで（　　）で 過ごしました。",
      "choices": [
        "二人",
        "一人",
        "家族",
        "みんな"
      ],
      "answer": 1,
      "explain": "一人で (ひとりで): Một mình."
    },
    {
      "q": "（　　）日本へ 行きました。とても 楽しかったです。",
      "choices": [
        "あさって",
        "来年",
        "明日",
        "去年"
      ],
      "answer": 3,
      "explain": "去年 (きょねん): Năm ngoái (đi với quá khứ 行きました)."
    }
  ],
  "kanji": [
    {
      "q": "「東京」の 読み方は どれですか。",
      "choices": [
        "とうこう",
        "とうけい",
        "とうきょう",
        "ひがしきょう"
      ],
      "answer": 2,
      "explain": "東京: とうきょう (Tokyo)."
    },
    {
      "q": "「外国」の 読み方は どれですか。",
      "choices": [
        "げんこく",
        "がいごく",
        "がいこく",
        "そとくに"
      ],
      "answer": 2,
      "explain": "外国: がいこく (Nước ngoài)."
    },
    {
      "q": "「せんせい」の 漢字は どれですか。",
      "choices": [
        "先月",
        "先週",
        "学生",
        "先生"
      ],
      "answer": 3,
      "explain": "先生: せんせい (Giáo viên)."
    },
    {
      "q": "「かいもの」の 漢字は どれですか。",
      "choices": [
        "見物",
        "買い物",
        "飲み物",
        "食べ物"
      ],
      "answer": 1,
      "explain": "買い物: かいもの (Mua sắm)."
    },
    {
      "q": "「午前」の 読み方は どれですか。",
      "choices": [
        "ごご",
        "ごぜん",
        "ごまえ",
        "うまぜん"
      ],
      "answer": 1,
      "explain": "午前: ごぜん (Buổi sáng, AM)."
    },
    {
      "q": "「午後」の 読み方は どれですか。",
      "choices": [
        "ごうしろ",
        "ごご",
        "ごあと",
        "ごぜん"
      ],
      "answer": 1,
      "explain": "午後: ごご (Buổi chiều, PM)."
    },
    {
      "q": "「なまえ」の 漢字は どれですか。",
      "choices": [
        "前日",
        "午前",
        "有名",
        "名前"
      ],
      "answer": 3,
      "explain": "名前: なまえ (Tên)."
    },
    {
      "q": "「せんしゅう」の 漢字は どれですか。",
      "choices": [
        "毎週",
        "今週",
        "先週",
        "来週"
      ],
      "answer": 2,
      "explain": "先週: せんしゅう (Tuần trước)."
    },
    {
      "q": "「男の人」の 読み方は どれですか。",
      "choices": [
        "おとこじん",
        "おとこのひと",
        "おんなのひと",
        "だんのひと"
      ],
      "answer": 1,
      "explain": "男の人: おとこのひと (Người đàn ông)."
    },
    {
      "q": "「女の人」の 読み方は どれですか。",
      "choices": [
        "おとこのひと",
        "じょのひと",
        "おんなじん",
        "おんなのひと"
      ],
      "answer": 3,
      "explain": "女の人: おんなのひと (Người phụ nữ)."
    },
    {
      "q": "「まいあさ」の 漢字は どれですか。",
      "choices": [
        "毎月",
        "毎週",
        "毎日",
        "毎朝"
      ],
      "answer": 3,
      "explain": "毎朝: まいあさ (Mỗi sáng)."
    },
    {
      "q": "「たべもの」の 漢字は どれですか。",
      "choices": [
        "飲み物",
        "人物",
        "買い物",
        "食べ物"
      ],
      "answer": 3,
      "explain": "食べ物: たべもの (Thức ăn)."
    },
    {
      "q": "「東」の 読み方は どれですか。",
      "choices": [
        "ひがし",
        "きた",
        "みなみ",
        "にし"
      ],
      "answer": 0,
      "explain": "東: ひがし (Phía Đông)."
    },
    {
      "q": "「食事」の 読み方は どれですか。",
      "choices": [
        "しょくじ",
        "じきじ",
        "しょくし",
        "たべごと"
      ],
      "answer": 0,
      "explain": "食事: しょくじ (Bữa ăn, dùng bữa)."
    },
    {
      "q": "「のみもの」の 漢字は どれですか。",
      "choices": [
        "動物",
        "飲み物",
        "買い物",
        "食べ物"
      ],
      "answer": 1,
      "explain": "飲み物: のみもの (Đồ uống)."
    },
    {
      "q": "「やすみのひ」の 漢字は どれですか。",
      "choices": [
        "休みの日",
        "本の日",
        "休日の日",
        "体みの日"
      ],
      "answer": 0,
      "explain": "休みの日: やすみのひ (Ngày nghỉ)."
    },
    {
      "q": "「見学」の 読み方は どれですか。",
      "choices": [
        "けんがく",
        "みかく",
        "みまなぶ",
        "けんまなぶ"
      ],
      "answer": 0,
      "explain": "見学: けんがく (Tham quan học tập)."
    },
    {
      "q": "「休日」の 読み方は どれですか。",
      "choices": [
        "やすみひ",
        "やすじつ",
        "くじつ",
        "きゅうじつ"
      ],
      "answer": 3,
      "explain": "休日: きゅうじつ (Ngày nghỉ lễ)."
    },
    {
      "q": "「とうきょう」の 「東」は どれですか。",
      "choices": [
        "車",
        "南",
        "京",
        "東"
      ],
      "answer": 3,
      "explain": "東京 (とうきょう) chữ Đông là 東."
    },
    {
      "q": "「まいにち」の 漢字は どれですか。",
      "choices": [
        "毎年",
        "毎日",
        "毎月",
        "毎週"
      ],
      "answer": 1,
      "explain": "毎日: まいにち (Mỗi ngày)."
    },
    {
      "q": "「男女」の 読み方は どれですか。",
      "choices": [
        "おとこおんな",
        "なんにょ",
        "おとこじょ",
        "だんじょ"
      ],
      "answer": 3,
      "explain": "男女: だんじょ (Nam nữ)."
    },
    {
      "q": "「飲食」の 読み方は どれですか。",
      "choices": [
        "いんじき",
        "おんしょく",
        "いんしょく",
        "のみたべ"
      ],
      "answer": 2,
      "explain": "飲食: いんしょく (Ăn uống)."
    },
    {
      "q": "「せんげつ」の 漢字は どれですか。",
      "choices": [
        "今月",
        "毎月",
        "先月",
        "来月"
      ],
      "answer": 2,
      "explain": "先月: せんげつ (Tháng trước)."
    },
    {
      "q": "「いっしゅうかん」の 漢字は どれですか。",
      "choices": [
        "一週間",
        "毎週間",
        "日週間",
        "先週間"
      ],
      "answer": 0,
      "explain": "一週間: いっしゅうかん (Một tuần lễ)."
    },
    {
      "q": "「前日」の 読み方は どれですか。",
      "choices": [
        "ぜんひ",
        "ぜんじつ",
        "まえじつ",
        "まえひ"
      ],
      "answer": 1,
      "explain": "前日: ぜんじつ (Ngày hôm trước)."
    },
    {
      "q": "「前後」の 読み方は どれですか。",
      "choices": [
        "ぜんこう",
        "まえうしろ",
        "ぜんご",
        "まえあと"
      ],
      "answer": 2,
      "explain": "前後: ぜんご (Trước sau)."
    },
    {
      "q": "「まいしゅう」の 漢字は どれですか。",
      "choices": [
        "先週",
        "今週",
        "毎週",
        "来週"
      ],
      "answer": 2,
      "explain": "毎週: まいしゅう (Mỗi tuần)."
    },
    {
      "q": "「かいもの」の 「買」は どれですか。",
      "choices": [
        "休",
        "貝",
        "見",
        "買"
      ],
      "answer": 3,
      "explain": "買い物 (かいもの) chữ Mãi là 買."
    },
    {
      "q": "「飲み水」の 読み方は どれですか。",
      "choices": [
        "のみみず",
        "いんみず",
        "いんすい",
        "のみすい"
      ],
      "answer": 0,
      "explain": "飲み水: のみみず (Nước uống)."
    },
    {
      "q": "「人物」の 読み方は どれですか。",
      "choices": [
        "ひともの",
        "じんぶつ",
        "にんぶつ",
        "じんもの"
      ],
      "answer": 1,
      "explain": "人物: じんぶつ (Nhân vật)."
    },
    {
      "q": "「まいとし」の 漢字は どれですか。",
      "choices": [
        "毎日",
        "毎月",
        "毎週",
        "毎年"
      ],
      "answer": 3,
      "explain": "毎年: まいとし (Mỗi năm)."
    },
    {
      "q": "「いっしょ」の 「行」を使った動詞「いきます」の 漢字は どれですか。",
      "choices": [
        "来ます",
        "見ます",
        "行きます",
        "帰ります"
      ],
      "answer": 2,
      "explain": "行きます: いきます (Đi)."
    },
    {
      "q": "「見物」の 読み方は どれですか。",
      "choices": [
        "けんもの",
        "みぶつ",
        "けんぶつ",
        "みもの"
      ],
      "answer": 2,
      "explain": "見物: けんぶつ (Tham quan, ngắm cảnh)."
    },
    {
      "q": "「～市」の 読み方は どれですか。",
      "choices": [
        "～まち",
        "～し",
        "～く",
        "～いち"
      ],
      "answer": 1,
      "explain": "～市: ～し (Thành phố, ví dụ: ハノイ市)."
    },
    {
      "q": "「～く」の 漢字は どれですか。",
      "choices": [
        "国",
        "区",
        "市",
        "町"
      ],
      "answer": 1,
      "explain": "～区: ～く (Quận)."
    },
    {
      "q": "「がいこく」の 「国」は どれですか。",
      "choices": [
        "区",
        "市",
        "町",
        "国"
      ],
      "answer": 3,
      "explain": "外国 (がいこく) chữ Quốc là 国."
    },
    {
      "q": "「先日」の 読み方は どれですか。",
      "choices": [
        "さきひ",
        "さきにち",
        "まえじつ",
        "せんじつ"
      ],
      "answer": 3,
      "explain": "先日: せんじつ (Hôm nọ, mấy hôm trước)."
    },
    {
      "q": "「くに」の 漢字は どれですか。",
      "choices": [
        "町",
        "市",
        "区",
        "国"
      ],
      "answer": 3,
      "explain": "国: くに (Đất nước, quốc gia)."
    },
    {
      "q": "「みせます」の 漢字は どれですか。",
      "choices": [
        "見せます",
        "飲みます",
        "行きます",
        "食べます"
      ],
      "answer": 0,
      "explain": "見せます: みせます (Cho xem, chữ Kiến 見)."
    },
    {
      "q": "「やすみます」の 漢字は どれですか。",
      "choices": [
        "本みます",
        "休みます",
        "行きます",
        "体みます"
      ],
      "answer": 1,
      "explain": "休みます: やすみます (Nghỉ ngơi, chữ Hưu 休)."
    }
  ],
  "grammar": [
    {
      "q": "私の町は とても（　　）。",
      "choices": [
        "きれいでしたくない",
        "きれいです",
        "きれいく",
        "きれいくないです"
      ],
      "answer": 1,
      "explain": "Tính từ đuôi な khẳng định ở hiện tại: ナA + です (きれい → きれいです)."
    },
    {
      "q": "この町は あまり（　　）。",
      "choices": [
        "にぎやかじゃありません",
        "にぎやかでした",
        "にぎやかです",
        "にぎやか"
      ],
      "answer": 0,
      "explain": "あまり đi với phủ định: あまり にぎやかじゃありません (Không náo nhiệt lắm)."
    },
    {
      "q": "町の近くに きれいな山（　　）あります。",
      "choices": [
        "が",
        "へ",
        "を",
        "で"
      ],
      "answer": 0,
      "explain": "Cấu trúc tồn tại: 場所に Nがあります (ở đâu có cái gì)."
    },
    {
      "q": "ハノイから ダナンまで 飛行機（　　）1時間くらいです。",
      "choices": [
        "を",
        "へ",
        "で",
        "に"
      ],
      "answer": 2,
      "explain": "Trợ từ で chỉ phương tiện di chuyển (bằng máy bay: 飛行機で)."
    },
    {
      "q": "昨日のパーティーは とても（　　）です。",
      "choices": [
        "たのしかったです",
        "たのしくない",
        "たのしかった",
        "たのしい"
      ],
      "answer": 2,
      "explain": "Quá khứ tính từ đuôi い: bỏ い + かったです (たのしかった + です)."
    },
    {
      "q": "新しい パソコン（　　）ほしいです。",
      "choices": [
        "を",
        "で",
        "が",
        "に"
      ],
      "answer": 2,
      "explain": "Mẫu câu mong muốn vật thể: Nが ほしいです (Muốn có máy tính mới)."
    },
    {
      "q": "秋葉原へ アニメのグッズを（　　）に 行きます。",
      "choices": [
        "買う",
        "買い",
        "買います",
        "買った"
      ],
      "answer": 1,
      "explain": "Mục đích di chuyển: N（địa điểm）へ V(bỏ ます) + に行きます (買いに行きます)."
    },
    {
      "q": "このカメラは（　　）ないです。",
      "choices": [
        "たかい",
        "たかかった",
        "たか",
        "たかく"
      ],
      "answer": 3,
      "explain": "Phủ định tính từ đuôi い: bỏ い + くないです (たかい → たかくないです)."
    },
    {
      "q": "アユタヤは（　　）ところですか。― 古い町です。",
      "choices": [
        "どう",
        "だれ",
        "どんな",
        "どれ"
      ],
      "answer": 2,
      "explain": "Hỏi tính chất của danh từ: どんな + N (nơi như thế nào?)."
    },
    {
      "q": "東京から 京都まで 新幹線で（　　）ですか。― 2時間半です。",
      "choices": [
        "どこ",
        "どのくらい",
        "どちら",
        "なんじ"
      ],
      "answer": 1,
      "explain": "Hỏi thời gian mất bao lâu: どのくらいですか。"
    },
    {
      "q": "昨日は 雨（　　）から、どこへも 行きませんでした。",
      "choices": [
        "ます",
        "でした",
        "です",
        "だった"
      ],
      "answer": 1,
      "explain": "Danh từ ở quá khứ: 雨でした。から biểu thị lý do (Vì hôm qua mưa)."
    },
    {
      "q": "私は 日本の映画が（　　）です。",
      "choices": [
        "高い",
        "寒い",
        "暑い",
        "好き"
      ],
      "answer": 3,
      "explain": "Nが 好きです: Thích danh từ N (Thích phim Nhật)."
    },
    {
      "q": "のどが かわきましたから、水を（　　）たいです。",
      "choices": [
        "飲みます",
        "飲む",
        "飲み",
        "飲んだ"
      ],
      "answer": 2,
      "explain": "Muốn làm gì: V(bỏ ます) + たいです (飲みます → 飲みたいです)."
    },
    {
      "q": "週末、友だち（　　）サッカーを しました。",
      "choices": [
        "と",
        "で",
        "を",
        "に"
      ],
      "answer": 0,
      "explain": "Làm gì cùng với ai: N + と (cùng với bạn)."
    },
    {
      "q": "ここは（　　）町です。",
      "choices": [
        "静かな",
        "静かだ",
        "静かに",
        "静か"
      ],
      "answer": 0,
      "explain": "Tính từ đuôi な bổ nghĩa cho danh từ: ナA + な + N (静かな町)."
    },
    {
      "q": "昨日は 寒かったですが、今日は（　　）ないです。",
      "choices": [
        "さむかった",
        "さむく",
        "さむい",
        "さむ"
      ],
      "answer": 1,
      "explain": "Phủ định tính từ đuôi い hiện tại: 寒くないです."
    },
    {
      "q": "北海道は 日本の（　　）です。",
      "choices": [
        "西",
        "南",
        "東",
        "北"
      ],
      "answer": 3,
      "explain": "Mô tả vị trí địa lý: N1 は N2 の [Phương hướng] です (Hokkaido ở phía Bắc Nhật Bản)."
    },
    {
      "q": "昨日のテストは あまり（　　）でした。",
      "choices": [
        "かんたんです",
        "かんたん",
        "かんたんでした",
        "かんたんじゃありません"
      ],
      "answer": 3,
      "explain": "Quá khứ phủ định tính từ な: ナA + じゃありませんでした."
    },
    {
      "q": "週末は どこかへ 行きましたか。― いいえ、（　　）行きませんでした。",
      "choices": [
        "どこに",
        "どこも",
        "どこへも",
        "どこへ"
      ],
      "answer": 2,
      "explain": "Phủ định hoàn toàn phương hướng: どこへも + Phủ định (Không đi đâu cả)."
    },
    {
      "q": "日本へ 日本語を（　　）に 来ました。",
      "choices": [
        "勉強して",
        "勉強する",
        "勉強",
        "勉強し"
      ],
      "answer": 3,
      "explain": "Động từ nhóm 3 勉強します bỏ ます + に来ました (Đến để học)."
    },
    {
      "q": "どうして 昨日 学校を 休みましたか。― 熱が（　　）から。",
      "choices": [
        "あって",
        "あります",
        "ありました",
        "ある"
      ],
      "answer": 2,
      "explain": "Hỏi どうして (tại sao) trả lời bằng câu kết thúc bằng ～から (vì...)."
    },
    {
      "q": "この料理は（　　）おいしいです。",
      "choices": [
        "あまり",
        "とても",
        "少しも",
        "全然"
      ],
      "answer": 1,
      "explain": "とても đi với câu khẳng định (rất ngon). あまり đi với phủ định."
    },
    {
      "q": "公園に きれいな花が（　　）。",
      "choices": [
        "います",
        "あります",
        "いきます",
        "します"
      ],
      "answer": 1,
      "explain": "Đồ vật/hoa cỏ dùng あります (Ở công viên có hoa đẹp)."
    },
    {
      "q": "大阪から 京都まで 電車（　　）30分です。",
      "choices": [
        "を",
        "で",
        "へ",
        "に"
      ],
      "answer": 1,
      "explain": "Đi bằng phương tiện gì dùng trợ từ で."
    },
    {
      "q": "旅行は どう（　　）か。― とても 楽しかったです。",
      "choices": [
        "です",
        "でしたら",
        "ます",
        "でした"
      ],
      "answer": 3,
      "explain": "Hỏi cảm tưởng về sự việc đã qua: どうでしたか (Chuyến đi thế nào?)."
    },
    {
      "q": "今は お金が（　　）ですから、旅行に 行きません。",
      "choices": [
        "ありませんでした",
        "ありません",
        "あります",
        "ないでした"
      ],
      "answer": 1,
      "explain": "Vì hiện tại không có tiền: ありませんから."
    },
    {
      "q": "デパートへ 服を（　　）に 行きました。",
      "choices": [
        "買います",
        "買う",
        "買い",
        "買って"
      ],
      "answer": 2,
      "explain": "買いに行きます: Đi để mua đồ."
    },
    {
      "q": "昨日、映画を 見ました。（　　）、食事を しました。",
      "choices": [
        "しかし",
        "それから",
        "そして",
        "ですから"
      ],
      "answer": 1,
      "explain": "Nối hai hành động theo trình tự thời gian: Hành động 1. それから, Hành động 2."
    },
    {
      "q": "富士山は（　　）山です。",
      "choices": [
        "高に",
        "高な",
        "高くて",
        "高い"
      ],
      "answer": 3,
      "explain": "Tính từ đuôi い bổ nghĩa danh từ giữ nguyên い: 高い山."
    },
    {
      "q": "私の部屋は あまり（　　）ないです。",
      "choices": [
        "ひろい",
        "ひろかった",
        "ひろく",
        "ひろ"
      ],
      "answer": 2,
      "explain": "あまり 広くないです (Phòng tôi không rộng lắm)."
    },
    {
      "q": "東京（　　）箱根（　　）どのくらいですか。",
      "choices": [
        "で／と",
        "まで／から",
        "から／まで",
        "へ／に"
      ],
      "answer": 2,
      "explain": "Từ đâu đến đâu: ～から ～まで どのくらいですか。"
    },
    {
      "q": "昨日は どこへも（　　）。家で 本を 読みました。",
      "choices": [
        "行きませんでした",
        "行かない",
        "行きます",
        "行きました"
      ],
      "answer": 0,
      "explain": "Hôm qua không đi đâu: 行きませんでした."
    },
    {
      "q": "新しい スマホが（　　）です。今のは 古いです。",
      "choices": [
        "ほしく",
        "ほしい",
        "ほし",
        "ほしいな"
      ],
      "answer": 1,
      "explain": "Nが ほしいです (Muốn có điện thoại mới)."
    },
    {
      "q": "疲れませんでしたか。― ええ、（　　）疲れませんでした。",
      "choices": [
        "とても",
        "少し",
        "たくさん",
        "あまり"
      ],
      "answer": 3,
      "explain": "あまり + Phủ định: Không mệt lắm."
    },
    {
      "q": "日曜日は 部屋の 掃除を（　　）。",
      "choices": [
        "して",
        "した",
        "します",
        "しました"
      ],
      "answer": 3,
      "explain": "Hành động đã hoàn thành: 掃除をしました."
    },
    {
      "q": "京都は（　　）町です。",
      "choices": [
        "有名",
        "有名に",
        "有名な",
        "有名の"
      ],
      "answer": 2,
      "explain": "Tính từ đuôi な bổ nghĩa danh từ: 有名な町 (Thành phố nổi tiếng)."
    },
    {
      "q": "昨日は 天気が（　　）です。",
      "choices": [
        "よかった",
        "よかったです",
        "いいでした",
        "よくでした"
      ],
      "answer": 1,
      "explain": "Quá khứ của いい là よかったです (Hôm qua thời tiết đã rất đẹp)."
    },
    {
      "q": "駅の前に 大きい ビル（　　）あります。",
      "choices": [
        "を",
        "へ",
        "が",
        "に"
      ],
      "answer": 2,
      "explain": "Cấu trúc tồn tại: 場所に Nがあります."
    },
    {
      "q": "昨日、友だちに（　　）。",
      "choices": [
        "会う",
        "会って",
        "会います",
        "会いました"
      ],
      "answer": 3,
      "explain": "Hành động quá khứ: 友だちに会いました (Đã gặp bạn)."
    },
    {
      "q": "将来、日本へ（　　）たいです。",
      "choices": [
        "行って",
        "行きます",
        "行き",
        "行く"
      ],
      "answer": 2,
      "explain": "V(bỏ ます) + たいです: 行きたいです (Muốn đi Nhật)."
    },
    {
      "q": "暑いですから、冷たい ジュースを（　　）たいです。",
      "choices": [
        "飲んで",
        "飲み",
        "飲んだ",
        "飲む"
      ],
      "answer": 1,
      "explain": "飲みたいです: Muốn uống nước mát."
    },
    {
      "q": "今朝、何も（　　）。お腹が すきました。",
      "choices": [
        "食べませんでした",
        "食べる",
        "食べます",
        "食べました"
      ],
      "answer": 0,
      "explain": "Sáng nay không ăn gì: 何も食べませんでした."
    },
    {
      "q": "この川は（　　）ないです。",
      "choices": [
        "ふかい",
        "ふかく",
        "ふかかった",
        "ふか"
      ],
      "answer": 1,
      "explain": "Phủ định tính từ い: 深くないです (Sông không sâu)."
    },
    {
      "q": "昨日の映画は どうでしたか。― あまり（　　）です。",
      "choices": [
        "おもしろかった",
        "おもしろくない",
        "おもしろくなかった",
        "おもしろい"
      ],
      "answer": 2,
      "explain": "Quá khứ phủ định tính từ い: おもしろくなかったです (Không hay lắm)."
    },
    {
      "q": "駅まで（　　）10分くらいです。",
      "choices": [
        "歩きます",
        "歩く",
        "歩いて",
        "歩いた"
      ],
      "answer": 2,
      "explain": "Đi bộ mất khoảng 10 phút: 歩いて10分くらい (Đi bộ không dùng trợ từ で)."
    },
    {
      "q": "昨日は 暇（　　）から、ずっと ゲームを しました。",
      "choices": [
        "です",
        "ます",
        "でした",
        "だった"
      ],
      "answer": 2,
      "explain": "Tính từ な ở quá khứ: 暇でした + から (Vì hôm qua rảnh rỗi)."
    },
    {
      "q": "レストランへ 昼ごはんを（　　）に 行きます。",
      "choices": [
        "食べた",
        "食べ",
        "食べる",
        "食べて"
      ],
      "answer": 1,
      "explain": "Mục đích di chuyển: 食べに行きます (Đi để ăn cơm trưa)."
    },
    {
      "q": "週末、だれ（　　）買い物を しましたか。― 母と しました。",
      "choices": [
        "を",
        "で",
        "と",
        "に"
      ],
      "answer": 2,
      "explain": "Hỏi làm cùng ai: だれと (cùng với ai?)."
    },
    {
      "q": "昨日は 寒かったです（　　）、風邪を 引きました。",
      "choices": [
        "から",
        "そして",
        "でも",
        "それに"
      ],
      "answer": 0,
      "explain": "Chỉ nguyên nhân: ～から (Vì hôm qua lạnh nên bị cảm)."
    },
    {
      "q": "あのレストランは 安くて（　　）です。",
      "choices": [
        "おいしいな",
        "おいし",
        "おいしく",
        "おいしい"
      ],
      "answer": 3,
      "explain": "Liên kết tính từ: 安くておいしいです (Vừa rẻ vừa ngon)."
    },
    {
      "q": "先週の旅行は とても（　　）です。",
      "choices": [
        "にぎやかでした",
        "にぎやかかったです",
        "にぎやかです",
        "にぎやか"
      ],
      "answer": 0,
      "explain": "Quá khứ tính từ な: ナA + でした (にぎやかでした)."
    },
    {
      "q": "図書館（　　）本を 借りに 行きました。",
      "choices": [
        "を",
        "で",
        "が",
        "へ"
      ],
      "answer": 3,
      "explain": "Nơi chốn đến: N（địa điểm）へ Vに行きます."
    },
    {
      "q": "昨日の晩、どこかへ 出かけましたか。― いいえ、（　　）出かけませんでした。",
      "choices": [
        "どこへも",
        "どこで",
        "どこか",
        "どこも"
      ],
      "answer": 0,
      "explain": "Phủ định hoàn toàn: どこへも + Phủ định."
    },
    {
      "q": "日本で 何を（　　）たいですか。― 富士山に 登りたいです。",
      "choices": [
        "して",
        "する",
        "した",
        "し"
      ],
      "answer": 3,
      "explain": "何をし + たいですか (Muốn làm gì?)."
    },
    {
      "q": "昨日は 頭が（　　）ですから、早く 寝ました。",
      "choices": [
        "痛かったです",
        "痛いです",
        "痛かった",
        "痛いでした"
      ],
      "answer": 0,
      "explain": "Quá khứ tính từ い: 痛かったですから (Vì hôm qua bị đau đầu)."
    },
    {
      "q": "公園で 写真を 撮りました。（　　）、散歩を しました。",
      "choices": [
        "だから",
        "それから",
        "しかし",
        "でも"
      ],
      "answer": 1,
      "explain": "Sau đó: それから."
    },
    {
      "q": "この町は あまり（　　）ないです。",
      "choices": [
        "あたらしい",
        "あたらしく",
        "あたらし",
        "あたらしかった"
      ],
      "answer": 1,
      "explain": "あまり 新しくないです (Không mới lắm)."
    },
    {
      "q": "おとといは 雨（　　）。とても 寒かったです。",
      "choices": [
        "でしたら",
        "です",
        "でした",
        "ます"
      ],
      "answer": 2,
      "explain": "Hôm kia trời mưa (danh từ quá khứ): 雨でした."
    },
    {
      "q": "町に お寺（　　）神社が あります。",
      "choices": [
        "を",
        "へ",
        "で",
        "や"
      ],
      "answer": 3,
      "explain": "Liệt kê danh từ tiêu biểu: N1 や N2 (Chùa và đền thần...)."
    },
    {
      "q": "昨日は 一人で 家に（　　）。",
      "choices": [
        "ありました",
        "いました",
        "います",
        "ある"
      ],
      "answer": 1,
      "explain": "Người ở đâu quá khứ: いました (Đã ở nhà)."
    },
    {
      "q": "のどが かわきました。何か 冷たい物を（　　）たいです。",
      "choices": [
        "飲み",
        "飲む",
        "飲んで",
        "飲んだ"
      ],
      "answer": 0,
      "explain": "飲みたいです: Muốn uống."
    },
    {
      "q": "郵便局へ 切手を（　　）に 行きます。",
      "choices": [
        "買います",
        "買う",
        "買って",
        "買い"
      ],
      "answer": 3,
      "explain": "買いに行きます: Đi để mua tem."
    },
    {
      "q": "どうして 食べませんか。― お腹が（　　）ですから。",
      "choices": [
        "いっぱいです",
        "いっぱいでした",
        "いっぱいな",
        "いっぱい"
      ],
      "answer": 0,
      "explain": "Vì no bụng: お腹がいっぱいですから."
    },
    {
      "q": "この部屋は（　　）きれいです。",
      "choices": [
        "広くて",
        "広くてな",
        "広い",
        "広な"
      ],
      "answer": 0,
      "explain": "Nối hai tính từ: 広くてきれいです (Rộng và đẹp)."
    },
    {
      "q": "テストは 簡単（　　）でした。難しかったです。",
      "choices": [
        "くない",
        "くなかった",
        "じゃありません",
        "でした"
      ],
      "answer": 2,
      "explain": "Quá khứ phủ định tính từ な: 簡単じゃありませんでした (Đã không dễ chút nào)."
    },
    {
      "q": "家から 会社まで 車（　　）40分くらいです。",
      "choices": [
        "に",
        "で",
        "を",
        "へ"
      ],
      "answer": 1,
      "explain": "Phương tiện di chuyển: 車で (Bằng ô tô)."
    },
    {
      "q": "先週の土曜日、何を（　　）か。― 友だちと 映画を 見ました。",
      "choices": [
        "する",
        "しました",
        "します",
        "して"
      ],
      "answer": 1,
      "explain": "Hỏi hành động quá khứ: 何をしましたか."
    },
    {
      "q": "私は 辛い 料理が（　　）です。食べられません。",
      "choices": [
        "甘い",
        "嫌い",
        "好き",
        "ほしい"
      ],
      "answer": 1,
      "explain": "Không thích / ghét: 嫌いです (きらいです)."
    },
    {
      "q": "どこへ 遊びに（　　）たいですか。― 海へ 行きたいです。",
      "choices": [
        "行き",
        "行く",
        "行って",
        "行きます"
      ],
      "answer": 0,
      "explain": "遊びに行きたいです: Muốn đi chơi."
    },
    {
      "q": "昨日は 忙しかったです（　　）、どこへも 行きませんでした。",
      "choices": [
        "から",
        "そして",
        "でも",
        "それに"
      ],
      "answer": 0,
      "explain": "Chỉ nguyên nhân lý do: ～から (Vì hôm qua bận nên...)."
    }
  ]
};

const GRAMMAR_BANK = {
      1: [
        ["わたし___学生です。", ["は","を","で","に"], 0, "Chủ đề dùng は."],
        ["ミンさん___ベトナム人ですか。", ["は","を","で","に"], 0, "Câu hỏi xác nhận dùng は."],
        ["お名前___何ですか。", ["は","が","を","に"], 0, "Hỏi tên dùng は."],
        ["わたし___誕生日は五月四日です。", ["の","は","を","と"], 0, "Sở hữu dùng の."],
        ["趣味は音楽___旅行です。", ["も","と","の","が"], 1, "Liệt kê danh từ dùng と."],
        ["田中さんは日本人です。わたし___日本人です。", ["は","が","も","の"], 2, "Cũng dùng も."],
        ["お国は___ですか。", ["いつ","だれ","どちら","なに"], 2, "Hỏi nước dùng どちら."],
        ["誕生日は___ですか。", ["なに","いつ","どこ","どう"], 1, "Hỏi sinh nhật dùng いつ."],
        ["趣味は___ですか。", ["なに","だれ","どこ","どちら"], 0, "Hỏi sở thích dùng 何."],
        ["あの人___先生です。", ["は","を","に","で"], 0, "Chủ đề dùng は."],
        ["わたしは大学生___。", ["です","ます","でした","ません"], 0, "Khẳng định cơ bản dùng です."],
        ["わたし___名前はミンです。", ["の","は","が","を"], 0, "わたしの名前."],
        ["兄は大学生___。", ["です","ます","ですか","でしたか"], 0, "Khẳng định dùng です."],
        ["わたしの趣味___料理です。", ["を","が","も","へ"], 2, "Danh từ trước も."],
        ["はじめまして。どうぞよろしくお___します。", ["名前","国","願い","学生"], 2, "Cụm cố định là お願いします."]
      ],
      2: [
        ["___は三千円です。", ["これ","どこ","だれ","なに"], 0, "Chỉ đồ vật gần người nói dùng これ."],
        ["___Tシャツはいくらですか。", ["この","その","あの","どの"], 0, "Đồ gần người nói dùng この + N."],
        ["トイレは___ですか。", ["いくら","どこ","だれ","なんの"], 1, "Hỏi chỗ dùng どこ."],
        ["カレーを一つ___。", ["ください","です","ます","でした"], 0, "Gọi món dùng ください."],
        ["これは___カレーですか。", ["どこ","だれ","なんの","いくら"], 2, "Hỏi loại dùng 何の."],
        ["これは___の財布ですか。", ["どこ","だれ","なん","いつ"], 1, "Hỏi chủ sở hữu dùng 誰の."],
        ["これは___ビールですか。", ["だれの","どこの","いつの","なんの"], 1, "Hỏi xuất xứ dùng どこの."],
        ["レジは___です。", ["あちら","いくら","それ","なに"], 0, "Chỉ hướng lịch sự dùng あちら."],
        ["そのかばん___三千円です。", ["は","を","で","に"], 0, "Chủ đề dùng は."],
        ["メニューを___。", ["お願いします","どこですか","あります","いきます"], 0, "Xin thực đơn."],
        ["これは___ですか。", ["どこ","だれ","いくら","なんの"], 2, "Hỏi giá dùng いくら."],
        ["スーパーは___です。", ["そこ","だれ","なに","いくら"], 0, "Chỉ vị trí dùng そこ."],
        ["あの時計___ください。", ["を","に","で","が"], 0, "N をください."],
        ["それ___何ですか。", ["が","を","は","で"], 2, "Câu hỏi mẫu."],
        ["魚の料理___一つください。", ["を","に","が","へ"], 0, "Tân ngữ trực tiếp dùng を."]
      ],
      3: [
        ["六時___起きます。", ["へ","を","に","で"], 2, "Mốc thời gian dùng に."],
        ["図書館___行きます。", ["へ","を","に","が"], 0, "Đi đến đâu dùng へ."],
        ["日本語___勉強します。", ["へ","を","に","で"], 1, "Tân ngữ trực tiếp dùng を."],
        ["北海道___スキーをします。", ["が","へ","で","を"], 2, "Nơi diễn ra hành động dùng で."],
        ["九時___五時までです。", ["から","を","で","に"], 0, "Từ...đến... dùng から ... まで."],
        ["郵便局は五時___です。", ["へ","まで","に","から"], 1, "Kết thúc mốc dùng まで."],
        ["朝ご飯___食べます。", ["を","へ","で","に"], 0, "Tân ngữ dùng を."],
        ["日曜日___公園へ行きます。", ["へ","に","を","で"], 1, "Ngày/giờ thường dùng に."],
        ["学校___勉強します。", ["で","を","へ","が"], 0, "Nơi làm hành động dùng で."],
        ["毎日、十一時に___。", ["寝ます","ください","います","どこ"], 0, "Mẫu sinh hoạt hằng ngày."],
        ["八時___授業があります。", ["まで","から","を","で"], 1, "Bắt đầu dùng から."],
        ["公園で写真___撮ります。", ["が","に","を","へ"], 2, "Tân ngữ dùng を."],
        ["朝、パン___サラダなどを食べます。", ["と","や","も","の"], 1, "Liệt kê mở dùng や."],
        ["バス___学校へ行きます。", ["を","に","で","が"], 2, "Phương tiện dùng で."],
        ["午前九時___授業です。", ["まで","から","へ","が"], 1, "Bắt đầu từ 9 giờ dùng から."]
      ],
      4: [
        ["わたしの町は___です。", ["きれい","きれいな","きれいで","きれいに"], 0, "ナA trước です không cần な."],
        ["にぎやか___ところです。", ["の","な","に","で"], 1, "ナA + な + N."],
        ["町___川があります。", ["へ","を","に","で"], 2, "Nơi tồn tại dùng に."],
        ["沖縄は日本___南です。", ["と","の","で","に"], 1, "Vị trí tương đối dùng Nの南."],
        ["ハノイから駅まで___ですか。", ["どこ","どのくらい","いくら","なに"], 1, "Hỏi khoảng cách/thời gian."],
        ["飛行機___二時間くらいです。", ["に","で","を","が"], 1, "Phương tiện dùng で."],
        ["この町はきれいです。___、にぎやかです。", ["でも","そして","から","まで"], 1, "Nối ý thêm dùng そして."],
        ["この町は大きくない___、いいところです。", ["と","が","に","を"], 1, "Đối lập nhẹ dùng が."],
        ["町に温泉___あります。", ["が","を","に","で"], 0, "Sự vật tồn tại dùng が + あります."],
        ["富士山は___です。", ["高い","高く","高くない","高くて"], 0, "Tính từ đuôi い."],
        ["静か___町です。", ["な","の","に","が"], 0, "ナA + な + N."],
        ["きれい___川があります。", ["に","な","の","と"], 1, "きれいな川."],
        ["わたしの国は日本___南です。", ["に","を","の","で"], 2, "Nの南."],
        ["駅まで十分___です。", ["ぐらい","だけ","しか","など"], 0, "Khoảng chừng."],
        ["アユタヤは___ところですか。", ["どこ","どんな","だれの","どうして"], 1, "Hỏi nơi chốn."]
      ],
      5: [
        ["きのう、勉強___。", ["します","しました","したいです","です"], 1, "Quá khứ động từ dùng ました."],
        ["おととい、公園へ___。", ["行きました","行きます","行きたい","行くです"], 0, "Quá khứ đi đâu."],
        ["旅行はとても___です。", ["楽しい","楽しかった","楽しく","楽し"], 1, "Quá khứ tính từ い."],
        ["テストは簡単___。", ["です","でした","なです","いです"], 1, "Quá khứ ナA."],
        ["日本のアニメ___好きです。", ["を","に","が","へ"], 2, "好き đi với が."],
        ["新しいパソコン___ほしいです。", ["を","で","が","へ"], 2, "ほしい đi với が."],
        ["コーヒーを飲み___です。", ["たい","ます","です","ません"], 0, "Muốn làm gì dùng Vたい."],
        ["渋谷へ買い物___行きます。", ["で","を","に","が"], 2, "Đi đâu để làm gì."],
        ["きのう、___行きましたか。", ["どこかへ","どこを","どこで","どこにです"], 0, "Có đi đâu không."],
        ["いいえ、どこへ___行きませんでした。", ["が","も","を","に"], 1, "Phủ định toàn phần."],
        ["忙しかったです___、朝ご飯を食べませんでした。", ["から","そして","でも","まで"], 0, "Nêu lý do dùng から."],
        ["映画を見ました。___、食事をしました。", ["まだ","それから","どうして","ぜひ"], 1, "Nối việc tiếp theo."],
        ["友だち___遊びました。", ["へ","を","と","に"], 2, "Chơi với ai dùng と."],
        ["雨___嫌いです。", ["が","を","に","で"], 0, "嫌い đi với が."],
        ["旅行はおもしろ___です。", ["い","かった","く","な"], 1, "Quá khứ おもしろい."]
      ],
      6: [
        ["一緒にご飯を食べに行き___か。", ["ます","ません","でした","たいです"], 1, "Rủ rê dùng Vませんか."],
        ["いいですね。行き___。", ["ましょう","ません","ました","たいです"], 0, "Cùng làm dùng ましょう."],
        ["明日、約束___あります。", ["を","に","が","へ"], 2, "Có lịch hẹn."],
        ["チケットが二枚___。", ["います","あります","ですか","ください"], 1, "Vật vô tri dùng あります."],
        ["スポーツで野球がいちばん___です。", ["おもしろい","おもしろかった","おもしろく","おもしろ"], 0, "So sánh nhất."],
        ["夏は冬___暑いです。", ["のほうが","より","まで","しか"], 1, "So sánh hơn."],
        ["夏と冬と___が好きですか。", ["どこ","どちら","だれ","なに"], 1, "So sánh 2 lựa chọn."],
        ["夏___ほうが好きです。", ["の","に","を","で"], 0, "Nのほうが."],
        ["もう見___か。", ["ました","ます","たい","ません"], 0, "Đã làm chưa."],
        ["いいえ、まだ___。", ["あります","です","いました","ください"], 1, "Trả lời ngắn."],
        ["五時___駅で会いましょう。", ["を","に","で","へ"], 1, "Mốc giờ dùng に."],
        ["おすし___どうですか。", ["が","を","は","に"], 2, "Gợi ý dùng Nはどうですか."],
        ["この映画はおもしろい___。", ["ね","よ","か","を"], 1, "Nhấn thông tin dùng よ."],
        ["五時です___。", ["か","ね","を","まで"], 1, "Xác nhận nhẹ."],
        ["横浜___試合があります。", ["に","へ","で","を"], 2, "Sự kiện diễn ra ở đâu dùng で."]
      ],
      7: [
        ["わたしは本屋___います。", ["に","を","へ","で"], 0, "Người ở đâu dùng にいます."],
        ["バス停はコンビニの前___あります。", ["に","を","へ","で"], 0, "Vật ở đâu dùng にあります."],
        ["あそこ___パクさんがいます。", ["を","に","で","へ"], 1, "Ở đó có người dùng にいます."],
        ["かばんを取っ___ください。", ["て","た","ます","ない"], 0, "Nhờ làm gì dùng Vてください."],
        ["パクさんは電話をかけ___います。", ["て","た","に","を"], 0, "Đang làm gì dùng Vています."],
        ["手伝い___しょうか。", ["ま","て","に","が"], 0, "Đề nghị giúp dùng ましょうか."],
        ["作り方___教えてください。", ["を","が","に","へ"], 0, "Xin chỉ cách làm."],
        ["サラダはまだ___か。", ["あります","います","ですか","しました"], 0, "Vật còn không."],
        ["いいえ、もう___。", ["あります","です","ありません","いました"], 2, "Đã hết."],
        ["___が作りましたか。", ["何","誰","どれ","どの"], 1, "Hỏi ai dùng 誰が."],
        ["塩は___ですか。", ["どれ","だれ","どこ","なんの"], 0, "Chọn cái nào."],
        ["はし___ご飯を食べます。", ["へ","を","で","が"], 2, "Công cụ dùng で."],
        ["窓を開け___ください。", ["て","た","に","を"], 0, "Yêu cầu lịch sự."],
        ["友だち___電話をかけます。", ["に","へ","で","を"], 0, "Gọi cho ai dùng に."],
        ["冷蔵庫___ジュースを出します。", ["まで","へ","から","を"], 2, "Lấy ra từ đâu dùng から."]
      ]
    };

const ROADMAP = [
      { day: 1, title: "Khởi động + Bài 1 phần 1", tasks: ["Ôn hiragana/katakana 20 phút.", "Bài 1: từ vựng nhóm tên, quốc tịch, nghề nghiệp.", "Làm quiz từ vựng bài 1.", "Đọc to 10 câu tự giới thiệu."] },
      { day: 2, title: "Bài 1 phần 2", tasks: ["Ngữ pháp bài 1: は/です/ですか/の.", "Ghép 20 câu tên + quốc tịch + nghề nghiệp.", "Làm grammar quiz bài 1.", "Shadowing passage 5 phút."] },
      { day: 3, title: "Bài 1 phần 3", tasks: ["Kanji bài 1.", "Làm kanji quiz.", "Nói 1 phút tự giới thiệu."] },
      { day: 4, title: "Củng cố bài 1", tasks: ["Làm lại quiz bài 1.", "Thu âm speaking bài 1.", "Ôn vocab yếu."] },

      { day: 5, title: "Bài 2 phần 1", tasks: ["Từ vựng chỉ chỗ và đồ vật.", "Quiz từ vựng bài 2.", "Luyện hỏi vị trí."] },
      { day: 6, title: "Bài 2 phần 2", tasks: ["Ngữ pháp bài 2.", "Tạo 15 câu hỏi giá và vị trí.", "Grammar quiz bài 2."] },
      { day: 7, title: "Bài 2 phần 3", tasks: ["Kanji bài 2.", "Kanji quiz bài 2.", "Roleplay gọi món."] },
      { day: 8, title: "Củng cố bài 2", tasks: ["Đọc passage bài 2.", "Ôn bài 1-2."] },

      { day: 9, title: "Bài 3 phần 1", tasks: ["Từ vựng giờ giấc, địa điểm.", "Quiz từ vựng bài 3.", "Luyện đọc giờ."] },
      { day: 10, title: "Bài 3 phần 2", tasks: ["Ngữ pháp bài 3.", "Viết lịch 1 ngày của bạn.", "Grammar quiz bài 3."] },
      { day: 11, title: "Bài 3 phần 3", tasks: ["Kanji bài 3.", "Kanji quiz.", "Nói daily routine 45 giây."] },
      { day: 12, title: "Củng cố bài 3", tasks: ["Đọc passage bài 3.", "Q&A bài 3.", "Ôn bài 1-3."] },

      { day: 13, title: "Bài 4 phần 1", tasks: ["Từ vựng quốc gia/thành phố/phương tiện.", "Quiz từ vựng bài 4.", "Luyện khoảng cách."] },
      { day: 14, title: "Bài 4 phần 2", tasks: ["Ngữ pháp bài 4.", "Grammar quiz bài 4.", "Tả quê hương 6 câu."] },
      { day: 15, title: "Bài 4 phần 3", tasks: ["Kanji bài 4.", "Kanji quiz.", "Thu âm 1 phút giới thiệu thành phố."] },
      { day: 16, title: "Củng cố bài 4", tasks: ["Đọc passage bài 4.", "Speaking set bài 4.", "Ôn bài 1-4."] },

      { day: 17, title: "Bài 5 phần 1", tasks: ["Từ vựng ngày nghỉ, cảm xúc.", "Quiz từ vựng bài 5.", "Luyện kể cuối tuần."] },
      { day: 18, title: "Bài 5 phần 2", tasks: ["Ngữ pháp bài 5.", "Grammar quiz bài 5.", "Viết 10 câu về hôm qua."] },
      { day: 19, title: "Bài 5 phần 3", tasks: ["Kanji bài 5.", "Kanji quiz.", "Nói 45 giây về cuối tuần trước."] },
      { day: 20, title: "Củng cố bài 5", tasks: ["Đọc passage bài 5.", "Q&A bài 5.", "Ôn bài 1-5."] },

      { day: 21, title: "Bài 6 phần 1", tasks: ["Từ vựng rủ rê, sự kiện, so sánh.", "Quiz từ vựng bài 6.", "Luyện câu mời + nhận lời + từ chối."] },
      { day: 22, title: "Bài 6 phần 2", tasks: ["Ngữ pháp bài 6.", "Grammar quiz bài 6.", "Tự hỏi đáp 2 lựa chọn."] },
      { day: 23, title: "Bài 6 phần 3", tasks: ["Kanji bài 6.", "Kanji quiz.", "Nói 1 phút về mùa bạn thích."] },
      { day: 24, title: "Củng cố bài 6", tasks: ["Đọc passage bài 6.", "Roleplay hẹn bạn đi chơi.", "Ôn bài 1-6."] },

      { day: 25, title: "Bài 7 phần 1", tasks: ["Từ vựng vị trí, đồ dùng.", "Quiz từ vựng bài 7.", "Luyện chỉ đường 10 câu."] },
      { day: 26, title: "Bài 7 phần 2", tasks: ["Ngữ pháp bài 7.", "Grammar quiz bài 7.", "Mô tả tranh đang làm gì."] },
      { day: 27, title: "Bài 7 phần 3", tasks: ["Kanji bài 7.", "Kanji quiz.", "Roleplay chuẩn bị party."] },
      { day: 28, title: "Củng cố bài 7", tasks: ["Đọc passage bài 7.", "Q&A bài 7.", "Ôn full 7 bài."] },

      { day: 29, title: "Mock day 1", tasks: ["Làm mock test.", "Qua speaking hub 10 phút.", "Ghi lại lỗi sai vocab/grammar/kanji."] },
      { day: 30, title: "Mock day 2 + chốt thi", tasks: ["Làm mock test lần 2.", "Thu âm speaking trọng điểm.", "Ôn nhanh toàn bộ kanji lỗi."] }
    ];

const ROADMAP_SPRINT = [
  {
    "day": 1,
    "phase": "Chặng 1: Tốc chiến Midterm (Bài 4 & 5)",
    "date": "30/11",
    "title": "Ngày 1: Khởi động JPD123 & Quét Từ vựng Bài 4",
    "tag": "Midterm",
    "tasks": [
      "Lên lớp buổi đầu tiên môn JPD123.",
      "Học 54 từ vựng Bài 4 (phương hướng 北・南・東・西, phương tiện di chuyển, nhà ga).",
      "Làm Quiz Từ vựng Bài 4 (đạt 80%+).",
      "Đọc to bài đọc mẫu Bài 4 (10 phút)."
    ]
  },
  {
    "day": 2,
    "phase": "Chặng 1: Tốc chiến Midterm (Bài 4 & 5)",
    "date": "01/12",
    "title": "Ngày 2: Ngữ pháp Tính từ & Tồn tại Bài 4",
    "tag": "Midterm",
    "tasks": [
      "Nắm vững chia tính từ い/な (khẳng định, phủ định, bổ nghĩa danh từ).",
      "Cấu trúc N(nơi) に N(vật) があります và N(xe) で.",
      "Làm Quiz Ngữ pháp Bài 4.",
      "Tập nói 5 câu miêu tả thành phố của bạn (sát đề thi nói)."
    ]
  },
  {
    "day": 3,
    "phase": "Chặng 1: Tốc chiến Midterm (Bài 4 & 5)",
    "date": "02/12",
    "title": "Ngày 3: 9 Hán tự Bài 4 & Hỏi khoảng cách/thời gian",
    "tag": "Midterm",
    "tasks": [
      "Thuộc 9 chữ Hán Bài 4: 東, 京, 名, 前, 国, 男, 女, 区, 市 (kèm từ ghép 東京, 外国, 名前...).",
      "Làm Quiz Kanji Bài 4.",
      "Luyện mẫu câu hỏi: ~から~まで どのくらいですか.",
      "Làm trọn bộ 80 câu luyện tập Bài 4 trong Hub luyện tập."
    ]
  },
  {
    "day": 4,
    "phase": "Chặng 1: Tốc chiến Midterm (Bài 4 & 5)",
    "date": "03/12",
    "title": "Ngày 4: Từ vựng & Động từ quá khứ Bài 5",
    "tag": "Midterm",
    "tasks": [
      "Học từ vựng Bài 5: Mốc thời gian (hôm nay, hôm qua, tuần trước) và nơi chốn ngày nghỉ.",
      "Quy tắc chia động từ quá khứ: Vました / Vませんでした.",
      "Làm Quiz Từ vựng Bài 5.",
      "Kể lại 3 việc bạn đã làm vào ngày nghỉ bằng tiếng Nhật."
    ]
  },
  {
    "day": 5,
    "phase": "Chặng 1: Tốc chiến Midterm (Bài 4 & 5)",
    "date": "04/12",
    "title": "Ngày 5: Quá khứ Tính từ, Mong muốn & Mục đích",
    "tag": "Midterm",
    "tasks": [
      "Quá khứ tính từ: い -> かったです, な/N -> でした.",
      "Mẫu câu mong muốn: Nがほしい, Vたいです.",
      "Mục đích di chuyển: N(địa điểm) へ V(bỏ ます) に行きます.",
      "Hỏi và trả lời lý do: どうして ~ですか -> ~ですから."
    ]
  },
  {
    "day": 6,
    "phase": "Chặng 1: Tốc chiến Midterm (Bài 4 & 5)",
    "date": "05/12",
    "title": "Ngày 6: 12 Hán tự Bài 5 & Củng cố lý thuyết",
    "tag": "Midterm",
    "tasks": [
      "Thuộc 12 chữ Hán Bài 5: 先, 週, 毎, 午, 後, 見, 食, 飲, 買, 物, 行, 休.",
      "Làm Quiz Kanji Bài 5.",
      "Đọc bài Cẩm nang ôn thi Midterm Bài 4-5 trong Hub luyện tập.",
      "Hoàn thành 80 câu luyện tập Bài 5."
    ]
  },
  {
    "day": 7,
    "phase": "Chặng 1: Tốc chiến Midterm (Bài 4 & 5)",
    "date": "06/12",
    "title": "Ngày 7: Luyện Đề Midterm 1, 2, 3 (15 câu/đề)",
    "tag": "Midterm",
    "tasks": [
      "Vào Hub luyện tập -> Làm Đề 1, Đề 2, Đề 3 Midterm.",
      "Đọc kỹ phần giải thích chi tiết tiếng Việt cho những câu làm sai.",
      "Vào Speaking Hub -> Luyện đọc 3 bài đọc đầu tiên."
    ]
  },
  {
    "day": 8,
    "phase": "Chặng 1: Tốc chiến Midterm (Bài 4 & 5)",
    "date": "07/12",
    "title": "Ngày 8: Luyện Đề Midterm 4, 5, 6 & Luyện nói Talking",
    "tag": "Midterm",
    "tasks": [
      "Làm Đề 4, Đề 5, Đề 6 Midterm trong Hub luyện tập.",
      "Vào Speaking Hub -> Luyện 10 câu hỏi Talking không tranh.",
      "Tự trả lời trước rồi bấm xem đáp án mẫu 8.5+."
    ]
  },
  {
    "day": 9,
    "phase": "Chặng 1: Tốc chiến Midterm (Bài 4 & 5)",
    "date": "08/12",
    "title": "Ngày 9: Luyện Đề Midterm 7, 8, 9, 10 & Tổng duyệt",
    "tag": "Midterm",
    "tasks": [
      "Làm nốt Đề 7, 8, 9, 10 Midterm (hoàn thành trọn vẹn 150 câu không lặp).",
      "Rà soát lại danh sách bẫy lỗi sai thường gặp.",
      "Nghỉ ngơi sớm chuẩn bị tinh thần thi tốt."
    ]
  },
  {
    "day": 10,
    "phase": "Chặng 1: Tốc chiến Midterm (Bài 4 & 5)",
    "date": "09/12",
    "title": "Ngày 10: 🎯 NGÀY THI MIDTERM — TỰ TIN 9+",
    "tag": "Midterm",
    "tasks": [
      "Bình tĩnh làm bài thi Midterm trên lớp.",
      "Đọc kỹ trợ từ (が, を, に, で, と) và đuôi câu quá khứ (かったです, でした).",
      "Chúc mừng bạn đã hoàn thành xuất sắc 50% chặng đường!"
    ]
  },
  {
    "day": 11,
    "phase": "Chặng 2: Bứt phá Bài 6 & 7",
    "date": "10/12",
    "title": "Ngày 11: Bài 6 phần 1 — Mẫu câu Rủ rê & Hẹn gặp",
    "tag": "Bài 6",
    "tasks": [
      "Học từ vựng Katakana giải trí Bài 6: カラオケ, コンサート, チケット, ジャズ.",
      "Mẫu câu rủ rê lịch sự: Vませんか / Vましょう.",
      "Cấu trúc đã/chưa: もう Vましたか / まだです.",
      "Làm Quiz Bài 6."
    ]
  },
  {
    "day": 12,
    "phase": "Chặng 2: Bứt phá Bài 6 & 7",
    "date": "11/12",
    "title": "Ngày 12: Bài 6 phần 2 — So sánh Hơn & So sánh Nhất",
    "tag": "Bài 6",
    "tasks": [
      "So sánh lựa chọn: Aと Bと どちらが ~ですか -> Aのほうが ~です.",
      "So sánh nhất: [Phạm vi] で ~が いちばん Aです.",
      "Luyện nói 5 câu so sánh sở thích, các mùa trong năm.",
      "Làm 80 câu luyện tập Bài 6."
    ]
  },
  {
    "day": 13,
    "phase": "Chặng 2: Bứt phá Bài 6 & 7",
    "date": "12/12",
    "title": "Ngày 13: Củng cố Bài 6 & Luyện Speaking Bài 6",
    "tag": "Bài 6",
    "tasks": [
      "Đọc bài đọc mẫu Bài 6 trong Speaking Hub.",
      "Luyện 10 bộ tranh thi nói về chủ đề rủ rê và so sánh.",
      "Ôn lại từ vựng yếu của Bài 6."
    ]
  },
  {
    "day": 14,
    "phase": "Chặng 2: Bứt phá Bài 6 & 7",
    "date": "13/12",
    "title": "Ngày 14: Bài 7 phần 1 — Thể て & Nhờ vả lịch sự",
    "tag": "Bài 7",
    "tasks": [
      "Quy tắc chia động từ sang thể て theo 3 nhóm động từ.",
      "Mẫu câu nhờ vả: Vてください.",
      "Mẫu câu đề nghị giúp: Vましょうか.",
      "Làm Quiz Ngữ pháp Bài 7."
    ]
  },
  {
    "day": 15,
    "phase": "Chặng 2: Bứt phá Bài 6 & 7",
    "date": "14/12",
    "title": "Ngày 15: Bài 7 phần 2 — Đang diễn ra & 15 Hán tự Bài 7",
    "tag": "Bài 7",
    "tasks": [
      "Hành động đang diễn ra: Vています.",
      "Vị trí đồ vật và người: います / あります.",
      "Thuộc 15 chữ Hán Bài 7 (牛肉, 鶏肉, 野菜, 料理, 料金...).",
      "Làm Quiz Kanji Bài 7."
    ]
  },
  {
    "day": 16,
    "phase": "Chặng 2: Bứt phá Bài 6 & 7",
    "date": "15/12",
    "title": "Ngày 16: Củng cố Bài 7 & Tranh thi nói chỉ đường/ở nhà",
    "tag": "Bài 7",
    "tasks": [
      "Hoàn thành 80 câu luyện tập Bài 7 trong Hub luyện tập.",
      "Vào Speaking Hub -> Luyện tranh thi nói Bài 7 (chỉ đường, vị trí, trong phòng).",
      "Tổng kết toàn bộ ngữ pháp 7 bài học."
    ]
  },
  {
    "day": 17,
    "phase": "Chặng 3: Về đích Final Exam & Speaking",
    "date": "16/12",
    "title": "Ngày 17: Mock Test FE Đề 1 & Đọc to 10 bài Reading",
    "tag": "Final Exam",
    "tasks": [
      "Vào mục Mock Test -> Bấm 'Bắt đầu mock' làm đề trắc nghiệm tổng hợp 25 câu có bấm giờ 20 phút.",
      "Vào Speaking Hub -> Luyện đọc to 10 bài đọc (nghe audio mẫu + bấm nút phát âm nhại lại).",
      "Đánh dấu hoàn thành trên web."
    ]
  },
  {
    "day": 18,
    "phase": "Chặng 3: Về đích Final Exam & Speaking",
    "date": "17/12",
    "title": "Ngày 18: Mock Test FE Đề 2 & Phản xạ 20 câu Talking",
    "tag": "Final Exam",
    "tasks": [
      "Làm Mock Test FE Đề 2 (mục tiêu đạt 23/25 câu trở lên).",
      "Luyện phản xạ 20 câu hỏi không tranh trong Speaking Hub.",
      "Học thuộc các cụm nối câu lấy điểm 8.5+: そして, それから, ですから."
    ]
  },
  {
    "day": 19,
    "phase": "Chặng 3: Về đích Final Exam & Speaking",
    "date": "18/12",
    "title": "Ngày 19: Kết thúc môn học & Tổng duyệt Speaking 62 tranh",
    "tag": "Final Exam",
    "tasks": [
      "Buổi học cuối cùng trên lớp, tổng kết môn học.",
      "Vào Speaking Hub -> Cuộn lướt qua 62 bộ tranh thi nói, nhìn tranh tự phản xạ câu trả lời.",
      "Đọc lại file 'CAM_NANG_TRON_BO_JPD123.md'."
    ]
  },
  {
    "day": 20,
    "phase": "Chặng 3: Về đích Final Exam & Speaking",
    "date": "19/12",
    "title": "Ngày 20: 🎯 THI THỰC HÀNH NÓI (SPEAKING FE)",
    "tag": "Final Exam",
    "tasks": [
      "Tự tin bước vào phòng thi Speaking.",
      "Chào hỏi rõ ràng: 失礼します (Thất lễ), よろしくお願いします.",
      "Đọc bài đọc to, rõ, ngắt nghỉ đúng dấu chấm phẩy.",
      "Trả lời câu hỏi mở rộng thêm 1 câu lý do để đạt điểm 8.5+ - 9.0!"
    ]
  },
  {
    "day": 21,
    "phase": "Chặng 3: Về đích Final Exam & Speaking",
    "date": "20/12",
    "title": "Ngày 21: 🎯 THI TRẮC NGHIỆM FINAL EXAM — CÁN ĐÍCH 8+",
    "tag": "Final Exam",
    "tasks": [
      "Làm bài thi trắc nghiệm Final Exam.",
      "Cẩn thận phân biệt tính từ đuôi い vs な, trợ từ に vs で.",
      "Hoàn thành mục tiêu 8+ toàn môn JPD123!"
    ]
  }
];

const SPEAKING_BANK = [
      {
        title: "Set speaking bài 4",
        prompts: [
          { q: "～から～までどのくらいですか。", a: "ハノイからホーチミンまで飛行機で二時間くらいです。" },
          { q: "～はどんなところですか。", a: "きれいで、にぎやかなところです。" },
          { q: "あなたの町に何がありますか。", a: "きれいな川や大きい公園があります。" }
        ]
      },
      {
        title: "Set speaking bài 5",
        prompts: [
          { q: "きのう、どこかへ行きましたか。", a: "はい、友だちと公園へ行きました。" },
          { q: "休みはどうでしたか。", a: "とても楽しかったです。" },
          { q: "何がほしいですか。", a: "新しいパソコンがほしいです。" }
        ]
      },
      {
        title: "Set speaking bài 6",
        prompts: [
          { q: "今晩、一緒にご飯を食べに行きませんか。", a: "いいですね。行きましょう。" },
          { q: "夏と冬とどちらが好きですか。", a: "夏のほうが好きです。" },
          { q: "もうその映画を見ましたか。", a: "いいえ、まだです。" }
        ]
      },
      {
        title: "Set speaking bài 7",
        prompts: [
          { q: "今どこにいますか。", a: "わたしは本屋の前にいます。" },
          { q: "バス停はどこにありますか。", a: "コンビニの前にあります。" },
          { q: "手伝いましょうか。", a: "はい、お願いします。" }
        ]
      }
    ];

const SPEAKING_DATA = {
  "$comment": "Trích xuất tự động từ đối tượng courseData nội tuyến trong blog/Speaking.html (T13, 2026-07-26). Mọi chuỗi được sao chép nguyên văn, không gõ lại. Đường dẫn tài nguyên là tương đối so với blog/Speaking.html. Mọi tham chiếu tới tệp không tồn tại trên đĩa đã được loại bỏ sau khi kiểm tra bằng readdir phân biệt hoa thường.",
  "generated": "2026-07-26",
  "source": "blog/Speaking.html lines 101-3600 (const courseData)",
  "id": "jpd123",
  "code": "JPD123",
  "structure": [
    "- Đề thi gồm 02 phần:",
    "-- 1. READING: Đọc trôi chảy một đoạn văn (45/100 điểm)",
    "-- 2. Q&A: Trả lời 3 câu hỏi của giám thị (gồm câu hỏi có tranh & không tranh) (45/100 điểm)",
    "-- (*) PRESENTING: Chào hỏi, tác phong, độ trôi chảy, phát âm (10/100 điểm)",
    "",
    "- Các bước tiến hành:",
    "-- SV BẮT BUỘC mang theo giấy tờ tuỳ thân có ảnh (CCCD, thẻ SV…) khi đi thi",
    "-- SV vào phòng thi theo thứ tự gọi tên từ giám thị, đưa giấy tờ để giám thị kiểm tra",
    "-- SV bốc thăm ngẫu nhiên mã đề đọc (A-1, A-2…). Chuẩn bị 20s sau đó đọc bài",
    "-- Trả lời 3 câu hỏi ngẫu nhiên từ mã đề Q&A (B-1, B-2,…)"
  ],
  "tips": [
    "Dạng ra nhiều nhất là どこ (33/62 bộ tranh); trả lời bằng 〜に あります／います, không dùng で.",
    "20 bộ hỏi thể quá khứ 〜ましたか; tính từ -い là たのしかったです, không phải たのしいでした.",
    "12 bộ theo mẫu AからBまで〜で どのくらいですか; đáp án cần số + じかん／ふん + ぐらい かかります.",
    "16 bộ cuối đều là thể 〜ています, nên phải thuộc cách chia thể て trước khi thi.",
    "Hỏi なにを していますか thì đáp 〜さんは …ています; chỉ だれが していますか mới dùng が.",
    "Tên riêng nước ngoài (ナタポン, カルロス, フィレンツェ) phải đọc đúng độ dài âm katakana."
  ],
  "reading": [
    {
      "no": 1,
      "text": "こんにちは！私はさとうです。おおさか大学のせんせいです。私のたんじょうびは4がつ5日です。しゅみはサッカーです。まいにちサッカーをします。ときどきこうえんにいって、ともだちといっしょにサッカーをします。しごとはいそがしいですが、たのしいです。",
      "romaji": "Konnichiwa! Watashi wa Satou desu. Oosaka daigaku no sensei desu. Watashi no tanjoubi wa shigatsu itsuka desu. Shumi wa sakkaa desu. Mainichi sakkaa o shimasu. Tokidoki kouen ni itte, tomodachi to issho ni sakkaa o shimasu. Shigoto wa isogashii desu ga, tanoshii desu.",
      "hint": "Bài 1 (Cực kì dễ)",
      "translation": "Xin chào! Tôi là Sato. Tôi là giáo viên trường đại học Osaka. Sinh nhật của tôi là ngày 5 tháng 4. Vì sở thích của tôi là bóng đá nên tôi chơi bóng đá mỗi ngày. Thỉnh thoảng tôi đi công viên và cùng chơi bóng đá với bạn. Công việc bận rộn nhưng vui.",
      "audio": "assets/speaking/reading_1.mp3"
    },
    {
      "no": 2,
      "text": "おはようございます！こちらはリーさんです。リーさんはちゅうごく人です。かれのしゅみはおんがくです。 今、京都たんき大学の学生です。学校で日本語をべんきょうしています。ひまなときにはともだちとカラオケにいきます。",
      "romaji": "Ohayou gozaimasu! Kochira wa Rii-san desu. Rii-san wa Chuugoku-jin desu. Kare no shumi wa ongaku desu. Ima, Kyouto tanki daigaku no gakusei desu. Gakkou de Nihongo o benkyou shite imasu. Hima na toki ni wa tomodachi to karaoke ni ikimasu.",
      "hint": "Bài 2 (Cực kì dễ)",
      "translation": "Xin chào! Đây là anh Lý. Anh Lý là người Trung Quốc. Sở thích của anh ấy là âm nhạc. Hiện tại, anh ấy là sinh viên trường đại học ngắn hạn Kyoto. Anh ấy học tiếng Nhật ở trường, và khi rảnh rỗi thì đi karaoke với bạn.",
      "audio": "assets/speaking/reading_2.mp3"
    },
    {
      "no": 3,
      "text": "日曜日、ともだちとちかくの山にのぼりました。てんきがよかったですから、とてもきもちがよかったです。山でおべんとうを食べました。山からのけしきはとてもきれいでした。それから、古いお寺を見に行きました。とてもおもしろかったです。とてもたのしい1日でした。また行きたいです。",
      "romaji": "Nichiyoubi, tomodachi to chikaku no yama ni noborimashita. Tenki ga yokatta desu kara, totemo kimochi ga yokatta desu. Yama de obentou o tabemashita. Yama kara no keshiki wa totemo kirei deshita. Sorekara, furui otera o mi ni ikimashita. Totemo omoshirokatta desu. Totemo tanoshii ichinichi deshita. Mata ikitai desu.",
      "hint": "Bài 3 (Khó)",
      "translation": "Chủ nhật, tôi đã leo núi gần đây với bạn. Vì thời tiết đẹp nên cảm giác rất thoải mái. Tôi đã ăn cơm hộp trên núi. Phong cảnh từ trên núi rất đẹp. Sau đó, chúng tôi đã đi xem ngôi chùa cổ. Rất thú vị. Đó là một ngày rất vui. Tôi muốn đi lần nữa.",
      "audio": "assets/speaking/reading_3.mp3"
    },
    {
      "no": 4,
      "text": "わたしのまちはしずかです。ふるいおてらがおおいです。きれいなかわがあります。たかいやまもあります。しずかです。ここはちいさいですが、いいです。",
      "romaji": "Watashi no machi wa shizuka desu. Furui otera ga ooi desu. Kirei na kawa ga arimasu. Takai yama mo arimasu. Shizuka desu. Koko wa chiisai desu ga, ii desu.",
      "hint": "Bài 4 (Dễ)",
      "translation": "Thành phố của tôi yên tĩnh. Có nhiều ngôi chùa cổ. Có con sông đẹp. Cũng có núi cao. Rất yên tĩnh. Nơi đây tuy nhỏ nhưng rất tốt.",
      "audio": "assets/speaking/reading_4.mp3"
    },
    {
      "no": 5,
      "text": "私はベトナムのダナンからきました。ダナンはベトナムのまんなかです。ダナンはちいさいですが、とてもにぎやかなところです。ふるいお寺やびじゅつかんなどがあります。お寺はとてもきれいです。8月に花火のまつりがあります。いろいろな国の花火があります。とてもきれいです。ダナンはなつ、あついです。そして、あめがおおいです。ダナンはいいところです。みなさん、ぜひきてください。",
      "romaji": "Watashi wa Betonamu no Danang kara kimashita. Danang wa Betonamu no mannaka desu. Danang wa chiisai desu ga, totemo nigiyaka na tokoro desu. Furui otera ya bijutsukan nado ga arimasu. Otera wa totemo kirei desu. Hachigatsu ni hanabi no matsuri ga arimasu. Iroiro na kuni no hanabi ga arimasu. Totemo kirei desu. Danang wa natsu, atsui desu. Soshite, ame ga ooi desu. Danang wa ii tokoro desu. Minasan, zehi kite kudasai.",
      "hint": "Bài 5 (Trung bình)",
      "translation": "Tôi đến từ Đà Nẵng, Việt Nam. Đà Nẵng nằm ở giữa Việt Nam. Đà Nẵng tuy nhỏ nhưng là một nơi rất nhộn nhịp. Có những ngôi chùa cổ và bảo tàng. Chùa rất đẹp. Vào tháng 8 có lễ hội pháo hoa. Có pháo hoa từ nhiều quốc gia khác nhau. Rất đẹp. Đà Nẵng vào mùa hè rất nóng. Và có nhiều mưa. Đà Nẵng là một nơi tốt. Mọi người hãy đến nhé.",
      "audio": "assets/speaking/reading_5.mp3"
    },
    {
      "no": 6,
      "text": "パクさんは かんこくじんです。今年 は 21才です。さくら 日本語 学校の 学生です。うちは かんこくのソウルです。ソウルは かんこくの にしです。東京から ソウルまでひこうき で 2時間 ぐらいです。ソウルは にぎやかです。そして おおきいまちです。ソウルは 12月、さむいです。ゆきが おおいです。ふゆになったら トッポッキ をたべます。とてもおいしいですが、からいです。",
      "romaji": "Paku-san wa Kankoku-jin desu. Kotoshi wa nijuuissai desu. Sakura Nihongo gakkou no gakusei desu. Uchi wa Kankoku no Souru desu. Souru wa Kankoku no nishi desu. Toukyou kara Souru made hikouki de ni-jikan gurai desu. Souru wa nigiyaka desu. Soshite ookii machi desu. Souru wa juuni-gatsu, samui desu. Yuki ga ooi desu. Fuyu ni nattara toppokki o tabemasu. Totemo oishii desu ga, karai desu.",
      "hint": "Bài 6 (Trung bình)",
      "translation": "Park là người Hàn Quốc. Năm nay 21 tuổi. Là học sinh trường Nhật ngữ Sakura. Nhà ở Seoul, Hàn Quốc. Seoul nằm ở phía tây Hàn Quốc. Từ Tokyo đến Seoul mất khoảng 2 tiếng đi máy bay. Seoul rất nhộn nhịp. Và là một thành phố lớn. Seoul vào tháng 12 rất lạnh. Có nhiều tuyết. Khi mùa đông đến thì ăn tokbokki. Rất ngon nhưng cay.",
      "audio": "assets/speaking/reading_6.mp3"
    },
    {
      "no": 7,
      "text": "日曜日、ともだちと ちかくのやまにのぼりました。てんきがよかったですから、とてもきもちがよかったです。やまで、おべんとうをたべました。やまからの けしきがとてもきれいでした。それから、ふるいお寺を見に行きました。とてもおもしろかったです。とてもたのしい1日でした。また行きたいです。",
      "romaji": "Nichiyoubi, tomodachi to chikaku no yama ni noborimashita. Tenki ga yokatta desu kara, totemo kimochi ga yokatta desu. Yama de, obentou o tabemashita. Yama kara no keshiki ga totemo kirei deshita. Sorekara, furui otera o mi ni ikimashita. Totemo omoshirokatta desu. Totemo tanoshii ichinichi deshita. Mata ikitai desu.",
      "hint": "Bài 7 (Trung bình)",
      "translation": "Chủ nhật, tôi đã leo núi gần đây với bạn. Vì thời tiết đẹp nên cảm giác rất thoải mái. Tôi đã ăn cơm hộp trên núi. Phong cảnh từ trên núi rất đẹp. Sau đó, chúng tôi đã đi xem ngôi chùa cổ. Rất thú vị. Đó là một ngày rất vui. Tôi muốn đi lần nữa.",
      "audio": "assets/speaking/reading_7.mp3"
    },
    {
      "no": 8,
      "text": "私はメアリです。私は イタリアのフィレンツェから来ました。フィレンツェはイタリアのすこし きたです。フィレンツェは とても にぎやかなところです。ふるいきょうかいやびじゅつかんなどがあります。きょうかいはとてもきれいです。2月にチョコレートのまつりがあります。いろいろな チョコレートがあります。とてもおいしいです。フィレンツェははる、あたたかいです。そして、雨がすくないです。フィレンツェは いいところです。",
      "romaji": "Watashi wa Meari desu. Watashi wa Itaria no Firentse kara kimashita. Firentse wa Itaria no sukoshi kita desu. Firentse wa totemo nigiyaka na tokoro desu. Furui kyoukai ya bijutsukan nado ga arimasu. Kyoukai wa totemo kirei desu. Nigatsu ni chokoreeto no matsuri ga arimasu. Iroiro na chokoreeto ga arimasu. Totemo oishii desu. Firentse wa haru, atatakai desu. Soshite, ame ga sukunai desu. Firentse wa ii tokoro desu.",
      "hint": "Bài 8 (Trung bình)",
      "translation": "Tôi là Mary. Tôi đến từ Florence, Ý. Florence nằm hơi về phía bắc nước Ý. Florence là một nơi rất nhộn nhịp. Có những nhà thờ cổ và bảo tàng mỹ thuật. Nhà thờ rất đẹp. Tháng 2 có lễ hội chocolate. Có rất nhiều loại chocolate. Rất ngon. Florence vào mùa xuân thì ấm áp. Và ít mưa. Florence là một nơi tốt.",
      "audio": "assets/speaking/reading_8.mp3"
    },
    {
      "no": 9,
      "text": "すみません、ちょっときいてください。あそこにとけいがみえますか。ええ、みえます。あれは私のとけいです。でも、今は時間がわかりません。とけいがこわれています。新しいとけいを買いに行きます。",
      "romaji": "Sumimasen, chotto kiite kudasai. Asoko ni tokei ga miemasu ka. Ee, miemasu. Are wa watashi no tokei desu. Demo, ima jikan ga wakarimasen. Tokei ga kowarete imasu. Atarashii tokei o kai ni ikimasu.",
      "hint": "Bài 9 (Trung bình)",
      "translation": "Xin lỗi, cho tôi hỏi một chút. Bạn có nhìn thấy cái đồng hồ ở đằng kia không? Vâng, tôi thấy. Đó là đồng hồ của tôi. Nhưng mà, bây giờ tôi không biết mấy giờ rồi. Đồng hồ bị hỏng rồi. Tôi sẽ đi mua đồng hồ mới.",
      "audio": "assets/speaking/reading_9.mp3"
    },
    {
      "no": 10,
      "text": "今日は雨ですが、うちで本を読みます。きのうはいいてんきでした。きのうはこうえんでテニスをしました。テニスはとてもたのしかったです。あしたはともだちとえいがを見ます。おもしろいえいががいいです。来週は日本へ行きます。日本の食べ物はおいしいです。すしがだいすきです。すしはせかいでいちばんおいしいです。日本では、たくさんのすしをたべたいです。それから、京都にもいきたいです。京都は日本の古いまちです。きれいなまちだとおもいます。日本りょこうがたのしみです。",
      "romaji": "Kyou wa ame desu ga, uchi de hon o yomimasu. Kinou wa ii tenki deshita. Kinou wa kouen de tenisu o shimashita. Tenisu wa totemo tanoshikatta desu. Ashita wa tomodachi to eiga o mimasu. Omoshiroi eiga ga ii desu. Raishuu wa Nihon e ikimasu. Nihon no tabemono wa oishii desu. Sushi ga daisuki desu. Sushi wa sekai de ichiban oishii desu. Nihon de wa, takusan no sushi o tabetai desu. Sorekara, Kyouto ni mo ikitai desu. Kyouto wa Nihon no furui machi desu. Kirei na machi da to omoimasu. Nihon ryokou ga tanoshimi desu.",
      "hint": "Bài 10 (Siêu khó - Cảnh giới tu tiên)",
      "translation": "Hôm nay trời mưa, nhưng tôi đọc sách ở nhà. Hôm qua thời tiết đẹp. Hôm qua tôi đã chơi tennis ở công viên. Tennis rất vui. Ngày mai tôi sẽ xem phim với bạn. Phim hay thì tốt. Tuần sau tôi sẽ đi Nhật. Đồ ăn Nhật rất ngon. Tôi rất thích sushi. Sushi là món ngon nhất thế giới. Ở Nhật, tôi muốn ăn nhiều sushi. Sau đó, tôi cũng muốn đi Kyoto. Kyoto là thành phố cổ của Nhật. Tôi nghĩ đó là một thành phố đẹp. Tôi mong chờ chuyến đi Nhật.",
      "audio": "assets/speaking/reading_10.mp3"
    },
    {
      "no": 11,
      "text": "私はミンです。ベトナムのハノイから 来ました。ハノイはベトナムのきたです。とても しずかな ところです。ふるい お寺や びじゅつかん などが あります。お寺は とてもきれいです。ハノイは ふゆ、すこし さむいです。あめが あまり おおくないです。ハノイは いいところです。",
      "romaji": "Watashi wa Min desu. Betonamu no Hanoi kara kimashita. Hanoi wa Betonamu no kita desu. Totemo shizuka na tokoro desu. Furui otera ya bijutsukan nado ga arimasu. Otera wa totemo kirei desu. Hanoi wa fuyu, sukoshi samui desu. Ame ga amari ookunai desu. Hanoi wa ii tokoro desu.",
      "hint": "Bài 11 (Chưa có)",
      "translation": "Tôi là Minh. Tôi đến từ Hà Nội, Việt Nam. Hà Nội ở phía bắc Việt Nam. Là một nơi rất yên tĩnh. Có những ngôi chùa cổ và bảo tàng mỹ thuật. Chùa rất đẹp. Hà Nội vào mùa đông hơi lạnh. Mưa không nhiều lắm. Hà Nội là một nơi tốt."
    },
    {
      "no": 12,
      "text": "私は パクです。私の まちは かんこくのソウルです。ソウルは おおきい まちです。そして、いい ところです。ソウルに おおきい かわが あります。かわは とても きれいです。ソウルは ふゆ、とても さむいです。みなさん、かんこくへ来てください。",
      "romaji": "Watashi wa Paku desu. Watashi no machi wa Kankoku no Souru desu. Souru wa ookii machi desu. Soshite, ii tokoro desu. Souru ni ookii kawa ga arimasu. Kawa wa totemo kirei desu. Souru wa fuyu, totemo samui desu. Minasan, Kankoku e kite kudasai.",
      "hint": "Bài 12 (Chưa có)",
      "translation": "Tôi là Park. Thành phố của tôi là Seoul ở Hàn Quốc. Seoul là một thành phố lớn. Và là một nơi tốt. Ở Seoul có một con sông lớn. Con sông rất đẹp. Seoul vào mùa đông rất lạnh. Mọi người hãy đến Hàn Quốc nhé."
    },
    {
      "no": 13,
      "text": "メアリーさんは イタリア人です。38才です。さくら 学校の 先生です。うちは イタリアの ナポリです。ナポリは イタリアの みなみです。東京から ローマまで ひこうきで 12時間半くらいです。ローマから ナポリまで バスで 3時間です。ナポリは とても きれいです。そして しずかです。 てんきが いいです。",
      "romaji": "Mearii-san wa Itaria-jin desu. Sanjuuhassai desu. Sakura gakkou no sensei desu. Uchi wa Itaria no Napori desu. Napori wa Itaria no minami desu. Toukyou kara Rooma made hikouki de juuni-jikan han kurai desu. Rooma kara Napori made basu de san-jikan desu. Napori wa totemo kirei desu. Soshite shizuka desu. Tenki ga ii desu.",
      "hint": "Bài 13 (Chưa có)",
      "translation": "Cô Mary là người Ý. 38 tuổi. Là giáo viên trường Sakura. Nhà ở Napoli, Ý. Napoli ở phía nam nước Ý. Từ Tokyo đến Rome mất khoảng 12 tiếng rưỡi đi máy bay. Từ Rome đến Napoli mất 3 tiếng đi xe buýt. Napoli rất đẹp. Và yên tĩnh. Thời tiết tốt."
    },
    {
      "no": 14,
      "text": "私のまちは きれいです。ふるいお寺 や びじゅつかん などが あります。なつに メロンの ジュースを のみます。 すこし あまいですが、とても おいしいです。そして つめたいです。食べ物もおいしいです。皆さん、ぜひ、来てください。",
      "romaji": "Watashi no machi wa kirei desu. Furui otera ya bijutsukan nado ga arimasu. Natsu ni meron no juusu o nomimasu. Sukoshi amai desu ga, totemo oishii desu. Soshite tsumetai desu. Tabemono mo oishii desu. Minasan, zehi, kite kudasai.",
      "hint": "Bài 14 (Chưa có)",
      "translation": "Thành phố của tôi đẹp. Có những ngôi chùa cổ và bảo tàng mỹ thuật. Mùa hè tôi uống nước ép dưa lưới. Hơi ngọt nhưng rất ngon. Và mát lạnh. Đồ ăn cũng ngon. Mọi người nhất định hãy đến nhé."
    },
    {
      "no": 15,
      "text": "しゅうまつ、てんきが よかったです。私は こうえんへ いきました。ともだちに 会いました。さくらを 見ました。きれいでした。それから、インドの レストランで 食事しました。とても おいしかったです。よる、デパートへ 行きました。何も 買いませんでした。たかかったですから。たのしい 一日 でした。",
      "romaji": "Shuumatsu, tenki ga yokatta desu. Watashi wa kouen e ikimashita. Tomodachi ni aimashita. Sakura o mimashita. Kirei deshita. Sorekara, Indo no resutoran de shokuji shimashita. Totemo oishikatta desu. Yoru, depaato e ikimashita. Nani mo kaimasen deshita. Takakatta desu kara. Tanoshii ichinichi deshita.",
      "hint": "Bài 15 (Chưa có)",
      "translation": "Cuối tuần, thời tiết đẹp. Tôi đã đi công viên. Gặp bạn bè. Ngắm hoa anh đào. Rất đẹp. Sau đó, ăn tối ở nhà hàng Ấn Độ. Rất ngon. Buổi tối, đi đến trung tâm thương mại. Không mua gì cả. Vì đắt. Đó là một ngày vui vẻ."
    },
    {
      "no": 16,
      "text": "先週の日よう日、ともだちとやまにのぼりました。てんきがよかったですから、とてもきもちがよかったです。やまでおべんとうを食べました。 ここの けしきは とてもきれいでした。それから、ふるいきょうかいを見に行きました。とてもおもしろかったです。とてもたのしい一日でした。また行きたいです。",
      "romaji": "Senshuu no nichiyoubi, tomodachi to yama ni noborimashita. Tenki ga yokatta desu kara, totemo kimochi ga yokatta desu. Yama de obentou o tabemashita. Koko no keshiki wa totemo kirei deshita. Sorekara, furui kyoukai o mi ni ikimashita. Totemo omoshirokatta desu. Totemo tanoshii ichinichi deshita. Mata ikitai desu.",
      "hint": "Bài 16 (Chưa có)",
      "translation": "Chủ nhật tuần trước, tôi đã leo núi với bạn bè. Vì thời tiết đẹp nên cảm giác rất dễ chịu. Chúng tôi đã ăn cơm hộp trên núi. Phong cảnh ở đây rất đẹp. Sau đó, chúng tôi đi xem nhà thờ cổ. Rất thú vị. Đó là một ngày rất vui. Tôi muốn đi lần nữa."
    },
    {
      "no": 17,
      "text": "先週の土曜日、私はこうえんでバーベキューをしました。それから、たかいやまにのぼりました。ここのけしきはとてもきれいでした。とてもおもしろかったです。とてもたのしい一日でした。また 行きたいです。",
      "romaji": "Senshuu no doyoubi, watashi wa kouen de baabekyuu o shimashita. Sorekara, takai yama ni noborimashita. Koko no keshiki wa totemo kirei deshita. Totemo omoshirokatta desu. Totemo tanoshii ichinichi deshita. Mata ikitai desu.",
      "hint": "Bài 17 (Chưa có)",
      "translation": "Thứ bảy tuần trước, tôi đã tổ chức tiệc nướng ở công viên. Sau đó, tôi đã leo lên ngọn núi cao. Phong cảnh ở đây rất đẹp. Rất thú vị. Đó là một ngày rất vui. Tôi muốn đi lần nữa."
    },
    {
      "no": 18,
      "text": "土曜日、ともだちと うみへ 行きました。 てんきが よかったですから、とても きもちが よかったです。 うみで ビールを 飲みました。バーベキューを しました。けしきは とても きれいでした。 それから、ふるい きょうかいを見に 行きました。とても おもしろかったです。 たのしい 1日でした。 また 行きたいです。",
      "romaji": "Doyoubi, tomodachi to umi e ikimashita. Tenki ga yokatta desu kara, totemo kimochi ga yokatta desu. Umi de biiru o nomimashita. Baabekyuu o shimashita. Keshiki wa totemo kirei deshita. Sorekara, furui kyoukai o mi ni ikimashita. Totemo omoshirokatta desu. Tanoshii ichinichi deshita. Mata ikitai desu.",
      "hint": "Bài 18 (Chưa có)",
      "translation": "Thứ bảy, tôi đã đi biển với bạn bè. Vì thời tiết đẹp nên cảm giác rất dễ chịu. Chúng tôi đã uống bia ở biển. Tổ chức tiệc nướng. Phong cảnh rất đẹp. Sau đó, chúng tôi đi xem nhà thờ cổ. Rất thú vị. Đó là một ngày vui vẻ. Tôi muốn đi lần nữa."
    },
    {
      "no": 19,
      "text": "私は スポーツが すきです。テニスと すいえいを します。サッカーは しません。にちようび かぞくと テニスを します。とても たのしいです。それから、プールへ いきます。まいにち テニスと すいえいを したいです。",
      "romaji": "Watashi wa supootsu ga suki desu. Tenisu to suiei o shimasu. Sakkaa wa shimasen. Nichiyoubi kazoku to tenisu o shimasu. Totemo tanoshii desu. Sorekara, puuru e ikimasu. Mainichi tenisu to suiei o shitai desu.",
      "hint": "Bài 19 (Chưa có)",
      "translation": "Tôi thích thể thao. Tôi chơi tennis và bơi lội. Tôi không chơi bóng đá. Chủ nhật tôi chơi tennis với gia đình. Rất vui. Sau đó, tôi đi đến hồ bơi. Hàng ngày tôi muốn chơi tennis và bơi lội."
    },
    {
      "no": 20,
      "text": "日曜日 ともだち のうちへ 行きました。そこで ゲームを しました。コーヒーを 飲みました。とても たのしかったです。それから、日本の レストランで 食事しました。とても おいしかったですが、たかかったです。よる、デパートへ 買い物に 行きました。 デパートで ともだちと しゃしんを とりました。",
      "romaji": "Nichiyoubi tomodachi no uchi e ikimashita. Soko de geemu o shimashita. Koohii o nomimashita. Totemo tanoshikatta desu. Sorekara, Nihon no resutoran de shokuji shimashita. Totemo oishikatta desu ga, takakatta desu. Yoru, depaato e kaimono ni ikimashita. Depaato de tomodachi to shashin o torimashita.",
      "hint": "Bài 20 (Chưa có)",
      "translation": "Chủ nhật tôi đã đến nhà bạn. Ở đó chúng tôi đã chơi game. Uống cà phê. Rất vui. Sau đó, ăn tối tại nhà hàng Nhật Bản. Rất ngon nhưng đắt. Buổi tối, đi mua sắm ở trung tâm thương mại. Chụp ảnh với bạn bè ở trung tâm thương mại."
    },
    {
      "no": 21,
      "text": "私は スポーツが すきです。テニスと すいえいを します。サッカーは しません。 テニスは 土曜日に かぞくと します。そして ときどき プールに 行きます。かわで およぎます。私は 今 とても たのしいです。げんきです。 テニスと すいえいを したいです。",
      "romaji": "Watashi wa supootsu ga suki desu. Tenisu to suiei o shimasu. Sakkaa wa shimasen. Tenisu wa doyoubi ni kazoku to shimasu. Soshite tokidoki puuru ni ikimasu. Kawa de oyogimasu. Watashi wa ima totemo tanoshii desu. Genki desu. Tenisu to suiei o shitai desu.",
      "hint": "Bài 21 (Chưa có)",
      "translation": "Tôi thích thể thao. Tôi chơi tennis và bơi lội. Tôi không chơi bóng đá. Tôi chơi tennis với gia đình vào thứ bảy. Và thỉnh thoảng tôi đi đến hồ bơi. Bơi ở sông. Bây giờ tôi rất vui. Khỏe mạnh. Tôi muốn chơi tennis và bơi lội."
    },
    {
      "no": 22,
      "text": "今週の土曜日の午後はいそがしいですか。 わたしの国の たいしかんで パーティーがあります。 いっしょに行きませんか。 木曜日の あさまでに へんじをください。",
      "romaji": "Konshuu no doyoubi no gogo wa isogashii desu ka. Watashi no kuni no taishikan de paatii ga arimasu. Issho ni ikimasen ka? Mokuyoubi no asa made ni henji o kudasai.",
      "hint": "Bài 22 (Chưa có)",
      "translation": "Chiều thứ bảy tuần này bạn có bận không? Có một bữa tiệc tại đại sứ quán nước tôi. Bạn có muốn đi cùng không? Xin vui lòng trả lời trước sáng thứ năm."
    },
    {
      "no": 23,
      "text": "みなさんは 日本の 食べ物で 何が いちばん すきですか。 私は おこのみやきが いちばん すきです。 おこのみやきは 日本のピザです。 おこのみやきの なかに ぶたにく や たまご や やさいが あります。 おこのみやきの ソースは すこし あまいです。 とても おいしいですよ。 こんど いっしょに おこのみやきを 食べに 行きませんか。",
      "romaji": "Minasan wa Nihon no tabemono de nani ga ichiban suki desu ka. Watashi wa okonomiyaki ga ichiban suki desu. Okonomiyaki wa Nihon no piza desu. Okonomiyaki no naka ni butaniku ya tamago ya yasai ga arimasu. Okonomiyaki no soosu wa sukoshi amai desu. Totemo oishii desu yo. Kondo issho ni okonomiyaki o tabe ni ikimasen ka.",
      "hint": "Bài 23 (Chưa có)",
      "translation": "Mọi người thích món ăn Nhật nào nhất? Tôi thích nhất là okonomiyaki. Okonomiyaki là pizza của Nhật Bản. Bên trong okonomiyaki có thịt lợn, trứng và rau. Nước sốt của okonomiyaki hơi ngọt. Rất ngon đấy. Lần tới chúng ta cùng đi ăn okonomiyaki nhé?"
    },
    {
      "no": 24,
      "text": "私は あさ 時間が ありません。えきで パンを 買って 食べます。ひるごはんも しごとが いそがしいですから、 パンと ぎゅうにゅうです。ばんごはんは、うちのちかくの レストランで ゆっくり ごはんを 食べます。",
      "romaji": "Watashi wa asa jikan ga arimasen. Eki de pan o katte tabemasu. Hirugohan mo shigoto ga isogashii desu kara, pan to gyuunyuu desu. Bangohan wa, uchi no chikaku no resutoran de yukkuri gohan o tabemasu.",
      "hint": "Bài 24 (Chưa có)",
      "translation": "Buổi sáng tôi không có thời gian. Tôi mua bánh mì ở nhà ga và ăn. Bữa trưa cũng vì công việc bận rộn nên chỉ ăn bánh mì và uống sữa. Bữa tối, tôi ăn cơm thong thả tại một nhà hàng gần nhà."
    },
    {
      "no": 25,
      "text": "メアリーさんは 会社いんです。 東京に います。毎日、7時に おきます。8時に 会社へ 行きます。午後5時まで しごとを します。よる 9時ごろ うちへ 帰ります。ばんごはんを 食べます。テレビを 見ます。それから、インターネットをして、でんわで こいびとと 話します。11時ごろ ねます。",
      "romaji": "Mearii-san wa kaishain desu. Tokyo ni imasu. Mainichi, shichi-ji ni okimasu. Hachi-ji ni kaisha e ikimasu. Gogo go-ji made shigoto o shimasu. Yoru ku-ji goro uchi e kaerimasu. Bangohan o tabemasu. Terebi o mimasu. Sorekara, intaanetto o shite, denwa de koibito to hanashimasu. Juuichi-ji goro nemasu.",
      "hint": "Bài 25 (Chưa có)",
      "translation": "Cô Mary là nhân viên công ty. Hiện đang ở Tokyo. Mỗi ngày, thức dậy lúc 7 giờ. Đi làm lúc 8 giờ. Làm việc đến 5 giờ chiều. Về nhà khoảng 9 giờ tối. Ăn tối. Xem TV. Sau đó, lướt internet, nói chuyện điện thoại với người yêu. Đi ngủ khoảng 11 giờ."
    },
    {
      "no": 26,
      "text": "私は ダニエルです。かぞくは 4人です。あに は 会社いんです。ちちは 大学で おしえています。はは は びょういんで はたらいています。私は ひろしま 大学の1年生です。",
      "romaji": "Watashi wa Danieru desu. Kazoku wa yo-nin desu. Ani wa kaishain desu. Chichi wa daigaku de oshiete imasu. Haha wa byouin de hataraite imasu. Watashi wa Hiroshima daigaku no ichinensei desu.",
      "hint": "Bài 26 (Chưa có)",
      "translation": "Tôi là Daniel. Gia đình có 4 người. Anh trai là nhân viên công ty. Bố dạy học ở trường đại học. Mẹ làm việc ở bệnh viện. Tôi là sinh viên năm nhất đại học Hiroshima."
    },
    {
      "no": 27,
      "text": "きのうの あさ 私は 一人で としょかんへ 行きました。それから、スーパーで 買いものを しました。午後、ともだちの すずきさんに 会いました。ゆうがた、うちへ 帰りました。そして、えいごを べんきょうしました。",
      "romaji": "Kinou no asa watashi wa hitori de toshokan e ikimashita. Sorekara, suupaa de kaimono o shimashita. Gogo, tomodachi no Suzuki-san ni aimashita. Yuugata, uchi e kaerimashita. Soshite, eigo o benkyou shimashita.",
      "hint": "Bài 27 (Chưa có)",
      "translation": "Sáng hôm qua tôi một mình đi thư viện. Sau đó, mua đồ ở siêu thị. Buổi chiều, gặp bạn Suzuki. Chiều tối, về nhà. Rồi học tiếng Anh."
    },
    {
      "no": 28,
      "text": "みなさん、来週の日曜日、私のうちで パーティーをします。私は国の 料理を つくります。 いっしょに つくりませんか。 それから、みなさんの国の 料理を つくって、いっしょに 食べましょう。おいしい おさけも 飲みましょう。 私のアパートは えきの ちかくに あります。 コンビニの となりの あたらしい アパートです。 ぜひ、来てください。",
      "romaji": "Minasan, raishuu no nichiyoubi, watashi no uchi de paatii o shimasu. Watashi wa kuni no ryouri o tsukurimasu. Issho ni tsukurimasen ka. Sorekara, minasan no kuni no ryouri o tsukutte, issho ni tabemashou. Oishii osake mo nomimashou. Watashi no apaato wa eki no chikaku ni arimasu. Konbini no tonari no atarashii apaato desu. Zehi, kite kudasai.",
      "hint": "Bài 28 (Chưa có)",
      "translation": "Mọi người, chủ nhật tuần sau, tôi sẽ tổ chức tiệc ở nhà. Tôi sẽ nấu món ăn của nước tôi. Cùng nấu không? Sau đó, hãy nấu món ăn của nước các bạn và cùng ăn nhé. Cùng uống rượu ngon nữa. Căn hộ của tôi ở gần nhà ga. Là căn hộ mới bên cạnh cửa hàng tiện lợi. Nhất định hãy đến nhé."
    },
    {
      "no": 29,
      "text": "きのう、キムさんと デパートで 買いものを しました。 4かいへ 行きました。シャツを 見ました。ふくやに シャツが たくさん ありました。キムさんは 小さいシャツを 買いました。私は 大きいシャツを 買いました。それから、時間が ありましたから、1かいで えいがを 見ました。帰りました。",
      "romaji": "Kinou, Kimu-san to depaato de kaimono o shimashita. Yon-kai e ikimashita. Shatsu o mimashita. Fukuya ni shatsu ga takusan arimashita. Kimu-san wa chiisai shatsu o kaimashita. Watashi wa ookii shatsu o kaimashita. Sorekara, jikan ga arimashita kara, ikkai de eiga o mimashita. Kaerimashita.",
      "hint": "Bài 29 (Chưa có)",
      "translation": "Hôm qua, tôi đã đi mua sắm với Kim ở trung tâm thương mại. Đã đi lên tầng 4. Xem áo sơ mi. Có rất nhiều áo sơ mi ở cửa hàng quần áo. Kim đã mua một chiếc áo sơ mi nhỏ. Tôi đã mua một chiếc áo sơ mi lớn. Sau đó, vì có thời gian nên đã xem phim ở tầng 1. Rồi về nhà."
    },
    {
      "no": 30,
      "text": "田中さんの おとうさんは ごはんと みそしるが すきです。パンは あまり すきじゃありません。 田中さんの おかあさんも ごはんと みそしるが すきです。パンも よく 食べます。おかあさんは たまごは あまり 食べません。 田中さんは いつも ごはんと 肉を 食べます。貝も すきです。パンは あまり 食べません。 くだものも すきじゃありません。",
      "romaji": "Tanaka-san no otousan wa gohan to misoshiru ga suki desu. Pan wa amari suki ja arimasen. Tanaka-san no okaasan mo gohan to misoshiru ga suki desu. Pan mo yoku tabemasu. Okaasan wa tamago wa amari tabemasen. Tanaka-san wa itsumo gohan to niku o tabemasu. Kai mo suki desu. Pan wa amari tabemasen. Kudamono mo suki ja arimasen.",
      "hint": "Bài 30 (Chưa có)",
      "translation": "Bố của Tanaka thích cơm và súp miso. Không thích bánh mì lắm. Mẹ của Tanaka cũng thích cơm và súp miso. Cũng hay ăn bánh mì. Mẹ không ăn trứng lắm. Tanaka luôn ăn cơm và thịt. Cũng thích sò. Không ăn bánh mì lắm. Cũng không thích trái cây."
    },
    {
      "no": 31,
      "text": "私は 大学のとき、日本の えいがを フランス語で 見ました。とても、おもしろかったです。 日本の おもしろいことを たくさん 見たいですから、 日本へ来ました。今、日本語を べんきょうしています。",
      "romaji": "Watashi wa daigaku no toki, Nihon no eiga o Furansugo de mimashita. Totemo, omoshirokatta desu. Nihon no omoshiroi koto o takusan mitai desu kara, Nihon e kimashita. Ima, Nihongo o benkyou shite imasu.",
      "hint": "Bài 31 (Chưa có)",
      "translation": "Khi còn học đại học, tôi đã xem phim Nhật bằng tiếng Pháp. Rất thú vị. Vì muốn xem nhiều điều thú vị của Nhật Bản nên tôi đã đến Nhật. Bây giờ, tôi đang học tiếng Nhật."
    },
    {
      "no": 32,
      "text": "私は ベトナムのハノイから きました。ハノイは ベトナムのきたです。とても きれいです。ふるいお寺や びじゅつかんが あります。おいしい食べ物が おおいです。なつ、てんきが いいです。そして、あめが すくないです。こうえんで バーベキューをします。ハノイは いいところです。なつやすみ、ハノイへ帰りたいです。",
      "romaji": "Watashi wa Betonamu no Hanoi kara kimashita. Hanoi wa Betonamu no kita desu. Totemo kirei desu. Furui otera ya bijutsukan ga arimasu. Oishii tabemono ga ooi desu. Natsu, tenki ga ii desu. Soshite, ame ga sukunai desu. Kouen de baabekyuu o shimasu. Hanoi wa ii tokoro desu. Natsuyasumi, Hanoi e kaeritai desu.",
      "hint": "Bài 32 (Chưa có)",
      "translation": "Tôi đến từ Hà Nội, Việt Nam. Hà Nội ở phía bắc Việt Nam. Rất đẹp. Có những ngôi chùa cổ và bảo tàng mỹ thuật. Có nhiều đồ ăn ngon. Mùa hè, thời tiết đẹp. Và ít mưa. Tổ chức tiệc nướng ở công viên. Hà Nội là một nơi tốt. Nghỉ hè, tôi muốn về Hà Nội."
    },
    {
      "no": 33,
      "text": "しゅうまつ、ひまでした。私は ともだちと えいがを 見に行きました。おもしろいえいがでした。それから、ちゅうごくのレストランで ひるごはんを 食べました。おいしかったです。レストランで 大学の先生に 会いました。先生は かぞくと ごはんを 食べました。よる、へやを そうじしました。それから、せんたくしました。",
      "romaji": "Shuumatsu, hima deshita. Watashi wa tomodachi to eiga o mi ni ikimashita. Omoshiroi eiga deshita. Sorekara, Chuugoku no resutoran de hirugohan o tabemashita. Oishikatta desu. Resutoran de daigaku no sensei ni aimashita. Sensei wa kazoku to gohan o tabemashita. Yoru, heya o souji shimashita. Sorekara, sentaku shimashita.",
      "hint": "Bài 33 (Chưa có)",
      "translation": "Cuối tuần, tôi rảnh. Tôi đã đi xem phim với bạn bè. Là một bộ phim thú vị. Sau đó, ăn trưa tại nhà hàng Trung Quốc. Rất ngon. Gặp giáo viên đại học ở nhà hàng. Thầy ăn cơm cùng gia đình. Buổi tối, dọn dẹp phòng. Sau đó, giặt giũ."
    },
    {
      "no": 34,
      "text": "私のまちは にぎやかです。たかい ビルがおおいです。きょうかいも あります。とても きれいです。まちは はる、すずしいです。おはなみに行きます。あきにおまつりを見ます。とても おもしろいです。みなさん、ぜひ来てください。",
      "romaji": "Watashi no machi wa nigiyaka desu. Takai biru ga ooi desu. Kyoukai mo arimasu. Totemo kirei desu. Machi wa haru, suzushii desu. Ohanami ni ikimasu. Aki ni omatsuri o mimasu. Totemo omoshiroi desu. Minasan, zehi kite kudasai.",
      "hint": "Bài 34 (Chưa có)",
      "translation": "Thành phố của tôi nhộn nhịp. Có nhiều tòa nhà cao tầng. Cũng có nhà thờ. Rất đẹp. Thành phố vào mùa xuân mát mẻ. Đi ngắm hoa anh đào. Mùa thu xem lễ hội. Rất thú vị. Mọi người hãy đến nhé."
    },
    {
      "no": 35,
      "text": "今日 小学校の後ろで 田中先生に 会いました。本田さんも来ました。お寺の見学について たくさん話しました。それから、5時半に 帰りました。 野菜をきって、料理をつくって、一人で 食べました。",
      "romaji": "Kyou shougakkou no ushiro de Tanaka-sensei ni aimashita. Honda-san mo kimashita. Otera no kengaku ni tsuite takusan hanashimashita. Sorekara, go-ji han ni kaerimashita. Yasai o kitte, ryouri o tsukutte hitori de tabemashita.",
      "hint": "Bài 35 (Chưa có)",
      "translation": "Hôm nay tôi gặp thầy Tanaka ở sau trường tiểu học. Chị Honda cũng đến. Đã nói chuyện nhiều về việc tham quan chùa, sau đó về lúc 5 giờ rưỡi. Cắt rau, nấu ăn và ăn một mình."
    }
  ],
  "talking_without_pictures": [
    {
      "question": "あなたの まちは どんな ところですか。",
      "hint": "Thành phố của bạn là nơi như thế nào?",
      "example": "わたしの まちは にぎやかです。デパートや レストランが たくさん あります。そして、きれいな かわも あります。",
      "romaji": {
        "question": "Anata no machi wa donna tokoro desu ka.",
        "example": "Watashi no machi wa nigiyaka desu. Depaato ya resutoran ga takusan arimasu. Soshite, kirei na kawa mo arimasu."
      },
      "no": 1
    },
    {
      "question": "休みの日に なにを しますか。",
      "hint": "Ngày nghỉ bạn làm gì?",
      "example": "休みの日に ともだちと えいがを みます。それから、いっしょに レストランで ごはんを たべます。",
      "romaji": {
        "question": "Yasumi no hi ni nani o shimasu ka.",
        "example": "Yasumi no hi ni tomodachi to eiga o mimasu. Sorekara, issho ni resutoran de gohan o tabemasu."
      },
      "no": 2
    },
    {
      "question": "日本の たべもので なにが いちばん すきですか。どうしてですか。",
      "hint": "Trong các món ăn Nhật Bản bạn thích nhất món gì? Tại sao?",
      "example": "すしが いちばん すきです。とても おいしいですから。",
      "romaji": {
        "question": "Nihon no tabemono de nani ga ichiban suki desu ka. Doushite desu ka.",
        "example": "Sushi ga ichiban suki desu. Totemo oishii desu kara."
      },
      "no": 3
    },
    {
      "question": "あなたの まちと とうきょうと どちらが おおきいですか。",
      "hint": "Thành phố của bạn và Tokyo, nơi nào lớn hơn?",
      "example": "とうきょうの ほうが おおきいです。わたしの まちは ちいさいです。",
      "romaji": {
        "question": "Anata no machi to Toukyou to dochira ga ookii desu ka.",
        "example": "Toukyou no hou ga ookii desu. Watashi no machi wa chiisai desu."
      },
      "no": 4
    },
    {
      "question": "いま なにを べんきょうして いますか。",
      "hint": "Bây giờ bạn đang học gì?",
      "example": "いま にほんごを べんきょうして います。とても たのしいです。",
      "romaji": {
        "question": "Ima nani o benkyou shite imasu ka.",
        "example": "Ima nihongo o benkyou shite imasu. Totemo tanoshii desu."
      },
      "no": 5
    },
    {
      "question": "しゅうまつに なにを したいですか。",
      "hint": "Cuối tuần bạn muốn làm gì?",
      "example": "しゅうまつに ともだちと かいものに いきたいです。それから、カフェで コーヒーを のみたいです。",
      "romaji": {
        "question": "Shuumatsu ni nani o shitai desu ka.",
        "example": "Shuumatsu ni tomodachi to kaimono ni ikitai desu. Sorekara, kafe de koohii o nomitai desu."
      },
      "no": 6
    },
    {
      "question": "あなたの まちで どこが いちばん にぎやかですか。",
      "hint": "Ở thành phố của bạn, đâu là nơi nhộn nhịp nhất?",
      "example": "わたしの まちで えきの ちかくが いちばん にぎやかです。レストランや みせが たくさん あります。",
      "romaji": {
        "question": "Anata no machi de doko ga ichiban nigiyaka desu ka.",
        "example": "Watashi no machi de eki no chikaku ga ichiban nigiyaka desu. Resutoran ya mise ga takusan arimasu."
      },
      "no": 7
    },
    {
      "question": "あなたの へやに なにが ありますか。",
      "hint": "Trong phòng của bạn có gì?",
      "example": "わたしの へやに ベッドと つくえと テレビが あります。",
      "romaji": {
        "question": "Anata no heya ni nani ga arimasu ka.",
        "example": "Watashi no heya ni beddo to tsukue to terebi ga arimasu."
      },
      "no": 8
    },
    {
      "question": "なつやすみに どこへ いきたいですか。どうしてですか。",
      "hint": "Nghỉ hè bạn muốn đi đâu? Tại sao?",
      "example": "なつやすみに おきなわへ いきたいです。うみが きれいですから。",
      "romaji": {
        "question": "Natsuyasumi ni doko e ikitai desu ka. Doushite desu ka.",
        "example": "Natsuyasumi ni Okinawa e ikitai desu. Umi ga kirei desu kara."
      },
      "no": 9
    },
    {
      "question": "あなたの まちの きせつで いちばん すきな きせつは いつですか。",
      "hint": "Trong các mùa ở thành phố của bạn, bạn thích mùa nào nhất?",
      "example": "わたしの まちで はるが いちばん すきです。てんきが いいですから。",
      "romaji": {
        "question": "Anata no machi no kisetsu de ichiban suki na kisetsu wa itsu desu ka.",
        "example": "Watashi no machi de haru ga ichiban suki desu. Tenki ga ii desu kara."
      },
      "no": 10
    },
    {
      "question": "あなたの まちと おおさかと どちらが さむいですか。",
      "hint": "Thành phố của bạn và Osaka, nơi nào lạnh hơn?",
      "example": "わたしの まちの ほうが さむいです。ふゆは マイナス5どまで さがります。",
      "romaji": {
        "question": "Anata no machi to Oosaka to dochira ga samui desu ka.",
        "example": "Watashi no machi no hou ga samui desu. Fuyu wa mainasu go do made sagarimasu."
      },
      "no": 11
    },
    {
      "question": "しゅうまつに どんな スポーツを しますか。",
      "hint": "Cuối tuần bạn chơi môn thể thao gì?",
      "example": "しゅうまつに サッカーを します。ともだちと こうえんで れんしゅうします。",
      "romaji": {
        "question": "Shuumatsu ni donna supootsu o shimasu ka.",
        "example": "Shuumatsu ni sakkaa o shimasu. Tomodachi to kouen de renshuu shimasu."
      },
      "no": 12
    },
    {
      "question": "らいねん どこへ りょこうに いきたいですか。どうしてですか。",
      "hint": "Năm sau bạn muốn đi du lịch đâu? Tại sao?",
      "example": "らいねん きょうとへ いきたいです。でんとうてきな おてらを みたいですから。",
      "romaji": {
        "question": "Rainen doko e ryokou ni ikitai desu ka. Doushite desu ka.",
        "example": "Rainen Kyouto e ikitai desu. Dentouteki na otera o mitai desu kara."
      },
      "no": 13
    },
    {
      "question": "ハノイ／ホーチミン市／ あなたのまちは どうですか／どんなまち ですか？",
      "hint": "Hà Nội/TP.HCM/Thành phố của bạn thì thế nào/là thành phố như thế nào?",
      "example": "ハノイは にぎやかです。／ わたしのまちは しずかで きれいです。",
      "romaji": {
        "question": "Hanoi / Hoochimin-shi / Anata no machi wa dou desu ka / donna machi desu ka?",
        "example": "Hanoi wa nigiyaka desu. / Watashi no machi wa shizuka de kirei desu."
      },
      "no": 14
    },
    {
      "question": "あなたのまちは どこですか？",
      "hint": "Thành phố của bạn ở đâu?",
      "example": "ダナンです。ダナンは ベトナムの まんなかです。",
      "romaji": {
        "question": "Anata no machi wa doko desu ka?",
        "example": "Danang desu. Danang wa Betonamu no mannaka desu."
      },
      "no": 15
    },
    {
      "question": "あなたのまちは にぎやかですか？人が おおいですか？ みどりが おおいですか？",
      "hint": "Thành phố của bạn có nhộn nhịp không? Có đông người không? Có nhiều cây xanh không?",
      "example": "はい、にぎやかです。／ いいえ、あまり にぎやかじゃありません。ひとが すくないです。",
      "romaji": {
        "question": "Anata no machi wa nigiyaka desu ka? Hito ga ooi desu ka? Midori ga ooi desu ka?",
        "example": "Hai, nigiyaka desu. / Iie, amari nigiyaka ja arimasen. Hito ga sukunai desu."
      },
      "no": 16
    },
    {
      "question": "あなたのまちに やま／かわ／おてら／きょうかい／おんせんが ありますか？",
      "hint": "Ở thành phố của bạn có núi/sông/chùa/nhà thờ/suối nước nóng không?",
      "example": "はい、やまが あります。／ いいえ、かわは ありません。",
      "romaji": {
        "question": "Anata no machi ni yama / kawa / otera / kyoukai / onsen ga arimasu ka?",
        "example": "Hai, yama ga arimasu. / Iie, kawa wa arimasen."
      },
      "no": 17
    },
    {
      "question": "あなたのまちに 何がありますか？",
      "hint": "Ở thành phố của bạn có gì?",
      "example": "デパートや きれいな こうえんが あります。",
      "romaji": {
        "question": "Anata no machi ni nani ga arimasu ka?",
        "example": "Depaato ya kirei na kouen ga arimasu."
      },
      "no": 18
    },
    {
      "question": "あなたのまちから ハノイまで どのくらいですか？",
      "hint": "Từ thành phố của bạn đến Hà Nội mất bao lâu?",
      "example": "ひこうきで 1じかんくらいです。／ バスで 6じかん かかります。",
      "romaji": {
        "question": "Anata no machi kara Hanoi made dono kurai desu ka?",
        "example": "Hikouki de ichi-jikan kurai desu. / Basu de roku-jikan kakarimasu."
      },
      "no": 19
    },
    {
      "question": "あなたのくに／ベトナムは どんな国ですか？",
      "hint": "Đất nước của bạn/Việt Nam là đất nước như thế nào?",
      "example": "ベトナムは きれいな くにです。たべものが おいしいです。",
      "romaji": {
        "question": "Anata no kuni / Betonamu wa donna kuni desu ka",
        "example": "Betonamu wa kirei na kuni desu. Tabemono ga oishii desu."
      },
      "no": 20
    },
    {
      "question": "ベトナム人は どんな人ですか？",
      "hint": "Người Việt Nam là người như thế nào?",
      "example": "しんせつで あかるい ひとが おおいです。",
      "romaji": {
        "question": "Betonamu-jin wa donna hito desu ka?",
        "example": "Shinsetsu de akarui hito ga ooi desu."
      },
      "no": 21
    },
    {
      "question": "FPTだいがくは どんな大学ですか？",
      "hint": "Đại học FPT là trường đại học như thế nào?",
      "example": "あたらしい だいがくです。コンピュータが ゆうめいです。",
      "romaji": {
        "question": "FPT daigaku wa donna daigaku desu ka?",
        "example": "Atarashii daigaku desu. Konpyuuta ga yuumei desu."
      },
      "no": 22
    },
    {
      "question": "あなた は おかねが たくさん あります。なにをしますか？ なにを かいますか？",
      "hint": "Bạn có nhiều tiền. Bạn sẽ làm gì? Bạn sẽ mua gì?",
      "example": "あたらしい くるまを かいたいです。／ りょこうに いきたいです。",
      "romaji": {
        "question": "Anata wa okane ga takusan arimasu. Nani o shimasu ka? Nani o kaimasu ka?",
        "example": "Atarashii kuruma o kaitai desu. / Ryokou ni ikitai desu."
      },
      "no": 23
    },
    {
      "question": "きのう、どこへ行きましたか？",
      "hint": "Hôm qua bạn đã đi đâu?",
      "example": "きのう、デパートへ かいものに いきました。",
      "romaji": {
        "question": "Kinou, doko e ikimashita ka?",
        "example": "Kinou, depaato e kaimono ni ikimashita."
      },
      "no": 24
    },
    {
      "question": "きのう、どこかへ行きましたか？",
      "hint": "Hôm qua bạn có đi đâu không?",
      "example": "はい、いきました。／ いいえ、どこへも いきませんでした。",
      "romaji": {
        "question": "Kinou, dokoka e ikimashita ka?",
        "example": "Hai, ikimashita. / Iie, doko e mo ikimasen deshita."
      },
      "no": 25
    },
    {
      "question": "きのう／しゅうまつ、なにをしましたか。どうでしたか？",
      "hint": "Hôm qua/Cuối tuần bạn đã làm gì? Thấy thế nào?",
      "example": "きのう、ともだちと えいがを みました。とても おもしろかったです。",
      "romaji": {
        "question": "Kinou / Shuumatsu, nani o shimashita ka. Dou deshita ka?",
        "example": "Kinou, tomodachi to eiga o mimashita. Totemo omoshirokatta desu."
      },
      "no": 26
    },
    {
      "question": "あした、どこかへ行きますか？",
      "hint": "Ngày mai bạn có đi đâu không?",
      "example": "はい、いきます。／ いいえ、いきません。",
      "romaji": {
        "question": "Ashita, dokoka e ikimasu ka?",
        "example": "Hai, ikimasu. / Iie, ikimasen."
      },
      "no": 27
    },
    {
      "question": "あした、なにをしますか？",
      "hint": "Ngày mai bạn sẽ làm gì?",
      "example": "あした、にほんごを べんきょうします。",
      "romaji": {
        "question": "Ashita, nani o shimasu ka?",
        "example": "Ashita, nihongo o benkyou shimasu."
      },
      "no": 28
    },
    {
      "question": "まいにち、だれと／なんで だいがくへ行きますか？",
      "hint": "Hàng ngày, bạn đi đến trường đại học với ai/bằng gì?",
      "example": "まいにち、ひとりで バイクで だいがくへ いきます。",
      "romaji": {
        "question": "Mainichi, dare to / nande daigaku e ikimasu ka?",
        "example": "Mainichi, hitori de baiku de daigaku e ikimasu."
      },
      "no": 29
    },
    {
      "question": "きのうのよる、べんきょうしましたか？だれと／どこで／どのくらいべんきょうしましたか？",
      "hint": "Tối hôm qua bạn có học không? Với ai/Ở đâu/Trong bao lâu?",
      "example": "はい、べんきょうしました。うちで ひとりで 2じかん べんきょうしました。",
      "romaji": {
        "question": "Kinou no yoru, benkyou shimashita ka? Dare to / doko de / dono kurai benkyou shimashita ka?",
        "example": "Hai, benkyou shimashita. Uchi de hitori de ni-jikan benkyou shimashita."
      },
      "no": 30
    },
    {
      "question": "きのうのてんきは どうでしたか？",
      "hint": "Thời tiết hôm qua thế nào?",
      "example": "いい てんきでした。／ あめでした。",
      "romaji": {
        "question": "Kinou no tenki wa dou deshita ka?",
        "example": "Ii tenki deshita. / Ame deshita."
      },
      "no": 31
    },
    {
      "question": "しゅうまつ、何をしたいですか？",
      "hint": "Cuối tuần bạn muốn làm gì?",
      "example": "ともだちと カラオケに いきたいです。",
      "romaji": {
        "question": "Shuumatsu, nani o shitai desu ka?",
        "example": "Tomodachi to karaoke ni ikitai desu."
      },
      "no": 32
    },
    {
      "question": "おかねが あります。何をかいたいですか？どこへ いきたいですか？ 何をしたいですか？",
      "hint": "Bạn có tiền. Bạn muốn mua gì? Muốn đi đâu? Muốn làm gì?",
      "example": "あたらしい パソコンを かいたいです。／ にほんへ りょこうしたいです。",
      "romaji": {
        "question": "Okane ga arimasu. Nani o kaitai desu ka? Doko e ikitai desu ka? Nani o shitai desu ka?",
        "example": "Atarashii pasokon o kaitai desu. / Nihon e ryokou shitai desu."
      },
      "no": 33
    },
    {
      "question": "どんなスポーツ／りょうり／くだもの／ひとが（いちばん）すきですか？",
      "hint": "Bạn thích (nhất) môn thể thao/món ăn/trái cây/người nào?",
      "example": "サッカーが いちばん すきです。／ しんせつな ひとが すきです。",
      "romaji": {
        "question": "Donna supootsu / ryouri / kudamono / hito ga (ichiban) suki desu ka?",
        "example": "Sakkaa ga ichiban suki desu. / Shinsetsu na hito ga suki desu."
      },
      "no": 34
    },
    {
      "question": "あなたはビール／カラオケ／アニメ／マンガがすきですか？",
      "hint": "Bạn có thích bia/karaoke/anime/manga không?",
      "example": "はい、ビールが すきです。／ いいえ、アニメは あまり すきじゃありません。",
      "romaji": {
        "question": "Anata wa biiru / karaoke / anime / manga ga suki desu ka?",
        "example": "Hai, biiru ga suki desu. / Iie, anime wa amari suki ja arimasen."
      },
      "no": 35
    },
    {
      "question": "きのうは ひまでしたか？ いそがしかったですか？",
      "hint": "Hôm qua bạn rảnh không? Có bận không?",
      "example": "はい、ひまでした。／ いいえ、とても いそがしかったです。",
      "romaji": {
        "question": "Kinou wa hima deshita ka? Isogashikatta desu ka?",
        "example": "Hai, hima deshita. / Iie, totemo isogashikatta desu."
      },
      "no": 36
    },
    {
      "question": "今、だれに いちばん 会いたいですか？",
      "hint": "Bây giờ bạn muốn gặp ai nhất?",
      "example": "かぞくに いちばん あいたいです。",
      "romaji": {
        "question": "Ima, dare ni ichiban aitai desu ka?",
        "example": "Kazoku ni ichiban aitai desu."
      },
      "no": 37
    },
    {
      "question": "あした、大学へ 何をしに行きますか？",
      "hint": "Ngày mai bạn đến trường đại học để làm gì?",
      "example": "にほんごの じゅぎょうを うけに いきます。",
      "romaji": {
        "question": "Ashita, daigaku e nani o shi ni ikimasu ka?",
        "example": "Nihongo no jugyou o uke ni ikimasu."
      },
      "no": 38
    },
    {
      "question": "リンゴとイチゴとどちらがおいしいですか？",
      "hint": "Táo và dâu tây, cái nào ngon hơn?",
      "example": "イチゴのほうが おいしいです。／ どちらも おいしいです。",
      "romaji": {
        "question": "Ringo to ichigo to dochira ga oishii desu ka?",
        "example": "Ichigo no hou ga oishii desu. / Dochira mo oishii desu."
      },
      "no": 39
    },
    {
      "question": "日本語と英語とどちらがむずかしいですか？",
      "hint": "Tiếng Nhật và tiếng Anh, tiếng nào khó hơn?",
      "example": "にほんごのほうが むずかしいです。",
      "romaji": {
        "question": "Nihongo to eigo to dochira ga muzukashii desu ka?",
        "example": "Nihongo no hou ga muzukashii desu."
      },
      "no": 40
    },
    {
      "question": "肉と 魚と どちらが おいしいですか？",
      "hint": "Thịt và cá, cái nào ngon hơn?",
      "example": "にくのほうが おいしいです。",
      "romaji": {
        "question": "Niku to sakana to dochira ga oishii desu ka?",
        "example": "Niku no hou ga oishii desu."
      },
      "no": 41
    },
    {
      "question": "うちから ぎんこうと としょかんと どちらが ちかいですか？",
      "hint": "Từ nhà bạn, ngân hàng và thư viện, nơi nào gần hơn?",
      "example": "ぎんこうのほうが ちかいです。",
      "romaji": {
        "question": "Uchi kara ginkou to toshokan to dochira ga chikai desu ka?",
        "example": "Ginkou no hou ga chikai desu."
      },
      "no": 42
    },
    {
      "question": "うどんと ラーメンとどちらがおいしいですか？",
      "hint": "Udon và Ramen, món nào ngon hơn?",
      "example": "ラーメンのほうが おいしいです。",
      "romaji": {
        "question": "Udon to raamen to dochira ga oishii desu ka?",
        "example": "Raamen no hou ga oishii desu."
      },
      "no": 43
    },
    {
      "question": "くだものと やさいと どちらがいいですか？",
      "hint": "Trái cây và rau, cái nào tốt hơn (bạn thích hơn)?",
      "example": "くだもののほうが いいです。",
      "romaji": {
        "question": "Kudamono to yasai to dochira ga ii desu ka?",
        "example": "Kudamono no hou ga ii desu."
      },
      "no": 44
    },
    {
      "question": "お酒と ビールと どちらが おいしいですか？",
      "hint": "Rượu và bia, cái nào ngon hơn?",
      "example": "ビールのほうが おいしいです。／ どちらも おいしくないです。",
      "romaji": {
        "question": "Osake to biiru to dochira ga oishii desu ka?",
        "example": "Biiru no hou ga oishii desu. / Dochira mo oishikunai desu."
      },
      "no": 45
    },
    {
      "question": "くだもの／日本料理／ベトナムの食べ物／飲み物／スポーツ／えいが／おんがくで なにが いちばん すきですか？",
      "hint": "Trong các loại trái cây/món ăn Nhật/món ăn Việt Nam/đồ uống/thể thao/phim/âm nhạc, bạn thích nhất cái gì?",
      "example": "くだものでは リンゴが いちばん すきです。／ スポーツでは サッカーが いちばん すきです。",
      "romaji": {
        "question": "Kudamono / Nihon ryouri / Betonamu no tabemono / Nomimono / Supootsu / Eiga / Ongaku de nani ga ichiban suki desu ka?",
        "example": "Kudamono de wa ringo ga ichiban suki desu. / Supootsu de wa sakkaa ga ichiban suki desu."
      },
      "no": 46
    },
    {
      "question": "きせつで いつが いちばん いいですか？",
      "hint": "Trong các mùa, mùa nào là tốt nhất (bạn thích nhất)?",
      "example": "はるが いちばん いいです。",
      "romaji": {
        "question": "Kisetsu de itsu ga ichiban ii desu ka?",
        "example": "Haru ga ichiban ii desu."
      },
      "no": 47
    },
    {
      "question": "1ねんで 何月が いちばん あつい／さむいですか？",
      "hint": "Trong 1 năm, tháng mấy là nóng nhất/lạnh nhất?",
      "example": "7がつが いちばん あついです。／ 1がつが いちばん さむいです。",
      "romaji": {
        "question": "Ichi-nen de nangatsu ga ichiban atsui / samui desu ka?",
        "example": "Shichi-gatsu ga ichiban atsui desu. / Ichi-gatsu ga ichiban samui desu."
      },
      "no": 48
    },
    {
      "question": "ベトナムで どこが いちばん きれいですか？",
      "hint": "Ở Việt Nam, nơi nào đẹp nhất?",
      "example": "ダナンが いちばん きれいだと おもいます。",
      "romaji": {
        "question": "Betonamu de doko ga ichiban kirei desu ka?",
        "example": "Danang ga ichiban kirei da to omoimasu."
      },
      "no": 49
    },
    {
      "question": "かしゅで だれが いちばん すきですか？",
      "hint": "Trong các ca sĩ, bạn thích ai nhất?",
      "example": "BTSが いちばん すきです。",
      "romaji": {
        "question": "Kashu de dare ga ichiban suki desu ka?",
        "example": "BTS ga ichiban suki desu."
      },
      "no": 50
    },
    {
      "question": "国で どこが いちばん ひろいですか？",
      "hint": "Trong các quốc gia, nước nào rộng nhất?",
      "example": "ロシアが いちばん ひろいです。",
      "romaji": {
        "question": "Kuni de doko ga ichiban hiroi desu ka?",
        "example": "Roshia ga ichiban hiroi desu."
      },
      "no": 51
    },
    {
      "question": "おかねが あります。なにが いちばん ほしいですか？",
      "hint": "Bạn có tiền. Bạn muốn có cái gì nhất?",
      "example": "あたらしい コンピュータが いちばん ほしいです。",
      "romaji": {
        "question": "Okane ga arimasu. Nani ga ichiban hoshii desu ka?",
        "example": "Atarashii konpyuuta ga ichiban hoshii desu."
      },
      "no": 52
    },
    {
      "question": "もう アメリカ／かんこく／日本へ 行きましたか？",
      "hint": "Bạn đã đi Mỹ/Hàn Quốc/Nhật Bản chưa?",
      "example": "はい、もう いきました。／ いいえ、まだです。",
      "romaji": {
        "question": "Mou Amerika / Kankoku / Nihon e ikimashita ka?",
        "example": "Hai, mou ikimashita. / Iie, mada desu."
      },
      "no": 53
    },
    {
      "question": "もう すきやき／やきにくを 食べましたか。",
      "hint": "Bạn đã ăn Sukiyaki/Yakiniku chưa?",
      "example": "はい、もう たべました。／ いいえ、まだです。",
      "romaji": {
        "question": "Mou sukiyaki / yakiniku o tabemashita ka.",
        "example": "Hai, mou tabemashita. / Iie, mada desu."
      },
      "no": 54
    },
    {
      "question": "うちの ちかくに なにが ありますか？",
      "hint": "Gần nhà bạn có gì?",
      "example": "スーパーや コンビニが あります。",
      "romaji": {
        "question": "Uchi no chikaku ni nani ga arimasu ka?",
        "example": "Suupaa ya konbini ga arimasu."
      },
      "no": 55
    },
    {
      "question": "だいがくの ちかくに なにが ありますか？",
      "hint": "Gần trường đại học có gì?",
      "example": "カフェや ほんやが あります。",
      "romaji": {
        "question": "Daigaku no chikaku ni nani ga arimasu ka?",
        "example": "Kafe ya honya ga arimasu."
      },
      "no": 56
    },
    {
      "question": "あなたの かぞくは どこに いますか？",
      "hint": "Gia đình bạn ở đâu?",
      "example": "ベトナムに います。",
      "romaji": {
        "question": "Anata no kazoku wa doko ni imasu ka?",
        "example": "Betonamu ni imasu."
      },
      "no": 57
    },
    {
      "question": "あなたの けいたいでんわ／パソコンは どこに ありますか？",
      "hint": "Điện thoại di động/Máy tính của bạn ở đâu?",
      "example": "つくえの うえに あります。",
      "romaji": {
        "question": "Anata no keitai denwa / pasokon wa doko ni arimasu ka",
        "example": "Tsukue no ue ni arimasu."
      },
      "no": 58
    },
    {
      "question": "FPT 大学は どこに ありますか。",
      "hint": "Đại học FPT ở đâu?",
      "example": "ホアラックに あります。",
      "romaji": {
        "question": "FPT Daigaku wa doko ni arimasu ka.",
        "example": "Hoarakku ni arimasu."
      },
      "no": 59
    },
    {
      "question": "あなたのうちは どこに ありますか？",
      "hint": "Nhà bạn ở đâu?",
      "example": "ハノイに あります。",
      "romaji": {
        "question": "Anata no uchi wa doko ni arimasu ka?",
        "example": "Hanoi ni arimasu."
      },
      "no": 60
    },
    {
      "question": "日本人／ベトナム人／アメリカ人は何でごはんを食べますか？",
      "hint": "Người Nhật/Người Việt Nam/Người Mỹ ăn cơm bằng gì?",
      "example": "にほんじんは はしで ごはんを たべます。／ ベトナムじんは はしと スプーンで ごはんを たべます。",
      "romaji": {
        "question": "Nihonjin / Betonamujin / Amerikajin wa nande gohan o tabemasu ka?",
        "example": "Nihonjin wa hashi de gohan o tabemasu. / Betonamujin wa hashi to supuun de gohan o tabemasu."
      },
      "no": 61
    },
    {
      "question": "ベトナム人はナイフとフォークでごはんを食べますか？",
      "hint": "Người Việt Nam có ăn cơm bằng dao và nĩa không?",
      "example": "いいえ、あまり つかいません。",
      "romaji": {
        "question": "Betonamujin wa naifu to fooku de gohan o tabemasu ka?",
        "example": "Iie, amari tsukaimasen."
      },
      "no": 62
    },
    {
      "question": "なんでリンゴをきりますか？",
      "hint": "Bạn cắt táo bằng gì?",
      "example": "ナイフで きります。",
      "romaji": {
        "question": "Nande ringo o kirimasu ka?",
        "example": "Naifu de kirimasu."
      },
      "no": 63
    }
  ],
  "talking_with_pictures": [
    {
      "no": 1,
      "questions": [
        {
          "question": "ペキンはちゅうごくのどこですか",
          "hint": "Peking ở đâu của Trung Quốc?",
          "example": "ペキンは ちゅうごくの きたです。",
          "romaji": {
            "question": "Pekin wa chuugoku no doko desu ka",
            "example": "Pekin wa chuugoku no kita desu."
          },
          "no": 1
        }
      ],
      "image": {
        "src": "assets/speaking/image_1_1.png",
        "webp": "assets/speaking/image_1_1.webp",
        "w": 524,
        "h": 302,
        "alt": "Tranh gợi ý JPD123 — bộ câu hỏi 1: Peking ở đâu của Trung Quốc?",
        "avif": "Speaking/jpd123/image_1_1.avif"
      }
    },
    {
      "no": 2,
      "questions": [
        {
          "question": "バンコクは タイのどこですか",
          "hint": "Bangkok ở đâu của Thái Lan?",
          "example": "バンコクは タイの まんなかです。",
          "romaji": {
            "question": "Bankoku wa Tai no doko desu ka",
            "example": "Bankoku wa Tai no mannaka desu."
          },
          "no": 1
        }
      ],
      "image": {
        "src": "assets/speaking/image_1_2.png",
        "webp": "assets/speaking/image_1_2.webp",
        "w": 379,
        "h": 338,
        "alt": "Tranh gợi ý JPD123 — bộ câu hỏi 2: Bangkok ở đâu của Thái Lan?",
        "avif": "Speaking/jpd123/image_1_2.avif"
      }
    },
    {
      "no": 3,
      "questions": [
        {
          "question": "ハノイは ベトナムのどこですか",
          "hint": "Hà Nội ở đâu của Việt Nam?",
          "example": "ハノイは ベトナムの きたです。",
          "romaji": {
            "question": "Hanoi wa Betonamu no doko desu ka",
            "example": "Hanoi wa Betonamu no kita desu."
          },
          "no": 1
        }
      ],
      "image": {
        "src": "assets/speaking/image_1_3.png",
        "webp": "assets/speaking/image_1_3.webp",
        "w": 569,
        "h": 439,
        "alt": "Tranh gợi ý JPD123 — bộ câu hỏi 3: Hà Nội ở đâu của Việt Nam?",
        "avif": "Speaking/jpd123/image_1_3.avif"
      }
    },
    {
      "no": 4,
      "questions": [
        {
          "question": "ホーチミン市は ベトナムのどこですか",
          "hint": "Thành phố Hồ Chí Minh ở đâu của Việt Nam?",
          "example": "ホーチミンしは ベトナムの みなみです。",
          "romaji": {
            "question": "Hoochimin-shi wa Betonamu no doko desu ka",
            "example": "Hoochimin-shi wa Betonamu no minami desu."
          },
          "no": 1
        }
      ],
      "image": {
        "src": "assets/speaking/image_1_3.png",
        "webp": "assets/speaking/image_1_3.webp",
        "w": 569,
        "h": 439,
        "alt": "Tranh gợi ý JPD123 — bộ câu hỏi 4: Thành phố Hồ Chí Minh ở đâu của Việt Nam?",
        "avif": "Speaking/jpd123/image_1_3.avif"
      }
    },
    {
      "no": 5,
      "questions": [
        {
          "question": "ハノイから ホーチミン市までバスで どのくらいですか？",
          "hint": "Từ Hà Nội đến TP. Hồ Chí Minh bằng xe buýt mất bao lâu? (Gợi ý: 24 tiếng)",
          "example": "24じかん ぐらい かかります。",
          "romaji": {
            "question": "Hanoi kara Hoochimin-shi made basu de dono kurai desu ka?",
            "example": "Nijuuyo-jikan gurai kakarimasu."
          },
          "no": 1
        }
      ],
      "image": {
        "src": "assets/speaking/image_1_5.png",
        "webp": "assets/speaking/image_1_5.webp",
        "w": 362,
        "h": 166,
        "alt": "Tranh gợi ý JPD123 — bộ câu hỏi 5: Từ Hà Nội đến TP. Hồ Chí Minh bằng xe buýt mất bao lâu? (Gợi ý: 24 tiếng)",
        "avif": "Speaking/jpd123/image_1_5.avif"
      }
    },
    {
      "no": 6,
      "questions": [
        {
          "question": "アメリカから日本まで ひこうきで どのくらいですか？",
          "hint": "Từ Mỹ đến Nhật Bản bằng máy bay mất bao lâu? (Gợi ý: 12h)",
          "example": "12じかん ぐらい かかります。",
          "romaji": {
            "question": "Amerika kara Nihon made hikouki de dono kurai desu ka?",
            "example": "Juuni-jikan gurai kakarimasu."
          },
          "no": 1
        }
      ],
      "image": {
        "src": "assets/speaking/image_1_6.png",
        "webp": "assets/speaking/image_1_6.webp",
        "w": 346,
        "h": 162,
        "alt": "Tranh gợi ý JPD123 — bộ câu hỏi 6: Từ Mỹ đến Nhật Bản bằng máy bay mất bao lâu? (Gợi ý: 12h)",
        "avif": "Speaking/jpd123/image_1_6.avif"
      }
    },
    {
      "no": 7,
      "questions": [
        {
          "question": "ベトナムからかんこくまでひこうきで どのくらいですか？",
          "hint": "Từ Việt Nam đến Hàn Quốc bằng máy bay mất bao lâu? (Gợi ý: 6 tiếng rưỡi)",
          "example": "6じかんはん ぐらい かかります。",
          "romaji": {
            "question": "Betonamu kara Kankoku made hikouki de dono kurai desu ka?",
            "example": "Roku-jikan han gurai kakarimasu."
          },
          "no": 1
        }
      ],
      "image": {
        "src": "assets/speaking/image_1_7.png",
        "webp": "assets/speaking/image_1_7.webp",
        "w": 380,
        "h": 187,
        "alt": "Tranh gợi ý JPD123 — bộ câu hỏi 7: Từ Việt Nam đến Hàn Quốc bằng máy bay mất bao lâu? (Gợi ý: 6 tiếng rưỡi)",
        "avif": "Speaking/jpd123/image_1_7.avif"
      }
    },
    {
      "no": 8,
      "questions": [
        {
          "question": "ハノイから バンコクまで ひこうきでどのくらいですか？",
          "hint": "Từ Hà Nội đến Bangkok bằng máy bay mất bao lâu? (Gợi ý: 2 tiếng)",
          "example": "2じかん ぐらい かかります。",
          "romaji": {
            "question": "Hanoi kara Bankoku made hikouki de dono kurai desu ka?",
            "example": "Ni-jikan gurai kakarimasu."
          },
          "no": 1
        }
      ],
      "image": {
        "src": "assets/speaking/image_1_8.png",
        "webp": "assets/speaking/image_1_8.webp",
        "w": 511,
        "h": 231,
        "alt": "Tranh gợi ý JPD123 — bộ câu hỏi 8: Từ Hà Nội đến Bangkok bằng máy bay mất bao lâu? (Gợi ý: 2 tiếng)",
        "avif": "Speaking/jpd123/image_1_8.avif"
      }
    },
    {
      "no": 9,
      "questions": [
        {
          "question": "きのう、どこか／どこへいきましたか？",
          "hint": "Hôm qua bạn có đi đâu không?",
          "example": "いいえ、どこへも いきませんでした。",
          "romaji": {
            "question": "Kinou, dokoka/doko e ikimashita ka?",
            "example": "Iie, doko e mo ikimasen deshita."
          },
          "no": 1
        },
        {
          "question": "うちで何をしましたか？",
          "hint": "Bạn đã làm gì ở nhà?",
          "example": "おんがくを ききました。",
          "romaji": {
            "question": "Uchi de nani o shimashita ka?",
            "example": "Ongaku o kikimashita."
          },
          "no": 2
        },
        {
          "question": "どのくらい おんがくをききましたか？",
          "hint": "Bạn đã nghe nhạc bao lâu? (Gợi ý: Nghe nhạc 2 tiếng)",
          "example": "2じかん ききました。",
          "romaji": {
            "question": "Dono kurai ongaku o kikimashita ka?",
            "example": "Ni-jikan kikimashita."
          },
          "no": 3
        }
      ],
      "image": {
        "src": "assets/speaking/image_2.png",
        "webp": "assets/speaking/image_2.webp",
        "w": 513,
        "h": 246,
        "alt": "Tranh gợi ý JPD123 — bộ câu hỏi 9: Hôm qua bạn có đi đâu không?",
        "avif": "Speaking/jpd123/image_2.avif"
      }
    },
    {
      "no": 10,
      "questions": [
        {
          "question": "きのう、どこか／どこへいきましたか？",
          "hint": "Hôm qua bạn có đi đâu không?",
          "example": "いいえ、どこへも いきませんでした。",
          "romaji": {
            "question": "Kinou, dokoka/doko e ikimashita ka?",
            "example": "Iie, doko e mo ikimasen deshita."
          },
          "no": 1
        },
        {
          "question": "うちで何をしましたか？",
          "hint": "Bạn đã làm gì ở nhà?",
          "example": "テレビを みました。",
          "romaji": {
            "question": "Uchi de nani o shimashita ka?",
            "example": "Terebi o mimashita."
          },
          "no": 2
        },
        {
          "question": "どのくらい テレビをみましたか？",
          "hint": "Bạn đã xem TV bao lâu? (Gợi ý: Xem tivi 3 tiếng)",
          "example": "3じかん みました。",
          "romaji": {
            "question": "Dono kurai terebi o mimashita ka?",
            "example": "San-jikan mimashita."
          },
          "no": 3
        }
      ],
      "image": {
        "src": "assets/speaking/image_3.png",
        "webp": "assets/speaking/image_3.webp",
        "w": 514,
        "h": 234,
        "alt": "Tranh gợi ý JPD123 — bộ câu hỏi 10: Hôm qua bạn có đi đâu không?",
        "avif": "Speaking/jpd123/image_3.avif"
      }
    },
    {
      "no": 11,
      "questions": [
        {
          "question": "きのう、どこか／どこへいきましたか？",
          "hint": "Hôm qua bạn có đi đâu không?",
          "example": "いいえ、どこへも いきませんでした。",
          "romaji": {
            "question": "Kinou, dokoka/doko e ikimashita ka?",
            "example": "Iie, doko e mo ikimasen deshita."
          },
          "no": 1
        },
        {
          "question": "うちで何をしましたか？",
          "hint": "Bạn đã làm gì ở nhà?",
          "example": "はたらきました。",
          "romaji": {
            "question": "Uchi de nani o shimashita ka?",
            "example": "Hatarakimashita."
          },
          "no": 2
        },
        {
          "question": "どのくらいはたらきましたか？",
          "hint": "Bạn đã làm việc bao lâu? (Gợi ý: Làm việc 3 tiếng)",
          "example": "3じかん はたらきました。",
          "romaji": {
            "question": "Dono kurai hatarakimashita ka?",
            "example": "San-jikan hatarakimashita."
          },
          "no": 3
        }
      ],
      "image": {
        "src": "assets/speaking/image_3_1.png",
        "webp": "assets/speaking/image_3_1.webp",
        "w": 520,
        "h": 251,
        "alt": "Tranh gợi ý JPD123 — bộ câu hỏi 11: Hôm qua bạn có đi đâu không?",
        "avif": "Speaking/jpd123/image_3_1.avif"
      }
    },
    {
      "no": 12,
      "questions": [
        {
          "question": "きのう、どこか／どこへいきましたか？",
          "hint": "Hôm qua bạn có đi đâu không?",
          "example": "はい、デパートへ いきました。",
          "romaji": {
            "question": "Kinou, dokoka/doko e ikimashita ka?",
            "example": "Hai, depaato e ikimashita."
          },
          "no": 1
        },
        {
          "question": "何をしましたか？",
          "hint": "Bạn đã làm gì?",
          "example": "かいものを しました。",
          "romaji": {
            "question": "Nani o shimashita ka?",
            "example": "Kaimono o shimashita."
          },
          "no": 2
        },
        {
          "question": "だれとかいものしましたか？",
          "hint": "Bạn đã mua sắm với ai?",
          "example": "ともだちと かいものしました。",
          "romaji": {
            "question": "Dare to kaimono shimashita ka?",
            "example": "Tomodachi to kaimono shimashita."
          },
          "no": 3
        },
        {
          "question": "どのくらいかいものしましたか？",
          "hint": "Bạn đã mua sắm bao lâu? (Gợi ý: Mua sắm 3 tiếng)",
          "example": "3じかん かいものしました。",
          "romaji": {
            "question": "Dono kurai kaimono shimashita ka?",
            "example": "San-jikan kaimono shimashita."
          },
          "no": 4
        }
      ],
      "image": {
        "src": "assets/speaking/image_4.png",
        "webp": "assets/speaking/image_4.webp",
        "w": 514,
        "h": 209,
        "alt": "Tranh gợi ý JPD123 — bộ câu hỏi 12: Hôm qua bạn có đi đâu không?",
        "avif": "Speaking/jpd123/image_4.avif"
      }
    },
    {
      "no": 13,
      "questions": [
        {
          "question": "きのう、どこか／どこへ行きましたか？",
          "hint": "Hôm qua bạn có đi đâu không?",
          "example": "いいえ、どこへも いきませんでした。",
          "romaji": {
            "question": "Kinou, dokoka/doko e ikimashita ka?",
            "example": "Iie, doko e mo ikimasen deshita."
          },
          "no": 1
        },
        {
          "question": "何をしましたか？",
          "hint": "Bạn đã làm gì?",
          "example": "ゲームを しました。",
          "romaji": {
            "question": "Nani o shimashita ka?",
            "example": "Geemu o shimashita."
          },
          "no": 2
        },
        {
          "question": "だれとゲームをしましたか？",
          "hint": "Bạn đã chơi game với ai?",
          "example": "ともだちと ゲームを しました。",
          "romaji": {
            "question": "Dare to geemu o shimashita ka?",
            "example": "Tomodachi to geemu o shimashita."
          },
          "no": 3
        },
        {
          "question": "どのくらいしましたか？",
          "hint": "Bạn đã chơi bao lâu? (Gợi ý: Chơi game 2 tiếng)",
          "example": "2じかん しました。",
          "romaji": {
            "question": "Dono kurai shimashita ka?",
            "example": "Ni-jikan shimashita."
          },
          "no": 4
        }
      ],
      "image": {
        "src": "assets/speaking/image_6.png",
        "webp": "assets/speaking/image_6.webp",
        "w": 504,
        "h": 239,
        "alt": "Tranh gợi ý JPD123 — bộ câu hỏi 13: Hôm qua bạn có đi đâu không?",
        "avif": "Speaking/jpd123/image_6.avif"
      }
    },
    {
      "no": 14,
      "questions": [
        {
          "question": "きのう、どこか／どこへ行きましたか？",
          "hint": "Hôm qua bạn có đi đâu không? (Gợi ý: Không đi đâu)",
          "example": "いいえ、どこへも いきませんでした。",
          "romaji": {
            "question": "Kinou, dokoka/doko e ikimashita ka?",
            "example": "Iie, doko e mo ikimasen deshita."
          },
          "no": 1
        },
        {
          "question": "何をしましたか？",
          "hint": "Bạn đã làm gì? (Gợi ý: Lau dọn)",
          "example": "そうじを しました。",
          "romaji": {
            "question": "Nani o shimashita ka?",
            "example": "Souji o shimashita."
          },
          "no": 2
        },
        {
          "question": "だれとしましたか？",
          "hint": "Bạn đã làm với ai? (Gợi ý: với gia đình)",
          "example": "かぞくと しました。",
          "romaji": {
            "question": "Dare to shimashita ka?",
            "example": "Kazoku to shimashita."
          },
          "no": 3
        },
        {
          "question": "どのくらいしましたか？",
          "hint": "Bạn đã làm trong bao lâu? (Gợi ý: 2 tiếng)",
          "example": "2じかん しました。",
          "romaji": {
            "question": "Dono kurai shimashita ka?",
            "example": "Ni-jikan shimashita."
          },
          "no": 4
        }
      ],
      "image": {
        "src": "assets/speaking/image_8.png",
        "webp": "assets/speaking/image_8.webp",
        "w": 470,
        "h": 237,
        "alt": "Tranh gợi ý JPD123 — bộ câu hỏi 14: Hôm qua bạn có đi đâu không? (Gợi ý: Không đi đâu)",
        "avif": "Speaking/jpd123/image_8.avif"
      }
    },
    {
      "no": 15,
      "questions": [
        {
          "question": "きのう、何をしましたか？",
          "hint": "Hôm qua bạn đã làm gì?",
          "example": "しょくじを しました。",
          "romaji": {
            "question": "Kinou, nani o shimashita ka?",
            "example": "Shokuji o shimashita."
          },
          "no": 1
        },
        {
          "question": "だれとしょくじしましたか？",
          "hint": "Bạn đã dùng bữa với ai? (Gợi ý: với người yêu)",
          "example": "こいびとと しょくじしました。",
          "romaji": {
            "question": "Dare to shokuji shimashita ka?",
            "example": "Koibito to shokuji shimashita."
          },
          "no": 2
        },
        {
          "question": "どのくらいしょくじしましたか？",
          "hint": "Bạn đã dùng bữa bao lâu? (Gợi ý: 1 tiếng rưỡi)",
          "example": "1じかん はん しょくじしました。",
          "romaji": {
            "question": "Dono kurai shokuji shimashita ka?",
            "example": "Ichi-jikan han shokuji shimashita."
          },
          "no": 3
        },
        {
          "question": "どこでしょくじしましたか？",
          "hint": "Bạn đã dùng bữa ở đâu? (Gợi ý: tại nhà hàng)",
          "example": "レストランで しょくじしました。",
          "romaji": {
            "question": "Doko de shokuji shimashita ka?",
            "example": "Resutoran de shokuji shimashita."
          },
          "no": 4
        }
      ],
      "image": {
        "src": "assets/speaking/image_8_1.png",
        "webp": "assets/speaking/image_8_1.webp",
        "w": 408,
        "h": 226,
        "alt": "Tranh gợi ý JPD123 — bộ câu hỏi 15: Hôm qua bạn đã làm gì?",
        "avif": "Speaking/jpd123/image_8_1.avif"
      }
    },
    {
      "no": 16,
      "questions": [
        {
          "question": "きのう、何をしましたか？",
          "hint": "Hôm qua bạn đã làm gì?",
          "example": "せんたくを しました。",
          "romaji": {
            "question": "Kinou, nani o shimashita ka?",
            "example": "Sentaku o shimashita."
          },
          "no": 1
        },
        {
          "question": "だれとせんたくしましたか？",
          "hint": "Bạn đã giặt giũ với ai?",
          "example": "ひとりで しました。",
          "romaji": {
            "question": "Dare to sentaku shimashita ka?",
            "example": "Hitori de shimashita."
          },
          "no": 2
        },
        {
          "question": "どのくらいせんたくしましたか？",
          "hint": "Bạn đã giặt giũ bao lâu? (Gợi ý: 2 tiếng rưỡi)",
          "example": "2じかん はん しました。",
          "romaji": {
            "question": "Dono kurai sentaku shimashita ka?",
            "example": "Ni-jikan han shimashita."
          },
          "no": 3
        },
        {
          "question": "どこでせんたくしましたか？",
          "hint": "Bạn đã giặt giũ ở đâu?",
          "example": "うちで しました。",
          "romaji": {
            "question": "Doko de sentaku shimashita ka?",
            "example": "Uchi de shimashita."
          },
          "no": 4
        }
      ],
      "image": {
        "src": "assets/speaking/image_8_2.png",
        "webp": "assets/speaking/image_8_2.webp",
        "w": 452,
        "h": 248,
        "alt": "Tranh gợi ý JPD123 — bộ câu hỏi 16: Hôm qua bạn đã làm gì?",
        "avif": "Speaking/jpd123/image_8_2.avif"
      }
    },
    {
      "no": 17,
      "questions": [
        {
          "question": "きのう、どこか／どこへ行きましたか？",
          "hint": "Hôm qua bạn có đi đâu không?",
          "example": "はい、こうえんへ いきました。",
          "romaji": {
            "question": "Kinou, dokoka/doko e ikimashita ka?",
            "example": "Hai, kouen e ikimashita."
          },
          "no": 1
        },
        {
          "question": "何をしましたか？",
          "hint": "Bạn đã làm gì?",
          "example": "さんぽを しました。",
          "romaji": {
            "question": "Nani o shimashita ka?",
            "example": "Sanpo o shimashita."
          },
          "no": 2
        },
        {
          "question": "どうでしたか？",
          "hint": "Bạn thấy thế nào?",
          "example": "たのしかったです。",
          "romaji": {
            "question": "Dou deshita ka?",
            "example": "Tanoshikatta desu."
          },
          "no": 3
        }
      ],
      "image": {
        "src": "assets/speaking/image_9.png",
        "webp": "assets/speaking/image_9.webp",
        "w": 357,
        "h": 258,
        "alt": "Tranh gợi ý JPD123 — bộ câu hỏi 17: Hôm qua bạn có đi đâu không?",
        "avif": "Speaking/jpd123/image_9.avif"
      }
    },
    {
      "no": 18,
      "questions": [
        {
          "question": "きのう、どこか／どこへ行きましたか？",
          "hint": "Hôm qua bạn có đi đâu không?",
          "example": "いいえ、いきませんでした。",
          "romaji": {
            "question": "Kinou, dokoka/doko e ikimashita ka?",
            "example": "Iie, ikimasen deshita."
          },
          "no": 1
        },
        {
          "question": "何をしましたか？",
          "hint": "Bạn đã làm gì? (Gợi ý: xem bóng đá)",
          "example": "サッカーを みました。",
          "romaji": {
            "question": "Nani o shimashita ka?",
            "example": "Sakkaa o mimashita."
          },
          "no": 2
        },
        {
          "question": "どうでしたか？",
          "hint": "Bạn thấy thế nào? (Gợi ý: không hay/ không vui)",
          "example": "あまり おもしろくなかったです。",
          "romaji": {
            "question": "Dou deshita ka?",
            "example": "Amari omoshirokunakatta desu."
          },
          "no": 3
        }
      ],
      "image": {
        "src": "assets/speaking/image_9_1.png",
        "webp": "assets/speaking/image_9_1.webp",
        "w": 339,
        "h": 239,
        "alt": "Tranh gợi ý JPD123 — bộ câu hỏi 18: Hôm qua bạn có đi đâu không?",
        "avif": "Speaking/jpd123/image_9_1.avif"
      }
    },
    {
      "no": 19,
      "questions": [
        {
          "question": "きのう、どこか／どこへ行きましたか？",
          "hint": "Hôm qua bạn có đi đâu không?",
          "example": "はい、えいがかんへ いきました。",
          "romaji": {
            "question": "Kinou, dokoka/doko e ikimashita ka?",
            "example": "Hai, eigakan e ikimashita."
          },
          "no": 1
        },
        {
          "question": "何をしましたか？",
          "hint": "Bạn đã làm gì?",
          "example": "えいがを みました。",
          "romaji": {
            "question": "Nani o shimashita ka?",
            "example": "Eiga o mimashita."
          },
          "no": 2
        },
        {
          "question": "どうでしたか？",
          "hint": "Bạn thấy thế nào?",
          "example": "おもしろかったです。",
          "romaji": {
            "question": "Dou deshita ka?",
            "example": "Omoshirokatta desu."
          },
          "no": 3
        }
      ],
      "image": {
        "src": "assets/speaking/image_10.png",
        "webp": "assets/speaking/image_10.webp",
        "w": 335,
        "h": 222,
        "alt": "Tranh gợi ý JPD123 — bộ câu hỏi 19: Hôm qua bạn có đi đâu không?",
        "avif": "Speaking/jpd123/image_10.avif"
      }
    },
    {
      "no": 20,
      "questions": [
        {
          "question": "きのう、どこか／どこへ行きましたか？",
          "hint": "Hôm qua bạn có đi đâu không?",
          "example": "いいえ、いきませんでした。",
          "romaji": {
            "question": "Kinou, dokoka/doko e ikimashita ka?",
            "example": "Iie, ikimasen deshita."
          },
          "no": 1
        },
        {
          "question": "何をしましたか？",
          "hint": "Bạn đã làm gì?",
          "example": "ほんを よみました。",
          "romaji": {
            "question": "Nani o shimashita ka?",
            "example": "Hon o yomimashita."
          },
          "no": 2
        },
        {
          "question": "どうでしたか？",
          "hint": "Bạn thấy thế nào?",
          "example": "よかったです。",
          "romaji": {
            "question": "Dou deshita ka?",
            "example": "Yokatta desu."
          },
          "no": 3
        }
      ]
    },
    {
      "no": 21,
      "questions": [
        {
          "question": "きのう、どこか／どこへ行きましたか？",
          "hint": "Hôm qua bạn có đi đâu không?",
          "example": "はい、デパートへ いきました。",
          "romaji": {
            "question": "Kinou, dokoka/doko e ikimashita ka?",
            "example": "Hai, depaato e ikimashita."
          },
          "no": 1
        },
        {
          "question": "何をしましたか？",
          "hint": "Bạn đã làm gì? (Gợi ý: mua quần áo)",
          "example": "ふくを かいました。",
          "romaji": {
            "question": "Nani o shimashita ka?",
            "example": "Fuku o kaimashita."
          },
          "no": 2
        },
        {
          "question": "どうでしたか？",
          "hint": "Bạn thấy thế nào? (Gợi ý: rẻ/ đẹp)",
          "example": "やすくて きれいでした。",
          "romaji": {
            "question": "Dou deshita ka?",
            "example": "Yasukute kirei deshita."
          },
          "no": 3
        }
      ],
      "image": {
        "src": "assets/speaking/image_p52.png",
        "webp": "assets/speaking/image_p52.webp",
        "w": 555,
        "h": 229,
        "alt": "Tranh gợi ý JPD123 — bộ câu hỏi 21: Hôm qua bạn có đi đâu không?",
        "avif": "Speaking/jpd123/image_p52.avif"
      }
    },
    {
      "no": 22,
      "questions": [
        {
          "question": "きのう、どこか／どこへ行きましたか？",
          "hint": "Hôm qua bạn có đi đâu không? (Gợi ý: よこはま)",
          "example": "はい、よこはまへ いきました。",
          "romaji": {
            "question": "Kinou, dokoka/doko e ikimashita ka?",
            "example": "Hai, Yokohama e ikimashita."
          },
          "no": 1
        },
        {
          "question": "何をしましたか？",
          "hint": "Bạn đã làm gì? (Gợi ý: ngắm biển)",
          "example": "うみを みました。",
          "romaji": {
            "question": "Nani o shimashita ka?",
            "example": "Umi o mimashita."
          },
          "no": 2
        },
        {
          "question": "どうでしたか？",
          "hint": "Bạn thấy thế nào? (Gợi ý: đẹp/ yên tĩnh)",
          "example": "きれいで しずかでした。",
          "romaji": {
            "question": "Dou deshita ka?",
            "example": "Kirei de shizuka deshita."
          },
          "no": 3
        }
      ],
      "image": {
        "src": "assets/speaking/image_p53.png",
        "webp": "assets/speaking/image_p53.webp",
        "w": 581,
        "h": 248,
        "alt": "Tranh gợi ý JPD123 — bộ câu hỏi 22: Hôm qua bạn có đi đâu không? (Gợi ý: よこはま)",
        "avif": "Speaking/jpd123/image_p53.avif"
      }
    },
    {
      "no": 23,
      "questions": [
        {
          "question": "きのう、どこか／どこへ行きましたか？",
          "hint": "Hôm qua bạn có đi đâu không? (Gợi ý: はこね)",
          "example": "はい、はこねへ いきました。",
          "romaji": {
            "question": "Kinou, dokoka/doko e ikimashita ka?",
            "example": "Hai, Hakone e ikimashita."
          },
          "no": 1
        },
        {
          "question": "何をしましたか？",
          "hint": "Bạn đã làm gì? (Gợi ý: Tắm onsen)",
          "example": "おんせんに はいりました。",
          "romaji": {
            "question": "Nani o shimashita ka?",
            "example": "Onsen ni hairimashita."
          },
          "no": 2
        },
        {
          "question": "どうでしたか？",
          "hint": "Bạn thấy thế nào? (Gợi ý: Sảng khoái)",
          "example": "きもちが よかったです。",
          "romaji": {
            "question": "Dou deshita ka?",
            "example": "Kimochi ga yokatta desu."
          },
          "no": 3
        }
      ],
      "image": {
        "src": "assets/speaking/image_p54.png",
        "webp": "assets/speaking/image_p54.webp",
        "w": 572,
        "h": 232,
        "alt": "Tranh gợi ý JPD123 — bộ câu hỏi 23: Hôm qua bạn có đi đâu không? (Gợi ý: はこね)",
        "avif": "Speaking/jpd123/image_p54.avif"
      }
    },
    {
      "no": 24,
      "questions": [
        {
          "question": "きのう、どこか／どこへ行きましたか？",
          "hint": "Hôm qua bạn có đi đâu không? (Gợi ý: ふじさん)",
          "example": "はい、ふじさんへ いきました。",
          "romaji": {
            "question": "Kinou, dokoka/doko e ikimashita ka?",
            "example": "Hai, Fujisan e ikimashita."
          },
          "no": 1
        },
        {
          "question": "何をしましたか？",
          "hint": "Bạn đã làm gì? (Gợi ý: leo núi)",
          "example": "やまに のぼりました。",
          "romaji": {
            "question": "Nani o shimashita ka?",
            "example": "Yama ni noborimashita."
          },
          "no": 2
        },
        {
          "question": "どうでしたか？",
          "hint": "Bạn thấy thế nào? (Gợi ý: Vất vả)",
          "example": "たいへんでした。",
          "romaji": {
            "question": "Dou deshita ka?",
            "example": "Taihen deshita."
          },
          "no": 3
        }
      ],
      "image": {
        "src": "assets/speaking/image_p55.png",
        "webp": "assets/speaking/image_p55.webp",
        "w": 536,
        "h": 257,
        "alt": "Tranh gợi ý JPD123 — bộ câu hỏi 24: Hôm qua bạn có đi đâu không? (Gợi ý: ふじさん)",
        "avif": "Speaking/jpd123/image_p55.avif"
      }
    },
    {
      "no": 25,
      "questions": [
        {
          "question": "きのう、サッカーをみましたか？",
          "hint": "Hôm qua bạn có xem bóng đá không?",
          "example": "いいえ、みませんでした。",
          "romaji": {
            "question": "Kinou, sakkaa o mimashita ka?",
            "example": "Iie, mimasen deshita."
          },
          "no": 1
        },
        {
          "question": "どうして みませんでしたか？",
          "hint": "Tại sao bạn không xem? (Gợi ý: Làm việc)",
          "example": "しごとを しましたから。",
          "romaji": {
            "question": "Doushite mimasen deshita ka?",
            "example": "Shigoto o shimashita kara."
          },
          "no": 2
        }
      ],
      "image": {
        "src": "assets/speaking/image_p56.png",
        "webp": "assets/speaking/image_p56.webp",
        "w": 569,
        "h": 262,
        "alt": "Tranh gợi ý JPD123 — bộ câu hỏi 25: Hôm qua bạn có xem bóng đá không?",
        "avif": "Speaking/jpd123/image_p56.avif"
      }
    },
    {
      "no": 26,
      "questions": [
        {
          "question": "きのう、テニスをしましたか",
          "hint": "Hôm qua bạn có chơi tennis không?",
          "example": "いいえ、しませんでした。",
          "romaji": {
            "question": "Kinou, tenisu o shimashita ka",
            "example": "Iie, shimasen deshita."
          },
          "no": 1
        },
        {
          "question": "どうして しませんでしたか？",
          "hint": "Tại sao bạn không chơi? (Gợi ý: Cảm cúm)",
          "example": "かぜでしたから。",
          "romaji": {
            "question": "Doushite shimasen deshita ka?",
            "example": "Kaze deshita kara."
          },
          "no": 2
        }
      ],
      "image": {
        "src": "assets/speaking/image_p57.png",
        "webp": "assets/speaking/image_p57.webp",
        "w": 565,
        "h": 275,
        "alt": "Tranh gợi ý JPD123 — bộ câu hỏi 26: Hôm qua bạn có chơi tennis không?",
        "avif": "Speaking/jpd123/image_p57.avif"
      }
    },
    {
      "no": 27,
      "questions": [
        {
          "question": "きのう、デパートへ いきましたか",
          "hint": "Hôm qua bạn có đi trung tâm thương mại không?",
          "example": "いいえ、いきませんでした。",
          "romaji": {
            "question": "Kinou, depaato e ikimashita ka",
            "example": "Iie, ikimasen deshita."
          },
          "no": 1
        },
        {
          "question": "どうして いきませんでしたか？",
          "hint": "Tại sao bạn không đi?",
          "example": "じかんが ありませんでしたから。",
          "romaji": {
            "question": "Doushite ikimasen deshita ka?",
            "example": "Jikan ga arimasen deshita kara."
          },
          "no": 2
        }
      ],
      "image": {
        "src": "assets/speaking/image_p58.png",
        "webp": "assets/speaking/image_p58.webp",
        "w": 539,
        "h": 272,
        "alt": "Tranh gợi ý JPD123 — bộ câu hỏi 27: Hôm qua bạn có đi trung tâm thương mại không?",
        "avif": "Speaking/jpd123/image_p58.avif"
      }
    },
    {
      "no": 28,
      "questions": [
        {
          "question": "きのう、デパートで なにを かいましたか",
          "hint": "Hôm qua bạn đã mua gì ở trung tâm thương mại?",
          "example": "なにも かいませんでした。",
          "romaji": {
            "question": "Kinou, depaato de nani o kaimashita ka",
            "example": "Nani mo kaimasen deshita."
          },
          "no": 1
        },
        {
          "question": "どうして かいませんでしたか？",
          "hint": "Tại sao bạn không mua?",
          "example": "たかかったですから。",
          "romaji": {
            "question": "Doushite kaimasen deshita ka?",
            "example": "Takakatta desu kara."
          },
          "no": 2
        }
      ],
      "image": {
        "src": "assets/speaking/image_p59.png",
        "webp": "assets/speaking/image_p59.webp",
        "w": 563,
        "h": 233,
        "alt": "Tranh gợi ý JPD123 — bộ câu hỏi 28: Hôm qua bạn đã mua gì ở trung tâm thương mại?",
        "avif": "Speaking/jpd123/image_p59.avif"
      }
    },
    {
      "no": 29,
      "questions": [
        {
          "question": "どこへ しゃしんを とりに いきますか？",
          "hint": "Bạn đi đâu để chụp ảnh?",
          "example": "やまへ しゃしんを とりに いきます。",
          "romaji": {
            "question": "Doko e shashin o tori ni ikimasu ka?",
            "example": "Yama e shashin o tori ni ikimasu."
          },
          "no": 1
        },
        {
          "question": "やまへ なにを しに いきますか？",
          "hint": "Bạn đến núi để làm gì?",
          "example": "しゃしんを とりに いきます。",
          "romaji": {
            "question": "Yama e nani o shi ni ikimasu ka?",
            "example": "Shashin o tori ni ikimasu."
          },
          "no": 2
        }
      ],
      "image": {
        "src": "assets/speaking/image_p60.png",
        "webp": "assets/speaking/image_p60.webp",
        "w": 500,
        "h": 212,
        "alt": "Tranh gợi ý JPD123 — bộ câu hỏi 29: Bạn đi đâu để chụp ảnh?",
        "avif": "Speaking/jpd123/image_p60.avif"
      }
    },
    {
      "no": 30,
      "questions": [
        {
          "question": "どこへ えを みに いきますか？",
          "hint": "Bạn đi đâu để xem tranh?",
          "example": "びじゅつかんへ えを みに いきます。",
          "romaji": {
            "question": "Doko e e o mi ni ikimasu ka?",
            "example": "Bijutsukan e e o mi ni ikimasu."
          },
          "no": 1
        },
        {
          "question": "うえのへ なにを しに いきますか？",
          "hint": "Bạn đến Ueno để làm gì?",
          "example": "えを みに いきます。",
          "romaji": {
            "question": "Ueno e nani o shi ni ikimasu ka?",
            "example": "E o mi ni ikimasu."
          },
          "no": 2
        }
      ],
      "image": {
        "src": "assets/speaking/image_p61.png",
        "webp": "assets/speaking/image_p61.webp",
        "w": 548,
        "h": 251,
        "alt": "Tranh gợi ý JPD123 — bộ câu hỏi 30: Bạn đi đâu để xem tranh?",
        "avif": "Speaking/jpd123/image_p61.avif"
      }
    },
    {
      "no": 31,
      "questions": [
        {
          "question": "どこへ しょくじに いきますか？",
          "hint": "Bạn đi đâu để dùng bữa?",
          "example": "レストランへ しょくじに いきます。",
          "romaji": {
            "question": "Doko e shokuji ni ikimasu ka?",
            "example": "Resutoran e shokuji ni ikimasu."
          },
          "no": 1
        }
      ],
      "image": {
        "src": "assets/speaking/image_p62.png",
        "webp": "assets/speaking/image_p62.webp",
        "w": 560,
        "h": 267,
        "alt": "Tranh gợi ý JPD123 — bộ câu hỏi 31: Bạn đi đâu để dùng bữa?",
        "avif": "Speaking/jpd123/image_p62.avif"
      }
    },
    {
      "no": 32,
      "questions": [
        {
          "question": "どこへ けしきを みに いきますか？",
          "hint": "Bạn đi đâu để ngắm cảnh?",
          "example": "はこねへ けしきを みに いきます。",
          "romaji": {
            "question": "Doko e keshiki o mi ni ikimasu ka?",
            "example": "Hakone e keshiki o mi ni ikimasu."
          },
          "no": 1
        },
        {
          "question": "はこねへ なにを しに いきますか",
          "hint": "Bạn đến Hakone để làm gì?",
          "example": "けしきを みに いきます。",
          "romaji": {
            "question": "Hakone e nani o shi ni ikimasu ka",
            "example": "Keshiki o mi ni ikimasu."
          },
          "no": 2
        }
      ],
      "image": {
        "src": "assets/speaking/image_p63.png",
        "webp": "assets/speaking/image_p63.webp",
        "w": 524,
        "h": 253,
        "alt": "Tranh gợi ý JPD123 — bộ câu hỏi 32: Bạn đi đâu để ngắm cảnh?",
        "avif": "Speaking/jpd123/image_p63.avif"
      }
    },
    {
      "no": 33,
      "questions": [
        {
          "question": "どこへ ほんを かりに いきますか？",
          "hint": "Bạn đi đâu để mượn sách? (Gợi ý: Thư viện)",
          "example": "としょかんへ ほんを かりに いきます。",
          "romaji": {
            "question": "Doko e hon o kari ni ikimasu ka?",
            "example": "Toshokan e hon o kari ni ikimasu."
          },
          "no": 1
        },
        {
          "question": "としょかんへ なにを しに いきますか？",
          "hint": "Bạn đến thư viện để làm gì?",
          "example": "ほんを かりに いきます。",
          "romaji": {
            "question": "Toshokan e nani o shi ni ikimasu ka?",
            "example": "Hon o kari ni ikimasu."
          },
          "no": 2
        }
      ],
      "image": {
        "src": "assets/speaking/image_p64.png",
        "webp": "assets/speaking/image_p64.webp",
        "w": 566,
        "h": 288,
        "alt": "Tranh gợi ý JPD123 — bộ câu hỏi 33: Bạn đi đâu để mượn sách? (Gợi ý: Thư viện)",
        "avif": "Speaking/jpd123/image_p64.avif"
      }
    },
    {
      "no": 34,
      "questions": [
        {
          "question": "コンサートのチケットが なんまい ありますか。",
          "hint": "Có bao nhiêu vé concert?",
          "example": "3まい あります。",
          "romaji": {
            "question": "Konsaato no chiketto ga nanmai arimasu ka.",
            "example": "San-mai arimasu."
          },
          "no": 1
        }
      ],
      "image": {
        "src": "assets/speaking/image_p65.png",
        "webp": "assets/speaking/image_p65.webp",
        "w": 385,
        "h": 205,
        "alt": "Tranh gợi ý JPD123 — bộ câu hỏi 34: Có bao nhiêu vé concert?",
        "avif": "Speaking/jpd123/image_p65.avif"
      }
    },
    {
      "no": 35,
      "questions": [
        {
          "question": "えいがのチケットが なんまい ありますか。",
          "hint": "Có bao nhiêu vé xem phim?",
          "example": "2まい あります。",
          "romaji": {
            "question": "Eiga no chiketto ga nanmai arimasu ka.",
            "example": "Ni-mai arimasu."
          },
          "no": 1
        }
      ],
      "image": {
        "src": "assets/speaking/image_p66.png",
        "webp": "assets/speaking/image_p66.webp",
        "w": 438,
        "h": 228,
        "alt": "Tranh gợi ý JPD123 — bộ câu hỏi 35: Có bao nhiêu vé xem phim?",
        "avif": "Speaking/jpd123/image_p66.avif"
      }
    },
    {
      "no": 36,
      "questions": [
        {
          "question": "やきゅうのチケットが なんまい ありますか。",
          "hint": "Có bao nhiêu vé bóng chày?",
          "example": "4まい あります。",
          "romaji": {
            "question": "Yakyuu no chiketto ga nanmai arimasu ka.",
            "example": "Yon-mai arimasu."
          },
          "no": 1
        }
      ],
      "image": {
        "src": "assets/speaking/image_p67.png",
        "webp": "assets/speaking/image_p67.webp",
        "w": 385,
        "h": 280,
        "alt": "Tranh gợi ý JPD123 — bộ câu hỏi 36: Có bao nhiêu vé bóng chày?",
        "avif": "Speaking/jpd123/image_p67.avif"
      }
    },
    {
      "no": 37,
      "questions": [
        {
          "question": "ひこうきのチケットが なんまい ありますか。",
          "hint": "Có bao nhiêu vé máy bay?",
          "example": "1まい あります。",
          "romaji": {
            "question": "Hikouki no chiketto ga nanmai arimasu ka.",
            "example": "Ichi-mai arimasu."
          },
          "no": 1
        }
      ],
      "image": {
        "src": "assets/speaking/image_p68.png",
        "webp": "assets/speaking/image_p68.webp",
        "w": 363,
        "h": 230,
        "alt": "Tranh gợi ý JPD123 — bộ câu hỏi 37: Có bao nhiêu vé máy bay?",
        "avif": "Speaking/jpd123/image_p68.avif"
      }
    },
    {
      "no": 38,
      "questions": [
        {
          "question": "ちずが なんまい ありますか。",
          "hint": "Có bao nhiêu bản đồ?",
          "example": "5まい あります。",
          "romaji": {
            "question": "Chizu ga nanmai arimasu ka.",
            "example": "Go-mai arimasu."
          },
          "no": 1
        }
      ],
      "image": {
        "src": "assets/speaking/image_p69.png",
        "webp": "assets/speaking/image_p69.webp",
        "w": 478,
        "h": 310,
        "alt": "Tranh gợi ý JPD123 — bộ câu hỏi 38: Có bao nhiêu bản đồ?",
        "avif": "Speaking/jpd123/image_p69.avif"
      }
    },
    {
      "no": 39,
      "questions": [
        {
          "question": "みずぎが なんまい ありますか。",
          "hint": "Có bao nhiêu bộ đồ bơi?",
          "example": "2まい あります。",
          "romaji": {
            "question": "Mizugi ga nanmai arimasu ka.",
            "example": "Ni-mai arimasu."
          },
          "no": 1
        }
      ],
      "image": {
        "src": "assets/speaking/image_p70.png",
        "webp": "assets/speaking/image_p70.webp",
        "w": 384,
        "h": 325,
        "alt": "Tranh gợi ý JPD123 — bộ câu hỏi 39: Có bao nhiêu bộ đồ bơi?",
        "avif": "Speaking/jpd123/image_p70.avif"
      }
    },
    {
      "no": 40,
      "questions": [
        {
          "question": "あさくさに なにが ありますか？",
          "hint": "Ở Asakusa có gì?",
          "example": "おてらが あります。",
          "romaji": {
            "question": "Asakusa ni nani ga arimasu ka?",
            "example": "Otera ga arimasu."
          },
          "no": 1
        }
      ],
      "image": {
        "src": "assets/speaking/image_p71.png",
        "webp": "assets/speaking/image_p71.webp",
        "w": 227,
        "h": 349,
        "alt": "Tranh gợi ý JPD123 — bộ câu hỏi 40: Ở Asakusa có gì?",
        "avif": "Speaking/jpd123/image_p71.avif"
      }
    },
    {
      "no": 41,
      "questions": [
        {
          "question": "はこねに なにが ありますか？",
          "hint": "Ở Hakone có gì?",
          "example": "おんせんが あります。",
          "romaji": {
            "question": "Hakone ni nani ga arimasu ka?",
            "example": "Onsen ga arimasu."
          },
          "no": 1
        }
      ],
      "image": {
        "src": "assets/speaking/image_p72.png",
        "webp": "assets/speaking/image_p72.webp",
        "w": 481,
        "h": 298,
        "alt": "Tranh gợi ý JPD123 — bộ câu hỏi 41: Ở Hakone có gì?",
        "avif": "Speaking/jpd123/image_p72.avif"
      }
    },
    {
      "no": 42,
      "questions": [
        {
          "question": "ニコニコショッピングビルに なにが ありますか？",
          "hint": "Ở tòa nhà mua sắm NicoNico có gì?",
          "example": "みせが たくさん あります。",
          "romaji": {
            "question": "Nikoniko shoppingu biru ni nani ga arimasu ka?",
            "example": "Mise ga takusan arimasu."
          },
          "no": 1
        }
      ],
      "image": {
        "src": "assets/speaking/image_p73.png",
        "webp": "assets/speaking/image_p73.webp",
        "w": 417,
        "h": 291,
        "alt": "Tranh gợi ý JPD123 — bộ câu hỏi 42: Ở tòa nhà mua sắm Nicomico có gì?",
        "avif": "Speaking/jpd123/image_p73.avif"
      }
    },
    {
      "no": 43,
      "questions": [
        {
          "question": "よこはまに なにが ありますか？",
          "hint": "Ở Yokohama có gì?",
          "example": "うみが あります。",
          "romaji": {
            "question": "Yokohama ni nani ga arimasu ka?",
            "example": "Umi ga arimasu."
          },
          "no": 1
        }
      ],
      "image": {
        "src": "assets/speaking/image_p74.png",
        "webp": "assets/speaking/image_p74.webp",
        "w": 297,
        "h": 435,
        "alt": "Tranh gợi ý JPD123 — bộ câu hỏi 43: Ở Yokohama có gì?",
        "avif": "Speaking/jpd123/image_p74.avif"
      }
    },
    {
      "no": 44,
      "questions": [
        {
          "question": "ねこは どこに いますか？",
          "hint": "Con mèo ở đâu?",
          "example": "つくえの したに います。",
          "romaji": {
            "question": "Neko wa doko ni imasu ka?",
            "example": "Tsukue no shita ni imasu."
          },
          "no": 1
        },
        {
          "question": "くるまは どこに ありますか？",
          "hint": "Xe ô tô ở đâu?",
          "example": "そとに あります。",
          "romaji": {
            "question": "Kuruma wa doko ni arimasu ka?",
            "example": "Soto ni arimasu."
          },
          "no": 2
        }
      ],
      "image": {
        "src": "assets/speaking/image_p80.png",
        "webp": "assets/speaking/image_p80.webp",
        "w": 588,
        "h": 342,
        "alt": "Tranh gợi ý JPD123 — bộ câu hỏi 44: Con mèo ở đâu?",
        "avif": "Speaking/jpd123/image_p80.avif"
      }
    },
    {
      "no": 45,
      "questions": [
        {
          "question": "たなかさんは どこに いますか？",
          "hint": "Anh/Chị Tanaka ở đâu?",
          "example": "かいぎしつに います。",
          "romaji": {
            "question": "Tanaka-san wa doko ni imasu ka?",
            "example": "Kaigishitsu ni imasu."
          },
          "no": 1
        },
        {
          "question": "じどはんばいきは どこに ありますか？",
          "hint": "Máy bán hàng tự động ở đâu?",
          "example": "ビルの そとに あります。",
          "romaji": {
            "question": "Jidouhanbaiki wa doko ni arimasu ka?",
            "example": "Biru no soto ni arimasu."
          },
          "no": 2
        }
      ],
      "image": {
        "src": "assets/speaking/image_p81.png",
        "webp": "assets/speaking/image_p81.webp",
        "w": 518,
        "h": 380,
        "alt": "Tranh gợi ý JPD123 — bộ câu hỏi 45: Anh/Chị Tanaka ở đâu?",
        "avif": "Speaking/jpd123/image_p81.avif"
      }
    },
    {
      "no": 46,
      "questions": [
        {
          "question": "いぬ／ねこは どこに いますか？",
          "hint": "Con chó/mèo ở đâu?",
          "example": "いぬは いすの うえに います。",
          "romaji": {
            "question": "Inu/neko wa doko ni imasu ka?",
            "example": "Inu wa isu no ue ni imasu."
          },
          "no": 1
        },
        {
          "question": "かばんは どこに ありますか？",
          "hint": "Cái cặp ở đâu?",
          "example": "つくえの よこに あります。",
          "romaji": {
            "question": "Kaban wa doko ni arimasu ka?",
            "example": "Tsukue no yoko ni arimasu."
          },
          "no": 2
        }
      ],
      "image": {
        "src": "assets/speaking/image_p82.png",
        "webp": "assets/speaking/image_p82.webp",
        "w": 446,
        "h": 399,
        "alt": "Tranh gợi ý JPD123 — bộ câu hỏi 46: Con chó/mèo ở đâu?",
        "avif": "Speaking/jpd123/image_p82.avif"
      }
    },
    {
      "no": 47,
      "questions": [
        {
          "question": "なにをしていますか？",
          "hint": "Đang làm gì?",
          "example": "べんきょうしています。",
          "romaji": {
            "question": "Nani o shite imasu ka?",
            "example": "Benkyou shite imasu."
          },
          "no": 1
        },
        {
          "question": "だれと べんきょうしていますか",
          "hint": "Đang học với ai? (Gợi ý: Học với bạn)",
          "example": "ともだちと べんきょうしています。",
          "romaji": {
            "question": "Dare to benkyou shite imasu ka",
            "example": "Tomodachi to benkyou shite imasu."
          },
          "no": 2
        },
        {
          "question": "どこで べんきょうしていますか",
          "hint": "Đang học ở đâu? (Gợi ý: tại thư viện)",
          "example": "としょかんで べんきょうしています。",
          "romaji": {
            "question": "Doko de benkyou shite imasu ka",
            "example": "Toshokan de benkyou shite imasu."
          },
          "no": 3
        },
        {
          "question": "だれが べんきょうしていますか",
          "hint": "Ai đang học? (Gợi ý: パクさん)",
          "example": "パクさんが べんきょうしています。",
          "romaji": {
            "question": "Dare ga benkyou shite imasu ka",
            "example": "Paku-san ga benkyou shite imasu."
          },
          "no": 4
        }
      ],
      "image": {
        "src": "assets/speaking/image_p83.png",
        "webp": "assets/speaking/image_p83.webp",
        "w": 592,
        "h": 350,
        "alt": "Tranh gợi ý JPD123 — bộ câu hỏi 47: Đang làm gì?",
        "avif": "Speaking/jpd123/image_p83.avif"
      }
    },
    {
      "no": 48,
      "questions": [
        {
          "question": "なにをしていますか？",
          "hint": "Đang làm gì? (Gợi ý: Chơi game)",
          "example": "ゲームをしています。",
          "romaji": {
            "question": "Nani o shite imasu ka?",
            "example": "Geemu o shite imasu."
          },
          "no": 1
        },
        {
          "question": "だれと ゲームをしていますか",
          "hint": "Đang chơi game với ai? (Gợi ý: Chơi game với bạn)",
          "example": "ともだちと ゲームをしています。",
          "romaji": {
            "question": "Dare to geemu o shite imasu ka",
            "example": "Tomodachi to geemu o shite imasu."
          },
          "no": 2
        },
        {
          "question": "どこで ゲームをしていますか",
          "hint": "Đang chơi game ở đâu? (Gợi ý: tại nhà)",
          "example": "うちで ゲームをしています。",
          "romaji": {
            "question": "Doko de geemu o shite imasu ka",
            "example": "Uchi de geemu o shite imasu."
          },
          "no": 3
        },
        {
          "question": "だれが ゲームをしていますか",
          "hint": "Ai đang chơi game? (Gợi ý: 山田さん)",
          "example": "やまださんが ゲームをしています。",
          "romaji": {
            "question": "Dare ga geemu o shite imasu ka",
            "example": "Yamada-san ga geemu o shite imasu."
          },
          "no": 4
        }
      ],
      "image": {
        "src": "assets/speaking/image_p84.png",
        "webp": "assets/speaking/image_p84.webp",
        "w": 532,
        "h": 281,
        "alt": "Tranh gợi ý JPD123 — bộ câu hỏi 48: Đang làm gì? (Gợi ý: Chơi game)",
        "avif": "Speaking/jpd123/image_p84.avif"
      }
    },
    {
      "no": 49,
      "questions": [
        {
          "question": "なにをしていますか？",
          "hint": "Đang làm gì? (Gợi ý: Ăn cá)",
          "example": "さかなを たべています。",
          "romaji": {
            "question": "Nani o shite imasu ka?",
            "example": "Sakana o tabete imasu."
          },
          "no": 1
        },
        {
          "question": "だれと たべていますか",
          "hint": "Đang ăn với ai? (Gợi ý: ăn 1 mình)",
          "example": "ひとりで たべています。",
          "romaji": {
            "question": "Dare to tabete imasu ka",
            "example": "Hitori de tabete imasu."
          },
          "no": 2
        },
        {
          "question": "どこで たべていますか",
          "hint": "Đang ăn ở đâu? (Gợi ý: tại nhà)",
          "example": "うちで たべています。",
          "romaji": {
            "question": "Doko de tabete imasu ka",
            "example": "Uchi de tabete imasu."
          },
          "no": 3
        },
        {
          "question": "だれが たべていますか",
          "hint": "Ai đang ăn? (Gợi ý: 田中さん)",
          "example": "たなかさんが たべています。",
          "romaji": {
            "question": "Dare ga tabete imasu ka",
            "example": "Tanaka-san ga tabete imasu."
          },
          "no": 4
        }
      ],
      "image": {
        "src": "assets/speaking/image_p85.png",
        "webp": "assets/speaking/image_p85.webp",
        "w": 539,
        "h": 302,
        "alt": "Tranh gợi ý JPD123 — bộ câu hỏi 49: Đang làm gì? (Gợi ý: Ăn cá)",
        "avif": "Speaking/jpd123/image_p85.avif"
      }
    },
    {
      "no": 50,
      "questions": [
        {
          "question": "なにをしていますか？",
          "hint": "Đang làm gì? (Gợi ý: Xem tivi)",
          "example": "テレビを みています。",
          "romaji": {
            "question": "Nani o shite imasu ka?",
            "example": "Terebi o mite imasu."
          },
          "no": 1
        },
        {
          "question": "だれと みていますか",
          "hint": "Đang xem với ai? (Gợi ý: Xem tivi với gia đình)",
          "example": "かぞくと みています。",
          "romaji": {
            "question": "Dare to mite imasu ka",
            "example": "Kazoku to mite imasu."
          },
          "no": 2
        },
        {
          "question": "どこで みていますか",
          "hint": "Đang xem ở đâu? (Gợi ý: tại nhà)",
          "example": "うちで みています。",
          "romaji": {
            "question": "Doko de mite imasu ka",
            "example": "Uchi de mite imasu."
          },
          "no": 3
        },
        {
          "question": "だれが みていますか",
          "hint": "Ai đang xem? (Gợi ý: マリヤムさん)",
          "example": "マリヤムさんが みています。",
          "romaji": {
            "question": "Dare ga mite imasu ka",
            "example": "Mariyamu-san ga mite imasu."
          },
          "no": 4
        }
      ],
      "image": {
        "src": "assets/speaking/image_p86.png",
        "webp": "assets/speaking/image_p86.webp",
        "w": 593,
        "h": 300,
        "alt": "Tranh gợi ý JPD123 — bộ câu hỏi 50: Đang làm gì? (Gợi ý: Xem tivi)",
        "avif": "Speaking/jpd123/image_p86.avif"
      }
    },
    {
      "no": 51,
      "questions": [
        {
          "question": "なにをしていますか？",
          "hint": "Đang làm gì? (Gợi ý: Uống cà phê)",
          "example": "コーヒーを のんでいます。",
          "romaji": {
            "question": "Nani o shite imasu ka?",
            "example": "Koohii o nonde imasu."
          },
          "no": 1
        },
        {
          "question": "だれと のんでいますか",
          "hint": "Đang uống với ai? (Gợi ý: Uống cà phê với người yêu)",
          "example": "こいびとと のんでいます。",
          "romaji": {
            "question": "Dare to nonde imasu ka",
            "example": "Koibito to nonde imasu."
          },
          "no": 2
        },
        {
          "question": "どこで のんでいますか",
          "hint": "Đang uống ở đâu? (Gợi ý: tại quán cà phê)",
          "example": "カフェで のんでいます。",
          "romaji": {
            "question": "Doko de nonde imasu ka",
            "example": "Kafe de nonde imasu."
          },
          "no": 3
        },
        {
          "question": "だれが のんでいますか",
          "hint": "Ai đang uống? (Gợi ý: ダニエルさん)",
          "example": "ダニエルさんが のんでいます。",
          "romaji": {
            "question": "Dare ga nonde imasu ka",
            "example": "Danieru-san ga nonde imasu."
          },
          "no": 4
        }
      ],
      "image": {
        "src": "assets/speaking/image_p87.png",
        "webp": "assets/speaking/image_p87.webp",
        "w": 531,
        "h": 315,
        "alt": "Tranh gợi ý JPD123 — bộ câu hỏi 51: Đang làm gì? (Gợi ý: Uống cà phê)",
        "avif": "Speaking/jpd123/image_p87.avif"
      }
    },
    {
      "no": 52,
      "questions": [
        {
          "question": "なにをしていますか？",
          "hint": "Đang làm gì? (Gợi ý: Nghe nhạc, 1 mình ở nhà, Mary)",
          "example": "メアリーさんは うちで ひとりで おんがくを きいています。",
          "romaji": {
            "question": "Nani o shite imasu ka?",
            "example": "Mearii-san wa uchi de hitori de ongaku o kiite imasu."
          },
          "no": 1
        }
      ],
      "image": {
        "src": "assets/speaking/image_p89.png",
        "webp": "assets/speaking/image_p89.webp",
        "w": 550,
        "h": 316,
        "alt": "Tranh gợi ý JPD123 — bộ câu hỏi 52: Đang làm gì? (Gợi ý: Nghe nhạc, 1 mình ở nhà, Mary)",
        "avif": "Speaking/jpd123/image_p89.avif"
      }
    },
    {
      "no": 53,
      "questions": [
        {
          "question": "なにをしていますか？",
          "hint": "Đang làm gì? (Gợi ý: Đọc sách, với bạn tại thư viện, Natapon)",
          "example": "ナタポンさんは としょかんで ともだちと ほんを よんでいます。",
          "romaji": {
            "question": "Nani o shite imasu ka?",
            "example": "Natapon-san wa toshokan de tomodachi to hon o yonde imasu."
          },
          "no": 1
        }
      ],
      "image": {
        "src": "assets/speaking/image_p90.png",
        "webp": "assets/speaking/image_p90.webp",
        "w": 543,
        "h": 300,
        "alt": "Tranh gợi ý JPD123 — bộ câu hỏi 53: Đang làm gì? (Gợi ý: Đọc sách, với bạn tại thư viện, Natapon)",
        "avif": "Speaking/jpd123/image_p90.avif"
      }
    },
    {
      "no": 54,
      "questions": [
        {
          "question": "なにをしていますか？",
          "hint": "Đang làm gì? (Gợi ý: Làm việc, 1 mình tại công ty, Wang)",
          "example": "ワンさんは かいしゃで ひとりで はたらいています。",
          "romaji": {
            "question": "Nani o shite imasu ka?",
            "example": "Wan-san wa kaisha de hitori de hataraite imasu."
          },
          "no": 1
        }
      ],
      "image": {
        "src": "assets/speaking/image_p91.png",
        "webp": "assets/speaking/image_p91.webp",
        "w": 536,
        "h": 270,
        "alt": "Tranh gợi ý JPD123 — bộ câu hỏi 54: Đang làm gì? (Gợi ý: Làm việc, 1 mình tại công ty, Wang)",
        "avif": "Speaking/jpd123/image_p91.avif"
      }
    },
    {
      "no": 55,
      "questions": [
        {
          "question": "なにをしていますか？",
          "hint": "Đang làm gì? (Gợi ý: Làm bánh, 1 mình tại nhà hàng, Anna)",
          "example": "アンナさんは レストランで ひとりで ケーキを つくっています。",
          "romaji": {
            "question": "Nani o shite imasu ka?",
            "example": "Anna-san wa resutoran de hitori de keeki o tsukutte imasu."
          },
          "no": 1
        }
      ],
      "image": {
        "src": "assets/speaking/image_p92.png",
        "webp": "assets/speaking/image_p92.webp",
        "w": 518,
        "h": 306,
        "alt": "Tranh gợi ý JPD123 — bộ câu hỏi 55: Đang làm gì? (Gợi ý: Làm bánh, 1 mình tại nhà hàng, Anna)",
        "avif": "Speaking/jpd123/image_p92.avif"
      }
    },
    {
      "no": 56,
      "questions": [
        {
          "question": "なにをしていますか？",
          "hint": "Đang làm gì? (Gợi ý: Đi mua sắm, với bạn tại TTTM)",
          "example": "ともだちと デパートへ かいものに いっています。",
          "romaji": {
            "question": "Nani o shite imasu ka?",
            "example": "Tomodachi to depaato e kaimono ni itte imasu."
          },
          "no": 1
        }
      ],
      "image": {
        "src": "assets/speaking/image_p93.png",
        "webp": "assets/speaking/image_p93.webp",
        "w": 547,
        "h": 293,
        "alt": "Tranh gợi ý JPD123 — bộ câu hỏi 56: Đang làm gì? (Gợi ý: Đi mua sắm, với bạn tại TTTM)",
        "avif": "Speaking/jpd123/image_p93.avif"
      }
    },
    {
      "no": 57,
      "questions": [
        {
          "question": "なにをしていますか？",
          "hint": "Đang làm gì? (Gợi ý: Hút thuốc, Natapon)",
          "example": "ナタポンさんは たばこを すっています。",
          "romaji": {
            "question": "Nani o shite imasu ka?",
            "example": "Natapon-san wa tabako o sutte imasu."
          },
          "no": 1
        }
      ],
      "image": {
        "src": "assets/speaking/image_p95.png",
        "webp": "assets/speaking/image_p95.webp",
        "w": 513,
        "h": 284,
        "alt": "Tranh gợi ý JPD123 — bộ câu hỏi 57: Đang làm gì? (Gợi ý: Hút thuốc, Natapon)",
        "avif": "Speaking/jpd123/image_p95.avif"
      }
    },
    {
      "no": 58,
      "questions": [
        {
          "question": "なにをしていますか？",
          "hint": "Đang làm gì? (Gợi ý: Chơi guitar, Daniel)",
          "example": "ダニエルさんは ギターを ひいています。",
          "romaji": {
            "question": "Nani o shite imasu ka?",
            "example": "Danieru-san wa gitaa o hiite imasu."
          },
          "no": 1
        }
      ],
      "image": {
        "src": "assets/speaking/image_p96.png",
        "webp": "assets/speaking/image_p96.webp",
        "w": 520,
        "h": 260,
        "alt": "Tranh gợi ý JPD123 — bộ câu hỏi 58: Đang làm gì? (Gợi ý: Chơi guitar, Daniel)",
        "avif": "Speaking/jpd123/image_p96.avif"
      }
    },
    {
      "no": 59,
      "questions": [
        {
          "question": "なにをしていますか？",
          "hint": "Đang làm gì? (Gợi ý: Hát, Mary)",
          "example": "メアリーさんは うたを うたっています。",
          "romaji": {
            "question": "Nani o shite imasu ka?",
            "example": "Mearii-san wa uta o utatte imasu."
          },
          "no": 1
        }
      ],
      "image": {
        "src": "assets/speaking/image_p97.png",
        "webp": "assets/speaking/image_p97.webp",
        "w": 526,
        "h": 337,
        "alt": "Tranh gợi ý JPD123 — bộ câu hỏi 59: Đang làm gì? (Gợi ý: Hát, Mary)",
        "avif": "Speaking/jpd123/image_p97.avif"
      }
    },
    {
      "no": 60,
      "questions": [
        {
          "question": "なにをしていますか？",
          "hint": "Đang làm gì? (Gợi ý: Rửa bát, Carlos)",
          "example": "カルロスさんは おさらを あらっています。",
          "romaji": {
            "question": "Nani o shite imasu ka?",
            "example": "Karurosu-san wa osara o aratte imasu."
          },
          "no": 1
        }
      ],
      "image": {
        "src": "assets/speaking/image_p98.png",
        "webp": "assets/speaking/image_p98.webp",
        "w": 562,
        "h": 274,
        "alt": "Tranh gợi ý JPD123 — bộ câu hỏi 60: Đang làm gì? (Gợi ý: Rửa bát, Carlos)",
        "avif": "Speaking/jpd123/image_p98.avif"
      }
    },
    {
      "no": 61,
      "questions": [
        {
          "question": "なにをしていますか？",
          "hint": "Đang làm gì? (Gợi ý: Nấu cơm, Wang)",
          "example": "ワンさんは ごはんを つくっています。",
          "romaji": {
            "question": "Nani o shite imasu ka?",
            "example": "Wan-san wa gohan o tsukutte imasu."
          },
          "no": 1
        }
      ],
      "image": {
        "src": "assets/speaking/image_p99.png",
        "webp": "assets/speaking/image_p99.webp",
        "w": 527,
        "h": 272,
        "alt": "Tranh gợi ý JPD123 — bộ câu hỏi 61: Đang làm gì? (Gợi ý: Nấu cơm, Wang)",
        "avif": "Speaking/jpd123/image_p99.avif"
      }
    },
    {
      "no": 62,
      "questions": [
        {
          "question": "なにをしていますか？",
          "hint": "Đang làm gì? (Gợi ý: Thái rau, Park)",
          "example": "パクさんは やさいを きっています。",
          "romaji": {
            "question": "Nani o shite imasu ka?",
            "example": "Paku-san wa yasai o kitte imasu."
          },
          "no": 1
        }
      ],
      "image": {
        "src": "assets/speaking/image_p100.png",
        "webp": "assets/speaking/image_p100.webp",
        "w": 545,
        "h": 278,
        "alt": "Tranh gợi ý JPD123 — bộ câu hỏi 62: Đang làm gì? (Gợi ý: Thái rau, Park)",
        "avif": "Speaking/jpd123/image_p100.avif"
      }
    }
  ],
  "counts": {
    "structure": 10,
    "tips": 6,
    "reading": 35,
    "readingWithAudio": 10,
    "talkingWithoutPictures": 63,
    "pictureGroups": 62,
    "pictureGroupsWithImage": 61,
    "talkingWithPicturesQuestions": 125
  }
};
