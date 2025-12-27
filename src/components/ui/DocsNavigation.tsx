import {
  ChevronRight,
  CopyPlus,
  EditIcon,
  FastForward,
  LucideNavigation,
  Menu,
  Package,
  Palette,
  Puzzle,
  TableProperties,
  TextSelectIcon,
} from 'lucide-react';
import NavButton from './NavButton';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

const locationNames = {
  instalation: 'Instalación',
  'quick-start': 'Inicio rápido',
  components: 'Componentes',
  properties: 'Propiedades',
  navigation: 'Navegación',
  selection: 'Selección',
  edition: 'Edición',
  'copy-paste': 'Copiar y pegar',
  personalization: 'Personalización',
  undefined: '',
};

type SectionKey = keyof typeof locationNames;

export default function DocsNavigation() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  const getSection = (pathname: string): SectionKey | undefined => {
    const key = pathname.split('/')[1];
    if (key in locationNames) {
      return key as SectionKey;
    }
  };

  const section = getSection(pathname);

  return (
    <div className="border-b-2 border-gray-200 mb-4 md:w-[256px] md:border-none md:mb-0 py-2 md:py-5 md:px-2">
      {/* Botón mobile */}
      {section && (
        <button onClick={() => setOpen(!open)} className="flex items-center gap-5 md:hidden px-4 py-2 w-full">
          <Menu size={24} className='cursor-pointer'/>
          {/* Pequeño breadcrum */}
          <div className="flex flex-row text-xl text-gray-700 items-center">
            <p>Docs</p>
            <ChevronRight size={15} />
            <p className="text-black">{locationNames[section]}</p>
          </div>
        </button>
      )}

      <nav
        className={`
          ${open ? 'flex' : 'hidden'}
          flex-col gap-2 mt-4
          absolute w-full bg-white inset-x-0 px-2 py-2 shadow-xl rounded-xl z-10
          md:relative md:flex md:mt-0 md:gap-0 md:px-0 md:py-0 md:rounded-none md:shadow-none
        `}
      >
        <NavButton to={'instalation'}>
          <Package size={18} />
          <span>Instalación</span>
        </NavButton>
        <NavButton to={'quick-start'}>
          <FastForward size={18} />
          <span>Inicio Rápido</span>
        </NavButton>
        <NavButton to={'components'}>
          <Puzzle size={18} />
          <span>Componentes</span>
        </NavButton>
        <NavButton to={'properties'}>
          <TableProperties size={18} />
          <span>Propiedades</span>
        </NavButton>
        <NavButton to={'navigation'}>
          <LucideNavigation size={18} />
          <span>Navegación</span>
        </NavButton>
        <NavButton to={'selection'}>
          <TextSelectIcon size={18} />
          <span>Selección</span>
        </NavButton>
        <NavButton to={'edition'}>
          <EditIcon size={18} />
          <span>Edición</span>
        </NavButton>
        <NavButton to={'copy-paste'}>
          <CopyPlus size={18} />
          <span>Copiar y Pegar</span>
        </NavButton>
        <NavButton to={'personalization'}>
          <Palette size={18} />
          <span>Personalización</span>
        </NavButton>
      </nav>
    </div>
  );
}
