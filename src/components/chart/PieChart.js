import React, { Fragment } from "react";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', "#69D2E7", "#A7DBD8", "#E0E4CC", "#F38630", "#FA6900"];

const PieChartView = ({ data, conf }) => (
  <Fragment>
    <ResponsiveContainer height="100%" width="100%" aspect={1}>
      <PieChart data={data}>
        <Pie data={data} {...conf}>
          {
            data.map((entry, i) => <Cell key={i} fill={COLORS[i % COLORS.length]}/>)
          }
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
    <div className="field is-grouped is-grouped-centered">
      {
        data.map((entry, i) => (
          <div key={i} className="control">
            <div className="tags has-addons">
              <span className="tag" style={{ backgroundColor: COLORS[i % COLORS.length] }}>
                {entry[conf.nameKey]}
              </span>
              <span className="tag">{entry[conf.dataKey]}</span>
            </div>
          </div>
        ))
      }
    </div>
  </Fragment>
);

export default PieChartView;