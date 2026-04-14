/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, 
  User as UserIcon, 
  ShoppingBag, 
  Menu, 
  X, 
  ChevronRight, 
  Instagram, 
  Twitter, 
  Facebook,
  Filter
} from 'lucide-react';
import { PRODUCTS, USER, ORDERS } from './constants';
import { Product } from './types';

type Screen = 'HOME' | 'CATALOG' | 'ACCOUNT';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('HOME');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const transitionProps = {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 },
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
  };

  return (
    <div className="min-h-screen flex flex-col bg-urban-black overflow-x-hidden bg-graffiti">
      {/* Top Banner */}
      <div className="bg-urban-purple text-white text-[10px] md:text-xs py-2 text-center font-medium tracking-widest uppercase">
        ENVÍO GRATIS EN COMPRAS MAYORES A $60.000
      </div>

      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-urban-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 h-16 md:h-20 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <button 
              onClick={() => setCurrentScreen('HOME')}
              className="text-2xl md:text-3xl font-display font-black tracking-tighter cursor-pointer"
            >
              TU TIENDA
            </button>
            <div className="hidden md:flex items-center gap-6 text-xs font-bold tracking-widest">
              {['DROPS', 'COLECCIONES', 'ARCHIVO', 'LABS'].map((item) => (
                <button 
                  key={item} 
                  onClick={() => setCurrentScreen('CATALOG')}
                  className="hover:text-urban-purple transition-colors cursor-pointer"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4 md:gap-6">
            <button className="p-2 hover:bg-white/5 rounded-full transition-colors">
              <Search size={20} />
            </button>
            <button 
              onClick={() => setCurrentScreen('ACCOUNT')}
              className={`p-2 hover:bg-white/5 rounded-full transition-colors ${currentScreen === 'ACCOUNT' ? 'text-urban-purple' : ''}`}
            >
              <UserIcon size={20} />
            </button>
            <button className="p-2 hover:bg-white/5 rounded-full transition-colors relative">
              <ShoppingBag size={20} />
              <span className="absolute top-1 right-1 bg-urban-purple text-[8px] font-bold w-4 h-4 flex items-center justify-center rounded-full">1</span>
            </button>
            <button 
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-urban-black pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-8 text-3xl font-display font-bold">
              {['DROPS', 'COLECCIONES', 'ARCHIVO', 'LABS'].map((item) => (
                <button 
                  key={item} 
                  onClick={() => {
                    setCurrentScreen('CATALOG');
                    setIsMenuOpen(false);
                  }}
                  className="text-left hover:text-urban-purple"
                >
                  {item}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          {currentScreen === 'HOME' && (
            <motion.div key="home" {...transitionProps}>
              <HomeScreen onNavigate={() => setCurrentScreen('CATALOG')} />
            </motion.div>
          )}
          {currentScreen === 'CATALOG' && (
            <motion.div key="catalog" {...transitionProps}>
              <CatalogScreen />
            </motion.div>
          )}
          {currentScreen === 'ACCOUNT' && (
            <motion.div key="account" {...transitionProps}>
              <AccountScreen />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="bg-urban-black border-t border-white/10 py-12 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <h3 className="text-xl font-display font-black">TU TIENDA</h3>
            <p className="text-sm text-white/50 leading-relaxed">
              La vanguardia del streetwear y la cultura skate. Diseños audaces para quienes viven la calle.
            </p>
          </div>
          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase mb-6">Explorar</h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li><button onClick={() => setCurrentScreen('CATALOG')} className="hover:text-white transition-colors">Catálogo</button></li>
              <li><button onClick={() => setCurrentScreen('CATALOG')} className="hover:text-white transition-colors">Nuevos Drops</button></li>
              <li><button onClick={() => setCurrentScreen('CATALOG')} className="hover:text-white transition-colors">Colaboraciones</button></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase mb-6">Ayuda</h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li><a href="#" className="hover:text-white transition-colors">Contacto</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Envíos</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Devoluciones</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase mb-6">Síguenos</h4>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-urban-purple transition-all"><Instagram size={20} /></a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-urban-purple transition-all"><Twitter size={20} /></a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-urban-purple transition-all"><Facebook size={20} /></a>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-white/30 uppercase tracking-widest">
          <p>© 2026 TU TIENDA. TODOS LOS DERECHOS RESERVADOS.</p>
          <div className="flex gap-6">
            <a href="#">Privacidad</a>
            <a href="#">Términos</a>
            <a href="#">Cookies</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function HomeScreen({ onNavigate }: { onNavigate: () => void }) {
  return (
    <div className="space-y-20 pb-20">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&q=80&w=1920" 
            alt="Streetwear store background" 
            className="w-full h-full object-cover opacity-50 scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-urban-black via-transparent to-urban-black/40" />
        </div>
        
        <div className="relative z-10 text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-7xl md:text-[12rem] font-display font-black leading-[0.8] tracking-tighter mb-4">
              TU TIENDA
            </h1>
            <p className="text-2xl md:text-5xl font-display font-light tracking-[0.2em] uppercase mb-12 text-urban-purple text-shadow-purple">
              INDUSTRIAL
            </p>
            <button 
              onClick={onNavigate}
              className="group relative px-10 py-4 bg-urban-purple text-white font-bold tracking-widest uppercase overflow-hidden transition-all hover:pr-14"
            >
              <span className="relative z-10">VER COLECCIÓN</span>
              <ChevronRight className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all" size={20} />
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300" />
            </button>
          </motion.div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-10 left-10 hidden md:block">
          <div className="text-[10px] font-bold tracking-[0.5em] uppercase text-white/20 rotate-90 origin-left">
            EST. 2026 / URBAN CULTURE
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl md:text-6xl font-display font-black tracking-tighter uppercase">DESTACADOS</h2>
            <div className="h-1 w-24 bg-urban-purple mt-4" />
          </div>
          <button 
            onClick={onNavigate}
            className="text-xs font-bold tracking-widest uppercase border-b-2 border-urban-purple pb-1 hover:text-urban-purple transition-colors"
          >
            VER TODO
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {PRODUCTS.slice(0, 4).map((product, idx) => (
            <ProductCard key={product.id} product={product} index={idx} />
          ))}
        </div>
      </section>

      {/* Marquee Section */}
      <div className="bg-urban-purple py-4 overflow-hidden whitespace-nowrap border-y-4 border-urban-black">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="flex gap-20 text-white font-display font-black text-4xl md:text-6xl uppercase italic"
        >
          {Array(10).fill(0).map((_, i) => (
            <span key={i}>STREETWEAR CULTURE • SKATE OR DIE • NEW DROP NOW •</span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

function CatalogScreen() {
  const categories = ['TODOS', 'REMERAS', 'PANTALONES', 'BUZOS & CAMPERAS', 'ACCESORIOS'];
  const [activeCategory, setActiveCategory] = useState('TODOS');

  const filteredProducts = activeCategory === 'TODOS' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 md:py-20">
      <div className="flex flex-col md:flex-row gap-12">
        {/* Sidebar */}
        <aside className="w-full md:w-64 space-y-10">
          <div>
            <h3 className="text-xl font-display font-black mb-6 uppercase tracking-tighter">CATEGORÍAS</h3>
            <div className="flex flex-col gap-2">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`text-left py-2 px-4 text-sm font-bold tracking-widest transition-all ${
                    activeCategory === cat 
                    ? 'bg-urban-purple text-white translate-x-2' 
                    : 'hover:bg-white/5 text-white/50 hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-display font-black uppercase tracking-tighter">FILTROS</h3>
            
            <div className="space-y-4">
              <p className="text-[10px] font-bold tracking-widest text-white/40 uppercase">Talla</p>
              <div className="flex flex-wrap gap-2">
                {['S', 'M', 'L', 'XL', 'XXL'].map(size => (
                  <button key={size} className="w-10 h-10 border border-white/10 flex items-center justify-center text-xs font-bold hover:border-urban-purple transition-colors">
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-[10px] font-bold tracking-widest text-white/40 uppercase">Color</p>
              <div className="flex flex-wrap gap-2">
                {['NEGRO', 'VIOLETA', 'BLANCO', 'VERDE'].map(color => (
                  <button key={color} className="px-3 py-1 border border-white/10 text-[10px] font-bold hover:bg-white/10 transition-colors">
                    {color}
                  </button>
                ))}
              </div>
            </div>

            <button className="w-full py-4 bg-urban-purple text-xs font-bold tracking-widest uppercase hover:brightness-110 transition-all">
              APLICAR FILTROS
            </button>
          </div>
        </aside>

        {/* Grid */}
        <div className="flex-grow">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-display font-black tracking-tighter uppercase">CATÁLOGO</h2>
            <p className="text-[10px] font-bold tracking-widest text-white/40 uppercase">
              {filteredProducts.length} PRODUCTOS ENCONTRADOS
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
            {filteredProducts.map((product, idx) => (
              <ProductCard key={product.id} product={product} index={idx} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function AccountScreen() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 md:py-24">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-2xl relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
          <UserIcon size={200} />
        </div>

        <h2 className="text-5xl md:text-7xl font-display font-black tracking-tighter uppercase mb-12">MI CUENTA</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div className="space-y-8">
            <div className="space-y-1">
              <p className="text-[10px] font-bold tracking-widest text-white/40 uppercase">Nombre</p>
              <p className="text-xl font-medium">{USER.name}</p>
            </div>
            <div className="space-y-1">
              <p className="text-[10px] font-bold tracking-widest text-white/40 uppercase">Email</p>
              <p className="text-xl font-medium">{USER.email}</p>
            </div>
          </div>
          <div className="space-y-8">
            <div className="space-y-1">
              <p className="text-[10px] font-bold tracking-widest text-white/40 uppercase">Teléfono</p>
              <p className="text-xl font-medium">{USER.phone}</p>
            </div>
            <div className="space-y-1">
              <p className="text-[10px] font-bold tracking-widest text-white/40 uppercase">Miembro desde</p>
              <p className="text-xl font-medium">{USER.memberSince}</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-display font-black tracking-tighter uppercase mb-8 flex items-center gap-4">
            MIS PEDIDOS
            <span className="h-px flex-grow bg-white/10" />
          </h3>
          
          <div className="space-y-4">
            {ORDERS.map(order => (
              <div key={order.id} className="group bg-white/5 hover:bg-white/10 border border-white/5 p-6 transition-all">
                <div className="flex flex-col md:flex-row justify-between gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-bold text-urban-purple">{order.id}</span>
                      <span className="text-[10px] text-white/40">{order.date}</span>
                    </div>
                    <p className="text-sm text-white/70 italic leading-relaxed">{order.items}</p>
                  </div>
                  <div className="flex items-center justify-between md:justify-end gap-8">
                    <span className="px-3 py-1 bg-urban-purple/20 text-urban-purple text-[10px] font-bold tracking-widest rounded-full">
                      {order.status}
                    </span>
                    <span className="text-xl font-display font-bold">${order.total}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function ProductCard({ product, index }: { product: Product; index: number; key?: string | number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="group cursor-pointer"
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-white/5 mb-4">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        {product.isNew && (
          <div className="absolute top-4 left-4 bg-urban-purple text-white text-[10px] font-bold px-3 py-1 tracking-widest uppercase">
            NUEVO
          </div>
        )}
        <div className="absolute inset-0 bg-urban-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <button className="bg-white text-urban-black font-bold text-[10px] tracking-widest px-6 py-3 uppercase hover:bg-urban-purple hover:text-white transition-colors">
            AÑADIR AL CARRITO
          </button>
        </div>
      </div>
      <div className="space-y-1">
        <h3 className="text-xs md:text-sm font-bold tracking-widest uppercase group-hover:text-urban-purple transition-colors">
          {product.name}
        </h3>
        <p className="text-lg md:text-xl font-display font-bold">
          ${product.price.toLocaleString('es-AR')}
        </p>
      </div>
    </motion.div>
  );
}
