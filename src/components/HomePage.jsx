import React from "react";

const HomePage = () => {
  const blogPosts = [
    {
      id: 1,
      date: "2024-01-15",
      title: "My First Marathon Training",
      summary:
        "Starting my journey towards completing my first marathon. Here are my initial thoughts and training plan.",
      chartData: [5, 8, 12, 10, 15, 18, 20],
    },
    {
      id: 2,
      date: "2024-01-22",
      title: "Week 2: Building Endurance",
      summary:
        "Second week of training complete. Focusing on building base endurance with longer, slower runs.",
      chartData: [6, 9, 14, 11, 16, 20, 22],
    },
    {
      id: 3,
      date: "2024-01-29",
      title: "Nutrition and Hydration Tips",
      summary:
        "What I've learned about fueling my body for long distance running. Key insights and mistakes to avoid.",
      chartData: [7, 10, 16, 12, 18, 22, 25],
    },
  ];

  const renderChart = (data) => {
    const maxValue = Math.max(...data);
    return (
      <div className="chart-container">
        {data.map((value, index) => (
          <div
            key={index}
            className="chart-bar"
            style={{
              height: `${(value / maxValue) * 100}%`,
              backgroundColor: "#22c55e",
            }}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="homepage">
      <header className="header">
        <h1 className="title">Running Journey</h1>
        <p className="subtitle">
          Documenting my path to becoming a better runner
        </p>
      </header>

      <main className="main-content">
        <div className="blog-posts">
          {blogPosts.map((post) => (
            <article key={post.id} className="blog-card">
              <div className="card-header">
                <span className="date">{post.date}</span>
                <h2 className="post-title">{post.title}</h2>
              </div>
              <p className="summary">{post.summary}</p>
              <div className="chart-section">
                <h3 className="chart-title">Weekly Mileage</h3>
                {renderChart(post.chartData)}
              </div>
            </article>
          ))}
        </div>
      </main>

      <style jsx>{`
        .homepage {
          min-height: 100vh;
          background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
          color: #ffffff;
          padding: 2rem;
        }

        .header {
          text-align: center;
          margin-bottom: 3rem;
          padding: 2rem 0;
        }

        .title {
          font-size: 3.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
          background: linear-gradient(45deg, #22c55e, #16a34a);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .subtitle {
          font-size: 1.2rem;
          color: #a3a3a3;
          font-weight: 300;
        }

        .main-content {
          max-width: 1200px;
          margin: 0 auto;
        }

        .blog-posts {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
        }

        .blog-card {
          background: rgba(45, 45, 45, 0.8);
          border-radius: 12px;
          padding: 2rem;
          border: 1px solid rgba(34, 197, 94, 0.2);
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }

        .blog-card:hover {
          transform: translateY(-5px);
          border-color: rgba(34, 197, 94, 0.5);
          box-shadow: 0 10px 30px rgba(34, 197, 94, 0.1);
        }

        .card-header {
          margin-bottom: 1rem;
        }

        .date {
          display: inline-block;
          background: #22c55e;
          color: #000;
          padding: 0.25rem 0.75rem;
          border-radius: 20px;
          font-size: 0.875rem;
          font-weight: 600;
          margin-bottom: 0.75rem;
        }

        .post-title {
          font-size: 1.5rem;
          font-weight: 600;
          color: #ffffff;
          margin: 0.5rem 0;
        }

        .summary {
          color: #d1d5db;
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .chart-section {
          margin-top: 1.5rem;
        }

        .chart-title {
          font-size: 1rem;
          color: #22c55e;
          margin-bottom: 1rem;
          font-weight: 500;
        }

        .chart-container {
          display: flex;
          align-items: end;
          height: 80px;
          gap: 4px;
          padding: 0.5rem;
          background: rgba(0, 0, 0, 0.3);
          border-radius: 8px;
        }

        .chart-bar {
          flex: 1;
          min-height: 10px;
          border-radius: 2px 2px 0 0;
          transition: all 0.3s ease;
        }

        .chart-bar:hover {
          opacity: 0.8;
        }

        @media (max-width: 768px) {
          .homepage {
            padding: 1rem;
          }

          .title {
            font-size: 2.5rem;
          }

          .blog-posts {
            grid-template-columns: 1fr;
          }

          .blog-card {
            padding: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default HomePage;
