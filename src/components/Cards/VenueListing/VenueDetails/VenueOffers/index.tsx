type VenueOffersProps = {
  meta: { wifi: boolean; parking: boolean; breakfast: boolean; pets: boolean }
}

export default function VenueOffers({ meta }: VenueOffersProps) {
  return (
    <div className="grid max-w-screen-md gap-4">
      <h2 className="text-xl font-semibold text-text">Offers</h2>
      <div className="grid gap-1 md:grid-flow-col md:grid-rows-2">
        <div className="flex items-center gap-1 py-1 text-text">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="h-6 w-6 lg:h-8 lg:w-8"
          >
            <path d="M16.761 10.497a3.726 3.726 0 0 0 2.652-1.099l3.609-3.607a.765.765 0 0 0 .04-1.05.75.75 0 0 0-1.086-.026L18.759 7.93a.576.576 0 0 1-.814 0 .592.592 0 0 1 .012-.827L21.16 3.9a.75.75 0 0 0-.026-1.086.732.732 0 0 0-.496-.189.783.783 0 0 0-.554.23l-3.2 3.2a.576.576 0 0 1-.814 0 .593.593 0 0 1 .012-.827l3.203-3.202A.75.75 0 0 0 19.259.94a.732.732 0 0 0-.497-.19.784.784 0 0 0-.554.23l-3.606 3.607a3.727 3.727 0 0 0-1.099 2.653v.386a.75.75 0 0 1-.22.531l-1.669 1.67a.188.188 0 0 1-.265 0L3.226 1.703A.75.75 0 0 0 2.168 1.7c-.711.704-1.09 1.697-1.09 2.872-.005 1.941 1.015 4.172 2.662 5.816l4.005 4.005a3.037 3.037 0 0 0 2.146.888 3 3 0 0 0 .76-.098.759.759 0 0 1 .191-.025.747.747 0 0 1 .508.199l.534.493a.756.756 0 0 1 .216.526v.26a2.237 2.237 0 0 0 .645 1.577l4.221 4.292.004.005a2.498 2.498 0 0 0 3.532-3.533l-6.327-6.325a.188.188 0 0 1 0-.265l1.669-1.67a.75.75 0 0 1 .531-.22z" />
            <path d="M9.891 16.781a4.562 4.562 0 0 1-3.204-1.324l-.65-.65a.375.375 0 0 0-.53 0l-3.984 3.964c-.71.71-.964 1.755-.612 2.779a1.453 1.453 0 0 0 .07.169c.472.969 1.39 1.531 2.394 1.531a2.61 2.61 0 0 0 1.858-.771l5.314-5.339a.22.22 0 0 0 .062-.174v-.012a.217.217 0 0 0-.241-.2 4.547 4.547 0 0 1-.477.027" />
          </svg>
          {meta.breakfast ? (
            <span>Breakfast included</span>
          ) : (
            <span className="line-through">Breakfast not included</span>
          )}
        </div>
        <div className="flex items-center gap-1 py-1 text-text">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="h-6 w-6 lg:h-8 lg:w-8"
          >
            <path d="M20.985 10.349a.75.75 0 0 0-.047-.144l-1.771-4.133c-.408-.955-1.401-1.572-2.532-1.572h-9.27c-1.129 0-2.123.617-2.531 1.572L3.06 10.205A.736.736 0 0 0 3 10.5v8.25a.75.75 0 0 0 .75.75h1.5a.75.75 0 0 0 .75-.75V18h12v.75a.75.75 0 0 0 .75.75h1.5a.75.75 0 0 0 .75-.75V10.5a.75.75 0 0 0-.015-.151M6.75 15a1.5 1.5 0 1 1 1.5-1.5 1.5 1.5 0 0 1-1.5 1.5m10.5 0a1.5 1.5 0 1 1 1.5-1.5 1.5 1.5 0 0 1-1.5 1.5M4.887 9.75 6.21 6.663C6.38 6.267 6.844 6 7.365 6h9.271c.52 0 .984.267 1.154.663l1.323 3.087z" />
          </svg>
          {meta.parking ? (
            <span>Parking allowed</span>
          ) : (
            <span className="line-through">Parking not allowed</span>
          )}
        </div>
        <div className="flex items-center gap-1 py-1 text-text">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="h-6 w-6 lg:h-8 lg:w-8"
          >
            <path d="M22.987 8.566c-.26-.618-.692-1.064-1.25-1.289l-.007-.003a2.18 2.18 0 0 0-.797-.15h-.03c-1.277.019-2.58 1.104-3.243 2.7-.486 1.167-.542 2.422-.149 3.358.26.619.693 1.065 1.253 1.289l.006.002a2.18 2.18 0 0 0 .797.15c1.289 0 2.606-1.085 3.281-2.702.48-1.166.533-2.42.14-3.356m-5.103 6.885c-.736-.443-1.432-.861-1.887-1.613C14.744 11.756 13.986 10.5 12 10.5s-2.745 1.256-4.003 3.338c-.456.753-1.153 1.172-1.892 1.616-.847.509-1.722 1.035-2.1 2.07a3.136 3.136 0 0 0-.218 1.172c0 1.685 1.313 3.056 2.925 3.056.832 0 1.718-.288 2.655-.593.901-.293 1.832-.597 2.638-.597s1.734.303 2.632.597c.935.303 1.816.591 2.651.591 1.61 0 2.92-1.371 2.92-3.056a3.141 3.141 0 0 0-.223-1.172c-.378-1.036-1.253-1.562-2.1-2.071M7.031 8.852c.558.7 1.266 1.085 1.993 1.085a2.016 2.016 0 0 0 .297-.022c1.517-.223 2.463-2.075 2.152-4.219-.129-.901-.476-1.74-.973-2.363-.557-.698-1.266-1.083-1.993-1.083a2.016 2.016 0 0 0-.297.022c-1.517.223-2.463 2.075-2.152 4.219.129.9.476 1.739.973 2.362m7.648 1.063a2.016 2.016 0 0 0 .297.022c.728 0 1.435-.385 1.993-1.085.496-.623.841-1.462.973-2.362.31-2.143-.635-3.995-2.152-4.219a2.016 2.016 0 0 0-.297-.022c-.727 0-1.436.385-1.993 1.083-.497.622-.844 1.462-.973 2.364-.31 2.143.635 3.995 2.152 4.218m-9.448 4.56.007-.002c.559-.225.992-.67 1.251-1.288.393-.938.338-2.191-.148-3.359-.672-1.615-1.989-2.701-3.276-2.701a2.175 2.175 0 0 0-.797.15l-.007.002c-.558.223-.99.67-1.25 1.288-.393.938-.338 2.191.148 3.359.672 1.615 1.989 2.701 3.276 2.701a2.175 2.175 0 0 0 .795-.15" />
          </svg>
          {meta.pets ? (
            <span>Pets allowed</span>
          ) : (
            <span className="line-through">Pets not allowed</span>
          )}
        </div>
        <div className="flex items-center gap-1 py-1 text-text">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="h-6 w-6 lg:h-8 lg:w-8"
          >
            <path d="M16.249 14.264a6.375 6.375 0 0 0-8.471 0 .984.984 0 1 0 1.308 1.471 4.406 4.406 0 0 1 5.854 0 .984.984 0 0 0 1.308-1.472z" />
            <path d="M12.013 8.611a10.381 10.381 0 0 0-7.116 2.809.984.984 0 1 0 1.344 1.438 8.451 8.451 0 0 1 11.543 0 .984.984 0 1 0 1.344-1.438 10.381 10.381 0 0 0-7.116-2.809" />
            <path d="M21.656 8.243a14.484 14.484 0 0 0-19.286 0A.984.984 0 1 0 3.683 9.71a12.516 12.516 0 0 1 16.661 0 .984.984 0 0 0 1.313-1.468zm-8.143 10.198a1.5 1.5 0 0 1-1.5 1.5 1.5 1.5 0 0 1-1.5-1.5 1.5 1.5 0 0 1 3 0z" />
          </svg>
          {meta.wifi ? (
            <span>Wifi included</span>
          ) : (
            <span className="line-through">Wifi not included</span>
          )}
        </div>
      </div>
    </div>
  )
}
