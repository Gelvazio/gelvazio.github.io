
import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  useEffect(() => {
    // Initialize any vanilla JS functionality here
    const testimonialSlider = () => {
      const testimonials = document.querySelectorAll('.testimonial-item');
      let current = 0;
      
      const showTestimonial = (index: number) => {
        testimonials.forEach((testimonial, idx) => {
          if (idx === index) {
            (testimonial as HTMLElement).style.opacity = '1';
            (testimonial as HTMLElement).style.transform = 'translateX(0)';
          } else {
            (testimonial as HTMLElement).style.opacity = '0';
            (testimonial as HTMLElement).style.transform = 'translateX(-20px)';
          }
        });
      };

      // Initialize
      showTestimonial(current);
      
      // Auto-rotate testimonials
      setInterval(() => {
        current = (current + 1) % testimonials.length;
        showTestimonial(current);
      }, 5000);
    };

    // Execute after DOM is loaded
    setTimeout(() => {
      testimonialSlider();
    }, 100);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation Bar */}
      <nav className="bg-gradient-to-r from-blue-900 to-cyan-800 p-4 text-white">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">StockMaster</div>
          <div className="hidden md:flex space-x-6">
            <a href="#features" className="hover:text-cyan-300 transition-colors">Recursos</a>
            <a href="#how-it-works" className="hover:text-cyan-300 transition-colors">Como Funciona</a>
            <a href="#pricing" className="hover:text-cyan-300 transition-colors">Preços</a>
            <a href="#testimonials" className="hover:text-cyan-300 transition-colors">Depoimentos</a>
          </div>
          <Button className="bg-cyan-500 hover:bg-cyan-600">Começar Grátis</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-cyan-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Gerencie seu estoque e vendas com facilidade</h1>
              <p className="text-xl mb-8">
                Uma solução completa para controle de estoque, pedidos e financeiro para seu negócio.
                Relatórios gráficos incríveis para tomar as melhores decisões.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-cyan-500 hover:bg-cyan-600 text-lg px-8 py-6">
                  Começar Grátis
                </Button>
                <Button variant="outline"
                  className="bg-cyan-500 border-white text-white hover:bg-white hover:text-blue-900 text-lg px-8 py-6">
                  Ver Demonstração
                </Button>
              </div>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
                alt="Dashboard do Sistema" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-blue-900">Recursos Poderosos</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="bg-blue-100 inline-block p-4 rounded-full mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-blue-900">Gestão de Estoque</h3>
              <p className="text-gray-600">
                Controle seu inventário em tempo real. Receba alertas de estoque baixo e gerencie múltiplos armazéns com facilidade.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="bg-blue-100 inline-block p-4 rounded-full mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-blue-900">Gestão de Pedidos</h3>
              <p className="text-gray-600">
                Acompanhe todos os pedidos do início ao fim. Processamento simplificado com atualizações automáticas de estoque.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="bg-blue-100 inline-block p-4 rounded-full mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-blue-900">Relatórios Financeiros</h3>
              <p className="text-gray-600">
                Visualize seu desempenho financeiro com gráficos intuitivos. Fechamento de caixa automático e relatórios detalhados.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-blue-900">Como Funciona</h2>
          
          <div className="flex flex-col md:flex-row items-center md:space-x-12">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <img 
                src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7" 
                alt="Dashboard do Sistema" 
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="md:w-1/2">
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">1</div>
                  <h3 className="text-2xl font-bold text-blue-900">Cadastre seus produtos</h3>
                </div>
                <p className="text-gray-600 pl-14">
                  Importe seu catálogo existente ou adicione produtos individualmente com nosso sistema intuitivo.
                </p>
              </div>
              
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">2</div>
                  <h3 className="text-2xl font-bold text-blue-900">Gerencie pedidos</h3>
                </div>
                <p className="text-gray-600 pl-14">
                  Registre pedidos rapidamente e veja o estoque se atualizar automaticamente.
                </p>
              </div>
              
              <div>
                <div className="flex items-center mb-4">
                  <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">3</div>
                  <h3 className="text-2xl font-bold text-blue-900">Analise seus resultados</h3>
                </div>
                <p className="text-gray-600 pl-14">
                  Acesse relatórios detalhados com gráficos visuais para tomar decisões estratégicas para seu negócio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-blue-900">Escolha seu Plano</h2>
          <p className="text-xl text-center mb-16 text-gray-600">Selecione o plano ideal para o tamanho do seu negócio</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Free Plan */}
            <Card className="flex flex-col h-full">
              <CardHeader className="text-center">
                <Badge className="self-start mb-2 bg-gray-200 text-gray-700">Free</Badge>
                <div className="text-3xl font-bold mb-2">Grátis</div>
                <div className="text-gray-500">Para pequenos negócios</div>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Até 20 produtos
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Gestão básica de estoque
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Limite de 10 pedidos/mês
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Relatório básico
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">Começar Grátis</Button>
              </CardFooter>
            </Card>
            
            {/* Pro Plan */}
            <Card className="flex flex-col h-full border-blue-500 border-2">
              <CardHeader className="text-center">
                <Badge className="self-start mb-2 bg-blue-500">PRO</Badge>
                <div className="text-3xl font-bold mb-2">R$49,90<span className="text-sm font-normal text-gray-500">/mês</span></div>
                <div className="text-gray-500">Para negócios em crescimento</div>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Produtos ilimitados
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Gestão completa de estoque
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Até 50 pedidos/mês
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Relatórios avançados
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Suporte por e-mail
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">Assinar PRO</Button>
              </CardFooter>
            </Card>
            
            {/* Plus Plan */}
            <Card className="flex flex-col h-full">
              <CardHeader className="text-center">
                <Badge className="self-start mb-2 bg-purple-500">PLUS</Badge>
                <div className="text-3xl font-bold mb-2">R$99,00<span className="text-sm font-normal text-gray-500">/mês</span></div>
                <div className="text-gray-500">Para médias empresas</div>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Tudo do plano PRO
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Até 500 pedidos/mês
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Multi-usuários (até 5)
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Relatórios personalizados
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Suporte prioritário
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">Assinar PLUS</Button>
              </CardFooter>
            </Card>
            
            {/* Enterprise Plan */}
            <Card className="flex flex-col h-full">
              <CardHeader className="text-center">
                <Badge className="self-start mb-2 bg-gray-900 text-white">ENTERPRISE</Badge>
                <div className="text-3xl font-bold mb-2">Personalizado</div>
                <div className="text-gray-500">Para grandes empresas</div>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Tudo do plano PLUS
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Volume ilimitado de pedidos
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Usuários ilimitados
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    API personalizada
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Gerente de conta dedicado
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Suporte 24/7
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">Fale Conosco</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gradient-to-r from-blue-900 to-cyan-800 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">O que nossos clientes dizem</h2>
          
          <div className="max-w-4xl mx-auto relative">
            <div className="testimonial-wrapper overflow-hidden">
              <div className="testimonial-item opacity-0 transition-all duration-500 ease-in-out absolute w-full px-6">
                <div className="bg-white bg-opacity-10 p-8 rounded-lg backdrop-filter backdrop-blur-sm">
                  <div className="flex items-center mb-4">
                    <div className="mr-4">
                      <div className="w-16 h-16 rounded-full bg-blue-200 flex items-center justify-center text-blue-700 text-xl font-bold">
                        MS
                      </div>
                    </div>
                    <div>
                      <div className="font-bold text-xl">Maria Silva</div>
                      <div className="text-blue-200">Loja de Roupas</div>
                    </div>
                  </div>
                  <p className="text-lg">
                    "StockMaster transformou completamente nossa operação. Antes, gastávamos horas contando estoque manualmente. 
                    Agora tudo é automatizado e temos tempo para focar no crescimento do negócio."
                  </p>
                </div>
              </div>
              
              <div className="testimonial-item opacity-0 transition-all duration-500 ease-in-out absolute w-full px-6">
                <div className="bg-white bg-opacity-10 p-8 rounded-lg backdrop-filter backdrop-blur-sm">
                  <div className="flex items-center mb-4">
                    <div className="mr-4">
                      <div className="w-16 h-16 rounded-full bg-blue-200 flex items-center justify-center text-blue-700 text-xl font-bold">
                        JP
                      </div>
                    </div>
                    <div>
                      <div className="font-bold text-xl">João Paulo</div>
                      <div className="text-blue-200">Distribuidora</div>
                    </div>
                  </div>
                  <p className="text-lg">
                    "Os relatórios financeiros são simplesmente incríveis. A visualização gráfica me permite 
                    entender rapidamente como está o desempenho do meu negócio. Economizamos muito tempo e dinheiro."
                  </p>
                </div>
              </div>
              
              <div className="testimonial-item opacity-0 transition-all duration-500 ease-in-out absolute w-full px-6">
                <div className="bg-white bg-opacity-10 p-8 rounded-lg backdrop-filter backdrop-blur-sm">
                  <div className="flex items-center mb-4">
                    <div className="mr-4">
                      <div className="w-16 h-16 rounded-full bg-blue-200 flex items-center justify-center text-blue-700 text-xl font-bold">
                        AC
                      </div>
                    </div>
                    <div>
                      <div className="font-bold text-xl">Ana Carolina</div>
                      <div className="text-blue-200">E-commerce</div>
                    </div>
                  </div>
                  <p className="text-lg">
                    "Começamos com o plano gratuito e rapidamente migramos para o PRO conforme nosso negócio crescia.
                    A facilidade de uso e o suporte ao cliente são excepcionais. Recomendo fortemente!"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Analytics Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h2 className="text-4xl font-bold mb-6 text-blue-900">Relatórios Gráficos Incríveis</h2>
              <p className="text-lg text-gray-600 mb-6">
                Visualize o desempenho do seu negócio com nossos relatórios gráficos detalhados. 
                Tenha insights valiosos sobre vendas, estoque, lucros e muito mais.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <span className="font-semibold block">Fechamento de Caixa Automático</span>
                    <span className="text-gray-600">Relatórios diários de vendas e despesas, sem esforço</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <span className="font-semibold block">Análise de Tendências</span>
                    <span className="text-gray-600">Identifique padrões e tendências para otimizar seu negócio</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <span className="font-semibold block">Previsão de Estoque</span>
                    <span className="text-gray-600">Preveja quando precisará reabastecer com base em dados históricos</span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71" 
                alt="Dashboard Analítico" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-blue-900">Pronto para simplificar seu negócio?</h2>
          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
            Junte-se a milhares de empresas que já otimizaram suas operações com o StockMaster.
            Comece gratuitamente e escale conforme seu negócio cresce.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-6">
              Começar Gratuitamente
            </Button>
            <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white text-lg px-8 py-6">
              Agendar Demonstração
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold mb-4">StockMaster</div>
              <p className="text-gray-400">
                Solução completa para gestão de estoque, pedidos e financeiro para seu negócio.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Produto</h3>
              <ul className="space-y-2">
                <li><a href="#features" className="text-gray-400 hover:text-white transition-colors">Recursos</a></li>
                <li><a href="#pricing" className="text-gray-400 hover:text-white transition-colors">Preços</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">API</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Parceiros</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Empresa</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Sobre</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Carreiras</a></li>
                <li><a href="#testimonials" className="text-gray-400 hover:text-white transition-colors">Clientes</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Suporte</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Documentação</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contato</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Status</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
            <p>&copy; 2025 StockMaster. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

