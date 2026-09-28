/* ============================================================
   data.js — JPD123 lesson data (100% nguyên gốc, không chỉnh)
   ============================================================ */

const LESSONS = [
  {
    id: 1,
    title: "Bài 1 - はじめまして",
    vnTitle: "Tự giới thiệu: tên, quốc tịch, tuổi, sinh nhật, sở thích",
    days: "Ngày 1-4",
    objective: "Dùng được các mẫu tự giới thiệu cơ bản, trả lời được câu hỏi về tên, quốc gia, ngày sinh, tuổi và sở thích.",
    katakana: [
      { word: "スポーツ", note: "trường âm ー" },
      { word: "サッカー", note: "âm ngắt ッ" },
      { word: "テニス", note: "katakana cơ bản" },
      { word: "ブラジル", note: "âm ngoại lai" }
    ],
    vocab: [],
    grammar: [
      { pattern: "N1 は N2 です", use: "Giới thiệu / khẳng định", example: "わたしはベトナム人です。", vocabLink: "Gắn với 国, 学生, 大学生." },
      { pattern: "N1 は N2 ですか", use: "Hỏi xác nhận", example: "ミンさんは学生ですか。", vocabLink: "Gắn với 学生, 日本人." },
      { pattern: "N は どちら / いつ / 何ですか", use: "Hỏi quốc gia, sinh nhật, sở thích", example: "お国はどちらですか。誕生日はいつですか。趣味は何ですか。", vocabLink: "Gắn với 国, 誕生日, 趣味." },
      { pattern: "N1 の N2", use: "Sở hữu / bổ nghĩa", example: "わたしの誕生日は五月四日です。", vocabLink: "Gắn với 名前, 趣味." },
      { pattern: "N1 と N2", use: "Liệt kê 2 danh từ", example: "趣味は音楽と旅行です。", vocabLink: "Gắn với sở thích." },
      { pattern: "N も", use: "Cũng", example: "わたしの趣味も料理です。", vocabLink: "Làm câu tự nhiên hơn." }
    ],
    kanji: [
      { word: "私", reading: "わたし", meaning: "tôi" },
      { word: "人", reading: "ひと / じん", meaning: "người" },
      { word: "才", reading: "さい", meaning: "tuổi" },
      { word: "学校", reading: "がっこう", meaning: "trường học" },
      { word: "大学", reading: "だいがく", meaning: "đại học" },
      { word: "大学生", reading: "だいがくせい", meaning: "sinh viên đại học" },
      { word: "日本", reading: "にほん", meaning: "Nhật Bản" },
      { word: "日本語", reading: "にほんご", meaning: "tiếng Nhật" },
      { word: "日本人", reading: "にほんじん", meaning: "người Nhật" },
      { word: "名前", reading: "なまえ", meaning: "tên" },
      { word: "国", reading: "くに", meaning: "quốc gia" }
    ],
    reading: "はじめまして。わたしはミンです。ベトナム人です。大学生です。日本語を勉強しています。誕生日は五月四日です。趣味は音楽と旅行です。スポーツも好きです。サッカーはあまり上手じゃありませんが、見るのは好きです。",
    speaking: [
      { q: "お名前は何ですか。", a: "わたしの名前は ___ です。" },
      { q: "お国はどちらですか。", a: "ベトナムです。" },
      { q: "趣味は何ですか。", a: "趣味は 音楽 と 読書 です。" }
    ]
  },
  {
    id: 2,
    title: "Bài 2 - 買い物・食事",
    vnTitle: "Mua sắm, hỏi chỗ, hỏi giá, gọi món",
    days: "Ngày 5-8",
    objective: "Xử lý được các mẫu hỏi địa điểm, hỏi giá, gọi món.",
    katakana: [
      { word: "スーパー", note: "trường âm ー" },
      { word: "レストラン", note: "katakana dài" },
      { word: "エレベーター", note: "trường âm ー" },
      { word: "Tシャツ", note: "chữ cái Latin + katakana" }
    ],
    vocab: [],
    grammar: [
      { pattern: "これ / それ / あれ", use: "Chỉ đồ vật", example: "これは10,000円です。", vocabLink: "Gắn với かばん, 時計." },
      { pattern: "この / その / あの + N", use: "Chỉ danh từ cụ thể", example: "あのTシャツは3,000円です。", vocabLink: "Gắn với đồ mua sắm." },
      { pattern: "ここ / そこ / あそこ / どこ", use: "Hỏi địa điểm", example: "トイレはどこですか。― あそこです。", vocabLink: "Cực hay ra speaking." },
      { pattern: "N を（〜つ）ください", use: "Gọi món / mua đồ", example: "カレーを一つください。", vocabLink: "Gắn với カレー, スープ." },
      { pattern: "これは いくらですか", use: "Hỏi giá", example: "このかばんはいくらですか。", vocabLink: "Gắn với Tシャツ, かばん." },
      { pattern: "何の N / どこの N / 誰の N", use: "Hỏi loại / xuất xứ / chủ sở hữu", example: "これは何のカレーですか。", vocabLink: "Hay ra hỏi đáp." },
      { pattern: "〜で 何ですか", use: "Hỏi bằng ngôn ngữ", example: "『ぶたにく』は英語で何ですか。", vocabLink: "Gắn với 英語 / 日本語." }
    ],
    kanji: [
      { word: "一円", reading: "いちえん", meaning: "1 yên" },
      { word: "百円", reading: "ひゃくえん", meaning: "100 yên" },
      { word: "千円", reading: "せんえん", meaning: "1000 yên" },
      { word: "一万円", reading: "いちまんえん", meaning: "10,000 yên" },
      { word: "一月", reading: "いちがつ", meaning: "tháng 1" },
      { word: "三月", reading: "さんがつ", meaning: "tháng 3" },
      { word: "五月", reading: "ごがつ", meaning: "tháng 5" },
      { word: "七月", reading: "しちがつ", meaning: "tháng 7" },
      { word: "八月", reading: "はちがつ", meaning: "tháng 8" },
      { word: "十月", reading: "じゅうがつ", meaning: "tháng 10" },
      { word: "十一月", reading: "じゅういちがつ", meaning: "tháng 11" },
      { word: "十二月", reading: "じゅうにがつ", meaning: "tháng 12" },
      { word: "二人", reading: "ふたり", meaning: "2 người" },
      { word: "九人", reading: "きゅうにん", meaning: "9 người" }
    ],
    reading: "きょう、スーパーへ行きました。レジの近くでTシャツを見ました。あのTシャツはきれいでした。店員さんに『これはいくらですか』と聞きました。三千円でした。それからレストランでカレーとスープを注文しました。コーヒーも飲みました。",
    speaking: [
      { q: "トイレはどこですか。", a: "あそこです。/ こちらです。" },
      { q: "このTシャツはいくらですか。", a: "三千円です。" },
      { q: "これは何の料理ですか。", a: "豚肉の料理です。" }
    ]
  },
  {
    id: 3,
    title: "Bài 3 - スケジュール",
    vnTitle: "Giờ giấc, lịch trình, sinh hoạt hằng ngày",
    days: "Ngày 9-12",
    objective: "Nắm vững giờ, ngày trong tuần, lịch hàng ngày và mẫu từ ... đến ....",
    katakana: [
      { word: "スケジュール", note: "ngoại lai dài" },
      { word: "アルバイト", note: "katakana dài" },
      { word: "バーベキュー", note: "âm ghép + trường âm" },
      { word: "ホームステイ", note: "trường âm" }
    ],
    vocab: [],
    grammar: [
      { pattern: "Vます / Vません", use: "Hoạt động hiện tại / thói quen", example: "毎日、朝ご飯を食べます。", vocabLink: "Gắn với 起きます, 寝ます." },
      { pattern: "N へ Vます", use: "Đi đâu", example: "日曜日、図書館へ行きます。", vocabLink: "Gắn với 図書館, 公園." },
      { pattern: "N を Vます", use: "Tân ngữ trực tiếp", example: "日本語を勉強します。", vocabLink: "Gắn với 朝ご飯, 日本語." },
      { pattern: "N に Vます", use: "Mốc thời gian", example: "六時に起きます。", vocabLink: "Cực quan trọng cho bài 3." },
      { pattern: "N で Vます", use: "Nơi diễn ra hành động / phương tiện", example: "北海道でスキーをします。", vocabLink: "Hay tái dùng về sau." },
      { pattern: "〜から 〜まで", use: "Từ ... đến ...", example: "郵便局は午前九時から午後五時までです。", vocabLink: "Câu điểm cao." },
      { pattern: "N や N など", use: "Liệt kê mở", example: "朝、パンやサラダなどを食べます。", vocabLink: "Câu tự nhiên hơn." }
    ],
    kanji: [
      { word: "何", reading: "なに / なん", meaning: "cái gì" },
      { word: "月曜日", reading: "げつようび", meaning: "thứ hai" },
      { word: "火曜日", reading: "かようび", meaning: "thứ ba" },
      { word: "水曜日", reading: "すいようび", meaning: "thứ tư" },
      { word: "木曜日", reading: "もくようび", meaning: "thứ năm" },
      { word: "金曜日", reading: "きんようび", meaning: "thứ sáu" },
      { word: "土曜日", reading: "どようび", meaning: "thứ bảy" },
      { word: "日曜日", reading: "にちようび", meaning: "chủ nhật" },
      { word: "二時", reading: "にじ", meaning: "2 giờ" },
      { word: "四時", reading: "よじ", meaning: "4 giờ" },
      { word: "七時", reading: "しちじ", meaning: "7 giờ" },
      { word: "九時", reading: "くじ", meaning: "9 giờ" },
      { word: "十分", reading: "じゅっぷん", meaning: "10 phút" },
      { word: "時間", reading: "じかん", meaning: "thời gian/tiếng" }
    ],
    reading: "わたしは毎日六時に起きます。午前七時に朝ご飯を食べます。八時から授業があります。午後、図書館で日本語を勉強します。日曜日は公園へ行きます。ときどきアルバイトもします。ホームステイの友だちとバーベキューをすることもあります。",
    speaking: [
      { q: "図書館は何時から何時までですか。", a: "午前九時から午後五時までです。" },
      { q: "毎日、何時に起きますか。", a: "毎日、六時に起きます。" },
      { q: "日曜日にどこへ行きますか。", a: "公園へ行きます。" }
    ]
  },
  {
    id: 4,
    title: "Bài 4 - 私の国・町",
    vnTitle: "Nói về quốc gia, thành phố, khoảng cách, đặc điểm nơi chốn",
    days: "Ngày 13-16",
    objective: "Diễn tả được quê hương/quốc gia/thành phố, hỏi khoảng cách và mô tả nơi chốn.",
    katakana: [
      { word: "チョコレート", note: "katakana dài" },
      { word: "ビル", note: "katakana đơn" },
      { word: "メロン", note: "katakana đơn" },
      { word: "ツアー", note: "trường âm" }
    ],
    vocab: [],
    grammar: [
      { pattern: "N は A です / くないです / じゃありません", use: "Nói đặc điểm nơi chốn", example: "わたしの町はきれいです。", vocabLink: "Gắn với きれい, 静か, にぎやか." },
      { pattern: "A + N / ナA + な + N", use: "Bổ nghĩa danh từ", example: "きれいなところです。", vocabLink: "Cực hay dùng khi speaking." },
      { pattern: "N に N があります", use: "Nói nơi có gì", example: "町にきれいな川があります。", vocabLink: "Gắn với 山, 川, 温泉." },
      { pattern: "N は N の 東/西/南/北/真ん中です", use: "Nói vị trí", example: "沖縄は日本の南です。", vocabLink: "Rất quan trọng." },
      { pattern: "〜から〜までどのくらいですか", use: "Hỏi khoảng cách / thời lượng", example: "東京から箱根までどのくらいですか。", vocabLink: "Speaking trọng điểm." },
      { pattern: "N で", use: "Bằng phương tiện", example: "電車で三十分です。", vocabLink: "Gắn với 車, 電車, 飛行機." },
      { pattern: "どんな N ですか", use: "Hỏi nơi chốn thế nào", example: "アユタヤはどんなところですか。", vocabLink: "Câu mẫu speaking." },
      { pattern: "そして / が", use: "Nối ý / đối lập nhẹ", example: "この町はきれいです。そして、にぎやかです。", vocabLink: "Giúp câu không quá ngắn." }
    ],
    kanji: [
      { word: "東", reading: "ひがし / とう", meaning: "đông" },
      { word: "市", reading: "し", meaning: "thành phố / thị" },
      { word: "前日", reading: "ぜんじつ", meaning: "ngày hôm trước" },
      { word: "午前", reading: "ごぜん", meaning: "buổi sáng" },
      { word: "外国", reading: "がいこく", meaning: "nước ngoài" },
      { word: "区", reading: "く", meaning: "quận/khu" },
      { word: "国", reading: "くに / こく", meaning: "nước" },
      { word: "東京", reading: "とうきょう", meaning: "Tokyo" },
      { word: "女の人", reading: "おんなのひと", meaning: "người phụ nữ" },
      { word: "男の人", reading: "おとこのひと", meaning: "người đàn ông" },
      { word: "男女", reading: "だんじょ", meaning: "nam nữ" }
    ],
    reading: "わたしの町はベトナムの北です。にぎやかで、きれいなところです。町の近くに山と川があります。駅まで十分くらいです。ハノイからホーチミンまで飛行機で二時間くらいです。チョコレートやメロンもおいしいです。",
    speaking: [
      { q: "ハノイからホーチミンまでどのくらいですか。", a: "飛行機で二時間くらいです。" },
      { q: "あなたの町はどんなところですか。", a: "きれいで、にぎやかなところです。" },
      { q: "あなたの国に何がありますか。", a: "きれいな山や川があります。" }
    ]
  },
  {
    id: 5,
    title: "Bài 5 - 休みの日",
    vnTitle: "Ngày nghỉ, quá khứ, thích/ghét, muốn, muốn làm",
    days: "Ngày 17-20",
    objective: "Nói được việc đã làm vào ngày nghỉ, cảm nhận sau hoạt động, điều mình thích/muốn.",
    katakana: [
      { word: "アニメ", note: "katakana ngắn" },
      { word: "パソコン", note: "ngoại lai cơ bản" },
      { word: "インターネット", note: "katakana dài" },
      { word: "テスト", note: "katakana cơ bản" }
    ],
    vocab: [],
    grammar: [
      { pattern: "Vました / Vませんでした", use: "Quá khứ động từ", example: "昨日、勉強しました。", vocabLink: "Nói việc đã làm." },
      { pattern: "イAかったです / ナAでした", use: "Quá khứ tính từ", example: "旅行は楽しかったです。", vocabLink: "Câu speaking rất hay dùng." },
      { pattern: "N が 好きです / 嫌いです", use: "Nói thích/ghét", example: "日本のアニメが好きです。", vocabLink: "Gắn với アニメ, 音楽." },
      { pattern: "N が ほしいです", use: "Muốn có", example: "パソコンがほしいです。", vocabLink: "Speaking cá nhân." },
      { pattern: "Vたいです", use: "Muốn làm gì", example: "北海道へ行きたいです。", vocabLink: "Gắn với động từ." },
      { pattern: "N へ Vます-に行きます", use: "Đi đâu để làm gì", example: "渋谷へ買い物に行きます。", vocabLink: "Rất quan trọng." },
      { pattern: "どこかへ / どこへも", use: "Có đi đâu không / không đi đâu cả", example: "どこへも行きませんでした。", vocabLink: "Hay gặp trong hỏi đáp." },
      { pattern: "どうして ... から", use: "Hỏi/nói lý do", example: "忙しかったですから、何も食べませんでした。", vocabLink: "Giúp câu có lý do." },
      { pattern: "それから / N と Vます", use: "Nối mạch kể chuyện", example: "映画を見ました。それから、食事をしました。", vocabLink: "Giúp kể chuyện mượt." }
    ],
    kanji: [
      { word: "先生", reading: "せんせい", meaning: "giáo viên" },
      { word: "買い物", reading: "かいもの", meaning: "mua sắm" },
      { word: "見学", reading: "けんがく", meaning: "tham quan học tập" },
      { word: "午後", reading: "ごご", meaning: "buổi chiều" },
      { word: "午前", reading: "ごぜん", meaning: "buổi sáng" },
      { word: "先週", reading: "せんしゅう", meaning: "tuần trước" },
      { word: "食事", reading: "しょくじ", meaning: "bữa ăn" },
      { word: "先月", reading: "せんげつ", meaning: "tháng trước" },
      { word: "先日", reading: "せんじつ", meaning: "hôm trước" },
      { word: "飲み物", reading: "のみもの", meaning: "đồ uống" },
      { word: "毎日", reading: "まいにち", meaning: "mỗi ngày" },
      { word: "毎週", reading: "まいしゅう", meaning: "mỗi tuần" },
      { word: "毎月", reading: "まいつき / まいげつ", meaning: "mỗi tháng" },
      { word: "毎年", reading: "まいとし / まいねん", meaning: "mỗi năm" },
      { word: "休日", reading: "きゅうじつ", meaning: "ngày nghỉ" }
    ],
    reading: "先週の土曜日、友だちと公園へ行きました。天気がよかったですから、写真をたくさん撮りました。それから、レストランで食事をしました。食べ物はおいしかったです。夜はアニメを見ました。とても楽しかったです。",
    speaking: [
      { q: "きのう、どこかへ行きましたか。", a: "はい、公園へ行きました。/ いいえ、どこへも行きませんでした。" },
      { q: "旅行はどうでしたか。", a: "とても楽しかったです。" },
      { q: "何がほしいですか。", a: "新しいパソコンがほしいです。" }
    ]
  },
  {
    id: 6,
    title: "Bài 6 - 一緒に！",
    vnTitle: "Rủ rê, so sánh, chọn lựa, hẹn gặp",
    days: "Ngày 21-24",
    objective: "Rủ được bạn, so sánh được 2 lựa chọn, hẹn thời gian/địa điểm.",
    katakana: [
      { word: "カラオケ", note: "katakana cơ bản" },
      { word: "コンサート", note: "trường âm ー" },
      { word: "チケット", note: "âm ngắt nhỏ" },
      { word: "ジャズ", note: "âm ngoại lai" }
    ],
    vocab: [],
    grammar: [
      { pattern: "Vませんか / Vましょう", use: "Rủ rê / cùng làm", example: "今晩、ご飯を食べに行きませんか。", vocabLink: "Cực kỳ quan trọng." },
      { pattern: "N があります / Nで Nがあります", use: "Có lịch hẹn / sự kiện", example: "明日、約束があります。", vocabLink: "Gắn với 約束, 試合, コンサート." },
      { pattern: "N が（〜枚）あります", use: "Có số lượng vật", example: "映画のチケットが二枚あります。", vocabLink: "Hay đi với lời rủ." },
      { pattern: "Nで Nがいちばん Aです", use: "Cái gì nhất trong một nhóm", example: "スポーツで野球がいちばんおもしろいです。", vocabLink: "Hay ra sở thích." },
      { pattern: "N1 は N2 より Aです", use: "So sánh hơn", example: "七月は八月より雨が多いです。", vocabLink: "Gắn với thời tiết / mùa." },
      { pattern: "N1 と N2 と どちらが Aですか / N のほうが Aです", use: "So sánh 2 lựa chọn", example: "夏と冬とどちらが好きですか。", vocabLink: "Speaking trọng điểm." },
      { pattern: "もう Vましたか。― はい、Vました / いいえ、まだです", use: "Hỏi đã làm chưa", example: "もう行きましたか。", vocabLink: "Phản xạ hội thoại." },
      { pattern: "N はどうですか / 〜ね / 〜よ", use: "Gợi ý, xác nhận, nhấn thông tin", example: "おすしはどうですか。", vocabLink: "Câu tự nhiên hơn." }
    ],
    kanji: [
      { word: "今週", reading: "こんしゅう", meaning: "tuần này" },
      { word: "来年", reading: "らいねん", meaning: "năm sau" },
      { word: "来月", reading: "らいげつ", meaning: "tháng sau" },
      { word: "来週", reading: "らいしゅう", meaning: "tuần sau" },
      { word: "読書", reading: "どくしょ", meaning: "đọc sách" },
      { word: "辞書", reading: "じしょ", meaning: "từ điển" },
      { word: "電話", reading: "でんわ", meaning: "điện thoại" },
      { word: "今年", reading: "ことし", meaning: "năm nay" },
      { word: "今日", reading: "きょう", meaning: "hôm nay" },
      { word: "言語", reading: "げんご", meaning: "ngôn ngữ" },
      { word: "言葉", reading: "ことば", meaning: "từ/ngôn ngữ" },
      { word: "今月", reading: "こんげつ", meaning: "tháng này" },
      { word: "帰国", reading: "きこく", meaning: "về nước" },
      { word: "会社", reading: "かいしゃ", meaning: "công ty" },
      { word: "新聞", reading: "しんぶん", meaning: "báo" },
      { word: "会話", reading: "かいわ", meaning: "hội thoại" }
    ],
    reading: "来週、友だちとコンサートへ行きます。チケットが二枚あります。今月は忙しいですが、土曜日の夜は大丈夫です。映画館もいいですが、わたしはジャズのコンサートのほうが好きです。五時に駅で会いましょう。楽しみですね。",
    speaking: [
      { q: "今晩、一緒にご飯を食べに行きませんか。", a: "いいですね。行きましょう。/ すみません、今日はちょっと……。" },
      { q: "夏と冬とどちらが好きですか。", a: "夏のほうが好きです。" },
      { q: "もうその映画を見ましたか。", a: "はい、見ました。/ いいえ、まだです。" }
    ]
  },
  {
    id: 7,
    title: "Bài 7 - 友達の家で",
    vnTitle: "Chỉ đường, vị trí, nhờ vả, chuẩn bị tiệc, đang làm gì",
    days: "Ngày 25-28",
    objective: "Nói được vị trí đồ vật/người, xin chỉ đường, nhờ người khác làm gì, tự đề nghị giúp.",
    katakana: [
      { word: "アパート", note: "trường âm ー" },
      { word: "ポスト", note: "katakana cơ bản" },
      { word: "スプーン", note: "trường âm ー" },
      { word: "ギター", note: "trường âm ー" }
    ],
    vocab: [],
    grammar: [
      { pattern: "N は 場所 に います / あります", use: "Nói người/vật ở đâu", example: "わたしは本屋にいます。", vocabLink: "Cực quan trọng cho vị trí." },
      { pattern: "場所 に N が います / あります", use: "Nói ở đâu có ai/có gì", example: "銀行の前に本屋があります。", vocabLink: "Chỉ đường." },
      { pattern: "Vてください", use: "Nhờ / hướng dẫn", example: "かばんを取ってください。", vocabLink: "Bài 7 phải phản xạ được." },
      { pattern: "Vています", use: "Đang làm gì", example: "電話をかけています。", vocabLink: "Tả tranh speaking." },
      { pattern: "Vましょうか", use: "Đề nghị giúp", example: "手伝いましょうか。", vocabLink: "Điểm cộng tự nhiên." },
      { pattern: "（Nの）V方を教えてください", use: "Xin hướng dẫn cách làm", example: "料理の作り方を教えてください。", vocabLink: "Gắn với nấu ăn / làm việc." },
      { pattern: "まだ / もう", use: "Còn chưa / đã rồi", example: "サラダはまだありますか。― いいえ、もうありません。", vocabLink: "Rất hay gặp." },
      { pattern: "誰が / どのN / どれ / NでV", use: "Hỏi ai làm; chọn đồ; công cụ", example: "誰が作りましたか。塩はどれですか。", vocabLink: "Phủ rộng câu hỏi." }
    ],
    kanji: [
      { word: "牛肉", reading: "ぎゅうにく", meaning: "thịt bò" },
      { word: "一時半", reading: "いちじはん", meaning: "1 giờ rưỡi" },
      { word: "大学", reading: "だいがく", meaning: "đại học" },
      { word: "小学生", reading: "しょうがくせい", meaning: "học sinh tiểu học" },
      { word: "大学生", reading: "だいがくせい", meaning: "sinh viên đại học" },
      { word: "小学校", reading: "しょうがっこう", meaning: "trường tiểu học" },
      { word: "大会", reading: "たいかい", meaning: "đại hội/giải đấu" },
      { word: "大人", reading: "おとな", meaning: "người lớn" },
      { word: "鶏肉", reading: "とりにく", meaning: "thịt gà" },
      { word: "野菜", reading: "やさい", meaning: "rau" },
      { word: "半年", reading: "はんとし / はんねん", meaning: "nửa năm" },
      { word: "豚肉", reading: "ぶたにく", meaning: "thịt heo" },
      { word: "半分", reading: "はんぶん", meaning: "một nửa" },
      { word: "料金", reading: "りょうきん", meaning: "phí" },
      { word: "料理", reading: "りょうり", meaning: "món ăn/nấu ăn" }
    ],
    reading: "きょう、友だちのアパートへ行きました。でも、道がわかりませんでした。駅で電話をかけて、『いま、交番の前にいます』と言いました。友だちは『そこからまっすぐ来てください。ポストの横にわたしがいます』と言いました。家でピザを食べて、ギターを聞きました。",
    speaking: [
      { q: "あなたは今どこにいますか。", a: "わたしは本屋の前にいます。" },
      { q: "バス停はどこにありますか。", a: "コンビニの前にあります。" },
      { q: "手伝いましょうか。", a: "はい、お願いします。/ ありがとうございます。" }
    ]
  }
];

// Attach full vocab from VOCAB_FULL after definition
const VOCAB_FULL = {
  1: [
    ["私","tôi","わたし"],["（お）名前","tên","なまえ"],["（お）国","nước","くに"],["日本","Nhật Bản","にほん"],
    ["アメリカ","Mỹ"],["イタリア","Ý"],["オーストラリア","Úc"],["韓国","Hàn Quốc","かんこく"],
    ["タイ","Thái Lan"],["中国","Trung Quốc","ちゅうごく"],["ロシア","Nga"],["高校","trung học phổ thông","こうこう"],
    ["大学","đại học","だいがく"],["日本語学校","trường tiếng Nhật","にほんごがっこう"],["（お）仕事","công việc","しごと"],
    ["学生","học sinh / sinh viên","がくせい"],["先生","giáo viên","せんせい"],["教師","giáo viên","きょうし"],
    ["会社員","nhân viên công ty","かいしゃいん"],["社員","nhân viên công ty","しゃいん"],["～さん","anh/chị ~"],
    ["～人","người ~","じん"],["どちら","nào / ở đâu"],["はじめまして","rất hân hạnh gặp lần đầu"],
    ["（どうぞ）よろしくお願いします","rất mong được giúp đỡ","よろしくおねがいします"],["こちらこそ","chính tôi cũng vậy"],
    ["あのう","à... / ừm..."],["すみません","xin lỗi"],["そうですか","thế à"],["はい","vâng"],["いいえ","không"],
    ["誕生日","sinh nhật","たんじょうび"],["ブラジル","Brazil"],["～月","tháng ~","がつ"],["～日","ngày ~","にち"],
    ["～歳","~ tuổi","さい"],["いつ","khi nào"],["趣味","sở thích","しゅみ"],["スポーツ","thể thao"],["サッカー","bóng đá"],
    ["テニス","quần vợt"],["水泳","bơi","すいえい"],["映画","điện ảnh / phim","えいが"],["音楽","âm nhạc","おんがく"],
    ["読書","đọc sách","どくしょ"],["旅行","du lịch","りょこう"],["料理","nấu ăn","りょうり"],["何","gì / cái gì","なに・なん"],
    ["あ（っ）","a / à"],["わあ","ôi"],["同じですね","giống nhau nhỉ","おなじですね"]
  ],
  2: [
    ["おいしい","ngon"],["ここ／こちら","chỗ này"],["そこ／そちら","chỗ đấy"],["あそこ／あちら","chỗ kia"],["インフォメーション","thông tin"],
    ["ＡＴＭ","máy rút tiền"],["エスカレーター","cầu thang cuốn"],["エレベーター","thang máy"],["喫煙所","chỗ hút thuốc","きつえんじょ"],["トイレ","toilet"],
    ["レジ","quầy tính tiền"],["喫茶店","quán trà / cà phê","きっさてん"],["スーパー","siêu thị"],["100円ショップ","cửa hàng 100 yên","ひゃくえんショップ"],
    ["レストラン","nhà hàng"],["地下","dưới lòng đất","ちか"],["カメラ","máy ảnh"],["携帯電話","điện thoại cầm tay","けいたいでんわ"],
    ["電子辞書","từ điển điện tử","でんしじしょ"],["パソコン","máy vi tính"],["靴","giày","くつ"],["消しゴム","tẩy","けしゴム"],["ペン","bút"],
    ["トイレットペーパー","giấy vệ sinh"],["本","sách","ほん"],["油","dầu","あぶら"],["ケーキ","bánh ngọt"],["米","gạo","こめ"],["卵","trứng","たまご"],
    ["パン","bánh mì"],["水","nước","みず"],["店員","người bán hàng","てんいん"],["～階","tầng ~","かい"],["～屋","cửa hàng ~","や"],["どこ","ở đâu"],
    ["いらっしゃいませ","xin chào quý khách"],["（どうも）ありがとうございます","xin cảm ơn"],["これ","cái này"],["それ","cái đó"],["あれ","cái kia"],
    ["この","này"],["その","đó"],["あの","kia"],["かばん","túi / cặp"],["ズボン","quần"],["Ｔシャツ","áo phông"],["時計","đồng hồ","とけい"],
    ["～円","~ yên","えん"],["いくら","bao nhiêu tiền"],["じゃ","thế thì"],["魚","cá","さかな"],["肉","thịt","にく"],["牛肉","thịt bò","ぎゅうにく"],
    ["鶏肉","thịt gà","とりにく"],["豚肉","thịt lợn","ぶたにく"],["野菜","rau","やさい"],["イチゴ","dâu tây"],["リンゴ","táo"],["料理","món ăn","りょうり"],
    ["カレー","cà ri"],["スープ","súp"],["とんかつ","thịt heo chiên xù"],["ハンバーグ","thịt băm rán"],["ご飯","cơm","ごはん"],["ライス","cơm / rice"],
    ["ジュース","nước hoa quả"],["コーヒー","cà phê"],["紅茶","trà đen","こうちゃ"],["（お）茶","trà xanh","ちゃ"],["ビール","bia"],["ワイン","rượu vang"],
    ["インド","Ấn Độ"],["ドイツ","Đức"],["フランス","Pháp"],["財布","ví","さいふ"],["英語","tiếng Anh","えいご"],["～語","tiếng ~","ご"],["～つ","~ cái"],
    ["誰","ai","だれ"],["注文をお願いします","cho tôi gọi món","ちゅうもんをおねがいします"],["どうぞ","xin mời"],["こちらへどうぞ","xin mời đến đây"],
    ["メニュー","thực đơn"],["少々お待ちください","xin đợi một chút","しょうしょうおまちください"]
  ],
  3: [
    ["週末","cuối tuần","しゅうまつ"],["今","bây giờ","いま"],["午前","buổi sáng","ごぜん"],["午後","buổi chiều","ごご"],["昼","buổi trưa","ひる"],
    ["銀行","ngân hàng","ぎんこう"],["体育館","nhà thi đấu","たいいくかん"],["図書館","thư viện","としょかん"],["病院","bệnh viện","びょういん"],["郵便局","bưu điện","ゆうびんきょく"],
    ["授業","giờ học","じゅぎょう"],["テスト","bài kiểm tra"],["休み","giờ nghỉ / nghỉ","やすみ"],["時間","thời gian","じかん"],["～時","~ giờ","じ"],
    ["～分","~ phút","ふん・ぷん"],["～時半","~ giờ rưỡi","じはん"],["～曜日","thứ ~","ようび"],["スケジュール","lịch trình"],["アルバイト","việc làm thêm"],
    ["スキー","trượt tuyết"],["パーティー","bữa tiệc"],["バーベキュー","tiệc thịt nướng"],["花火","pháo hoa","はなび"],["（お）花見","ngắm hoa","はなみ"],
    ["ホームステイ","ở homestay"],["（お）祭り","lễ hội","まつり"],["海","biển","うみ"],["公園","công viên","こうえん"],["桜","hoa anh đào","さくら"],
    ["（お）酒","rượu","さけ"],["（お）すし","sushi"],["バス","xe buýt"],["（お）弁当","cơm hộp","べんとう"],["留学生","lưu học sinh","りゅうがくせい"],
    ["１年","năm thứ nhất","いちねん"],["春","mùa xuân","はる"],["夏","mùa hè","なつ"],["秋","mùa thu","あき"],["冬","mùa đông","ふゆ"],
    ["ゴールデンウィーク","Tuần lễ vàng"],["何","gì","なに・なん"],["行きます","đi","いきます"],["帰ります","về","かえります"],["飲みます","uống","のみます"],
    ["食べます","ăn","たべます"],["見ます","xem","みます"],["します","làm"],["いいですね","hay nhỉ / thích nhỉ"],["聞きます","nghe / hỏi","ききます"],
    ["働きます","làm việc","はたらきます"],["読みます","đọc","よみます"],["起きます","thức dậy","おきます"],["寝ます","ngủ","ねます"],
    ["勉強します","học","べんきょうします"],["来ます","đến","きます"]
  ],
  4: [
    ["チョコレート","sô-cô-la"],["美術館","bảo tàng mỹ thuật","びじゅつかん"],["皆さん","các bạn / quý vị","みなさん"],["いろいろ（な）","nhiều / đa dạng"],
    ["～から来ました","đến từ ~","からきました"],["ぜひ来てください","rất mong anh/chị đến","ぜひきてください"],["北","bắc","きた"],["南","nam","みなみ"],["東","đông","ひがし"],
    ["西","tây","にし"],["真ん中","giữa","まんなか"],["車","xe ô tô","くるま"],["新幹線","tàu cao tốc","しんかんせん"],["電車","tàu điện","でんしゃ"],
    ["飛行機","máy bay","ひこうき"],["駅","nhà ga","えき"],["町","thành phố / khu phố","まち"],["～時間","~ tiếng","じかん"],["～時間半","~ tiếng rưỡi","じかんはん"],
    ["～分","~ phút","ふん・ぷん"],["歩いて","đi bộ","あるいて"],["～くらい","khoảng ~"],["どのくらい","khoảng bao nhiêu"],["温泉","suối nước nóng","おんせん"],
    ["川","sông","かわ"],["山","núi","やま"],["教会","nhà thờ","きょうかい"],["（お）城","lâu đài","しろ"],["神社","đền thần đạo","じんじゃ"],["（お）寺","chùa","てら"],
    ["ビル","tòa nhà"],["ところ","chỗ / nơi"],["人","người","ひと"],["緑","màu xanh lá","みどり"],["あります","có"],["新しい","mới","あたらしい"],["古い","cũ","ふるい"],
    ["いい","tốt / được"],["（～が）多い","nhiều","おおい"],["（～が）少ない","ít","すくない"],["大きい","to","おおきい"],["小さい","nhỏ","ちいさい"],["高い","cao","たかい"],
    ["低い","thấp","ひくい"],["きれい（な）","đẹp / sạch"],["静か（な）","yên tĩnh","しずか"],["にぎやか（な）","nhộn nhịp"],["有名（な）","nổi tiếng","ゆうめい"],["どんな","như thế nào"],
    ["そして","và"],["雨","mưa","あめ"],["雪","tuyết","ゆき"],["日","ngày","ひ"],["メロン","dưa lưới"],["暖かい","ấm","あたたかい"],["涼しい","mát","すずしい"],["暑い","nóng","あつい"],
    ["寒い","lạnh","さむい"],["天気がいい","trời đẹp","てんきがいい"],["天気が悪い","trời xấu","てんきがわるい"],["温かい","ấm","あたたかい"],["熱い","nóng","あつい"],["冷たい","lạnh","つめたい"],
    ["おいしい","ngon"],["甘い","ngọt","あまい"],["辛い","cay","からい"],["苦い","đắng","にがい"],["すっぱい","chua"],["一年中","quanh năm","いちねんじゅう"],["あまり","không ~ lắm"],
    ["少し","ít / hơi","すこし"],["とても","rất"],["どう","thế nào"],["そうですね","đúng thế / ừ nhỉ"],["たくさん","nhiều"]
  ],
  5: [
    ["先週","tuần trước","せんしゅう"],["先月","tháng trước","せんげつ"],["先日","hôm trước","せんじつ"],["昨日","hôm qua","きのう"],["去年","năm ngoái","きょねん"],
    ["映画館","rạp chiếu phim","えいがかん"],["デパート","trung tâm thương mại"],["レストラン","nhà hàng"],["公園","công viên","こうえん"],["図書館","thư viện","としょかん"],
    ["水族館","thủy cung","すいぞくかん"],["動物園","vườn thú","どうぶつえん"],["美術館","bảo tàng mỹ thuật","びじゅつかん"],["遊園地","công viên giải trí","ゆうえんち"],
    ["旅行","du lịch","りょこう"],["見学","tham quan","けんがく"],["食事","bữa ăn","しょくじ"],["散歩","đi dạo","さんぽ"],["休み","kỳ nghỉ","やすみ"],
    ["（お）みやげ","quà lưu niệm"],["写真","ảnh","しゃしん"],["天気","thời tiết","てんき"],["アニメ","anime"],["パソコン","máy vi tính"],["インターネット","internet"],
    ["テスト","bài kiểm tra"],["パーティー","bữa tiệc"],["ゲーム","trò chơi"],["音楽","âm nhạc","おんがく"],["映画","phim","えいが"],
    ["好き（な）","thích","すき"],["嫌い（な）","ghét","きらい"],["上手（な）","giỏi","じょうず"],["下手（な）","kém","へた"],["得意（な）","sở trường","とくい"],
    ["苦手（な）","không giỏi","にがて"],["楽しい","vui vẻ","たのしい"],["おもしろい","thú vị"],["つまらない","nhàm chán"],["忙しい","bận","いそがしい"],
    ["疲れました","mệt rồi","つかれました"],["晴れ","trời nắng","はれ"],["曇り","trời âm u","くもり"],["雨","mưa","あめ"],["雪","tuyết","ゆき"],
    ["行きました","đã đi","いきました"],["見ました","đã xem","みました"],["食べました","đã ăn","たべました"],["飲みました","đã uống","のみました"],["しました","đã làm"],
    ["買いました","đã mua","かいました"],["撮りました","đã chụp","とりました"],["会いました","đã gặp","あいました"],["もらいました","đã nhận"],["あげました","đã tặng"],
    ["どこかへ","có đi đâu"],["どこへも","không đi đâu cả"],["何も","không ~ gì cả","なにも"],["誰も","không ai","だれも"],
    ["それから","sau đó"],["でも","nhưng"],["だから","vì vậy"],["だって","vì mà / bởi vì"],["ほしい","muốn có"],["Vたい","muốn làm"]
  ],
  6: [
    ["約束","lời hẹn","やくそく"],["試合","trận đấu","しあい"],["コンサート","buổi biểu diễn"],["パーティー","bữa tiệc"],["デート","hẹn hò"],
    ["映画","phim","えいが"],["野球","bóng chày","やきゅう"],["サッカー","bóng đá"],["テニス","quần vợt"],["ゴルフ","golf"],
    ["スポーツ","thể thao"],["音楽","âm nhạc","おんがく"],["ジャズ","jazz"],["クラシック","nhạc cổ điển"],["カラオケ","karaoke"],
    ["チケット","vé"],["映画館","rạp phim","えいがかん"],["レストラン","nhà hàng"],["居酒屋","quán nhậu","いざかや"],["喫茶店","quán cà phê","きっさてん"],
    ["春","mùa xuân","はる"],["夏","mùa hè","なつ"],["秋","mùa thu","あき"],["冬","mùa đông","ふゆ"],
    ["今週","tuần này","こんしゅう"],["来週","tuần sau","らいしゅう"],["今月","tháng này","こんげつ"],["来月","tháng sau","らいげつ"],
    ["今晩","tối nay","こんばん"],["明日","ngày mai","あした"],["明後日","ngày kia","あさって"],["大丈夫","ổn thôi","だいじょうぶ"],
    ["いちばん","nhất"],["～より","hơn ~"],["どちら","cái nào"],["のほうが","hơn là"],["～枚","~ tờ / ~ vé","まい"],
    ["もう","đã rồi"],["まだ","vẫn chưa"],["どうですか","thế nào"],["〜ね","nhỉ / phải không"],["〜よ","đấy / nhé"],
    ["Vましょうか","hãy cùng ~ nhé"],["Vませんか","~ thì sao"],["一緒に","cùng nhau","いっしょに"],["楽しみ","trông chờ","たのしみ"]
  ],
  7: [
    ["アパート","căn hộ"],["家","nhà","いえ・うち"],["部屋","phòng","へや"],["台所","bếp","だいどころ"],["リビング","phòng khách"],
    ["ポスト","hộp thư"],["交番","đồn cảnh sát","こうばん"],["コンビニ","cửa hàng tiện lợi"],["バス停","trạm xe buýt","バスてい"],["本屋","hiệu sách","ほんや"],
    ["銀行","ngân hàng","ぎんこう"],["病院","bệnh viện","びょういん"],["学校","trường học","がっこう"],["駅","nhà ga","えき"],["スーパー","siêu thị"],
    ["前","phía trước","まえ"],["後ろ","phía sau","うしろ"],["右","bên phải","みぎ"],["左","bên trái","ひだり"],["横","bên cạnh","よこ"],
    ["中","bên trong","なか"],["外","bên ngoài","そと"],["上","phía trên","うえ"],["下","phía dưới","した"],["近く","gần","ちかく"],
    ["スプーン","thìa"],["フォーク","dĩa"],["ナイフ","dao"],["皿","đĩa","さら"],["コップ","cốc"],
    ["ギター","guitar"],["ピアノ","piano"],["テレビ","TV"],["ラジオ","đài"],["カメラ","máy ảnh"],
    ["牛肉","thịt bò","ぎゅうにく"],["豚肉","thịt heo","ぶたにく"],["鶏肉","thịt gà","とりにく"],["野菜","rau","やさい"],["塩","muối","しお"],
    ["砂糖","đường","さとう"],["醤油","nước tương","しょうゆ"],["料理","nấu ăn","りょうり"],["ピザ","pizza"],["サラダ","salad"],
    ["います","có (người/động vật)"],["あります","có (đồ vật)"],["Vてください","xin hãy ~"],["Vています","đang ~"],["Vましょうか","để tôi ~ nhé"],
    ["取ります","lấy","とります"],["開けます","mở","あけます"],["閉めます","đóng","しめます"],["切ります","cắt","きります"],["混ぜます","trộn","まぜます"],
    ["まだ","vẫn còn"],["もう","đã / không còn"],["まっすぐ","thẳng"],["右に曲がります","rẽ phải","みぎにまがります"],["左に曲がります","rẽ trái","ひだりにまがります"]
  ]
};

// Attach vocab arrays to lessons
LESSONS.forEach(l => {
  const raw = VOCAB_FULL[l.id] || [];
  l.vocab = raw.map(arr => ({ jp: arr[0], vi: arr[1], reading: arr[2] || "" }));
});

const GRAMMAR_BANK = {
  1: [
    ["わたし___ ベトナム人です。", ["は", "が", "を", "に"], 0, "は: chủ đề"],
    ["ミンさん___ 学生ですか。", ["は", "が", "を", "で"], 0, "は: chủ đề / hỏi"],
    ["お国___ どちらですか。", ["が", "は", "を", "に"], 1, "お国は → は làm chủ đề"],
    ["趣味は音楽___ 旅行です。", ["が", "は", "と", "や"], 2, "と: liệt kê chính xác 2 thứ"],
    ["わたしの趣味___ 料理です。", ["が", "も", "は", "で"], 1, "も: cũng"],
    ["誕生日___ いつですか。", ["が", "は", "を", "で"], 1, "は → hỏi"],
    ["わたし___ 名前は ミン です。", ["は", "の", "が", "を"], 1, "の: sở hữu"],
    ["これ___ わたしの本です。", ["が", "は", "を", "に"], 1, "これは → chủ đề"],
    ["彼女は 学生___ ありません。", ["は", "が", "じゃ", "で"], 2, "じゃありません: phủ định"],
    ["趣味は スポーツ___ 音楽 です。", ["と", "が", "は", "を"], 0, "と: liệt kê"],
    ["わたしは 大学生___。", ["です", "ます", "だ", "でした"], 0, "です: khẳng định lịch sự"],
    ["お名前___ 何ですか。", ["が", "は", "を", "の"], 1, "は: chủ đề"],
    ["わたしの 誕生日___ 五月四日です。", ["が", "は", "を", "で"], 1, "は: chủ đề"],
    ["ミンさん___ 日本語学校の 学生です。", ["は", "が", "に", "を"], 0, "は: chủ đề"],
    ["国___ どちらですか。", ["が", "は", "に", "で"], 1, "は: hỏi lịch sự"]
  ],
  2: [
    ["トイレ___ どこですか。", ["は", "が", "を", "に"], 0, "は: chủ đề"],
    ["あの Tシャツ___ 3,000円です。", ["は", "が", "を", "に"], 0, "は: chủ đề"],
    ["カレー___ 一つ ください。", ["は", "が", "を", "で"], 2, "を: tân ngữ trực tiếp"],
    ["これ___ いくらですか。", ["は", "が", "を", "に"], 0, "は: chủ đề"],
    ["エレベーター___ あそこです。", ["は", "が", "を", "で"], 0, "は: chủ đề"],
    ["これは 何___ カレーですか。", ["の", "が", "で", "は"], 0, "何の: loại"],
    ["『ぶたにく』は 英語___ 何ですか。", ["に", "で", "が", "を"], 1, "で: bằng ngôn ngữ"],
    ["あの かばん___ いくらですか。", ["が", "は", "を", "に"], 1, "は: chủ đề"],
    ["カレー___ スープ___ ください。", ["と / を", "が / は", "は / に", "で / から"], 0, "と liệt kê, を tân ngữ"],
    ["レジ___ どこですか。", ["は", "が", "を", "で"], 0, "は: chủ đề"],
    ["この 時計___ 何円ですか。", ["は", "が", "を", "に"], 0, "は: chủ đề"],
    ["そこ___ スーパーです。", ["が", "は", "で", "に"], 1, "は: chủ đề"],
    ["このかばんは だれ___ ですか。", ["に", "の", "が", "を"], 1, "の: sở hữu"],
    ["これは 中国___ カレーです。", ["の", "で", "が", "に"], 0, "の: xuất xứ"],
    ["あそこ___ コーヒー が あります。", ["に", "は", "で", "が"], 0, "に: địa điểm tồn tại"]
  ],
  3: [
    ["毎日、六時___ 起きます。", ["が", "は", "に", "を"], 2, "に: thời điểm cụ thể"],
    ["日曜日、図書館___ 行きます。", ["は", "を", "へ", "が"], 2, "へ: hướng di chuyển"],
    ["日本語___ 勉強します。", ["は", "に", "が", "を"], 3, "を: tân ngữ trực tiếp"],
    ["北海道___ スキーを します。", ["は", "に", "で", "を"], 2, "で: nơi diễn ra"],
    ["郵便局は 午前九時___ 午後五時___ です。", ["から / まで", "に / へ", "で / が", "は / も"], 0, "から〜まで: từ đến"],
    ["朝、パン___ サラダ___ 食べます。", ["と / を", "や / など を", "が / を", "は / に"], 1, "や...など: liệt kê mở"],
    ["毎朝、七時___ 朝ご飯を 食べます。", ["が", "は", "に", "で"], 2, "に: thời điểm"],
    ["公園___ 行きます。", ["が", "は", "へ", "で"], 2, "へ: hướng di chuyển"],
    ["図書館___ 日本語を 勉強します。", ["に", "へ", "で", "は"], 2, "で: nơi hành động"],
    ["六時___ 起きます。", ["に", "で", "が", "を"], 0, "に: mốc thời gian"],
    ["バス___ 学校へ 行きます。", ["に", "は", "で", "を"], 2, "で: phương tiện"],
    ["土曜日、アルバイト___ します。", ["が", "を", "に", "は"], 1, "を: tân ngữ"],
    ["友だち___ 映画を 見ます。", ["は", "と", "が", "に"], 1, "と: cùng với"],
    ["毎日、三時間___ 勉強します。", ["は", "が", "を", "に"], 2, "を: thời lượng"],
    ["授業___ 八時から 三時まで です。", ["は", "が", "を", "に"], 0, "は: chủ đề"]
  ],
  4: [
    ["わたしの町___ きれいです。", ["が", "は", "に", "で"], 1, "は: chủ đề"],
    ["町___ きれいな 川が あります。", ["に", "は", "で", "が"], 0, "に: tồn tại ở đâu"],
    ["沖縄は 日本の南___。", ["が", "です", "に", "で"], 1, "です: kết thúc câu"],
    ["東京___ 箱根まで どのくらいですか。", ["が", "は", "から", "で"], 2, "から: điểm xuất phát"],
    ["電車___ 三十分です。", ["は", "が", "で", "に"], 2, "で: phương tiện"],
    ["アユタヤは どんなところ___。", ["でした", "ですか", "です", "ます"], 1, "ですか: hỏi"],
    ["この町は きれいです。___、にぎやかです。", ["だから", "でも", "そして", "から"], 2, "そして: nối ý"],
    ["あまり にぎやか___ ありません。", ["は", "が", "では", "じゃ"], 3, "じゃありません: phủ định ナA"],
    ["山___ 川が あります。", ["や", "と", "も", "が"], 0, "や: liệt kê mở"],
    ["ハノイ___ 北です。", ["が", "は", "に", "で"], 1, "は: chủ đề"],
    ["温泉___ 有名な ところです。", ["で", "が", "の", "に"], 0, "で: bằng / theo"],
    ["この 町は 静か（___）ところです。", ["な", "の", "に", "を"], 0, "な: nối ナAdj + N"],
    ["飛行機___ 二時間くらいです。", ["が", "は", "で", "に"], 2, "で: phương tiện"],
    ["山___ 高い です。", ["が", "は", "に", "を"], 1, "は: chủ đề"],
    ["どんな ところ___。", ["ですか", "です", "でした", "ます"], 0, "ですか: hỏi"]
  ],
  5: [
    ["昨日、勉強し___。", ["ます", "た", "ました", "ません"], 2, "Vました: quá khứ"],
    ["旅行は 楽し___。", ["かったです", "いです", "です", "でした"], 0, "イAかったです: quá khứ"],
    ["日本のアニメ___ 好きです。", ["は", "を", "が", "に"], 2, "が: đi với 好きです"],
    ["パソコン___ ほしいです。", ["を", "が", "は", "に"], 1, "が: đi với ほしいです"],
    ["北海道へ 行き___です。", ["ません", "ました", "たい", "ます"], 2, "たいです: muốn làm"],
    ["渋谷へ 買い物___ 行きます。", ["を", "が", "に", "で"], 2, "に行きます: đi để làm gì"],
    ["どこへも 行きません___。", ["でした", "です", "ます", "した"], 0, "Quá khứ phủ định"],
    ["忙しかったです___、何も 食べませんでした。", ["で", "が", "から", "のに"], 2, "から: lý do"],
    ["映画を 見ました。___、食事をしました。", ["そして", "それから", "でも", "だから"], 1, "それから: sau đó"],
    ["映画は あまり おもしろく___。", ["ないです", "ありません", "でした", "なかったです"], 3, "イA quá khứ phủ định"],
    ["休みは どう___か。", ["です", "いました", "でした", "ます"], 2, "どうでしたか"],
    ["何___ 食べませんでした。", ["が", "を", "も", "で"], 2, "何も + phủ định"],
    ["公園へ 行き___か。", ["ましたか", "ました", "ます", "た"], 0, "Vましたか: hỏi quá khứ"],
    ["天気が よかった___、写真を 撮りました。", ["ので", "から", "が", "でも"], 1, "から: lý do"],
    ["アニメを 見___ ました。", ["し", "て", "に", "の"], 1, "動詞て形 (見て→接続)"]
  ],
  6: [
    ["今晩、ご飯を 食べに 行き___か。", ["ません", "ましょう", "ますか", "ません"], 0, "Vませんか: rủ rê"],
    ["映画の チケット___ 二枚 あります。", ["は", "を", "が", "に"], 2, "が: số lượng vật"],
    ["スポーツで 野球___ いちばん おもしろいです。", ["は", "が", "を", "に"], 1, "が: chủ ngữ"],
    ["七月___ 八月より 雨が 多いです。", ["が", "は", "を", "に"], 1, "は: chủ đề"],
    ["夏と 冬と どちら___ 好きですか。", ["が", "は", "を", "に"], 0, "が: chủ ngữ câu hỏi"],
    ["もう その 映画を 見まし___か。", ["た", "て", "ます", "ません"], 0, "Vましたか: hỏi đã làm chưa"],
    ["いいえ、___です。", ["まだ", "もう", "また", "さっき"], 0, "まだ: vẫn chưa"],
    ["駅で 会い___。", ["ましょう", "ません", "ます", "ました"], 0, "Vましょう: cùng làm"],
    ["サッカーと テニスと どちら___ 好きですか。", ["は", "が", "を", "に"], 1, "が: chủ ngữ"],
    ["わたしは ジャズ___ ほうが 好きです。", ["の", "が", "を", "に"], 0, "のほうが: so sánh"],
    ["明日、約束___ あります。", ["は", "が", "を", "に"], 1, "が: tồn tại"],
    ["おすし___ どうですか。", ["が", "は", "を", "に"], 1, "は: gợi ý"],
    ["楽しみ___ね。", ["です", "ます", "でした", "ません"], 0, "ですね: nhỉ"],
    ["土曜日の 夜は 大丈夫___。", ["ですか", "ます", "でした", "です"], 0, "ですか: hỏi"],
    ["コンサート___ チケットが 二枚 あります。", ["の", "が", "は", "に"], 0, "の: của / liên quan"]
  ],
  7: [
    ["わたしは 本屋___ います。", ["は", "に", "で", "が"], 1, "に: địa điểm (います)"],
    ["銀行の前___ 本屋が あります。", ["は", "に", "で", "が"], 1, "に: địa điểm (あります)"],
    ["かばん___ 取って ください。", ["が", "は", "を", "に"], 2, "を: tân ngữ (Vてください)"],
    ["電話を かけ___。", ["ています", "てください", "ました", "ません"], 0, "ています: đang làm"],
    ["手伝い___か。", ["ましょう", "ません", "ます", "ました"], 0, "Vましょうか: đề nghị giúp"],
    ["料理の 作り方___ 教えて ください。", ["が", "を", "は", "に"], 1, "を: tân ngữ"],
    ["サラダ___ まだ ありますか。", ["は", "が", "を", "に"], 0, "は: chủ đề hỏi"],
    ["いいえ、もう___。", ["ありません", "あります", "いません", "います"], 0, "もうありません: hết rồi"],
    ["誰___ 作りましたか。", ["が", "は", "を", "に"], 0, "が: chủ ngữ câu hỏi"],
    ["ポストの横___ います。", ["は", "が", "で", "に"], 3, "に: địa điểm"],
    ["まっすぐ来て___。", ["ください", "ません", "ましょう", "います"], 0, "てください: nhờ"],
    ["塩___ どれですか。", ["が", "は", "を", "に"], 1, "は: chủ đề hỏi"],
    ["交番の前___ います。", ["は", "が", "に", "で"], 2, "に: địa điểm"],
    ["スプーン___ どこに ありますか。", ["が", "は", "を", "に"], 1, "は: chủ đề hỏi"],
    ["この 料理は だれ___ 作りましたか。", ["が", "は", "の", "で"], 0, "が: chủ ngữ"]
  ]
};

const ROADMAP = [
  { day: 1, title: "Bài 1 — Vocab core + Kanji", tasks: ["Đọc từ vựng bài 1 (20 từ core)", "Ghi âm → nghe lại 5 lần", "Học kanji bài 1 (11 chữ)", "Quiz vocab 20 câu"] },
  { day: 2, title: "Bài 1 — Grammar + Speaking", tasks: ["Học 6 mẫu ngữ pháp", "Quiz grammar 15 câu", "Đọc passage 5 vòng", "Luyện 3 câu speaking → ghi âm"] },
  { day: 3, title: "Bài 1 — Katakana + Ôn", tasks: ["Luyện 4 từ katakana bài 1", "Ôn vocab (20 câu lần 2)", "Ghi âm speaking lần 2", "Đánh dấu bài 1 hoàn thành"] },
  { day: 4, title: "Ôn tổng bài 1 + Buffer", tasks: ["Quiz tổng vocab + grammar", "Nghe lại ghi âm speaking", "Bổ sung từ còn yếu", "Nghỉ hoặc làm thêm mock"] },
  { day: 5, title: "Bài 2 — Vocab core + Kanji", tasks: ["Đọc từ vựng bài 2 (20 từ core)", "Học kanji bài 2 (14 chữ)", "Quiz vocab 20 câu", "Ghi âm 3 câu speaking"] },
  { day: 6, title: "Bài 2 — Grammar + Speaking", tasks: ["Học 7 mẫu ngữ pháp", "Quiz grammar 15 câu", "Đọc passage 5 vòng", "Luyện speaking + ghi âm"] },
  { day: 7, title: "Bài 2 — Katakana + Ôn", tasks: ["Luyện 4 từ katakana bài 2", "Ôn vocab lần 2", "Quiz kanji", "Đánh dấu bài 2 hoàn thành"] },
  { day: 8, title: "Ôn tổng bài 2 + Buffer", tasks: ["Ôn vocab + grammar bài 1-2", "Luyện speaking bài 1+2", "Bổ sung từ yếu", "Nghỉ hoặc làm mock"] },
  { day: 9, title: "Bài 3 — Vocab core + Kanji", tasks: ["Đọc từ vựng bài 3", "Học kanji bài 3 (14 chữ)", "Quiz vocab 20 câu", "Ghi âm 3 câu speaking"] },
  { day: 10, title: "Bài 3 — Grammar + Speaking", tasks: ["Học 7 mẫu ngữ pháp", "Quiz grammar 15 câu", "Đọc passage 5 vòng", "Luyện speaking + ghi âm"] },
  { day: 11, title: "Bài 3 — Katakana + Ôn", tasks: ["Luyện 4 từ katakana bài 3", "Ôn vocab lần 2", "Quiz kanji", "Đánh dấu bài 3 hoàn thành"] },
  { day: 12, title: "Ôn tổng bài 3 + Buffer", tasks: ["Ôn vocab + grammar bài 1-3", "Luyện speaking bài 1-3", "Bổ sung từ yếu"] },
  { day: 13, title: "Bài 4 — Vocab core + Kanji", tasks: ["Đọc từ vựng bài 4", "Học kanji bài 4 (11 chữ)", "Quiz vocab 20 câu", "Ghi âm 3 câu speaking"] },
  { day: 14, title: "Bài 4 — Grammar + Speaking", tasks: ["Học 8 mẫu ngữ pháp", "Quiz grammar 15 câu", "Đọc passage 5 vòng", "Luyện speaking + ghi âm"] },
  { day: 15, title: "Bài 4 — Katakana + Ôn", tasks: ["Luyện 4 từ katakana bài 4", "Ôn vocab lần 2", "Quiz kanji", "Đánh dấu bài 4 hoàn thành"] },
  { day: 16, title: "Ôn tổng bài 4 + Buffer", tasks: ["Ôn vocab + grammar bài 1-4", "Luyện speaking bài 4", "Mock test lần 1"] },
  { day: 17, title: "Bài 5 — Vocab core + Kanji", tasks: ["Đọc từ vựng bài 5", "Học kanji bài 5 (15 chữ)", "Quiz vocab 20 câu", "Ghi âm 3 câu speaking"] },
  { day: 18, title: "Bài 5 — Grammar + Speaking", tasks: ["Học 9 mẫu ngữ pháp", "Quiz grammar 15 câu", "Đọc passage 5 vòng", "Luyện speaking + ghi âm"] },
  { day: 19, title: "Bài 5 — Katakana + Ôn", tasks: ["Luyện 4 từ katakana bài 5", "Ôn vocab lần 2", "Quiz kanji", "Đánh dấu bài 5 hoàn thành"] },
  { day: 20, title: "Ôn tổng bài 5 + Buffer", tasks: ["Ôn vocab + grammar bài 1-5", "Luyện speaking bài 5", "Mock test lần 2"] },
  { day: 21, title: "Bài 6 — Vocab core + Kanji", tasks: ["Đọc từ vựng bài 6", "Học kanji bài 6 (16 chữ)", "Quiz vocab 20 câu", "Ghi âm 3 câu speaking"] },
  { day: 22, title: "Bài 6 — Grammar + Speaking", tasks: ["Học 8 mẫu ngữ pháp", "Quiz grammar 15 câu", "Đọc passage 5 vòng", "Luyện speaking + ghi âm"] },
  { day: 23, title: "Bài 6 — Katakana + Ôn", tasks: ["Luyện 4 từ katakana bài 6", "Ôn vocab lần 2", "Quiz kanji", "Đánh dấu bài 6 hoàn thành"] },
  { day: 24, title: "Ôn tổng bài 6 + Buffer", tasks: ["Ôn vocab + grammar bài 1-6", "Luyện speaking bài 6", "Mock test lần 3"] },
  { day: 25, title: "Bài 7 — Vocab core + Kanji", tasks: ["Đọc từ vựng bài 7", "Học kanji bài 7 (15 chữ)", "Quiz vocab 20 câu", "Ghi âm 3 câu speaking"] },
  { day: 26, title: "Bài 7 — Grammar + Speaking", tasks: ["Học 8 mẫu ngữ pháp", "Quiz grammar 15 câu", "Đọc passage 5 vòng", "Luyện speaking + ghi âm"] },
  { day: 27, title: "Bài 7 — Katakana + Ôn", tasks: ["Luyện 4 từ katakana bài 7", "Ôn vocab lần 2", "Quiz kanji", "Đánh dấu bài 7 hoàn thành"] },
  { day: 28, title: "Ôn tổng bài 7 + Buffer", tasks: ["Ôn vocab + grammar bài 1-7", "Luyện speaking bài 7", "Mock test lần 4"] },
  { day: 29, title: "Mock test tổng hợp + Speaking hub", tasks: ["Mock test 25 câu tổng", "Review bài sai nhiều nhất", "Speaking hub: luyện hết 7 bài", "Ghi âm toàn bộ speaking"] },
  { day: 30, title: "Ngày thi — Ôn cuối", tasks: ["Ôn nhanh kanji yếu", "Đọc lại passage bài 1-7", "Luyện 5 câu speaking quan trọng nhất", "Nghỉ ngơi, ngủ đủ giấc"] }
];

const SPEAKING_BANK = [
  {
    title: "Set speaking bài 1",
    prompts: [
      { q: "お名前は何ですか。", a: "わたしの名前は ___ です。" },
      { q: "お国はどちらですか。", a: "ベトナムです。" },
      { q: "趣味は何ですか。", a: "趣味は音楽と読書です。" }
    ]
  },
  {
    title: "Set speaking bài 2",
    prompts: [
      { q: "トイレはどこですか。", a: "あそこです。/ こちらです。" },
      { q: "このTシャツはいくらですか。", a: "三千円です。" },
      { q: "これは何の料理ですか。", a: "豚肉の料理です。" }
    ]
  },
  {
    title: "Set speaking bài 3",
    prompts: [
      { q: "図書館は何時から何時までですか。", a: "午前九時から午後五時までです。" },
      { q: "毎日、何時に起きますか。", a: "毎日、六時に起きます。" },
      { q: "日曜日にどこへ行きますか。", a: "公園へ行きます。" }
    ]
  },
  {
    title: "Set speaking bài 4",
    prompts: [
      { q: "ハノイからホーチミンまでどのくらいですか。", a: "飛行機で二時間くらいです。" },
      { q: "あなたの町はどんなところですか。", a: "きれいで、にぎやかなところです。" },
      { q: "あなたの国に何がありますか。", a: "きれいな山や川があります。" }
    ]
  },
  {
    title: "Set speaking bài 5",
    prompts: [
      { q: "きのう、どこかへ行きましたか。", a: "はい、公園へ行きました。" },
      { q: "旅行はどうでしたか。", a: "とても楽しかったです。" },
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

const MIDTERM_POOLS = {
  vocab: [
    { q: "ハノイは ベトナムの ___ です。", choices: ["南", "北", "東", "真ん中"], answer: 1, explain: "ハノイは北です。" },
    { q: "町(まち)の近(ちか)くに 山(やま)と ___ があります。", choices: ["雪", "川", "ビル", "雨"], answer: 1, explain: "山と川。" },
    { q: "この町(まち)は きれいで ___ です。", choices: ["買い物", "にぎやか", "先生", "午後"], answer: 1, explain: "町の様子。" },
    { q: "八月(はちがつ)の日本(にほん)は とても ___ です。", choices: ["古い", "暑い", "静か", "寒い"], answer: 1, explain: "八月は暑い。" },
    { q: "このメロンは とても ___ です。", choices: ["辛い", "苦い", "甘い", "静か"], answer: 2, explain: "メロンは甘い。" },
    { q: "先週(せんしゅう)、家族(かぞく)と ___ へ 行(い)きました。", choices: ["美術館", "天気", "外国", "駅"], answer: 0, explain: "行く場所。" },
    { q: "週末(しゅうまつ)、友だちと ___ に 行(い)きます。", choices: ["北", "買い物", "少し", "雨"], answer: 1, explain: "買い物に行きます。" },
    { q: "新(あたら)しいパソコンが ___ です。", choices: ["きれい", "ほしい", "多い", "少ない"], answer: 1, explain: "ほしいです。" },
    { q: "北海道(ほっかいどう)へ ___ です。", choices: ["先生", "行きたい", "家族", "食べたい"], answer: 1, explain: "行きたいです。" },
    { q: "休(やす)みの日(ひ)は とても ___ でした。", choices: ["好き", "静か", "楽しかった", "暑い"], answer: 2, explain: "感想は楽しかったです。" }
  ],
  kanji: [
    { q: "「外国」 の 読(よ)み方(かた)は どれですか。", choices: ["がいこく", "がいこう", "げんこく", "がくこく"], answer: 0, explain: "外国(がいこく)" },
    { q: "「午後」 の 読(よ)み方(かた)は どれですか。", choices: ["こうご", "ごご", "ごうご", "ごこ"], answer: 1, explain: "午後(ごご)" },
    { q: "「買い物」 の 読(よ)み方(かた)は どれですか。", choices: ["かいぶつ", "かいもの", "かいもつ", "がいもの"], answer: 1, explain: "買い物(かいもの)" },
    { q: "「先生」 の 読(よ)み方(かた)は どれですか。", choices: ["せんしょう", "せいせん", "せんせい", "せんぜい"], answer: 2, explain: "先生(せんせい)" },
    { q: "「とうきょう」 の 漢字(かんじ)は どれですか。", choices: ["東京", "京東", "外国", "東区"], answer: 0, explain: "東京(とうきょう)" },
    { q: "「かいもの」 の 漢字(かんじ)は どれですか。", choices: ["買い物", "見学", "飲み物", "休み"], answer: 0, explain: "買い物(かいもの)" },
    { q: "「ごぜん」 の 漢字(かんじ)は どれですか。", choices: ["午後", "前日", "午前", "外国"], answer: 2, explain: "午前(ごぜん)" },
    { q: "「せんしゅう」 の 漢字(かんじ)は どれですか。", choices: ["先週", "先生", "毎週", "前週"], answer: 0, explain: "先週(せんしゅう)" },
    { q: "「やすみ」 の 漢字(かんじ)は どれですか。", choices: ["飲み", "休み", "見み", "行み"], answer: 1, explain: "休み(やすみ)" },
    { q: "「東京」 の 読(よ)み方(かた)は どれですか。", choices: ["とうこう", "とうけい", "とうきょう", "とうきょ"], answer: 2, explain: "東京(とうきょう)" }
  ],
  grammar: [
    { q: "わたしの町(まち)は きれい___。", choices: ["です", "でした", "ます", "いました"], answer: 0, explain: "ナA + です" },
    { q: "この町(まち)は あまり にぎやか___。", choices: ["です", "じゃありません", "でした", "があります"], answer: 1, explain: "ナA否定" },
    { q: "町(まち)に 大(おお)きい公園(こうえん)___あります。", choices: ["を", "に", "が", "で"], answer: 2, explain: "Nがあります" },
    { q: "沖縄(おきなわ)は 日本(にほん)の南(みなみ)___。", choices: ["が", "を", "で", "です"], answer: 3, explain: "位置 + です" },
    { q: "東京(とうきょう)から箱根(はこね)まで どのくらい___。", choices: ["ですか", "でした", "です", "ますか"], answer: 0, explain: "どのくらいですか" },
    { q: "大阪(おおさか)から京都(きょうと)まで 電車(でんしゃ)___ 三十分(さんじゅっぷん)です。", choices: ["が", "を", "で", "に"], answer: 2, explain: "Phương tiện dùng で" },
    { q: "アユタヤは どんなところ___。", choices: ["でした", "です", "ですか", "ますか"], answer: 2, explain: "どんなところですか" },
    { q: "この町(まち)は にぎやかです。___、きれいです。", choices: ["だから", "そして", "でも", "から"], answer: 1, explain: "Nối ý dùng そして" },
    { q: "昨日(きのう)、勉強(べんきょう)し___。", choices: ["ます", "た", "ました", "ません"], answer: 2, explain: "Quá khứ động từ" },
    { q: "映画(えいが)は あまり おもしろく___。", choices: ["ないです", "ありません", "でした", "なかったです"], answer: 3, explain: "イA quá khứ phủ định" },
    { q: "日本(にほん)のアニメ___ 好(す)きです。", choices: ["を", "で", "が", "に"], answer: 2, explain: "好きです đi với が" },
    { q: "パソコン___ ほしいです。", choices: ["が", "を", "で", "へ"], answer: 0, explain: "ほしいです đi với が" },
    { q: "北海道(ほっかいどう)へ 行(い)き___です。", choices: ["ません", "ました", "たい", "ながい"], answer: 2, explain: "Vたいです" },
    { q: "渋谷(しぶや)へ 買い物(かいもの)___ 行きます。", choices: ["に", "で", "を", "が"], answer: 0, explain: "Vます + に行きます" },
    { q: "どこへも 行(い)きません___。", choices: ["でした", "です", "ます", "した"], answer: 0, explain: "Quá khứ phủ định" },
    { q: "忙(いそが)しかったです___、何(なに)も食べませんでした。", choices: ["で", "が", "から", "のに"], answer: 2, explain: "Lý do dùng から" },
    { q: "映画(えいが)を 見(み)ました。___、食事(しょくじ)をしました。", choices: ["そして", "それから", "でも", "だから"], answer: 1, explain: "Nối trình tự dùng それから" },
    { q: "旅行(りょこう)は とても 楽(たの)し___。", choices: ["かったです", "いです", "です", "でした"], answer: 0, explain: "イA quá khứ" },
    { q: "休(やす)みは どう___か。", choices: ["です", "いました", "でした", "ます"], answer: 2, explain: "どうでしたか" },
    { q: "何(なに)___ 食べませんでした。", choices: ["が", "を", "も", "で"], answer: 2, explain: "何も + phủ định" }
  ]
};
