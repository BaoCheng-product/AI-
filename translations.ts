import { Language } from './types';

type Translation = {
  header: {
    home: string;
    article: string;
    pricing: string;
    oneAccounting: string;
    getStarted: string;
  };
  landing: {
    title: string;
    subtitle: string;
    whatsappButton: string;
    otherAppsButton: string;
    fab: string;
    mockup: {
      voiceMessage: string;
      aiResponse: string;
      dietCategory: string;
      shoppingCategory: string;
      time: string;
      lunchItem: string;
      shoppingItem: string;
    };
    useCases: {
      tag: string;
      title: string;
      description: string;
      cards: { text: string; imageUrl: string }[];
    };
    coreFeatures: {
      tag: string;
      title: string;
      slides: {
        title: string;
        description: string;
        buttonText: string;
        imageUrl: string;
      }[];
    };
    articles: {
        tag: string;
        title: string;
        buttonText: string;
        featured: {
            title: string;
            description: string;
            author: string;
            imageUrl: string;
        };
        list: {
            title: string;
            description: string;
            imageUrl: string;
        }[];
    };
    security: {
        tag: string;
        title: string;
        description: string;
        images: { url: string; position: string }[];
    };
    pricing: {
        tag: string;
        title: string;
        plans: {
            name: string;
            description: string;
            price: string;
            features: string[];
            buttonText: string;
            recommended: boolean;
        }[];
    };
    testimonials: {
        tag: string;
        title: string;
        reviews: {
            avatar: string;
            name: string;
            text: string;
        }[];
    };
    finalCta: {
        title: string;
        description: string;
        buttonText: string;
    };
  };
  profileMenu: {
    yourProfile: string;
    general: string;
    about: string;
    logout: string;
  };
  chat: {
    welcome: {
      title: string;
      subtitle1: string;
      subtitle2: string;
    };
    thinking: string;
    errorMessage: string;
    placeholder: string;
    listening: string;
    voiceAccounting: string;
    micPermissionTooltip: string;
    micPermissionDeniedAlert: string;
    micPermissionRequiredAlert: string;
    mockTranscription: string;
    micTooltip: {
      releaseToSend: string;
      releaseToCancel: string;
    };
  };
  profile: {
    premium: {
      title: string;
      subtitle: string;
      button: string;
    };
  };
  settings: {
    account: string;
    general: string;
    about: string;
    signOut: string;
  };
  account: {
    name: string;
    email: string;
    connectedAccounts: string;
    connected: string;
    connect: string;
    connectHint: string;
    feedback: string;
    feedbackPrompt: string;
    feedbackOptions: {
      verySatisfied: string;
      satisfied: string;
      neutral: string;
      unsatisfied: string;
      veryUnsatisfied: string;
    };
  };
  about: {
    followUs: string;
    contactUs: string;
    contactDescription: string;
    feedbackButton: string;
    termsTitle: string;
  };
  general: {
    language: string;
    defaultCurrency: string;
    currencyOptions: {
      cny: string;
      usd: string;
      eur: string;
      jpy: string;
      gbp: string;
      aud: string;
      cad: string;
      chf: string;
      hkd: string;
      sgd: string;
    };
  };
  footer: {
    copyright: string;
    terms: string;
    privacy: string;
  };
};

export const translations: Record<Language, Translation> = {
  en: {
    header: {
      home: 'Home',
      article: 'Article',
      pricing: 'Pricing',
      oneAccounting: 'One Accounting',
      getStarted: 'Get Started',
    },
    landing: {
      title: 'AI Expense Tracker That <br/> Works in Your Chat Apps',
      subtitle: 'Manage Finances Instantly via',
      whatsappButton: 'Get Started on WhatsApp',
      otherAppsButton: 'Try On Other Apps',
      fab: 'Chat Giraffe',
      mockup: {
        voiceMessage: 'Lunch cost $120, online clothing purchase $300, please record it.',
        aiResponse: 'Okay, I understand, completed.',
        dietCategory: 'Diet',
        shoppingCategory: 'Shopping',
        time: 'Today 16:20',
        lunchItem: 'Lunch Gathering',
        shoppingItem: 'Online Clothing Purchase',
      },
      useCases: {
        tag: 'Use Cases',
        title: 'Joined <span class="text-blue-600">over a million</span> users in just <span class="text-blue-600">six months</span>',
        description: 'Real world use cases. Through intelligent analysis and simple chat interface, we help you better manage your spending and optimize your financial health. Over a million users share their experiences.',
        cards: [
          { text: 'How can managing finances be done by chatting with Giraffe AI...', imageUrl: 'https://images.unsplash.com/photo-1554224155-1696413565d3?q=80&w=2070&auto=format&fit=crop' },
          { text: 'A mother and child using a phone.', imageUrl: 'https://images.unsplash.com/photo-1579592233370-1b4317a35414?q=80&w=1964&auto=format&fit=crop' },
          { text: 'A man looking at a laptop with charts.', imageUrl: 'https://images.unsplash.com/photo-1632345031435-872b9a2b5d84?q=80&w=2070&auto=format&fit=crop' },
          { text: 'A user interface showing a consumption report.', imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop' },
          { text: 'Giraffe AI can help me generate consumption trend charts...', imageUrl: 'https://images.unsplash.com/photo-1590402494587-44b71d7772f6?q=80&w=2070&auto=format&fit=crop' }
        ]
      },
      coreFeatures: {
        tag: 'Core Feature',
        title: 'Chatty Giraffe AI helps you easily manage finances with smart bookkeeping',
        slides: [
          { title: 'Bank Statement AI Money-Saving Suggestions', description: 'Multi-dimensional analysis of spending trends, clear consumption insights, optimized budget structure, more controlled expenses, and easier financial management.', buttonText: 'Get Started', imageUrl: 'https://images.unsplash.com/photo-1611926653458-0929221125d3?q=80&w=1974&auto=format&fit=crop' },
          { title: 'Smart Budgeting and Expense Tracking', description: 'Automatically track your expenses and set budgets to stay on top of your financial goals. Get alerts when you are close to your limits.', buttonText: 'Learn More', imageUrl: 'https://images.unsplash.com/photo-1634733301494-0a8a6c5e2e0e?q=80&w=1974&auto=format&fit=crop' }
        ]
      },
      articles: {
          tag: 'Popular articles',
          title: "ChatGiraffe's 24-Hour Featured Popular Articles",
          buttonText: "View More Articles",
          featured: {
              title: "Travel Smart: Ditch the Receipt Clutter with AI Scanning",
              description: "Remember that feeling after an amazing trip? You’re buzzing with memories, but then reality hits—a wallet or purse completely stuffed with receipts. You know you should sort them, but the task feels daunting.",
              author: "ChatGiraffe",
              imageUrl: "https://images.unsplash.com/photo-1611095965958-69a4c1473266?q=80&w=2070&auto=format&fit=crop"
          },
          list: [
              { title: "Smart Spending: How AI Makes Bookkeeping Easy", description: "We've all been there: staring at a bank statement, unsure where all our money went.", imageUrl: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=2070&auto=format&fit=crop" },
              { title: "Coffee Shop Revolution: My AI Budgeting Breakthrough", description: "Ever had that feeling? You grab a latte, and... thought stops there. Small choices, quickly shaking my wallet.", imageUrl: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1887&auto=format&fit=crop" },
              { title: "Beyond Spreadsheets: My Journey to Smarter Personal Spending with AI", description: "I used to be a checking-my-bank-statement-at-the-end-of-every-month person, scared to watch.", imageUrl: "https://images.unsplash.com/photo-1639755243884-6a0536417224?q=80&w=2070&auto=format&fit=crop" }
          ]
      },
      security: {
          tag: 'secured protection',
          title: 'Data Encryption, Security Guaranteed',
          description: "All data is stored with multiple encryption technologies, accessible only to you, strictly protecting your privacy and financial information.",
          images: [
            {url: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=2070&auto=format&fit=crop', position: 'top-0 left-10'},
            {url: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=2070&auto=format&fit=crop', position: 'top-1/3 right-0'},
            {url: 'https://images.unsplash.com/photo-1556155092-490a1ba16284?q=80&w=2070&auto=format&fit=crop', position: 'bottom-0 right-10'},
            {url: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1974&auto=format&fit=crop', position: 'bottom-1/4 left-0'},
          ]
      },
      pricing: {
          tag: 'Our Pricing',
          title: 'Flexible Pricing, Easy Selection',
          plans: [
              { name: 'Free Plan', description: 'Basic Bookkeeping, Automatic Categorization, Ideal For Personal Daily Accounting.', price: '$0', features: ['Basic AI support', 'Secure Storage & Information Confidentiality', 'Basic Data Analysis'], buttonText: 'Get Started', recommended: false },
              { name: 'Business Plan', description: 'Multi-Account Management, Team Collaboration, Dedicated Customer Service.', price: '$36', features: ['Multi-Account Support', 'Automatic Bank Statement Synchronization', 'Intelligent Spending Categorization', 'Exportable Financial Reports', 'Team Collaboration Features', 'Data Encryption Protection'], buttonText: 'Get Started', recommended: true }
          ]
      },
      testimonials: {
          tag: 'Universal praise',
          title: 'Highly popular and loved by users like you',
          reviews: [
              { avatar: 'https://randomuser.me/api/portraits/women/68.jpg', name: 'Emily R.', text: "Finally stopped using pen/pencil to payback! My bank statement analysis pointed out I was overpaying $50/month for a gym membership. Switched plans, now putting that extra into my 401(k)." },
              { avatar: 'https://randomuser.me/api/portraits/men/32.jpg', name: 'John S.', text: "Managing freelance income is hectic, but it cuts through the noise. Its cash flow analysis helps me set aside money for taxes and save months. Last quarter, I didn't stress about the deadline because I had the funds ready - thank you, ChatGiraffe!" },
              { avatar: 'https://randomuser.me/api/portraits/women/44.jpg', name: 'Jessica M.', text: "My bank statement used to look like a jumble of Target runs and coffee bills. I was overpaying $25/month on my Spotify family plan (turns out my cousin stopped using it months ago!), and suggested I bargain on my car insurance. Now I'm using ChatGiraffe - putting that straight into my vacation fund." },
              { avatar: 'https://randomuser.me/api/portraits/men/46.jpg', name: 'Michael B.', text: "As a Zip freelance tracking receipts used to be a nightmare! Its cash flow business expenses - saved me $300 in taxes last month and helped me claim $200 in home office deductions!" },
              { avatar: 'https://randomuser.me/api/portraits/women/31.jpg', name: 'Sarah L.', text: "Finally stopped using pen/pencil to payback! My bank statement analysis pointed out I was overpaying $50/month for a gym membership. Switched plans, now putting that extra into my 401(k)." },
              { avatar: 'https://randomuser.me/api/portraits/men/75.jpg', name: 'David C.', text: "Managing freelance income is hectic, but it cuts through the noise. Its cash flow analysis helps me set aside money for taxes and save months. Last quarter, I didn't stress about the deadline because I had the funds ready - thank you, ChatGiraffe!" }
          ]
      },
      finalCta: {
        title: 'Start your AI bookkeeping journey today.',
        description: 'Join thousands of users who are already proficient in bookkeeping and financial management. Create a free account now to start the journey.',
        buttonText: 'Get Started on WhatsApp',
      }
    },
    profileMenu: {
      yourProfile: 'Your Profile',
      general: 'General',
      about: 'About ChatGiraffe',
      logout: 'Logout',
    },
    chat: {
      welcome: {
        title: 'Welcome To Chat Giraffe',
        subtitle1: 'Manage Your Finances Online With Chat Giraffe.',
        subtitle2: 'No Third-Party Apps Required',
      },
      thinking: 'ChatGiraffe is thinking...',
      errorMessage: 'Sorry, something went wrong. Please try again.',
      placeholder: 'Send a message to Chat Giraffe',
      listening: 'Listening...',
      voiceAccounting: 'Voice accounting',
      micPermissionTooltip: 'Please enable microphone permissions in your browser settings',
      micPermissionDeniedAlert: 'Microphone permission is denied. Please enable it in your browser settings.',
      micPermissionRequiredAlert: 'Microphone permission is required for voice input.',
      mockTranscription: "Breakfast 5 yuan, dinner 5 yuan.",
      micTooltip: {
        releaseToSend: 'Release to send, slide up to cancel',
        releaseToCancel: 'Release to cancel',
      },
    },
    profile: {
      premium: {
        title: 'Unlimited Use',
        subtitle: 'Chat Giraffe Premium Plan',
        button: 'Get started for free$0',
      },
    },
    settings: {
      account: 'Account',
      general: 'General',
      about: 'About ChatGiraffe',
      signOut: 'Sign Out',
    },
    account: {
      name: 'Name',
      email: 'Email',
      connectedAccounts: 'Connected Accounts',
      connected: 'Connected',
      connect: 'Connect',
      connectHint: 'Connect your Google or Apple account to sign in to ChatGiraffe easily',
      feedback: 'Feedback To Us',
      feedbackPrompt: 'How do you feel ?',
      feedbackOptions: {
        verySatisfied: 'Very Satisfied',
        satisfied: 'Satisfied',
        neutral: 'Neutral',
        unsatisfied: 'Unsatisfied',
        veryUnsatisfied: 'Very Unsatisfied',
      },
    },
    about: {
      followUs: 'Follow Us',
      contactUs: 'Contact Us',
      contactDescription: 'Feedback, Bug Reports, Feature Requests',
      feedbackButton: 'Feedback',
      termsTitle: 'Terms',
    },
    general: {
      language: 'Language',
      defaultCurrency: 'Default Currency',
      currencyOptions: {
        cny: 'CNY - Chinese Yuan',
        usd: 'USD - US Dollar',
        eur: 'EUR - Euro',
        jpy: 'JPY - Japanese Yen',
        gbp: 'GBP - British Pound',
        aud: 'AUD - Australian Dollar',
        cad: 'CAD - Canadian Dollar',
        chf: 'CHF - Swiss Franc',
        hkd: 'HKD - Hong Kong Dollar',
        sgd: 'SGD - Singapore Dollar',
      },
    },
    footer: {
      copyright: '© 2025 ChatGiraffe All Rights Reserved',
      terms: 'Terms Of Use',
      privacy: 'Privacy Policy',
    },
  },
  zh: {
    header: {
      home: '首页',
      article: '文章',
      pricing: '价格',
      oneAccounting: '壹记账',
      getStarted: '开始使用',
    },
    landing: {
      title: 'AI记账应用，<br/>在您的聊天应用中工作',
      subtitle: '即时管理财务通过',
      whatsappButton: '在WhatsApp上开始',
      otherAppsButton: '尝试其他应用',
      fab: '聊天长颈鹿',
      mockup: {
        voiceMessage: '午餐花费$120，在线购买衣物$300，请记录。',
        aiResponse: '好的，我明白了，已完成。',
        dietCategory: '餐饮',
        shoppingCategory: '购物',
        time: '今天 16:20',
        lunchItem: '午餐聚会',
        shoppingItem: '在线服装购买',
      },
      useCases: {
        tag: '用户案例',
        title: '仅<span class="text-blue-600">六个月</span>内就吸引了<span class="text-blue-600">超过一百万</span>用户',
        description: '真实世界的用例。通过智能分析和简单的聊天界面，我们帮助您更好地管理您的支出并优化您的财务健康。超过一百万用户分享他们的经验。',
        cards: [
          { text: '如何通过与 Giraffe AI 聊天来管理财务...', imageUrl: 'https://images.unsplash.com/photo-1554224155-1696413565d3?q=80&w=2070&auto=format&fit=crop' },
          { text: '一个母亲和孩子在使用手机。', imageUrl: 'https://images.unsplash.com/photo-1579592233370-1b4317a35414?q=80&w=1964&auto=format&fit=crop' },
          { text: '一个男人看着带有图表的笔记本电脑。', imageUrl: 'https://images.unsplash.com/photo-1632345031435-872b9a2b5d84?q=80&w=2070&auto=format&fit=crop' },
          { text: '一个显示消费报告的用户界面。', imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop' },
          { text: 'Giraffe AI 可以帮助我生成消费趋势图...', imageUrl: 'https://images.unsplash.com/photo-1590402494587-44b71d7772f6?q=80&w=2070&auto=format&fit=crop' }
        ]
      },
      coreFeatures: {
        tag: '核心功能',
        title: 'Chatty Giraffe AI 帮您轻松通过智能记账管理财务',
        slides: [
          { title: '银行对账单AI省钱建议', description: '多维度分析消费趋势，清晰的消费洞察，优化的预算结构，更可控的开支，以及更轻松的财务管理。', buttonText: '开始使用', imageUrl: 'https://images.unsplash.com/photo-1611926653458-0929221125d3?q=80&w=1974&auto=format&fit=crop' },
          { title: '智能预算和费用跟踪', description: '自动跟踪您的开支并设置预算，以掌握您的财务目标。当您接近预算限额时会收到提醒。', buttonText: '了解更多', imageUrl: 'https://images.unsplash.com/photo-1634733301494-0a8a6c5e2e0e?q=80&w=1974&auto=format&fit=crop' }
        ]
      },
      articles: {
          tag: '热门文章',
          title: "ChatGiraffe 24小时精选热门文章",
          buttonText: "查看更多文章",
          featured: {
              title: "智能旅行：用AI扫描告别收据混乱",
              description: "还记得那次美妙旅行后的感觉吗？你充满了回忆，但现实却是——一个塞满了收据的钱包或手袋。你知道应该整理它们，但这项任务看起来令人望而生畏。",
              author: "ChatGiraffe",
              imageUrl: "https://images.unsplash.com/photo-1611095965958-69a4c1473266?q=80&w=2070&auto=format&fit=crop"
          },
          list: [
              { title: "智能消费：AI如何让记账变得简单", description: "我们都曾有过这样的经历：盯着银行对账单，不确定我们所有的钱都花到哪里去了。", imageUrl: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=2070&auto=format&fit=crop" },
              { title: "咖啡店革命：我的AI预算突破", description: "你曾有过那种感觉吗？你买了一杯拿铁，然后……思绪就此打住。小的选择，迅速动摇了我的钱包。", imageUrl: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1887&auto=format&fit=crop" },
              { title: "超越电子表格：我用AI实现更智能个人消费的旅程", description: "我曾经是那种每个月底都会查看银行对账单的人，害怕看到结果。", imageUrl: "https://images.unsplash.com/photo-1639755243884-6a0536417224?q=80&w=2070&auto=format&fit=crop" }
          ]
      },
      security: {
          tag: '安全保护',
          title: '数据加密，安全有保障',
          description: "所有数据都通过多种加密技术存储，只有您可以访问，严格保护您的隐私和财务信息。",
          images: [
            {url: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=2070&auto=format&fit=crop', position: 'top-0 left-10'},
            {url: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=2070&auto=format&fit=crop', position: 'top-1/3 right-0'},
            {url: 'https://images.unsplash.com/photo-1556155092-490a1ba16284?q=80&w=2070&auto=format&fit=crop', position: 'bottom-0 right-10'},
            {url: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1974&auto=format&fit=crop', position: 'bottom-1/4 left-0'},
          ]
      },
      pricing: {
          tag: '我们的价格',
          title: '灵活定价，轻松选择',
          plans: [
              { name: '免费计划', description: '基础记账，自动分类，适合个人日常记账。', price: '¥0', features: ['基础AI支持', '安全存储和信息保密', '基础数据分析'], buttonText: '开始使用', recommended: false },
              { name: '商业计划', description: '多账户管理，团队协作，专属客户服务。', price: '¥36', features: ['多账户支持', '自动银行对账单同步', '智能消费分类', '可导出的财务报告', '团队协作功能', '数据加密保护'], buttonText: '开始使用', recommended: true }
          ]
      },
      testimonials: {
          tag: '普遍好评',
          title: '深受像您一样的用户欢迎和喜爱',
          reviews: [
              { avatar: 'https://randomuser.me/api/portraits/women/68.jpg', name: '艾米丽 R.', text: "终于停止用笔和纸来还款了！我的银行对账单分析指出我每月为健身房会员多付了50美元。换了计划后，现在把多余的钱存入我的401(k)了。" },
              { avatar: 'https://randomuser.me/api/portraits/men/32.jpg', name: '约翰 S.', text: "管理自由职业收入很麻烦，但它能化繁为简。它的现金流分析帮助我为税款留出钱并节省数月。上个季度，我没有因为截止日期而感到压力，因为我已经准备好了资金 - 谢谢你，ChatGiraffe！" },
              { avatar: 'https://randomuser.me/api/portraits/women/44.jpg', name: '杰西卡 M.', text: "我的银行对账单以前看起来就像一堆塔吉特购物和小咖啡账单。我每月在Spotify家庭计划上多付了25美元（原来我表弟几个月前就没用了！），它还建议我就汽车保险进行议价。现在我正在使用ChatGiraffe - 把钱直接存入我的度假基金。" },
              { avatar: 'https://randomuser.me/api/portraits/men/46.jpg', name: '迈克尔 B.', text: "作为一名Zip自由职业者，追踪收据曾经是一场噩梦！它的现金流业务开支 - 上个月为我节省了300美元的税款，并帮助我申请了200美元的家庭办公室减税！" },
              { avatar: 'https://randomuser.me/api/portraits/women/31.jpg', name: '莎拉 L.', text: "终于停止用笔和纸来还款了！我的银行对账单分析指出我每月为健身房会员多付了50美元。换了计划后，现在把多余的钱存入我的401(k)了。" },
              { avatar: 'https://randomuser.me/api/portraits/men/75.jpg', name: '大卫 C.', text: "管理自由职业收入很麻烦，但它能化繁为简。它的现金流分析帮助我为税款留出钱并节省数月。上个季度，我没有因为截止日期而感到压力，因为我已经准备好了资金 - 谢谢你，ChatGiraffe！" }
          ]
      },
      finalCta: {
        title: '立即开始您的AI记账之旅。',
        description: '加入成千上万已经精通记账和财务管理的用户。立即创建免费账户，开始您的旅程。',
        buttonText: '在WhatsApp上开始',
      }
    },
    profileMenu: {
      yourProfile: '您的个人资料',
      general: '通用',
      about: '关于ChatGiraffe',
      logout: '登出',
    },
    chat: {
      welcome: {
        title: '欢迎来到Chat Giraffe',
        subtitle1: '通过Chat Giraffe在线管理您的财务。',
        subtitle2: '无需第三方应用',
      },
      thinking: 'ChatGiraffe正在思考……',
      errorMessage: '抱歉，出错了。请再试一次。',
      placeholder: '发送消息给Chat Giraffe',
      listening: '正在聆听...',
      voiceAccounting: '语音记账',
      micPermissionTooltip: '请在浏览器设置中启用麦克风权限',
      micPermissionDeniedAlert: '麦克风权限被拒绝。请在您的浏览器设置中启用它。',
      micPermissionRequiredAlert: '语音输入需要麦克风权限。',
      mockTranscription: "早饭5元，晚饭5元。",
      micTooltip: {
        releaseToSend: '松手发送，上移取消',
        releaseToCancel: '松手即可取消',
      },
    },
    profile: {
      premium: {
        title: '无限使用',
        subtitle: 'Chat Giraffe 高级版计划',
        button: '免费开始$0',
      },
    },
    settings: {
      account: '账户',
      general: '通用',
      about: '关于ChatGiraffe',
      signOut: '登出',
    },
    account: {
      name: '姓名',
      email: '电子邮件',
      connectedAccounts: '已连接账户',
      connected: '已连接',
      connect: '连接',
      connectHint: '连接您的Google或Apple账户以轻松登录ChatGiraffe',
      feedback: '向我们反馈',
      feedbackPrompt: '您感觉如何？',
      feedbackOptions: {
        verySatisfied: '非常满意',
        satisfied: '满意',
        neutral: '一般',
        unsatisfied: '不满意',
        veryUnsatisfied: '非常不满意',
      },
    },
    about: {
      followUs: '关注我们',
      contactUs: '联系我们',
      contactDescription: '反馈、错误报告、功能请求',
      feedbackButton: '反馈',
      termsTitle: '条款',
    },
    general: {
      language: '语言',
      defaultCurrency: '默认货币',
      currencyOptions: {
        cny: 'CNY - 人民币',
        usd: 'USD - 美元',
        eur: 'EUR - 欧元',
        jpy: 'JPY - 日元',
        gbp: 'GBP - 英镑',
        aud: 'AUD - 澳大利亚元',
        cad: 'CAD - 加拿大元',
        chf: 'CHF - 瑞士法郎',
        hkd: 'HKD - 港元',
        sgd: 'SGD - 新加坡元',
      },
    },
    footer: {
      copyright: '© 2025 ChatGiraffe 版权所有',
      terms: '使用条款',
      privacy: '隐私政策',
    },
  },
};