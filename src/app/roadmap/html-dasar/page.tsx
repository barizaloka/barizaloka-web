'use client';

import React, { useCallback } from 'react';
import { 
  MiniMap, 
  Controls, 
  Background, 
  useNodesState, 
  useEdgesState, 
  addEdge, 
  Connection, 
  Edge, 
  MarkerType, 
  ReactFlowProvider, 
  ReactFlow,
  Node,
  BackgroundVariant
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

// Type definitions for better type safety
interface NodeStyleConfig {
  base: string;
  violet: string;
  indigo: string;
  blue: string;
  sky: string;
  orange: string;
  yellow: string;
  lime: string;
  pink: string;
  teal: string;
  emerald: string;
  cyan: string;
  red: string;
}

interface CustomNode extends Node {
  className: string;
}

// Custom node styles for each category
const nodeStyle: NodeStyleConfig = {
  base: 'p-4 rounded-xl border-2 shadow-md text-center font-semibold text-sm',
  violet: 'bg-purple-400 text-white border-purple-500', // Struktur Dasar
  indigo: 'bg-indigo-300 text-indigo-800 border-indigo-500', // Metadata
  blue: 'bg-blue-300 text-blue-800 border-blue-500', // Konten Teks
  sky: 'bg-sky-300 text-sky-800 border-sky-500', // List
  orange: 'bg-orange-300 text-orange-800 border-orange-500', // Tautan & Gambar
  yellow: 'bg-yellow-300 text-yellow-800 border-yellow-500', // Tabel
  lime: 'bg-lime-300 text-lime-800 border-lime-500', // Formulir
  pink: 'bg-pink-300 text-pink-800 border-pink-500', // Semantik
  teal: 'bg-teal-300 text-teal-800 border-teal-500', // Multimedia
  emerald: 'bg-emerald-300 text-emerald-800 border-emerald-500', // Elemen Interaktif
  cyan: 'bg-cyan-300 text-cyan-800 border-cyan-500', // Elemen Input
  red: 'bg-red-300 text-red-800 border-red-500', // Skrip
};

// Initial nodes for a comprehensive HTML learning flow
const initialNodes: CustomNode[] = [
  // Top-level nodes from the user's initial code
  { id: '1', position: { x: 500, y: 0 }, data: { label: '🚀 Pengenalan HTML' }, className: `${nodeStyle.base} ${nodeStyle.violet}` },
  { id: '2', position: { x: 500, y: 100 }, data: { label: '📁 Struktur Dasar Dokumen' }, className: `${nodeStyle.base} ${nodeStyle.violet}` },
  
  // -- Kategori: Struktur Dasar (Violet) --
  { id: '2.1', position: { x: 500, y: 200 }, data: { label: '<html>, <head>, <body>' }, className: `${nodeStyle.base} ${nodeStyle.violet}` },
  { id: '2.2', position: { x: 300, y: 300 }, data: { label: 'Metadata' }, className: `${nodeStyle.base} ${nodeStyle.indigo}` },

  // -- Kategori: Konten Teks (Blue) --
  { id: '3', position: { x: 100, y: 400 }, data: { label: '📝 Konten Teks' }, className: `${nodeStyle.base} ${nodeStyle.blue}` },
  { id: '3.1', position: { x: -100, y: 500 }, data: { label: '<h1> - <h6>' }, className: `${nodeStyle.base} ${nodeStyle.blue}` },
  { id: '3.2', position: { x: 100, y: 500 }, data: { label: '<p>, <br>' }, className: `${nodeStyle.base} ${nodeStyle.blue}` },
  { id: '3.3', position: { x: 300, y: 500 }, data: { label: '<strong>, <em>, <span>' }, className: `${nodeStyle.base} ${nodeStyle.blue}` },
  { id: '3.4', position: { x: 100, y: 600 }, data: { label: '<q>, <blockquote>' }, className: `${nodeStyle.base} ${nodeStyle.blue}` },
  { id: '3.5', position: { x: 300, y: 600 }, data: { label: '<abbr>, <dfn>' }, className: `${nodeStyle.base} ${nodeStyle.blue}` },
  
  // -- Kategori: List (Sky) --
  { id: '4', position: { x: 500, y: 400 }, data: { label: '📜 List' }, className: `${nodeStyle.base} ${nodeStyle.sky}` },
  { id: '4.1', position: { x: 400, y: 500 }, data: { label: '<ul>, <ol>' }, className: `${nodeStyle.base} ${nodeStyle.sky}` },
  { id: '4.2', position: { x: 600, y: 500 }, data: { label: '<li>, <dl>, <dt>, <dd>' }, className: `${nodeStyle.base} ${nodeStyle.sky}` },

  // -- Kategori: Tautan & Gambar (Orange) --
  { id: '5', position: { x: 900, y: 400 }, data: { label: '🖼️ Tautan & Gambar' }, className: `${nodeStyle.base} ${nodeStyle.orange}` },
  { id: '5.1', position: { x: 800, y: 500 }, data: { label: '<a>' }, className: `${nodeStyle.base} ${nodeStyle.orange}` },
  { id: '5.2', position: { x: 1000, y: 500 }, data: { label: '<img>, <figure>, <figcaption>' }, className: `${nodeStyle.base} ${nodeStyle.orange}` },
  
  // -- Kategori: Tabel (Yellow) --
  { id: '6', position: { x: 700, y: 600 }, data: { label: '📊 Tabel' }, className: `${nodeStyle.base} ${nodeStyle.yellow}` },
  { id: '6.1', position: { x: 600, y: 700 }, data: { label: '<table>, <thead>, <tbody>, <tfoot>' }, className: `${nodeStyle.base} ${nodeStyle.yellow}` },
  { id: '6.2', position: { x: 800, y: 700 }, data: { label: '<tr>, <th>, <td>' }, className: `${nodeStyle.base} ${nodeStyle.yellow}` },

  // -- Kategori: Formulir (Lime) --
  { id: '7', position: { x: 1100, y: 600 }, data: { label: '🎛️ Formulir' }, className: `${nodeStyle.base} ${nodeStyle.lime}` },
  { id: '7.1', position: { x: 1000, y: 700 }, data: { label: '<form>, <label>, <input>' }, className: `${nodeStyle.base} ${nodeStyle.lime}` },
  { id: '7.2', position: { x: 1200, y: 700 }, data: { label: '<select>, <textarea>, <button>' }, className: `${nodeStyle.base} ${nodeStyle.lime}` },
  
  // -- Kategori: Semantik (Pink) --
  { id: '8', position: { x: 300, y: 800 }, data: { label: '💡 Semantik' }, className: `${nodeStyle.base} ${nodeStyle.pink}` },
  { id: '8.1', position: { x: 100, y: 900 }, data: { label: '<header>, <nav>, <main>' }, className: `${nodeStyle.base} ${nodeStyle.pink}` },
  { id: '8.2', position: { x: 300, y: 900 }, data: { label: '<section>, <article>' }, className: `${nodeStyle.base} ${nodeStyle.pink}` },
  { id: '8.3', position: { x: 500, y: 900 }, data: { label: '<aside>, <footer>' }, className: `${nodeStyle.base} ${nodeStyle.pink}` },
  
  // -- Kategori: Multimedia (Teal) --
  { id: '9', position: { x: 700, y: 800 }, data: { label: '🎥 Multimedia' }, className: `${nodeStyle.base} ${nodeStyle.teal}` },
  { id: '9.1', position: { x: 600, y: 900 }, data: { label: '<video>, <audio>' }, className: `${nodeStyle.base} ${nodeStyle.teal}` },
  { id: '9.2', position: { x: 800, y: 900 }, data: { label: '<source>, <track>' }, className: `${nodeStyle.base} ${nodeStyle.teal}` },
  
  // -- Kategori: Elemen Interaktif (Emerald) --
  { id: '10', position: { x: 1100, y: 800 }, data: { label: '🖱️ Interaktif' }, className: `${nodeStyle.base} ${nodeStyle.emerald}` },
  { id: '10.1', position: { x: 1000, y: 900 }, data: { label: '<details>, <summary>' }, className: `${nodeStyle.base} ${nodeStyle.emerald}` },
  { id: '10.2', position: { x: 1200, y: 900 }, data: { label: '<dialog>' }, className: `${nodeStyle.base} ${nodeStyle.emerald}` },

  // -- Kategori: Elemen Skrip (Red) --
  { id: '11', position: { x: 900, y: 1000 }, data: { label: '⚙️ Elemen Skrip' }, className: `${nodeStyle.base} ${nodeStyle.red}` },
  { id: '11.1', position: { x: 800, y: 1100 }, data: { label: '<script>' }, className: `${nodeStyle.base} ${nodeStyle.red}` },
  { id: '11.2', position: { x: 1000, y: 1100 }, data: { label: '<noscript>' }, className: `${nodeStyle.base} ${nodeStyle.red}` },
];

// Edges connecting the nodes to create the flow
const initialEdges: Edge[] = [
  // Edges dari alur awal
  { id: 'e1-2', source: '1', target: '2', animated: true, markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'e2-2.1', source: '2', target: '2.1', animated: true, markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'e2.1-2.2', source: '2.1', target: '2.2', animated: true, markerEnd: { type: MarkerType.ArrowClosed } },

  // Edges ke kategori utama
  { id: 'e2.2-3', source: '2.2', target: '3', animated: true, markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'e2.2-4', source: '2.2', target: '4', animated: true, markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'e2.2-5', source: '2.2', target: '5', animated: true, markerEnd: { type: MarkerType.ArrowClosed } },

  // Edges untuk sub-kategori Konten Teks
  { id: 'e3-3.1', source: '3', target: '3.1', animated: true, markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'e3-3.2', source: '3', target: '3.2', animated: true, markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'e3-3.3', source: '3', target: '3.3', animated: true, markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'e3.2-3.4', source: '3.2', target: '3.4', animated: true, markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'e3.3-3.5', source: '3.3', target: '3.5', animated: true, markerEnd: { type: MarkerType.ArrowClosed } },
  
  // Edges untuk sub-kategori List
  { id: 'e4-4.1', source: '4', target: '4.1', animated: true, markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'e4-4.2', source: '4', target: '4.2', animated: true, markerEnd: { type: MarkerType.ArrowClosed } },

  // Edges untuk sub-kategori Tautan & Gambar
  { id: 'e5-5.1', source: '5', target: '5.1', animated: true, markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'e5-5.2', source: '5', target: '5.2', animated: true, markerEnd: { type: MarkerType.ArrowClosed } },
  
  // Edges untuk sub-kategori Tabel
  { id: 'e6-6.1', source: '6', target: '6.1', animated: true, markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'e6-6.2', source: '6', target: '6.2', animated: true, markerEnd: { type: MarkerType.ArrowClosed } },
  
  // Edges untuk sub-kategori Formulir
  { id: 'e7-7.1', source: '7', target: '7.1', animated: true, markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'e7-7.2', source: '7', target: '7.2', animated: true, markerEnd: { type: MarkerType.ArrowClosed } },
  
  // Edges yang menghubungkan kategori utama
  { id: 'e3-6', source: '3', target: '6', animated: true, markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'e4-6', source: '4', target: '6', animated: true, markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'e5-6', source: '5', target: '6', animated: true, markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'e6-7', source: '6', target: '7', animated: true, markerEnd: { type: MarkerType.ArrowClosed } },

  // Edges untuk kategori lanjutan
  { id: 'e7-8', source: '7', target: '8', animated: true, markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'e7-9', source: '7', target: '9', animated: true, markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'e7-10', source: '7', target: '10', animated: true, markerEnd: { type: MarkerType.ArrowClosed } },

  // Edges untuk sub-kategori Semantik
  { id: 'e8-8.1', source: '8', target: '8.1', animated: true, markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'e8-8.2', source: '8', target: '8.2', animated: true, markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'e8-8.3', source: '8', target: '8.3', animated: true, markerEnd: { type: MarkerType.ArrowClosed } },

  // Edges untuk sub-kategori Multimedia
  { id: 'e9-9.1', source: '9', target: '9.1', animated: true, markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'e9-9.2', source: '9', target: '9.2', animated: true, markerEnd: { type: MarkerType.ArrowClosed } },

  // Edges untuk sub-kategori Interaktif
  { id: 'e10-10.1', source: '10', target: '10.1', animated: true, markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'e10-10.2', source: '10', target: '10.2', animated: true, markerEnd: { type: MarkerType.ArrowClosed } },
  
  // Edges untuk kategori terakhir
  { id: 'e10-11', source: '10', target: '11', animated: true, markerEnd: { type: MarkerType.ArrowClosed } },
  
  // Edges untuk sub-kategori Skrip
  { id: 'e11-11.1', source: '11', target: '11.1', animated: true, markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'e11-11.2', source: '11', target: '11.2', animated: true, markerEnd: { type: MarkerType.ArrowClosed } },
];

// Separate Flow component to use hooks
const Flow: React.FC = () => {
  const [nodes, , onNodesChange] = useNodesState<CustomNode>(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  // Callback to handle new connections between nodes
  const onConnect = useCallback(
    (params: Connection) => setEdges((eds) => addEdge(params, eds)), 
    [setEdges]
  );

  // Function to determine node color on MiniMap
  const miniMapNodeColor = useCallback((node: CustomNode): string => {
    const colorMap: Record<string, string> = {
      [`${nodeStyle.base} ${nodeStyle.violet}`]: '#C084FC',
      [`${nodeStyle.base} ${nodeStyle.indigo}`]: '#C4B5FD',
      [`${nodeStyle.base} ${nodeStyle.blue}`]: '#A5B4FC',
      [`${nodeStyle.base} ${nodeStyle.sky}`]: '#93C5FD',
      [`${nodeStyle.base} ${nodeStyle.orange}`]: '#FDBA74',
      [`${nodeStyle.base} ${nodeStyle.yellow}`]: '#FDE68A',
      [`${nodeStyle.base} ${nodeStyle.lime}`]: '#D9F99D',
      [`${nodeStyle.base} ${nodeStyle.pink}`]: '#F472B6',
      [`${nodeStyle.base} ${nodeStyle.teal}`]: '#5EEAD4',
      [`${nodeStyle.base} ${nodeStyle.emerald}`]: '#34D399',
      [`${nodeStyle.base} ${nodeStyle.cyan}`]: '#22D3EE',
      [`${nodeStyle.base} ${nodeStyle.red}`]: '#FCA5A5',
    };

    return colorMap[node.className] || '#eee';
  }, []);

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      fitView
    >
      <MiniMap nodeColor={miniMapNodeColor} />
      <Controls />
      <Background variant={BackgroundVariant.Dots} gap={12} size={1} />
    </ReactFlow>
  );
};

const App: React.FC = () => {
  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-purple-50 to-pink-50 font-sans text-gray-800">
      <header className="p-6 text-center">
        <h1 className="text-4xl font-extrabold text-purple-800">
          Alur Pembelajaran HTML Dasar
        </h1>
        <p className="mt-2 text-lg text-gray-600">
          Jalur belajar yang terstruktur dari dasar hingga mahir.
        </p>
      </header>
      <main className="flex-grow w-full mb-8 border-4 border-purple-300 rounded-2xl shadow-2xl overflow-hidden">
        <ReactFlowProvider>
          <Flow />
        </ReactFlowProvider>
      </main>
    </div>
  );
};

export default App;
