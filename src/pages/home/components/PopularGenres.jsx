import React, { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Genres } from "../../../api/Genres";

const GENRES = [
  { title: "City Builder Games", from: "#1b3a4b", to: "#0e1f28" },
  { title: "Co-Op Games", from: "#3a2b1b", to: "#1f150e" },
  { title: "Cross Platform Games", from: "#2b1b3a", to: "#150e1f" },
  { title: "Dungeon Crawler Games", from: "#3a1b1e", to: "#1f0e10" },
  { title: "Open World Games", from: "#1b3a2a", to: "#0e1f16" },
  { title: "Racing Games", from: "#3a3a1b", to: "#1f1f0e" },
  { title: "Strategy Games", from: "#1b2a3a", to: "#0e161f" },
  { title: "Survival Games", from: "#2a1b3a", to: "#160e1f" },
];


const VISIBLE = 4;

export default function GenreSlider() {

 const [games, setGames] = useState([])

    useEffect(() => {
        console.log('useEffect работает')

        Genres()
            .then(data => {
                console.log('Данные:', data)
                setGames(data)
            })
            .catch(error => {
                console.log('Ошибка:', error)
            })
    }, [])

    console.log('Games render')

    
  const [page, setPage] = useState(0);
  const [visible, setVisible] = useState(VISIBLE);
  const containerRef = useRef(null);

  useEffect(() => {
    const calc = () => {
      const w = containerRef.current?.offsetWidth ?? 1200;
      if (w < 280) setVisible(1);
      else if (w < 820) setVisible(2);
      else if (w < 1080) setVisible(3);
      else setVisible(4);
    };
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, []);

  const maxPage = Math.max(0, Math.ceil(GENRES.length / visible) - 1);

  useEffect(() => {
    if (page > maxPage) setPage(maxPage);
  }, [visible, maxPage, page]);

  const go = (dir) => {
    setPage((p) => Math.min(Math.max(p + dir, 0), maxPage));
  };

  const translatePct = page * 100;

  return (
    <div className="bg-[#0b0c10] px-8 py-10 text-[#f4f4f6] font-sans">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-extrabold tracking-tight">
          Popular Genres
        </h2>
        <div className="flex gap-2.5">
          <NavButton
            direction="left"
            onClick={() => go(-1)}
            disabled={page === 0}
          />
          <NavButton
            direction="right"
            onClick={() => go(1)}
            disabled={page === maxPage}
          />
        </div>
      </div>

      <div ref={containerRef} className="overflow-hidden">
        <div
          className="flex gap-5 transition-transform duration-[420ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{ transform: `translateX(-${translatePct}%)` }}
        >
          {chunk(GENRES, visible).map((group, pageIdx) => (
            <div
              key={pageIdx}
              className="grid grid-cols-2 gap-5 shrink-0 w-full min-w-full"
            >
              {group.map((g) => (
                <GenreCard key={g.title} genre={g} />
              ))}
              {group.length < visible &&
                Array.from({ length: visible - group.length }).map((_, i) => (
                  <div
                    key={`pad-${i}`}
                    className="shrink-0"
                    style={{ width: `calc((100% - ${(visible - 1) * 20}px) / ${visible})` }}
                  />
                ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function GenreCard({ genre }) {
  return (
    <div className="group w-full min-w-0">
      <div className="rounded-xl overflow-hidden bg-[#16171c] border border-[#232429] p-3 cursor-pointer transition-all duration-200 ease-out group-hover:-translate-y-1">
        
        <div
          className="aspect-[16/10] rounded-lg relative overflow-hidden"
          style={{
            background: `linear-gradient(135deg, ${genre.from}, ${genre.to})`,
          }}
        >
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at 30% 20%, rgba(245,196,81,0.18), transparent 55%)",
            }}
          />
        </div>

        <div className="mt-3 text-[15px] font-semibold text-[#e9e9ec]">
          {genre.title}
        </div>

      </div>
    </div>
  );
}

function NavButton({ direction, onClick, disabled }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`w-[34px] h-[34px] rounded-full flex items-center justify-center transition-colors duration-150 ${
        disabled
          ? "bg-[#1a1b20] text-[#4a4b52] cursor-default"
          : "bg-[#25262c] text-[#f4f4f6] cursor-pointer hover:bg-[#2f3038]"
      }`}
    >
      {direction === "left" ? (
        <ChevronLeft size={18} />
      ) : (
        <ChevronRight size={18} />
      )}
    </button>
  );
}

function chunk(arr, size) {
  const out = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}