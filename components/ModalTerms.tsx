'use client'

import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { X } from 'lucide-react'

export function ModalTerms({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return children

  return (
    <>
      <div onClick={() => setIsOpen(true)} className="cursor-pointer">
        {children}
      </div>

      {isOpen &&
        createPortal(
          <div
            className="fixed inset-0 z-9999 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 md:p-8 overflow-y-auto"
            onClick={() => setIsOpen(false)}
          >
            <div
              className="
                relative w-full max-w-5xl h-[90vh] md:h-[85vh]
                bg-linear-to-b from-[#000B31] via-[#001E82] to-[#0027AD]
                rounded-2xl md:rounded-3xl shadow-2xl border border-[#F0BA2B]/30
                overflow-hidden flex flex-col
              "
              onClick={(e) => e.stopPropagation()}
            >
              {/* Cabeçalho fixo */}
              <div className="shrink-0 sticky top-0 z-10 bg-linear-to-b from-[#000B31] to-transparent px-6 py-4 md:py-5 flex items-center justify-between border-b border-[#F0BA2B]/20">
                <h2 className="text-xl md:text-3xl font-bold text-[#F0BA2B]">
                  Políticas e Termos - FinWise
                </h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:text-[#F0BA2B] transition p-2 rounded-full hover:bg-white/10"
                >
                  <X size={28} />
                </button>
              </div>

              {/* Conteúdo com scroll */}
              <div className="flex-1 overflow-y-auto px-6 md:px-10 py-6 md:py-8 space-y-10 text-gray-200 leading-relaxed text-base md:text-lg">
                {/* POLÍTICA DE PRIVACIDADE */}
                <section>
                  <h3 className="text-lg md:text-2xl font-bold text-[#F0BA2B] mb-6">
                    POLÍTICA DE PRIVACIDADE - FINWISE
                  </h3>
                  <p className="text-sm text-gray-400 mb-6">Última atualização: 23/05/2024</p>

                  <p className="mb-6">
                    A sua privacidade é uma prioridade para nós. Esta Política de Privacidade descreve como o FinWise coleta, utiliza, armazena e protege os dados pessoais fornecidos pelos usuários. Nosso compromisso é garantir transparência, segurança e respeito à privacidade dos dados de todos os nossos usuários, em conformidade com as leis aplicáveis, incluindo a Lei Geral de Proteção de Dados (Lei nº 13.709/2018 – LGPD).
                  </p>

                  <p className="mb-6">
                    Ao utilizar nossos serviços, você concorda integralmente com os termos desta Política.
                  </p>

                  <ol className="list-decimal pl-6 space-y-8">
                    <li>
                      <strong className="text-[#F0BA2B]">INFORMAÇÕES COLETADAS</strong><br />
                      O FinWise coleta apenas as informações pessoais necessárias para a prestação dos serviços oferecidos. Esses dados são inseridos diretamente pelos usuários, de forma manual, durante o uso do aplicativo.<br />
                      As informações coletadas incluem, mas não se limitam a:
                      <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-300">
                        <li>Dados de cadastro, como nome, e-mail e senha;</li>
                        <li>Informações financeiras inseridas manualmente, como: Receitas, Despesas, Categorias de gastos, Datas de pagamento, Metas e planejamentos financeiros pessoais;</li>
                        <li>Dados referentes às preferências do usuário dentro do aplicativo (como alertas e configurações).</li>
                      </ul>
                      <p className="mt-2 italic text-gray-400">
                        Importante: O FinWise não coleta, não solicita e não armazena dados bancários, informações de cartão de crédito, senhas bancárias ou dados financeiros sensíveis provenientes de instituições financeiras. Todos os dados são inseridos manualmente pelo usuário, sem coleta automática de informações externas.
                      </p>
                    </li>

                  <li>
                    <strong className="text-[#F0BA2B]">FORMA DE COLETA DOS DADOS</strong><br />
                    A coleta de dados ocorre de maneira ativa e voluntária, quando o usuário:<br />
                    • Cria uma conta no aplicativo;<br />
                    • Insere receitas, despesas, metas e outras informações no app;<br />
                    • Personaliza categorias ou configurações;<br />
                    • Entra em contato com nossa equipe, seja para suporte, feedback ou dúvidas.<br />
                    Não realizamos coleta automática de dados sensíveis, não utilizamos cookies dentro do app, nem rastreamento de atividades fora da plataforma.
                  </li>

                  <li>
                    <strong className="text-[#F0BA2B]">FINALIDADE DO USO DOS DADOS</strong><br />
                    Os dados fornecidos pelos usuários são utilizados exclusivamente para os seguintes propósitos:<br />
                    • Permitir o uso pleno das funcionalidades do aplicativo, incluindo organização e visualização de receitas e despesas, geração de relatórios e gráficos financeiros personalizados, acompanhamento de metas e planejamento financeiro, emissão de lembretes e alertas configurados pelo próprio usuário;<br />
                    • Gerenciar a conta do usuário e suas preferências no aplicativo;<br />
                    • Aprimorar a experiência do usuário, corrigir erros, melhorar funcionalidades e desenvolver novos recursos;<br />
                    • Atender solicitações de suporte e responder dúvidas, reclamações ou sugestões.
                  </li>

                  <li>
                    <strong className="text-[#F0BA2B]">COMPARTILHAMENTO DE DADOS COM TERCEIROS</strong><br />
                    O FinWise não comercializa, não compartilha e não transfere dados pessoais dos usuários para terceiros com finalidade comercial, publicitária ou promocional.<br />
                    O compartilhamento de dados ocorre exclusivamente para serviços de infraestrutura tecnológica, essenciais para o funcionamento do aplicativo, como:<br />
                    • Serviços de armazenamento em nuvem e banco de dados, como o Google Firebase, responsável por garantir a segurança, backup e integridade das informações;<br />
                    • Serviços de autenticação, necessários para a criação e acesso às contas dos usuários.<br />
                    Todos os fornecedores utilizados pelo FinWise estão contratualmente comprometidos a respeitar a confidencialidade dos dados e a cumprir as normas de segurança e privacidade aplicáveis.
                  </li>

                  <li>
                    <strong className="text-[#F0BA2B]">ARMAZENAMENTO, RETENÇÃO E SEGURANÇA DOS DADOS</strong><br />
                    Seus dados são armazenados em servidores seguros, gerenciados por provedores de serviços que oferecem elevado padrão de segurança, criptografia e proteção contra acessos não autorizados.<br />
                    Os dados são retidos enquanto a conta do usuário estiver ativa ou enquanto forem necessários para a prestação dos serviços, exceto nos casos em que o usuário solicitar a exclusão dos dados.<br />
                    Medidas de segurança implementadas incluem:<br />
                    • Criptografia dos dados durante o tráfego e armazenamento;<br />
                    • Controle de acesso restrito e monitoramento de atividades internas;<br />
                    • Proteção contra acessos não autorizados, perdas acidentais, destruição ou alteração de dados;<br />
                    • Backup periódico para garantir a integridade dos dados.
                  </li>

                  <li>
                    <strong className="text-[#F0BA2B]">EXCLUSÃO DE DADOS E ENCERRAMENTO DA CONTA</strong><br />
                    O usuário pode, a qualquer momento, solicitar a exclusão total de seus dados pessoais e financeiros inseridos no aplicativo. A exclusão pode ser feita:<br />
                    • Diretamente por meio do aplicativo, nas configurações da conta, quando disponível;<br />
                    • Ou mediante solicitação enviada ao e-mail de suporte: <a href="mailto:timeFinWise@gmail.com" className="text-[#F0BA2B] hover:underline">timeFinWise@gmail.com</a>.<br />
                    Após a confirmação da solicitação, todos os dados serão excluídos de forma definitiva dos nossos servidores, exceto aqueles que precisem ser mantidos por exigência legal ou cumprimento de obrigações regulatórias.
                  </li>

                  <li>
                    <strong className="text-[#F0BA2B]">DIREITOS DO USUÁRIO</strong><br />
                    Nos termos da LGPD, o usuário tem direito a:<br />
                    • Confirmar a existência de tratamento dos seus dados;<br />
                    • Acessar seus dados pessoais;<br />
                    • Corrigir dados incompletos, inexatos ou desatualizados;<br />
                    • Solicitar a anonimização, bloqueio ou eliminação de dados desnecessários ou excessivos;<br />
                    • Portabilidade dos dados, quando aplicável;<br />
                    • Eliminação dos dados pessoais tratados com consentimento;<br />
                    • Obter informações sobre entidades públicas ou privadas com as quais compartilhamos dados;<br />
                    • Revogar o consentimento, a qualquer momento, sem prejuízo da legalidade dos tratamentos realizados anteriormente.
                  </li>

                  <li>
                    <strong className="text-[#F0BA2B]">USO DE SERVIÇOS DE TERCEIROS</strong><br />
                    O FinWise faz uso de serviços terceirizados, como o Google Firebase, para:<br />
                    • Autenticação de usuários;<br />
                    • Armazenamento seguro dos dados;<br />
                    • Monitoramento de desempenho e erros.<br />
                    Estes serviços possuem suas próprias políticas de privacidade, que devem ser consultadas diretamente pelos usuários.
                  </li>

                  <li>
                    <strong className="text-[#F0BA2B]">IDADE MÍNIMA PARA USO</strong><br />
                    O FinWise é destinado a usuários com idade igual ou superior a 16 anos. Não coletamos, de forma consciente, dados de menores de idade. Caso tomemos conhecimento de que dados de menores foram coletados sem o consentimento dos responsáveis, tomaremos as medidas necessárias para sua exclusão imediata.
                  </li>

                  <li>
                    <strong className="text-[#F0BA2B]">ALTERAÇÕES NA POLÍTICA DE PRIVACIDADE</strong><br />
                    O FinWise reserva-se o direito de alterar esta Política de Privacidade a qualquer momento, visando aprimorar seus serviços e cumprir atualizações legais.<br />
                    Sempre que houver uma alteração significativa, os usuários serão comunicados por meio do aplicativo, do site ou por outros meios de contato disponibilizados.<br />
                    Recomendamos que os usuários revisem periodicamente esta Política para se manterem informados sobre como protegemos seus dados.
                  </li>

                    <li>
                      <strong className="text-[#F0BA2B]">FALE CONOSCO</strong><br />
                      Em caso de dúvidas, solicitações, reclamações ou para exercer seus direitos relacionados à privacidade e proteção de dados, entre em contato com o responsável pelo tratamento dos dados:<br />
                      <span className="mt-2 inline-block text-[#F0BA2B] font-semibold">
                        Precisa de Ajuda?
                      </span><br />
                      E-mail: <a href="mailto:Finwise.02@gmail.com" className="text-[#F0BA2B] hover:underline">Finwise.02@gmail.com</a><br />
                    </li>
                  </ol>
                </section>

                <hr className="border-[#F0BA2B]/20 my-12" />

                {/* TERMOS E CONDIÇÕES - cole o texto completo aqui da mesma forma */}
                <section>
                  <h3 className="text-lg md:text-2xl font-bold text-[#F0BA2B] mb-6">
                    TERMOS E CONDIÇÕES DE USO - FINWISE
                  </h3>
                <p className="text-sm text-gray-400 mb-6">Última atualização: 23/05/2024</p>

                <p className="mb-6">
                  Bem-vindo(a) ao FinWise! Ao utilizar nosso aplicativo, você concorda integralmente com estes Termos e Condições de Uso. Caso não concorde com algum ponto, recomendamos não utilizar o app.
                </p>

                <ol className="list-decimal pl-6 space-y-8">
                  <li>
                    <strong className="text-[#F0BA2B]">OBJETO</strong><br />
                    O FinWise é um aplicativo voltado para organização financeira pessoal, permitindo que o usuário insira manualmente suas informações financeiras e acompanhe relatórios, metas e categorias de gastos.
                  </li>

                  <li>
                    <strong className="text-[#F0BA2B]">CONDIÇÕES DE USO</strong><br />
                    • Utilizar o aplicativo somente para fins pessoais e legais;<br />
                    • Inserir informações verídicas e de sua própria titularidade;<br />
                    • Não utilizar o app para fins ilícitos, fraudulentos ou que infrinjam direitos de terceiros;<br />
                    • Não tentar obter acesso não autorizado ao sistema, servidores ou dados de outros usuários.
                  </li>

                  <li>
                    <strong className="text-[#F0BA2B]">CADASTRO E CONTA DO USUÁRIO</strong><br />
                    • O usuário é responsável por manter a confidencialidade de suas credenciais de acesso;<br />
                    • Toda atividade realizada com sua conta será de sua responsabilidade exclusiva;<br />
                    • Caso identifique uso indevido de sua conta, o usuário deve notificar imediatamente a equipe FinWise.
                  </li>

                  <li>
                    <strong className="text-[#F0BA2B]">PROPRIEDADE INTELECTUAL</strong><br />
                    Todos os direitos sobre o aplicativo, incluindo nome, design, logotipo, funcionalidades, textos e imagens, pertencem ao FinWise e são protegidos por leis de propriedade intelectual.<br />
                    É proibida a reprodução, cópia ou distribuição sem autorização prévia e por escrito.
                  </li>

                  <li>
                    <strong className="text-[#F0BA2B]">LIMITAÇÃO DE RESPONSABILIDADE</strong><br />
                    • O FinWise não garante que o aplicativo estará livre de erros, interrupções ou falhas técnicas;<br />
                    • O app é uma ferramenta de apoio à organização financeira e não substitui consultoria profissional contábil ou financeira;<br />
                    • Não nos responsabilizamos por decisões financeiras tomadas com base nas informações inseridas ou geradas pelo aplicativo.
                  </li>

                  <li>
                    <strong className="text-[#F0BA2B]">ATUALIZAÇÕES E MODIFICAÇÕES</strong><br />
                    O FinWise poderá atualizar ou modificar o aplicativo, suas funcionalidades e estes Termos de Uso a qualquer momento. As alterações entrarão em vigor a partir de sua publicação, sendo responsabilidade do usuário verificar periodicamente a versão vigente.
                  </li>

                  <li>
                    <strong className="text-[#F0BA2B]">SUSPENSÃO E ENCERRAMENTO</strong><br />
                    Podemos suspender ou encerrar contas que violem estes Termos ou utilizem o aplicativo de forma indevida. O usuário também pode encerrar sua conta a qualquer momento, solicitando a exclusão conforme previsto na Política de Privacidade.
                  </li>

                  <li>
                    <strong className="text-[#F0BA2B]">ISENÇÃO DE GARANTIAS</strong><br />
                    O aplicativo é fornecido “no estado em que se encontra”, sem garantias de resultados específicos. O FinWise não se responsabiliza por eventuais danos diretos ou indiretos decorrentes do uso ou da impossibilidade de uso do aplicativo.
                  </li>

                  <li>
                    <strong className="text-[#F0BA2B]">LEGISLAÇÃO APLICÁVEL</strong><br />
                    Estes Termos serão regidos pelas leis da República Federativa do Brasil, em especial o Código Civil e a legislação de consumo aplicável. Fica eleito o foro da comarca de [sua cidade/estado], com exclusão de qualquer outro, por mais privilegiado que seja.
                  </li>

                  <li>
                    <strong className="text-[#F0BA2B]">CONTATO</strong><br />
                    Para dúvidas, sugestões ou solicitações relacionadas a estes Termos, entre em contato com nossa equipe:<br />
                    <span className="mt-2 inline-block text-[#F0BA2B] font-semibold">
                      Precisa de Ajuda?
                    </span><br />
                    E-mail: <a href="mailto:Finwise.02@gmail.com" className="text-[#F0BA2B] hover:underline">Finwise.02@gmail.com</a><br />
                    Responsável: Equipe FinWise
                  </li>
                </ol>
              </section>
            </div>

            {/* Rodapé fixo */}
            <div className="shrink-0 px-6 py-4 border-t border-[#F0BA2B]/20 text-center text-sm text-gray-400">
                © {new Date().getFullYear()} FinWise. Todos os direitos reservados.
              </div>
          </div>
        </div>,
          document.body
        )}
    </>
  )
}