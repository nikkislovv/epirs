import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { content } from '../content'

const sections = [
  {
    title: '1. Общие положения',
    text: `ООО «ЭПИРС» (далее — «Компания») уважает конфиденциальность пользователей сайта и обязуется защищать персональные данные, которые вы предоставляете при использовании сайта. Настоящая Политика конфиденциальности описывает, какие данные мы собираем, как мы их используем и храним.`,
  },
  {
    title: '2. Какие данные мы собираем',
    text: `При заполнении формы обратной связи мы получаем следующие данные:\n— Имя;\n— Номер телефона или адрес электронной почты;\n— Текст сообщения, которое вы направляете нам.\n\nМы не собираем данные автоматически, не используем cookies для отслеживания пользователей и не запрашиваем данные, не необходимые для ответа на ваш запрос.`,
  },
  {
    title: '3. Цели обработки данных',
    text: `Предоставленные данные используются исключительно для:\n— Ответа на ваш запрос или вопрос;\n— Связи с вами по вопросам сотрудничества или приобретения продукции;\n— Информирования о наших услугах, если вы дали на это согласие.`,
  },
  {
    title: '4. Передача данных третьим лицам',
    text: `Для обработки данных из формы обратной связи мы используем сервис Web3Forms (web3forms.com). Отправленные данные передаются через защищённое соединение. Мы не продаём и не передаём ваши персональные данные третьим лицам в коммерческих целях.\n\nКомпания может раскрыть данные только в случаях, предусмотренных законодательством Российской Федерации.`,
  },
  {
    title: '5. Хранение данных',
    text: `Персональные данные хранятся в течение срока, необходимого для выполнения целей, указанных в настоящей Политике, либо до отзыва вашего согласия на обработку. После истечения срока данные уничтожаются.`,
  },
  {
    title: '6. Ваши права',
    text: `Вы имеете право:\n— Получить информацию о том, какие ваши данные обрабатываются Компанией;\n— Потребовать исправления или удаления ваших данных;\n— Отозвать согласие на обработку персональных данных в любой момент.\n\nДля реализации указанных прав обратитесь к нам по контактам, указанным ниже.`,
  },
  {
    title: '7. Контакты',
    text: `По всем вопросам, связанным с обработкой персональных данных, вы можете обратиться:\n\nООО «ЭПИРС»\nТелефон: ${content.contacts.phone}\nEmail: ${content.contacts.email}`,
  },
  {
    title: '8. Изменения политики',
    text: `Компания оставляет за собой право изменять настоящую Политику конфиденциальности. Актуальная версия всегда доступна на данной странице. Продолжение использования сайта после внесения изменений означает ваше согласие с новой редакцией.`,
  },
]

export default function PrivacyPage() {
  return (
    <>
      <Helmet>
        <title>Политика конфиденциальности — ЭПИРС</title>
      </Helmet>

      <div className="min-h-screen bg-primary flex flex-col">
        <header className="sticky top-0 bg-primary/90 backdrop-blur-sm z-50 border-b border-black/10">
          <div className="px-4 md:px-14 h-16 flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 font-['Inter'] text-sm text-black/60 hover:text-black transition-colors cursor-pointer">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M10 3L5 8L10 13" />
              </svg>
              Вернуться на сайт
            </Link>
            <img src={content.logo} alt="ЭПИРС" className="h-8 object-contain" />
          </div>
        </header>

        <main className="flex-1 max-w-3xl mx-auto w-full px-4 md:px-8 py-12 md:py-16">
          <h1 className="font-['Montserrat'] font-semibold text-2xl md:text-3xl text-black mb-2">
            Политика конфиденциальности
          </h1>
          <p className="font-['Inter'] text-sm text-black/40 mb-10">
            Последнее обновление: июнь 2025 г.
          </p>

          <div className="flex flex-col gap-8">
            {sections.map((s) => (
              <div key={s.title}>
                <h2 className="font-['Montserrat'] font-semibold text-base text-black mb-2">
                  {s.title}
                </h2>
                <p className="font-['Inter'] text-sm text-black/70 leading-relaxed whitespace-pre-line">
                  {s.text}
                </p>
              </div>
            ))}
          </div>
        </main>

        <footer className="px-4 md:px-14 py-6 border-t border-black/10">
          <p className="font-['Inter'] text-xs text-black/40 text-center">
            © {new Date().getFullYear()} ООО «ЭПИРС». Все права защищены.
          </p>
        </footer>
      </div>
    </>
  )
}
