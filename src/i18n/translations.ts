import type { Language, NotificationFilter } from '../types'

type TranslationTree = {
  app: {
    name: string
    tagline: string
  }
  nav: {
    home: string
    notifications: string
    services: string
    profile: string
    assistant: string
    settings: string
    agency: string
  }
  home: {
    greeting: string
    greetingMorning: string
    greetingAfternoon: string
    greetingEvening: string
    newNotifications: string
    markAllRead: string
    noNotifications: string
    filters: Record<NotificationFilter, string>
  }
  tags: {
    penting: string
    makluman: string
    promosi: string
  }
  categories: {
    important: string
    appointment: string
    llm: string
    program: string
    promotion: string
  }
  detail: {
    back: string
    deliveredVia: string
    location: string
    smartSummary: string
    suggestions: string
    markRead: string
    takeAction: string
    notFound: string
  }
  toast: {
    markAllRead: string
    settingsSaved: string
    actionPassport: string
    actionAppointment: string
    actionRefund: string
    actionGeneric: string
    agencySent: string
    agencySentScheduled: string
    agencyFormIncomplete: string
  }
  profile: {
    email: string
    phone: string
  }
  assistant: {
    title: string
    subtitle: string
    placeholder: string
    send: string
    poweredBy: string
    sampleQuestions: string[]
    responses: Record<string, string> & { default: string }
  }
  settings: {
    title: string
    profile: string
    language: string
    channels: string
    channelLabels: Record<string, string>
    location: string
    integrations: string
    integrationList: string[]
    pdpa: string
    pdpaText: string
    save: string
    saved: string
  }
  agency: {
    title: string
    subtitle: string
    stats: {
      sent: string
      delivered: string
      opened: string
      clicked: string
      compliance: string
    }
    compose: string
    form: {
      agency: string
      category: string
      titleMs: string
      titleEn: string
      bodyMs: string
      bodyEn: string
      channels: string
      schedule: string
      send: string
      preview: string
    }
    recentCampaigns: string
    sent: string
    openedRate: string
  }
  time: {
    today: string
    yesterday: string
    at: string
  }
  services: {
    subtitle: string
    items: Record<string, string>
  }
}

export const translations: Record<Language, TranslationTree> = {
  ms: {
    app: {
      name: 'MyNotifikasi',
      tagline: 'Maklumat tepat, notifikasi proaktif',
    },
    nav: {
      home: 'Utama',
      notifications: 'Notifikasi',
      services: 'Perkhidmatan',
      profile: 'Profil',
      assistant: 'Pembantu Pintar',
      settings: 'Tetapan',
      agency: 'Dashboard Agensi',
    },
    home: {
      greeting: 'Hai',
      greetingMorning: 'Selamat pagi',
      greetingAfternoon: 'Selamat petang',
      greetingEvening: 'Selamat malam',
      newNotifications: 'Anda mempunyai {count} notifikasi baharu',
      markAllRead: 'Tanda semua dibaca',
      noNotifications: 'Tiada notifikasi dalam kategori ini',
      filters: {
        all: 'Semua',
        important: 'Penting',
        services: 'Perkhidmatan',
        promotions: 'Promosi',
      },
    },
    tags: {
      penting: 'Penting',
      makluman: 'Makluman',
      promosi: 'Promosi',
    },
    categories: {
      important: 'Penting',
      appointment: 'Temu Janji & Giliran',
      llm: 'Pembantu Pintar LLM',
      program: 'Makluman Program',
      promotion: 'Promosi & Info',
    },
    detail: {
      back: 'Kembali',
      deliveredVia: 'Dihantar melalui',
      location: 'Lokasi',
      smartSummary: 'Ringkasan Pintar',
      suggestions: 'Cadangan Tindakan',
      markRead: 'Tanda Dibaca',
      takeAction: 'Ambil Tindakan',
      notFound: 'Notifikasi tidak dijumpai.',
    },
    toast: {
      markAllRead: 'Semua notifikasi ditanda dibaca.',
      settingsSaved: 'Tetapan berjaya disimpan.',
      actionPassport: 'Arahan navigasi ke pejabat Imigresen dibuka.',
      actionAppointment: 'Kehadiran temujanji anda telah disahkan.',
      actionRefund: 'Pautan semakan akaun bank dibuka.',
      actionGeneric: 'Tindakan berjaya direkodkan.',
      agencySent: 'Notifikasi berjaya dihantar kepada 12,450 pengguna.',
      agencySentScheduled: 'Notifikasi dijadualkan untuk penghantaran.',
      agencyFormIncomplete: 'Sila lengkapkan tajuk dan mesej notifikasi.',
    },
    profile: {
      email: 'E-mel',
      phone: 'Telefon',
    },
    assistant: {
      title: 'Pembantu Pintar LLM',
      subtitle: 'Ringkasan pintar dan cadangan tindakan berdasarkan notifikasi anda',
      placeholder: 'Tanya tentang notifikasi, kelayakan bantuan, atau dokumen...',
      send: 'Hantar',
      poweredBy: 'Dikuasakan oleh AI — mematuhi PDPA',
      sampleQuestions: [
        'Apakah notifikasi penting saya hari ini?',
        'Adakah saya layak bantuan STR?',
        'Dokumen apa yang perlu dilengkapkan?',
        'Bila temujanji klinik saya?',
      ],
      responses: {
        important: 'Anda mempunyai 4 notifikasi penting hari ini: Pasport diluluskan (Imigresen), Peringatan temujanji (KKM), Amaran ribut petir (MetMalaysia), dan Giliran JPJ dipanggil. Cadangan: Sahkan kehadiran klinik dan ambil pasport sebelum 4 petang.',
        str: 'Berdasarkan profil anda, anda layak memohon Bantuan STR 2024. Dokumen yang diperlukan: salinan IC, penyata bank, dan pengesahan pendapatan. Anda boleh memohon melalui MyManfaat.',
        documents: 'Dokumen yang belum lengkap: (1) Salinan IC untuk permohonan STR, (2) Pengesahan temujanji klinik. Muat naik melalui MyDigital ID untuk proses lebih pantas.',
        appointment: 'Temujanji anda di Klinik Kesihatan Putrajaya pada 25 Mei 2024, jam 2:30 petang. Lokasi: Presint 11, Putrajaya. Cadangan: Tiba 15 minit awal dan bawa kad pengenalan.',
        default: 'Saya boleh bantu ringkaskan notifikasi, semak kelayakan bantuan, atau ingatkan temujanji anda. Cuba soalan sampel di atas.',
      },
    },
    settings: {
      title: 'Tetapan',
      profile: 'Profil Pengguna',
      language: 'Bahasa',
      channels: 'Saluran Notifikasi',
      channelLabels: {
        app: 'Aplikasi',
        sms: 'SMS',
        email: 'E-mel',
        push: 'Push Notification',
        whatsapp: 'WhatsApp',
      },
      location: 'Lokasi',
      integrations: 'Integrasi Platform',
      integrationList: ['MyDigital ID', 'MyGov', 'MySejahtera', 'MyManfaat', 'e-Payment'],
      pdpa: 'Privasi & PDPA',
      pdpaText:
        'Data peribadi anda dilindungi di bawah Akta Perlindungan Data Peribadi 2010. Anda boleh mengurus kebenaran data dan meminta pemadaman pada bila-bila masa.',
      save: 'Simpan Tetapan',
      saved: 'Tetapan disimpan!',
    },
    agency: {
      title: 'Dashboard Agensi',
      subtitle: 'Urus notifikasi dan analitik capaian',
      stats: {
        sent: 'Dihantar',
        delivered: 'Sampai',
        opened: 'Dibuka',
        clicked: 'Diklik',
        compliance: 'Kadar Pematuhan',
      },
      compose: 'Cipta Notifikasi',
      form: {
        agency: 'Agensi',
        category: 'Kategori',
        titleMs: 'Tajuk (BM)',
        titleEn: 'Tajuk (EN)',
        bodyMs: 'Mesej (BM)',
        bodyEn: 'Mesej (EN)',
        channels: 'Saluran Penghantaran',
        schedule: 'Jadualkan',
        send: 'Hantar Notifikasi',
        preview: 'Pratonton',
      },
      recentCampaigns: 'Kempen Terkini',
      sent: 'dihantar',
      openedRate: 'dibuka',
    },
    time: {
      today: 'Hari ini',
      yesterday: 'Semalam',
      at: 'jam',
    },
    services: {
      subtitle: 'Akses perkhidmatan kerajaan dan notifikasi berkaitan',
      items: {
        immigration: 'Imigresen & Pasport',
        clinic: 'Temujanji Klinik',
        jpj: 'JPJ & Lesen',
        tax: 'Cukai & LHDN',
        perkeso: 'PERKESO',
        education: 'Bantuan Pendidikan',
        assistant: 'Pembantu Pintar LLM',
        agency: 'Dashboard Agensi',
      },
    },
  },
  en: {
    app: {
      name: 'MyNotifikasi',
      tagline: 'Accurate info, proactive notifications',
    },
    nav: {
      home: 'Home',
      notifications: 'Notifications',
      services: 'Services',
      profile: 'Profile',
      assistant: 'Smart Assistant',
      settings: 'Settings',
      agency: 'Agency Dashboard',
    },
    home: {
      greeting: 'Hi',
      greetingMorning: 'Good morning',
      greetingAfternoon: 'Good afternoon',
      greetingEvening: 'Good evening',
      newNotifications: 'You have {count} new notifications',
      markAllRead: 'Mark all as read',
      noNotifications: 'No notifications in this category',
      filters: {
        all: 'All',
        important: 'Important',
        services: 'Services',
        promotions: 'Promotions',
      },
    },
    tags: {
      penting: 'Important',
      makluman: 'Notice',
      promosi: 'Promotion',
    },
    categories: {
      important: 'Important',
      appointment: 'Appointments & Queues',
      llm: 'LLM Smart Assistant',
      program: 'Program Notices',
      promotion: 'Promotions & Info',
    },
    detail: {
      back: 'Back',
      deliveredVia: 'Delivered via',
      location: 'Location',
      smartSummary: 'Smart Summary',
      suggestions: 'Suggested Actions',
      markRead: 'Mark as Read',
      takeAction: 'Take Action',
      notFound: 'Notification not found.',
    },
    toast: {
      markAllRead: 'All notifications marked as read.',
      settingsSaved: 'Settings saved successfully.',
      actionPassport: 'Navigation to Immigration office opened.',
      actionAppointment: 'Your appointment attendance has been confirmed.',
      actionRefund: 'Bank account check link opened.',
      actionGeneric: 'Action recorded successfully.',
      agencySent: 'Notification sent to 12,450 users.',
      agencySentScheduled: 'Notification scheduled for delivery.',
      agencyFormIncomplete: 'Please complete the title and message.',
    },
    profile: {
      email: 'Email',
      phone: 'Phone',
    },
    assistant: {
      title: 'LLM Smart Assistant',
      subtitle: 'Smart summaries and action suggestions based on your notifications',
      placeholder: 'Ask about notifications, aid eligibility, or documents...',
      send: 'Send',
      poweredBy: 'Powered by AI — PDPA compliant',
      sampleQuestions: [
        'What are my important notifications today?',
        'Am I eligible for STR aid?',
        'What documents do I need to complete?',
        'When is my clinic appointment?',
      ],
      responses: {
        important:
          'You have 4 important notifications today: Passport approved (Immigration), Appointment reminder (MOH), Thunderstorm warning (MetMalaysia), and JPJ queue called. Suggestion: Confirm clinic attendance and collect passport before 4 PM.',
        str: 'Based on your profile, you are eligible for STR Aid 2024. Required documents: IC copy, bank statement, and income verification. Apply via MyManfaat.',
        documents:
          'Incomplete documents: (1) IC copy for STR application, (2) Clinic appointment confirmation. Upload via MyDigital ID for faster processing.',
        appointment:
          'Your appointment at Putrajaya Health Clinic on 25 May 2024, at 2:30 PM. Location: Presint 11, Putrajaya. Tip: Arrive 15 minutes early and bring your ID card.',
        default:
          'I can help summarise notifications, check aid eligibility, or remind you about appointments. Try a sample question above.',
      },
    },
    settings: {
      title: 'Settings',
      profile: 'User Profile',
      language: 'Language',
      channels: 'Notification Channels',
      channelLabels: {
        app: 'App',
        sms: 'SMS',
        email: 'Email',
        push: 'Push Notification',
        whatsapp: 'WhatsApp',
      },
      location: 'Location',
      integrations: 'Platform Integrations',
      integrationList: ['MyDigital ID', 'MyGov', 'MySejahtera', 'MyManfaat', 'e-Payment'],
      pdpa: 'Privacy & PDPA',
      pdpaText:
        'Your personal data is protected under the Personal Data Protection Act 2010. You can manage data permissions and request deletion at any time.',
      save: 'Save Settings',
      saved: 'Settings saved!',
    },
    agency: {
      title: 'Agency Dashboard',
      subtitle: 'Manage notifications and reach analytics',
      stats: {
        sent: 'Sent',
        delivered: 'Delivered',
        opened: 'Opened',
        clicked: 'Clicked',
        compliance: 'Compliance Rate',
      },
      compose: 'Create Notification',
      form: {
        agency: 'Agency',
        category: 'Category',
        titleMs: 'Title (BM)',
        titleEn: 'Title (EN)',
        bodyMs: 'Message (BM)',
        bodyEn: 'Message (EN)',
        channels: 'Delivery Channels',
        schedule: 'Schedule',
        send: 'Send Notification',
        preview: 'Preview',
      },
      recentCampaigns: 'Recent Campaigns',
      sent: 'sent',
      openedRate: 'opened',
    },
    time: {
      today: 'Today',
      yesterday: 'Yesterday',
      at: 'at',
    },
    services: {
      subtitle: 'Access government services and related notifications',
      items: {
        immigration: 'Immigration & Passport',
        clinic: 'Clinic Appointments',
        jpj: 'JPJ & Licences',
        tax: 'Tax & LHDN',
        perkeso: 'SOCSO',
        education: 'Education Aid',
        assistant: 'LLM Smart Assistant',
        agency: 'Agency Dashboard',
      },
    },
  },
}
