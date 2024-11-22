const Trading = () => {
  return (
    <div>
      <div className="mt-3 ">
        <h1 className="text-xl font-mons font-bold capitalize">
          learn more about trading
        </h1>

        <p className="mt-4 text-xs font-semibold capitalize font-mons ">
          Trading involves buying and selling financial instruments like stocks,
          currencies, or cryptocurrencies to make a profit. The idea is simple:
          buy low, sell high. There are various types of trading, such as day
          trading, where you make quick trades within a single day, or long-term
          investing, where you hold assets for weeks, months, or even years. To
          start, you’ll need a trading platform, some initial capital, and basic
          knowledge of the market you're trading in. Tools like charts and
          indicators help traders analyze price movements and predict trends.
          Markets can be volatile, meaning prices change quickly, offering
          opportunities to trade efficiently. Successful trading requires
          patience, discipline, and continuous learning. Start small, practice
          with demo accounts, and focus on understanding how the market works to
          develop a solid strategy for growth and profitability.
        </p>
      </div>
      <div className="w-full min-h-96 mt-6">
        <iframe
          width="100%"
          height="450"
          src="https://www.youtube.com/embed/lNPRb2GPOwI?si=0U14OAFOXSy__dg7"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Trading;
