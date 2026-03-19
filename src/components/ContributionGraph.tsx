import { useMemo } from "react";

const ContributionGraph = () => {
  const weeks = 52;
  const days = 7;

  const contributions = useMemo(() => {
    const data: number[][] = [];
    for (let w = 0; w < weeks; w++) {
      const week: number[] = [];
      for (let d = 0; d < days; d++) {
        // Generate random contribution levels 0-4
        const rand = Math.random();
        if (rand < 0.3) week.push(0);
        else if (rand < 0.5) week.push(1);
        else if (rand < 0.7) week.push(2);
        else if (rand < 0.85) week.push(3);
        else week.push(4);
      }
      data.push(week);
    }
    return data;
  }, []);

  const getColor = (level: number) => {
    const colors = [
      "bg-secondary",
      "bg-green-900",
      "bg-green-700",
      "bg-green-500",
      "bg-green-400",
    ];
    return colors[level] || colors[0];
  };

  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const dayLabels = ["Mon", "", "Wed", "", "Fri", "", ""];

  return (
    <div className="border border-border rounded-md p-4 bg-card overflow-x-auto">
      <h3 className="text-sm text-foreground mb-3">
        {contributions.flat().filter((c) => c > 0).length} contributions in the last year
      </h3>
      <div className="flex gap-0.5">
        <div className="flex flex-col gap-0.5 mr-2 text-xs text-muted-foreground pt-5">
          {dayLabels.map((label, i) => (
            <div key={i} className="h-[11px] flex items-center text-[10px] leading-none">
              {label}
            </div>
          ))}
        </div>
        <div>
          <div className="flex gap-0.5 mb-1 text-[10px] text-muted-foreground">
            {months.map((m) => (
              <span key={m} className="w-[44px] text-center">{m}</span>
            ))}
          </div>
          <div className="flex gap-0.5">
            {contributions.map((week, wi) => (
              <div key={wi} className="flex flex-col gap-0.5">
                {week.map((level, di) => (
                  <div
                    key={`${wi}-${di}`}
                    className={`w-[11px] h-[11px] rounded-sm ${getColor(level)}`}
                    title={`${level} contributions`}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex items-center gap-1 mt-3 justify-end text-[10px] text-muted-foreground">
        <span>Less</span>
        {[0, 1, 2, 3, 4].map((level) => (
          <div key={level} className={`w-[11px] h-[11px] rounded-sm ${getColor(level)}`} />
        ))}
        <span>More</span>
      </div>
    </div>
  );
};

export default ContributionGraph;
