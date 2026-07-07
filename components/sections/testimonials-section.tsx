import { reviews } from "@/components/sections/landing-data";

export function TestimonialsSection() {
  return (
    <section id="reviews" className="px-8 pb-[100px]">
      <div className="mandarin-container">
        <div className="mx-auto mb-14 max-w-[640px] text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.06em] text-[#FF8C42]">Отзывы</p>
          <h2 className="font-brand text-[38px] font-bold tracking-[-0.01em] text-[#F3EEE7]">
            Что говорят клиенты
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {reviews.map((review) => (
            <article key={review.name} className="mandarin-card rounded-[20px] p-7">
              <div className="mb-4 text-[15px] tracking-[2px] text-[#FF6A1F]">★★★★★</div>
              <p className="mb-5 text-[14.5px] leading-[1.6] text-[#D9D2C6]">«{review.text}»</p>
              <div className="flex items-center gap-3">
                <div className="flex size-[38px] items-center justify-center rounded-full bg-[linear-gradient(145deg,#FF8C42,#FF5A1F)] text-sm font-extrabold text-[#131110]">
                  {review.initial}
                </div>
                <div>
                  <div className="text-sm font-bold text-[#F3EEE7]">{review.name}</div>
                  <div className="text-[12.5px] text-[#8A8278]">{review.device}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
